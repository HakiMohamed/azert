import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-24 2xl:pl-44 xl:pl-44 lg:pl-26 md:pl-24 sm:pl-16 xs:pl-10 pl-8 2xl:pr-28 xl:pr-28 lg:pr-20 md:pr-10 sm:pr-6 xs:pr-4 pr-4">
      <h1 className="text-2xl font-bold">
        <img src={logo} alt="logo" className="w-14 h-12" />
      </h1>
      <button className="bg-black uppercase text-custom-mint text-[0.68rem] py-3 px-3 rounded-2xl w-16 h-16 flex items-center justify-center font-family">
        Login
      </button>
    </header>
  );
};

export default Header;
