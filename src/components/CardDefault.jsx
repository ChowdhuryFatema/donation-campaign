import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CardDefault = ({ item }) => {

    const { id, title, category, image, cardBg, categoryBg, textColor } = item;
    return (
        <Link to={`/donation-details/${id}`}>
        <Card style={{background: cardBg}} className="mt-6">
            <CardHeader>
                <img className="w-full"
                    src={image}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Button style={{background: categoryBg, color: textColor}} size="sm" className="mb-4">{category}</Button>
                <Typography variant="h5" style={{color: textColor}}>
                    {title}
                </Typography>
            </CardBody>
        </Card>
        </Link>
    );
};

CardDefault.propTypes = {
    item: PropTypes.object.isRequired
}
export default CardDefault;