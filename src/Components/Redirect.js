import { useEffect} from 'react';
import {  useParams } from "react-router-dom";
import { getURL } from '../apiCalls';
const Redirect = () => {
    const { shortenedURL } = useParams();
    
    useEffect(() => {
        getURL(shortenedURL).then(res => {
            window.location.href = res;
        });
    }, [shortenedURL]);
    return ( <div>
        Redirecting
    </div> );
}
 
export default Redirect;