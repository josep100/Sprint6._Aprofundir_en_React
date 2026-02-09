import { Outlet } from "react-router-dom";

const PaigeContainer = () => {
    return(
        <div className="mx-auto w-full max-w-7xl lg:px-4">
            <Outlet />
        </div>
    )
}

export default PaigeContainer;