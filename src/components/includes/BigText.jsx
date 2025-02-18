import StartBtn from "./StartBtn";
import Hand from "../../assets/images/hand.webp";

const BigText = () => {
  return (
    <div className=" pr-0 2xl:pl-44 xl:pl-44 lg:pl-26 md:pl-24 sm:pl-16 xs:pl-10 pl-8 pt-0 px-8 mt-6">
      <h1 className="lg:text-[7rem] md:text-[7rem] sm:text-[5rem] text-5xl text-black font-semibold font-family uppercase leading-tight-0.9">
        <img
          src={Hand}
          className="inline md:h-[6.25rem] sm:h-[4.25rem] h-[2.25rem] mb-4"
          alt=""
        />
        <img
          src={Hand}
          className="inline md:h-[6.25rem] sm:h-[4.25rem] h-[2.25rem] mb-4"
          alt=""
        />
        <img
          src={Hand}
          className="inline md:h-[6.25rem] sm:h-[4.25rem] h-[2.25rem] mb-4"
          alt=""
        />
        <br />
        hello
        <br />
        Mourad kolli,
        <br /> welcome to
        <br />
        thankward
      </h1>
      <StartBtn />
    </div>
  );
};

export default BigText;
