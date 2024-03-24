import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            <p className="text-red-400 text-center text-3xl md:text-4xl font-semibold">Oops Page Not Found !</p>
            <Link to="/"><Button className="mt-10" color="green">Go Back Home</Button></Link>
        </div>
    );
};

export default ErrorPage;