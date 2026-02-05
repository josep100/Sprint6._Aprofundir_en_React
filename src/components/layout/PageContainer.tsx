import { Outlet } from "react-router-dom";

const PaigeContainer = () => {
    return(
        <div className="container lg:mx-auto">
            <Outlet />
        </div>
    )
}

export default PaigeContainer;