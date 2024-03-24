import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getStoredCard = () => {
    const storedCard = localStorage.getItem('donate')
    if(storedCard){
        return JSON.parse(storedCard)
    }
    return [];
}

const saveToLocalStorage = id => {
    const donateCart = getStoredCard();
    const exists = donateCart.find(donateId => donateId == id)

    if(!exists){
        donateCart.push(id);
        localStorage.setItem('donate', JSON.stringify(donateCart))
        toast.success('Donation Added Successfully')
    }
    else {
        toast.warn('Already exists')
    }


}

export {getStoredCard, saveToLocalStorage}