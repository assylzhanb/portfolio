import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} 
            hover:text-yellow transition duration-500
            `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

// make a portfolio website using react
// navbar component that takes selectedPage and setSelected Page as a prop and returns a navbar
const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage ? '' : 'bg-red';
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4
                    className="font-playfair text-3xl font-bold"
                    onClick={() => setSelectedPage('home')}
                >
                    JE
                </h4>
                {/* Navbar for Desktop */}
                {isAboveSmallScreen ? (
                    <div className="flex jutify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                         />
                         <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                         />
                         <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                         />
                         {/* <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                         /> */}
                         <Link
                            page="Extracurriculars"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                         />
                         <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                         />
                    </div>
                ):(
                    <button
                        className='rounded-full bg-red p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt = "menu-icon" src="../assets/menu-icon.svg" />
                    </button>
                )}
                
            </div>

        </nav>
    )
}

export default Navbar;
