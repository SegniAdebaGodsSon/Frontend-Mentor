import styles from '../styles/components/Card.module.scss';
import useWindowWidth from '../utils/hooks/useWindowWidth';
import useFetchAdvice from '../utils/hooks/useFetchAdvice';
import React, { useRef, useState } from 'react';

const Card: React.FC = () => {
    let mobile = 640;

    const windowSizeState = useWindowWidth();
    const windowWidth = windowSizeState.width as number;

    const [reRun, setReRun] = useState(true);
    const { data, loading, error } = useFetchAdvice('https://api.adviceslip.com/advice', reRun);

    let title = useRef<string | null>(null);
    let content = useRef<string | null>(null);

    if (error) {
        title.current = 'Error';
        content.current = error.message;
    } else {
        if (loading) {
            title.current = title.current == null ? 'Loading...' : title.current;
            content.current = content.current == null ? '...' : content.current;
        }

        if (data) {
            title.current = 'ADVICE #' + data.slip.id;
            content.current = data.slip.advice;
        }
    }


    console.log([styles.dice, loading ? styles.dice_inactive : styles.dice_active].join(" "))


    return <>
        <div className={styles.container}>
            <h6 className={styles.info}>{title.current}</h6>
            <h1 className={styles.advice}>
                &quot;{content.current}&quot;
            </h1>


            <div className={styles.divider}>
                <img
                    src={windowWidth <= mobile ? '/images/pattern-divider-mobile.svg' : '/images/pattern-divider-desktop.svg'}
                    height={16}
                    width={windowWidth <= mobile ? 295 : 444}
                    alt='divider' />
            </div>

            <button
                aria-label='Advice Generator Button'
                onClick={() => {
                    if (!loading) {
                        setReRun(prev => !prev)
                    }
                }}


                className={[styles.dice, loading ? styles.dice_inactive : styles.dice_active].join(" ")}>
                <img
                    src='/images/icon-dice.svg'
                    height={24}
                    width={24}
                    alt='dice'
                >
                </img>
            </button>
        </div>
    </>
}
export default Card;