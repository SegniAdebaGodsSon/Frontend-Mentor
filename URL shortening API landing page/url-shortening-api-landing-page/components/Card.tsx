import styles from '../styles/components/Card.module.scss';

interface Props {
    img_src: string,
    title: string,
    text: string
}

const Card: React.FC<Props> = ({ img_src, title, text }) => {
    return <div className={styles.card}>
        <div className={styles.img_container}>
            <img src={img_src} alt={title + " image"} />
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
}
export default Card;