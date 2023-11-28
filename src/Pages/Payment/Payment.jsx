import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_SKILLNEST_PAYMENT_GATEWAY)
    
    return (
        <div>
            <h2 className="text-2xl text-center my-4 font-bold">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutFrom />
            </Elements>
        </div>
    );
};

export default Payment;