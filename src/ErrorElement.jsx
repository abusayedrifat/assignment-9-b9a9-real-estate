import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
    const navigate =useNavigate()
    const handleGoBack = ()=>{
           navigate(-1)
    }
    return (
        <div className="flex flex-col justify-center items-center text-center mt-64">
        <h1 className="text-4xl font-extrabold poppi">404</h1>
        <h1 className="text-4xl font-extrabold poppi">Not Found</h1>
        <button onClick={handleGoBack} className="btn bg-[#0b5c52] text-[#C28563]">Go Back</button>
    </div>
    );
};

export default ErrorElement;