import styles from '../styles/components/Navbar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    return <div className={styles.nav_container}>
        <div className={styles.logo}>
            <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className={styles.links}>
            <div
                onClick={() => setDropdown(!dropdown)}
                className={styles.hamburger}>
                {dropdown ? <AiOutlineClose color='var(--grayish-violet)' /> : <AiOutlineMenu color='var(--grayish-violet)' strokeWidth={25} />}
            </div>

            <div className={styles.list}>
                <ul>
                    <li><Link href='/'>
                        <a>Features</a>
                    </Link></li>

                    <li><Link href='/'>
                        <a>Pricing</a>
                    </Link></li>

                    <li><Link href='/'>
                        <a>Resources</a>
                    </Link></li>

                    <li className={styles.login}><Link href='/'>
                        <a>Login</a>
                    </Link></li>

                    <li className={styles.sign_up}><Link href='/'>
                        <a>Sign Up</a>
                    </Link></li>
                </ul>
            </div>
        </div>

        {
            dropdown &&
            <div className={styles.dropdown}>
                <ul>
                    <li><Link href='/'>
                        <a>Features</a>
                    </Link></li>

                    <li><Link href='/'>
                        <a>Pricing</a>
                    </Link></li>

                    <li><Link href='/'>
                        <a>Resources</a>
                    </Link></li>

                    <hr />

                    <li className={styles.login}><Link href='/'>
                        <a>Login</a>
                    </Link></li>

                    <li className={styles.sign_up}><Link href='/'>
                        <a>Sign Up</a>
                    </Link></li>
                </ul>
            </div>
        }
    </div>
}
export default Navbar;