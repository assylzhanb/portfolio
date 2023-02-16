import SocialMeidaIcons from './SocialMediaIcons';


const Footer = () => {
    return (

        <footer className="h-64 bg-red pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMeidaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className='font-playfair font-semibold text-2xl text-yellow'>Baktiyar Assylzhan</p>
                    <p className="font-playfair text-md text-yellow">Wubba lubba dub dub</p>
                </div>
            </div>

        </footer>
    );

}
export default Footer;
