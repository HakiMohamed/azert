import Header from "./Header";
import arrowDown from "../assets/images/arrow-down.png";
import BigText from "./includes/BigText";

const Hero = () => {
  return (
    <div className="bg-custom-mint h-fit relative pb-16">
      <Header />
      <BigText />
      <img
        className="arrow-style absolute left-1/2 -translate-x-1/2 bottom-[-30px]"
        src={arrowDown}
        alt=""
      />
    </div>
  );
};

export default Hero;
