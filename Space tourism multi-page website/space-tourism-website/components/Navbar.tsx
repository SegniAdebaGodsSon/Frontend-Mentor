import NavLinkType from '../Types/NavLink';
import NavLinks from '../components/NavLinks';

const navLinks: NavLinkType[] = [
    {
        num: 0,
        link: '/',
        name: 'home'
    },
    {
        num: 1,
        link: '/destination',
        name: 'destination'
    },
    {
        num: 2,
        link: '/crew',
        name: 'crew'
    },
    {
        num: 3,
        link: '/technology',
        name: 'technology'
    }
]

interface Props {}

const Navbar: React.FC<Props> = (props) => {
    return (
        <div className='flex items-center justify-between pt-6 px-6 tablet:pt-0 tablet:pr-0 tablet:pl-[40px] desktop:pl-[55px]'>
            <div className='h-10 w-10 tablet:h-12 tablet:w-12'>
                <img src="/assets/shared/logo.svg" alt="logo svg" />
            </div>

            <button className='tablet:hidden'>
                <img src="/assets/shared/icon-hamburger.svg" alt="hamburger svg" />
            </button>
            <div className='hidden tablet:block'>
                <NavLinks links={navLinks} />
            </div>
        </div>
    );
};

export default Navbar;