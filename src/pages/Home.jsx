import { Link } from "react-router-dom";
// Images
import HeroImage from "../assets/images/hero-image.png";
import HeroImage1 from "../assets/images/shoe1-hero.png";
import HeroImage2 from "../assets/images/shoe2-hero.png";

function Home() {
  return (
    <div className="flex justify-around mt-10 md:mt-26 mx-auto max-w-[1500px] gap-20 xl:gap-40">
      {/* Hero Image */}
      <div className="hidden lg:block lg:w-1/3 xl:w-1/2 flex flex-row-reverse xl:pr-20">
        <img src={HeroImage} className="w-[100%]" alt="Hero Image" />
      </div>
      {/* Content */}
      <div className="w-full lg:w-2/3 xl:1/2 text-right flex flex-col">
        {/* title */}
        <h1 className="text-3xl md:text-6xl font-extrabold text-dark-gray md:mt-10">کفش های شیک برای شما</h1>
        {/* description */}
        <p className="text-lg md:text-2xl text-gray-700 mt-10 lg:mb-20">
          وقتی صحبت از طراحی های مد میشود،برند پرت تلاش میکند همگام با زمان پیش
          برود. کفش های ما بر اساس جدید ترین طراحی های کفش ساخته شده اند و همیشه
          شیک هستند
        </p>
        {/* product suggestion */}
        <div className="mt-20 lg:mt-32 xl:mt-auto">
          <div className="flex items-center gap-10 justify-end mb-10 md:mb-20">
            <div className="text-md md:text-3xl">
              2,590,00 هزار تومان
            </div>
            <button className="border md:border-2 transition-all duration-300 border-primary-blue text-md md:text-3xl text-primary-blue rounded-2xl py-2 md:py-4 px-4 md:px-8 cursor-pointer hover:bg-primary-blue hover:text-white">افزودن به سبد خرید</button>
          </div>
          <div className="flex justify-between gap-4 md:gap-10 mb-20">
            <div className="bg-white shadow w-1/2 px-5 md:px-20 py-4 md:py-10 rounded-2xl">
              <Link to="/">
                <img src={HeroImage1} alt="Shoes 1" />
              </Link>
            </div>
            <div className="bg-white shadow w-1/2 px-5 md:px-20 py-4 md:py-10 rounded-2xl">
              <Link to="/">
                <img src={HeroImage2} alt="Shoes 2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
