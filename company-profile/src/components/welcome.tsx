import Image from "next/image";
import Motion from "./motion";

export default function Welcome() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[25px] text-amber-900">Welcome to</h1>
        <h1 className="font-bold text-[40px] ">Sopai Coffee Shop</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-6">
        <p>
          Nam rhoncus risus ac nisl convallis, id pretium sapien molestie.
          Vivamus lobortis at dui nec tincidunt. Pellentesque pellentesque{" "}
        </p>
        <p>
          egestas leo, eget commodo elit imperdiet at. Nam elementum posuere
          felis eget fermentum.
        </p>
      </div>
      <div className="flex gap-9 mt-9">
        <Motion>
        <div className="flex flex-col w-[400px] h-[500px] gap-2">
          <Image
            // loading="lazy" untuk membuat konten 
            src={"/carousel1.jpg"}
            alt="Image 1"
            height={400}
            width={400}
            />
          <p className="font-mono text-[25px] text-amber-800">Beautiful Place</p>
          <p>
            Donec felis libero, feugiat nec dignissim id, viverra in nisl. Donec
            ligula tortor, viverra ut interdum sed, eleifend ac nulla.
          </p>
        </div>
        </Motion>
        <Motion>
        <div className="flex flex-col w-[400px] h-[500px] gap-2">
          <Image
            src={"/carousel2.jpg"}
            alt="Image 2"
            height={400}
            width={400}
          />
          <p className="font-mono text-[25px] text-amber-800">Great Service</p>
          <p>
            Donec felis libero, feugiat nec dignissim id, viverra in nisl. Donec
            ligula tortor, viverra ut interdum sed, eleifend ac nulla.
          </p>
        </div>
        </Motion>
        <Motion>
        <div className="flex flex-col w-[400px] h-[500px] gap-2">
          <Image
            src={"/carousel3.jpg"}
            alt="Image 3"
            height={400}
            width={400}
          />
          <p className="mt-7 font-mono text-[25px] text-amber-800">Work Spot</p>
          <p>
            Donec felis libero, feugiat nec dignissim id, viverra in nisl. Donec
            ligula tortor, viverra ut interdum sed, eleifend ac nulla.
          </p>
        </div>
        </Motion>
      </div>
    </div>
  );
}
