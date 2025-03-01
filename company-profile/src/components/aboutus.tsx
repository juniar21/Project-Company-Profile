import Image from "next/image";
import { CiCoffeeBean, CiCoffeeCup } from "react-icons/ci";
import { MdCoffeeMaker } from "react-icons/md";
import { FaChair } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

export default function Aboutus() {
  return (
    <div>
      <div className=" flex w-full items-center justify-center h-[200px]">
        <div className="flex gap-4">
          <CiCoffeeBean className="h-[90px] w-[90px] text-amber-900" />
          <div>
            <p className="font-mono text-2xl font-bold">Great Coffee Beans</p>
            <h1>
              Nam quam enim, ultricies id convallis blandit, <br />
              varius nec dui.
            </h1>
          </div>
          <CiCoffeeCup className="h-[90px] w-[90px] text-amber-900" />
          <div>
            <p className="font-mono text-2xl font-bold">Best Coffee Flavor</p>
            <h2>
              Nam quam enim, ultricies id convallis blandit, <br />
              varius nec dui.
            </h2>
          </div>
          <MdCoffeeMaker className="h-[90px] w-[90px] text-amber-900" />
          <div>
            <p className="font-mono text-2xl font-bold">
              Incredible Coffee Menu
            </p>
            <h3>
              Nam quam enim, ultricies id convallis blandit, <br />
              varius nec dui.
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-[90px] w-full items-center justify-center flex gap-6">
        <Image
          src={"/aboutus.jpg"}
          width={600}
          height={600}
          alt="aboutgambar"
        />
        <div className="flex flex-col gap-4">
          <p className="text-[55px] font-bold font-serif">
            Hand crafter & <br />
            fresh roasted coffee
          </p>
          <h3>
            Nam quam enim, ultricies id convallis blandit, varius nec dui.
            Integer vel sem <br /> egestas, aliquam ante eget, vulputate neque.
            Nam quam enim, ultricies id convallis <br /> blandit, varius nec
            dui. Integer vel sem egestas, aliquam ante eget, vulputate neque.
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <FaChair className="h-[80px] w-[80px] text-amber-900" />
              <div className="flex flex-col">
                <p>Elegent Interior</p>
                <h4>
                  Nam quam enim, ultricies id convallis blandit, varius nec dui.{" "}
                  <br />
                  Integer vel sem egestas, aliquam ante eget, vulputate neque.
                </h4>
              </div>
            </div>
            <div className="flex gap-3">
              <IoMdDocument className="h-[80px] w-[80px] text-amber-900" />
              <div className="flex flex-col">
                <p>100% ISO Certification</p>
                <h5>
                  Nam quam enim, ultricies id convallis blandit, varius nec dui.
                  <br />
                  Integer vel sem egestas, aliquam ante eget, vulputate neque.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5 items-center content-center mt-[90px]">
          <p className="text-[20px] text-gray-700">OUR TEAM</p>
          <h6 className="text-[40px] font-bold">Who We Are</h6>
          <div className="flex gap-7">
            <div className="flex flex-col gap-3 items-center text-center">
              <Image
                src={"/barista1.jpg"}
                width={300}
                height={300}
                alt="barista1"
              />
              <p className="text-[20px] font-bold">Mike Leonardo</p>
              <p>
                Suspendisse potenti nullam ac tortor. <br />
                Amet aliquam id diam maecenas amet <br />
                dictum sit amet justo donec.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
            <Image src={"/bos1.jpg"} width={300} height={300} alt="bos1" />
            <p className="text-[20px] font-bold">Nick Buding</p>
              <p>
                Suspendisse potenti nullam ac tortor. <br />
                Amet aliquam id diam maecenas amet <br />
                dictum sit amet justo donec.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
            <Image
              src={"/barista3.jpg"}
              width={300}
              height={300}
              alt="barista3"
            />
             <p className="text-[20px] font-bold">Roxanna Simons</p>
              <p>
                Suspendisse potenti nullam ac tortor. <br />
                Amet aliquam id diam maecenas amet <br />
                dictum sit amet justo donec.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
            <Image src={"/kasir1.jpg"} width={300} height={300} alt="kasir1" />
            <p className="text-[20px] font-bold">Melissa Peterson</p>
              <p>
                Suspendisse potenti nullam ac tortor. <br />
                Amet aliquam id diam maecenas amet <br />
                dictum sit amet justo donec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
