import { useContext } from "react";
import useAdmin from "../../../../../Module 66/bistro-boss-client-menu-and-order/src/hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import { Navigate, useLocation } from "react-router-dom";
const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminPending] = useAdmin();
    const location = useLocation();

    const override = css`
    display: block;
    margin: 1rem 2rem;
    border-color: red;
  `;

    if (loading, isAdminPending) {
        return (<div className="spinnerCss">
            <BeatLoader
                color={'#FE325B'}
                loading={loading}
                css={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
        )
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/singin' state={{from: location}}></Navigate>
};

export default AdminRoutes;