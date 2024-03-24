import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCard } from "../Utility/localStorage";
import DonationCard from "../components/DonationCard";
import { Button } from "@material-tailwind/react";

const Donation = () => {

    const data = useLoaderData();
    const [donate, setDonate] = useState([]);
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const storedCard = getStoredCard();
        if (data.length) {
            const donation = data.filter(item => storedCard.includes(item.id));
            setDonate(donation)
        }
    }, [data]);

    if(donate.length == 0){
        return (
           <div className="flex items-center justify-center w-full min-h-[calc(100vh-220px)]">
             <p className="text-red-400 text-center text-3xl md:text-4xl font-semibold">Oops Data Not Found !</p>
           </div>
        )
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-5 my-9 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    donate.slice(0, showAll ? donate.length : 4).map(item => <DonationCard item={item} key={item.id}></DonationCard>)
                }
            </div>
            <div className={`flex justify-center mb-10 ${donate.length <= 4 && 'hidden'}`}>
                <Button className="md:text-lg" onClick={() => setShowAll(!showAll)} color="green">{!showAll ? 'Show All' : 'Show less'}</Button>
            </div>
        </>
    );
};

export default Donation;