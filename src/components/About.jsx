import Line from "../assets/images/line.png";

const About = () => {
  return (
    <div>
      <h1 className="cus:text-[3rem] 2xl:text-[3rem] xl:text-4xl lg:text-3xl md:text-2xl text-xl text-black font-semibold font-family xl:px-32 lg:px-24 md:px-16 px-4 text-center py-0 leading-tight mt-32 mb-20">
        Get your team on the same boat,
        <br /> and they’ll be as motivated and <br /> engaged as you are
      </h1>
      <div className="flex lg:flex-nowrap flex-wrap justify-center gap-[7.625rem] cus:px-16 2xl:px-32 xl:px-24 lg:px-10 md:px-8">
        <div className="text-col w-fit">
          <h3 className="text-2xl font-semibold font-family text-black mb-6">
            A universal and <br /> systematic wealth- <br />
            creation model
          </h3>
          <p className="text-black font-family text-lg">
            A universal and <br /> systematic wealth- <br />
            creation model that <br /> simplifies the journey <br /> toward a
            successful life <br /> for deserving <br /> individuals.
          </p>
          <img src={Line} className="mt-10" alt="" />
        </div>
        <div className="text-col w-fit">
          <h3 className="text-2xl font-semibold font-family text-black mb-6">
            Values of <br /> recognition and <br /> trust
          </h3>
          <p className="text-black font-family text-lg">
            Values of recognition and <br /> trust that enable free <br /> and
            fair progress toward <br /> prosperity.
          </p>
          <img src={Line} className="mt-10" alt="" />
        </div>
        <div className="text-col w-fit">
          <h3 className="text-2xl font-semibold font-family text-black mb-6">
            A cutting-edge, <br /> intuitive tech <br /> platform
          </h3>
          <p className="text-black font-family text-lg">
            A cutting-edge, intuitive <br />
            tech platform that makes <br /> the process actionable, <br />
            enjoyable, and highly <br /> powerful.
          </p>
          <img src={Line} className="mt-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
