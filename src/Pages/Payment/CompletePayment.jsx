import { useParams } from "react-router-dom";
import Payment from "./Payment";


const CompletePayment = () => {
    const {id} = useParams();
    const pClassId = id;
    console.log(pClassId)
    return (
        <div>
            <Payment pClassId={pClassId}></Payment>
        </div>
    );
};

export default CompletePayment;