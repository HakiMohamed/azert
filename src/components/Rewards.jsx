import Hearts from "../assets/images/hearts.png";
import reward1 from "../assets/images/reward1.png";
import reward2 from "../assets/images/reward2.png";
import reward3 from "../assets/images/reward3.png";

const Rewards = () => {
  return (
    <div>
      <div className="reward-container mt-40">
        <div className="reward-header flex flex-col items-center">
          <img
            src={Hearts}
            className="2xl:h-16 xl:h-16 md:h-14 sm:h-14 h-12 mb-6"
            alt=""
          />
          <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-xl font-semibold font-family text-black mb-6 text-center">
            Value only real work with Thanks and{" "}
            <br className="sm:block hidden" /> reward merit with groundbreaking{" "}
            <br className="sm:block hidden" /> financial compensation
          </h3>
        </div>
        <div className="reward flex w-full md:justify-start justify-center md:mt-20 mt-0">
          <div className="reward-1 flex flex-col 2xl:gap-20 md:gap-[3rem] gap-6 2xl:px-80 xl:px-54 lg:px-36 md:px-16 sm:px-8 px-6 mt-20 w-fit items-center">
            <img
              src={reward1}
              className="2xl:w-[12.5rem] xl:w-46 lg:w-40 md:w-36 sm:26 w-28 cus-2:mr-20"
              alt=""
            />
            <p className="2xl:text-[1.31rem] lg:text-[1.25rem] sm:text-[1.3rem] text-[1.1rem] font-family w-fit text-left 2xl:leading-[2.5rem] sm:leading-[2.5rem] leading-[2rem]">
              Turn your team's work into a <br className="sm:block hidden" />{" "}
              rewarding journey for Thanks by
              <br className="sm:block hidden" />
              accomplishing missions that <br className="sm:block hidden" />{" "}
              address the real needs of your
              <br className="sm:block hidden" />
              organization.
            </p>
          </div>
        </div>
        <div className="reward flex w-full md:justify-end justify-center 2xl:mt-[-47px] xl:mt-[-20px] lg:mt-[-10px] md:mt-[20px] sm:mt-[5rem] mt-[5rem]">
          <div className="reward-2 flex flex-col 2xl:gap-20 md:gap-[3rem] gap-6 sm:px-8 px-6 2xl:px-80 xl:px-54 lg:px-36 md:px-16 w-fit items-center justify-center">
            <img
              src={reward2}
              className="2xl:w-[26.5rem] xl:w-86 lg:w-80 md:w-80 w-60 mb-6 cus-2:ml-20"
              alt=""
            />
            <p className="2xl:text-[1.31rem] lg:text-[1.25rem] sm:text-[1.3rem] text-[1.2rem] font-family w-fit text-left 2xl:leading-[2.5rem] sm:leading-[2.5rem] leading-[2rem]">
              For both talents and yourself, Thanks{" "}
              <br className="sm:block hidden" /> provide access to merit-based{" "}
              <br className="sm:block hidden" /> compensation through Life Time
              Cash <br className="sm:block hidden" /> (similar to royalties) and
              Backed <br className="sm:block hidden" /> Capital Tokens (enjoy
              capital benefits <br className="sm:block hidden" /> for all
              without diluting the founder).
            </p>
          </div>
        </div>
        <div className="reward flex w-full md:justify-start justify-center 2xl:mt-[-47px] xl:mt-[-20px] lg:mt-[-10px] md:mt-[20px] sm:mt-[5rem] mt-[5rem]">
          <div className="reward-3 flex flex-col 2xl:gap-20 md:gap-[3rem] gap-6 2xl:px-80 xl:px-54 lg:px-36 md:px-16 sm:px-8 px-6 w-fit items-center">
            <img
              src={reward3}
              className="2xl:w-[12.5rem] xl:w-46 lg:w-40 md:w-36 sm:26 w-28 cus-2:mr-20"
              alt=""
            />
            <p className="2xl:text-[1.31rem] lg:text-[1.25rem] sm:text-[1.3rem] text-[1.2rem] font-family w-fit text-left 2xl:leading-[2.5rem] sm:leading-[2.5rem] leading-[2rem]">
              The combination of Life Time Cash{" "}
              <br className="sm:block hidden" /> and Backed Capital Tokens
              empowers <br className="sm:block hidden" /> you, as an
              entrepreneur, to easily <br className="sm:block hidden" /> fund
              your business through talent <br className="sm:block hidden" />{" "}
              and quickly raise capital from a
              <br className="sm:block hidden" />
              community of investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
