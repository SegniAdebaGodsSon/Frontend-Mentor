import { NextPage } from 'next';
import NavLinkType from '../Types/NavLink';
import NavLink from './NavLink';
import { v4 as uuidv4, v4 } from 'uuid';

interface Props {
    links: NavLinkType[]
}

const NavLinks: NextPage<Props> = ({ links }) => {
    return <div className=''>
        <ul className='flex flex-wrap h-[96px] gap-x-[35px] desktop:gap-x-12 bg-neutral-white bg-opacity-[0.04] desktop:backdrop-blur-[81.55px] desktop:pl-[123px] px-12 desktop:pr-[165px]'>
            {
                links.map(link => (
                    <li className='h-full flex items-center'  key={uuidv4()}>
                        <NavLink {...link} />
                    </li>
                ))
            }
        </ul>
    </div>;
};

export default NavLinks;