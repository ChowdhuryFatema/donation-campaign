import PropTypes from 'prop-types';
import CardDefault from "./CardDefault";
import CustomSpinner from './CustomSpinner';

const DonateCategory = ({filteredData, loading}) => {

    if(loading){
        return <CustomSpinner></CustomSpinner>
    }

    return (
        <div className="mx-auto max-w-7xl px-5 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">
            {
                filteredData.map(item => <CardDefault key={item.id} item={item}></CardDefault>)
            }
            </div>
        </div>
    );
};

DonateCategory.propTypes = {
    filteredData: PropTypes.array,
    loading: PropTypes.bool,
}
export default DonateCategory;