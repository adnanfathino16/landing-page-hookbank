import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20% </span>
          Discount For <span className="text-white"> 1 Month </span>
          Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 text-white">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[63px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et libero rerum ullam ad eum totam veritatis sit ea. Atque vero quos earum reprehenderit obcaecati animi? Soluta?</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient "></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 botton-40 blue__gradient"></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
