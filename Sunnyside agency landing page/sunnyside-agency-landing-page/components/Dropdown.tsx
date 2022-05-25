import Link from 'next/link';
import styles from '../styles/components/Dropdown.module.scss';


const Dropdown: React.FC = ({}) => {
    return <div className={styles.container}>
        <ul className='dropdownList'>
            <li>
                <Link href='/'><a>About</a></Link>
            </li>
            <li>
                <Link href='/'><a>Services</a></Link>
            </li>
            <li>
                <Link href='/'><a>Projects</a></Link>
            </li>
            <li className={styles.contact}>
                <Link href='/'><a>CONTACT</a></Link>
            </li>
        </ul>
    </div>
}
export default Dropdown;