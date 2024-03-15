import { useState, useEffect } from "react";
import windowSize from '../types/windowSize';


let useWindowSize = () =>{
   const [ windowSizeState, setWindowSize] = useState<windowSize>({
       height: null,
       width: null
   });

    useEffect(() => {

       // Handler to call on window resize
       const handleResize = () =>{
           // Set window width/height to state
           setWindowSize({
               height: window.innerHeight,
               width: window.innerWidth
           })
       }

       // Add event listener 
       window.addEventListener('resize', handleResize);

       // call handler right away that state gets updated with initial window size
       handleResize();

       // remove event listener on cleanup
       return () => window.removeEventListener('resize', handleResize);
    }, []) // Empty array ensures that effect is only run on mount

    return windowSizeState;
}

export default useWindowSize;