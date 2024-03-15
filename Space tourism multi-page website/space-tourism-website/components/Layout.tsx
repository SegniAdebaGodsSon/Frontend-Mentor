import { useRouter } from "next/router";
import Navbar from "./Navbar";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    const router = useRouter();

    return <div className={`min-h-screen bg-no-repeat bg-cover 
    ${router.pathname == '/' && 'bg-home-mobile tablet:bg-home-tablet desktop:bg-home-desktop'} 
    ${router.pathname == '/destination' && 'bg-destination-mobile tablet:bg-destination-tablet desktop:bg-destination-desktop'}
    ${router.pathname == '/crew' && 'bg-crew-mobile tablet:bg-crew-tablet desktop:bg-crew-desktop'}
    ${router.pathname == '/technology' && 'bg-technology-mobile tablet:bg-technology-tablet desktop:bg-technology-desktop'}
    `}>
        <Navbar />
        {children}
    </div>;
};

export default Layout;