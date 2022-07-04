import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/Search.module.scss';
import useFetchLink from '../Utils/Hooks/useFetchLink';
import { SpinnerRoundFilled } from 'spinners-react';

interface Props {
    addNewLink(short_url: string, original_url: string): void
}

const Search: React.FC<Props> = ({ addNewLink }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [url, setUrl] = useState<string>('');
    const [shortened_link] = useFetchLink(url);

    const handleButtonClick = () => {
        let element = inputRef.current as HTMLInputElement;
        let newValue = element.value.trim();
        setUrl(newValue);
    }

    useEffect(() => {
        if (shortened_link.data != null) {
            addNewLink(shortened_link.data.result.full_short_link, shortened_link.data.result.original_link);
        }
    }, [shortened_link])

    const spinner = <SpinnerRoundFilled size={40} thickness={100} speed={100} color="var(--dark-violet)" />

    return <>
        <div className={styles.search_box}>
            <div className={styles.input}>
                <input
                    style={{
                        outline: shortened_link.error ? '3px solid var(--red)' : 'none'
                    }}
                    ref={inputRef}
                    type="text"
                    placeholder="Shorten a link here..." />
                <span>{
                    shortened_link.error ? shortened_link.error.message : ''
                }</span>
            </div>
            <button
                disabled={false}
                style={
                    {
                        border: shortened_link.loading ? 'solid 3px var(--dark-violet)' : 'none'
                    }
                }
                onClick={handleButtonClick}>
                {
                    shortened_link.loading ? spinner : 'Shorten It!'
                }
            </button>
        </div>

    </>
}
export default Search;