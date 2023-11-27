import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const PrivateRoute = (children) => {
    const { user, loading } = useContext(AuthContext);

    const override = css`
    display: block;
    margin: 1rem 2rem;
    border-color: red;
  `;

    if (loading) {
        return <div className="flex justify-center items-center">
            <BeatLoader
                color={'#FE325B'}
                loading={loading}
                css={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> </div>
    }
    
    if (user) {
        { children }
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;