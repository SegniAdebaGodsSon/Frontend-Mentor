import {useState, useEffect} from "react";
import Advice from '../types/advice';

interface state{
    data: Advice | null,
    loading: boolean,
    error: Error | null
}

const useFetchAdvice = (url: string, rerun: boolean) => {
    const [advice, setAdvice] = useState<state>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        setAdvice({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
        .then(res => res.json())
        .then(dat => setAdvice({
            data: dat,
            loading: false,
            error: null
        }))
        .catch(err => setAdvice({
            data: null,
            loading: false,
            error: err
        }))
    }, [url, rerun])

    return advice;
}


export default useFetchAdvice;