import { animate, MotionValue, useMotionValue } from "framer-motion"
import { useEffect } from "react";

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";


export const useRaisedShadow = (yValue: MotionValue<number>) => {
    const boxShadow = useMotionValue(inactiveShadow); 

    useEffect(() => {
        let isActive = false;
        yValue.onChange((latest) => {
            const wasActive = isActive;
            if(latest !== 0){
                isActive = true;
                if(isActive !== wasActive){
                    animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
                }
            }else{
                isActive = false;
                if(isActive !== wasActive){
                    animate(boxShadow, inactiveShadow);
                }
            }
        })
    }, [yValue, boxShadow]);

    return boxShadow;
}