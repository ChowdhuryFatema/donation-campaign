import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationCard = ({item}) => {
    const { title, image, category, textColor, categoryBg, cardBg} = item || {};
    return (
    <Card className="w-full flex-row" style={{background: cardBg}}>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <Button style={{background: categoryBg, color: textColor}} size="sm" className="mb-4">{category}</Button>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        
        <a href="#" className="inline-block">
        <button style={{background: textColor}} size="sm" className="py-2 px-3 rounded-lg text-white text-sm md:text-lg capitalize ">View Details</button>
        </a>
      </CardBody>
    </Card>
    );
};
DonationCard.propTypes = {
    item: PropTypes.object.isRequired
}
export default DonationCard;