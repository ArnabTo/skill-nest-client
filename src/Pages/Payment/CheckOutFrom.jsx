
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useClassCart from "../../hooks/useClassCart";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const CheckOutFrom = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const  [transactionid, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useClassCart();
    const price = cart.price;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(price)
    // console.log(cart)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => setClientSecret(res.data.clientSecret))
        }
    }, [price, axiosSecure])

    const handlePaymentForm = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log("Payment Failed", error)
            setError(error.message)
        } else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: cError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }
            }
        })
        if (cError) {
            console.log('Error Confirm', cError)
        } else {
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status == 'succeeded'){
                setTransactionId(paymentIntent.id)
                toast.success('Payment Complete!')
                const paymentInfo = {
                    email: user?.email,
                    price: price,
                    data: new Date(),
                    classCartId: cart.classId,
                    transactionid: paymentIntent.id,
                    status: 'Completed'
                }   

            //    const res = await axiosSecure.patch(`/updateclassdata/${cart.classId}`)
            //     console.log(res.data)
                const enrollsInfo = {
                    email: user.email,
                    enrolledClassid: cart.classId,
                }
                console.log(enrollsInfo)
                axiosSecure.post('/myenrolls',enrollsInfo )
                .then(res => console.log(res))

               const result = await axiosSecure.post('/payments', paymentInfo)
                console.log(result)
                refetch();
                navigate('/dashboard/myenrolls');
            }
        }
    }
    return (
        <div className="border-[2px] w-1/2 mx-auto py-4">
            <form onSubmit={handlePaymentForm} className='mx-auto text-center'>
                <CardElement className="p-4">
                </CardElement>

                <button type="submit" disabled={!clientSecret || !stripe} className=" w-2/5 btn bg-[#FE325B] px-4 py-2 text-white hover:bg-[#fc0939]">
                    Pay
                </button>
            </form>
            <p className="text-[red] text-center">{error}</p>
            <p className="text-[green] text-center">Your Transaction Id: {transactionid}</p>
            <Toaster
            position="top-center"
            reverseOrder={false}
        />
        </div>
    );
};

export default CheckOutFrom;
