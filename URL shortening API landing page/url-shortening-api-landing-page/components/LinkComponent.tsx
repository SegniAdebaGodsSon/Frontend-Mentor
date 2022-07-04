import { useRef, useState } from 'react';
import styles from '../styles/components/LinkComponent.module.scss';

interface Props {
    index: number,
    originalLink: string,
    shortenedLink: string,
    justClicked: boolean,
    changeCopyStatus(index: number): void
}

const LinkComponent: React.FC<Props> = ({ index, originalLink, shortenedLink, justClicked, changeCopyStatus }) => {

    const [hover, setHover] = useState<boolean>(false);
    const shortLink = useRef(null);

    const handleClick = () => {
        handleCopy();
        changeCopyStatus(index);
    }

    const handleCopy = () => {
        if (shortLink.current) {
            const text: HTMLElement = shortLink.current;
            navigator.clipboard.writeText(text.innerText);
        }
    }

    return <div className={styles.card}>
        <p className={styles.original_link}>{originalLink}</p>
        <p ref={shortLink} className={styles.shortened_link}>{shortenedLink}</p>
        <button
            style={{ backgroundColor: justClicked ? 'var(--dark-violet)' : hover ? 'hsl(180, 64%, 70%)' : 'var(--cyan)' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={(hover ? styles.hover_state : '') + ' ' + styles.copy_btn}
            onClick={handleClick}>
            {justClicked ? 'Copied!' : 'Copy'}
        </button>
    </div>
}
export default LinkComponent;