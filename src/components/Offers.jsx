import Star from "../assets/images/star.png";

const Offers = () => {
  return (
    <div className="2xl:px-20 xl:px-10 px-10 mt-48 pt-40 bg-custom-mint font-family text-center pb-40">
      <h1 className="text-5xl font-semibold">
        Offers designed to meet <br /> your unique needs
      </h1>
      <div className="sizes flex justify-center items-start flex-wrap px-0 mt-24">
        <div className="offer-row mx-8">
          <div className="cus2:max-h-[650px] flex justify-center">
            <div className="h-fit bg-white md:px-10 cus-2:min-w-[21.5rem] min-w-[20rem] px-10 rounded-[2.5rem] w-fit border-2 border-black px-10 pt-24 pb-14">
              <div className="offer-title text-[1.875rem] font-semibold text-left">
                Small <br /> business
              </div>
              <ul className="offer-desc mt-4 px-6">
                <li className="text-left list-disc text-sm">
                  All Features for trust,
                  <br /> recognition and <br /> motivation with the <br />{" "}
                  Thanks model
                </li>
              </ul>
              <div className="offer-price text-left font-semibold mt-4 text-lg">
                19,99€ HT/month <br /> per talent
              </div>
              <div className="price-info text-xs text-left">
                5 699,99 € HT/month for <br /> up 500 Talents
              </div>
              <div className="offer-btn bg-black rounded-full text-white text-[0.95rem] h-[3.75rem] w-[13.62rem] uppercase font-family py-4 mt-6 flex justify-center items-center">
                Start free* trial
              </div>
            </div>
          </div>
          <div className="cus2:max-h-[650px] flex justify-center">
            <div className="h-fit bg-white md:px-10 cus-1:min-w-[21.5rem] min-w-[20rem] px-10 rounded-[2.5rem] mt-10 w-fit border-2 border-black p-10 pt-24 pb-14 mt-20">
              <div className="offer-title text-[1.875rem] font-semibold text-left">
                Non <br /> business
              </div>
              <ul className="offer-desc mt-4 px-6 text-sm">
                <li className="text-left list-disc">
                  All Features for trust,
                  <br /> recognition and <br /> motivation with the <br />{" "}
                  Thanks model
                </li>
              </ul>
              <div className="offer-price text-left font-bold mt-4 text-lg">
                Free
              </div>
              <div className="price-info text-xs text-left">
                for up to 30 Talents <br /> with a limitation of <br /> 3
                Organizations per member
              </div>
              <div className="offer-btn bg-custom-mint rounded-full text-black text-[0.95rem] h-[3.75rem] w-[13.62rem] uppercase font-family py-4 mt-6 flex justify-center items-center">
                Start for free
              </div>
            </div>
          </div>
        </div>
        <div className="offer-row mx-8">
          <div className="cus2:max-h-[650px] flex justify-center ">
            <div className="h-fit bg-white md:px-10 cus-1:min-w-[21.5rem] min-w-[20rem] px-10 rounded-[2.5rem] cus-2:mt-36 mt-20 relative w-fit border-2 border-black p-10 pt-24 pb-14">
              <img src={Star} className="absolute top-0 right-14" alt="" />
              <div className="offer-title text-[1.875rem] font-semibold text-left">
                Smart <br /> company
              </div>
              <ul className="offer-desc mt-4 px-6 text-sm font-light">
                <li className="text-left list-disc">Unlimited Talents</li>
                <li className="text-left list-disc">
                  All Features for trust, <br /> recognition and <br />{" "}
                  motivation with the <br />
                  Thanks model
                </li>
                <li className="text-left list-disc">
                  All features to pilot <br /> your organization
                </li>
                <li className="text-left list-disc">
                  Thankward Lifetime Cash <br /> Optimization
                </li>
                <li className="text-left list-disc">
                  Simplification of your <br /> HR, Legal & Accounting <br />
                  duties
                </li>
                <li className="text-left list-disc">
                  Funding by Talent <br /> through Backed Capital <br /> Token
                </li>
                <li className="text-left list-disc">
                  Funding by Investors <br /> through Backed Capital <br />{" "}
                  Token
                </li>
              </ul>
              <div className="offer-price text-left font-bold mt-6 mb-5 text-lg">
                Priceless
              </div>
              <div className="price-info text-xs text-left">
                Backed Capital Token Lifetime <br /> Cash. <br /> The Thankward
                model like <br /> your investor and your talent
              </div>
              <div className="offer-btn bg-black rounded-full text-white text-[0.95rem] h-[3.75rem] w-[13.62rem] uppercase font-family py-4 mt-6 flex justify-center items-center">
                Start free* trial
              </div>
            </div>
          </div>
        </div>
        <div className="offer-row mx-8 cus-2:flex cus-1:block cus-1:gap-20 ">
          <div className="cus2:max-h-[650px] flex justify-center">
            <div className="h-fit bg-white md:px-10 cus-1:min-w-[21.5rem] min-w-[20rem] px-10 cus-2:mt-14 rounded-[2.5rem] mt-20 w-fit border-2 border-black p-10 pt-24 pb-14">
              <div className="offer-title text-[1.875rem] font-semibold text-left">
                Large <br /> business
              </div>
              <ul className="offer-desc mt-4 px-6 text-sm">
                <li className="text-left list-disc">
                  All Features for trust, <br /> recognition and <br />
                  motivation with the <br /> Thanks model
                </li>
                <li className="text-left list-disc">
                  All features to pilot <br />
                  your organization
                </li>
                <li className="text-left list-disc">
                  Tailor and customize <br /> the Backed Capital <br /> Token to
                  captivate and <br /> engage your top talents
                </li>
              </ul>
              <div className="offer-price text-left font-bold mt-4 text-lg">
                99,99 € HT/month <br />
                per Talent
              </div>
              <div className="price-info text-xs text-left">
                99 999,99 € HT/month for <br /> unlimited Talents
              </div>
              <div className="offer-btn bg-black rounded-full text-white text-[0.95rem] h-[3.75rem] w-[13.62rem] uppercase font-family py-4 mt-6 flex justify-center items-center">
                Start free* trial
              </div>
            </div>
          </div>
          <div className="trial-duration cus-2:mt-24 mt-16 flex justify-left text-left font-thin cus-2:pl-8 text-[0.81rem]">
            <p>
              *3 months <br /> free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
