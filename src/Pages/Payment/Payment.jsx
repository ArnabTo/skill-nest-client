import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const Payment = ({pClassId}) => {
     console.log(pClassId)
    const stripePromise = loadStripe(import.meta.env.VITE_SKILLNEST_PAYMENT_GATEWAY)
    
    return (
        <div className="h-[70vh]">
            <h2 className="text-2xl text-center my-4 font-bold">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutFrom pClassId={pClassId} />
            </Elements>
        </div>
    );
};

export default Payment;