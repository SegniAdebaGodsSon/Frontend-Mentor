import NavLinkType from '../Types/NavLink';

interface Props extends NavLinkType{
    link: string,
    num: number,
    name: string
}

const NavLink: React.FC<Props> = ({ link, num, name }) => {
    return <a href={link} className="flex text-neutral-white nav-text gap-x-[11px]">
        <span className="hidden desktop:block font-bold">0{num}</span>
        <span className="">{name.toLocaleUpperCase()}</span>
    </a>;
};

export default NavLink;