import { useState, useEffect } from "react";
import LinkResponseType from '../Types/LinkResponseType';


interface state{
    data: LinkResponseType | null,
    loading: boolean,
    error: Error | null
}

const BASE_URL = 'https://api.shrtco.de/v2/shorten?url='

const useFetchLink = (original_link: string) => {
    const URL = BASE_URL + original_link;

    const [shortLink, setShortLink] = useState<state>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        if(original_link != ""){
            setShortLink({
                data: null,
                loading: true,
                error: null
            });
    
            fetch(URL)
            .then(res => res.json())
            .then((dat : LinkResponseType) => {
                if(dat.ok){
                    setShortLink({
                        data: dat,
                        loading: false,
                        error: null
                    })
                }else{
                    setShortLink({
                        data: null,
                        loading: false,
                        error: new Error('Error on the server side, try later')
                    })
                }
            })
            .catch(err => setShortLink({
                data: null,
                loading: false,
                error: err
            }))
        }else{
            setShortLink({
                data: null,
                loading: false,
                error: new Error('Please add a link')
            })
        }
    }, [URL, original_link])

    return [ shortLink ];
}

export default useFetchLink;