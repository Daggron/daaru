import React , {useEffect, useState} from 'react';
import Axios from 'axios';

export default function FetchBeers({page}){
    const [beers , setBeers] = useState();
    const [loading , setLoading ] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await Axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=80`);
                if(res.data){
                    setBeers(res.data);
                    setLoading(false);
                }else{
                    setLoading(false);
                    throw new Error('No data found');
                }
            }catch(err){
                setLoading(false);
                throw new Error('error while getting data')
            }
        }
        fetchData();
    },[page])

    return {loading, beers};
}