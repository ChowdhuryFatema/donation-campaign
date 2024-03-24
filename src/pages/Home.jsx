import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import DonateCategory from "../components/DonateCategory";
import useDonationData from "../Hooks/useDonationData";

const Home = () => {

    const [value, setValue] = useState('');
    const {data, loading} = useDonationData()
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    const handleSearch = () => {
        if( value.trim() != ''){
            const filtered = data.filter(item => item.category.toLowerCase().includes(value.toLowerCase()))
            setFilteredData(filtered)
        }
        else{
            setFilteredData(data);
        }
    }

    return (
        <div>
            <Banner value={value} setValue={setValue} handleSearch={handleSearch}></Banner>
            <DonateCategory loading={loading} filteredData={filteredData}></DonateCategory>
        </div>
    );
};

export default Home;