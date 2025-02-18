import Carret from "../assets/images/carret.svg";
import Key from "../assets/images/cle.svg";

const Registration = () => {
  return (
    <div className="xl:px-[8.75rem] md:px-20 sm:px-10 px-2 mt-44 flex items-center justify-center mb-40 flex ">
      <div className="border-solid border-4 border-black w-full 2xl:rounded-[70px] xl:rounded-[70px] md:rounded-[40px] relative max-w-[1449.5px] flex justify-between items-center 2xl:py-[7rem] xl:py-[6rem] lg:py-[5rem] py-[4rem] lg:flex-row md:flex-col lg:gap-0 gap-10 items-stretch flex-col">
        <div className="left-thumb bg-white border-black border-solid border-4 absolute h-[60px] top-[50%] translate-y-[-50%] w-[30px] border-l-0 left-[-4px] lg:block hidden"></div>
        <div className="part1 2xl:pl-[8.625rem] xl:pl-[5.625rem] lg:pl-[7rem] md:pl-[6rem] sm:pl-[4rem] pl-[3rem] flex-grow">
          <p className="uppercase font-family text-[0.875rem] mb-6">
            Registration
          </p>
          <h2 className=" 2xl:text-[2.55rem] xl:text-[2.5rem] lg:text-[2rem] md:text-[2rem] sm:text-[1.5rem] text-[1.2rem] underline uppercase font-family font-medium leading-[1.6] pl-2 text-nowrap">
            Mourad kolli, <br /> Start your journey <br /> with Thankward
          </h2>
        </div>
        <div className="part2 flex items-end xl:justify-center justify-end 2xl:pr-[15.125rem] xl:pr-[10.125rem] lg:pr-[6rem] md:pr-[5rem] sm:pr-[5rem] pr-[4rem] flex-grow">
          <p className="text-sm text-right font-family leading-[1.6] lg:mb-14 text-nowrap">
            Julien Duval <br /> co-opted you. <br /> your access pass <br /> to
            Thankward
          </p>
          <img
            src={Key}
            className="xl:h-[18.5rem] lg:h-[16.5rem] md:h-[12.5rem] h-[10.5rem] w-auto"
            alt=""
          />
        </div>
        <img
          src={Carret}
          className="absolute right-[3.438rem] lg:top-[50%] top-[10%] translate-y-[-50%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Registration;
