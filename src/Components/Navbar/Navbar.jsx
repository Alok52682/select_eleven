import navImg from './../../assets/logo.png'
import currency from './../../assets/Currency.png';

const Navbar = ({ abailableBalance }) => {
    return (
        <div className="navbar max-w-300 mx-auto">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-17.5 h-15' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex items-center">
                <span>{abailableBalance}</span>
                <span className='mx-1'>Coin</span>
                <img className='w-5 h-5' src={currency} alt="" />
            </div>
        </div>
    );
};

export default Navbar;