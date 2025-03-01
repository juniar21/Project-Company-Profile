import CarouselDefault from "./carousel";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div>
      <div className="relative w-full">
        <CarouselDefault />
        <div className="absolute top-0 left-0 w-full flex justify-center items-center text-white" >
        {/* absolute w-full flex justify-center items-center" */}
          <Navbar />
        </div>
      <div className="w-full flex justify-center items-center flex-col absolute top-[300px]">
        <p className="font-bold text-[80px] text-white">
          MORE THAN JUST COFFEE
        </p>
        <p>
          Curabitur gravida accumsan quam at cursus. Phasellus vel purus vitae
          urna venenatis
        </p>
        <p>pulvinar. Vivamus commodo velit sed dolor euismod consequat.</p>
      </div>
    </div>
    </div>
  );
}
