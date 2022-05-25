import styles from '../styles/components/Testimony.module.scss';

interface Props{
    img: string,
    testimony: string,
    name: string,
    occupation: string
}

const Testimony: React.FC<Props> = ({ img, testimony, name, occupation }) => {
    return <div className={styles.container}>
                <div className={styles.img} style={{backgroundImage: `url(${img})`}}></div>
                <p className={styles.testimony}>{testimony}</p>
                <div className={styles.info}>
                    <h4>{name}</h4>
                    <p>{occupation}</p>
                </div>
        </div>

}   
export default Testimony;