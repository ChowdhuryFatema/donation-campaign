import { Spinner } from "@material-tailwind/react";


const CustomSpinner = () => {
    return (
        <div className="flex justify-center items-center my-10">
             <Spinner color="green" className="h-8 w-8" />
        </div>
    );
};

export default CustomSpinner;