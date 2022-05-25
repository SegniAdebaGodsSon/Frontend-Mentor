import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import styles from '../styles/components/Navbar.module.scss';
import Dropdown from './Dropdown';

interface Props{

}

const Navbar: React.FC<Props> = () => {

    const [ dropdown, setDropdown] = useState(false);

    const hamburgerRef= useRef(null);
    const dropdownRef = useRef(null);

    const closeDropdown = (e: any) =>{
        let inside = false;
        if(e.path){
            e.path.forEach((el: any) => {
                inside = inside || (el == hamburgerRef.current) || (el == dropdownRef.current);
            })
    
            if(!inside){
                setDropdown(false);
            }
        }
    
    }

    useEffect(() => {
        document.body.addEventListener('click', closeDropdown);

        return () =>{
            document.body.removeEventListener('click', closeDropdown);
            setDropdown(false);
        }
    }, [])

    return <>
        <div className={styles.nav_container}> 
            <div className={styles.logo}>
                <Link href='/'>
                    <a>
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                </Link>
            </div>

            <div className={styles.links_menu}>

                <div ref={hamburgerRef} className={styles.hamburger_menu} onClick={() => setDropdown(prev => !prev)}>
                    <img src="/images/icon-hamburger.svg" alt="" />
                </div>

                <ul className={styles.links}>
                    <li>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/services'>
                            <a>Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/projects'>
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a className={styles.contact_link}>CONTACT</a>
                        </Link>
                    </li>
                </ul>
            </div>

            {
                dropdown
                &&
                <div ref={dropdownRef} className={styles.dropdown}>
                    <Dropdown />
                </div>
            }
        </div>
    </>
}
export default Navbar;