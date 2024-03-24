import { useLoaderData, useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { saveToLocalStorage } from "../Utility/localStorage";

const DonationDetails = () => {

    const data = useLoaderData();
    const { donateId } = useParams();

    const singleData = data.find(item => item.id == donateId);
    const { id, title, price, image, description, textColor} = singleData;
    
    const handleDonate = () => {
        saveToLocalStorage(id)
    }

    return (
        <Card className="max-w-4xl mx-auto px-5 my-3 md:my-10 overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 relative"
      >
        <img className="w-full h-full object-cover"
          src={image}
          alt="ui/ux review check"
        />
        <button onClick={handleDonate} style={{background: textColor}} size="sm" className="py-2 px-3 rounded-lg text-white text-xl capitalize absolute bottom-7 left-5 z-50">Donate ${price}</button>
        <div className="z-10 absolute bottom-0 left-0 w-full h-24 bg-black opacity-40">
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
    );
};

export default DonationDetails;