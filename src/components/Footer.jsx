import FooterImg from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white flex justify-center flex-col items-center pt-0 pb-0">
      <div className="footer-head flex flex-col items-center mt-36">
        <img src={FooterImg} className="h-[7rem]" alt="footer" />
        <h2 className="text-center 2xl:text-7xl xl:text-7xl md:text-6xl text-4xl pt-10 font-family font-medium">
          Thankward
        </h2>
        <p className="underline uppercase font-family mt-8 text-sm">
          nous contactez
        </p>
      </div>
      <div className="nav uppercase font-semibold text-sm flex justify-center items-center mt-36 gap-8 mt-20 p-6 pb-8">
        <div className="link">vie privée</div>
        <span>-</span>
        <div className="link">cookies</div>
        <span>-</span>
        <div className="link">CGV</div>
      </div>
    </footer>
  );
};

export default Footer;
