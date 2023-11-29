import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    const override = css`
    display: block;
    margin: 1rem 2rem;
    border-color: red;
  `;

    if (loading) {
        return <div className="spinnerCss">
            <BeatLoader
                color={'#FE325B'}
                loading={loading}
                css={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> </div>
    }

    if(user) {
        return children 
    }
    return <Navigate to='/signin' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;