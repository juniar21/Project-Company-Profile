import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFillPhoneFill } from "react-icons/bs";

export default function Kontak() {
  return (
    <div>
      <div className="absolut bg-[url(/komentar2.jpg)] w-full h-[400px]"></div>
      <div className="flex relative top-[-300px] justify-center items-center text-[100px] text-white font-bold mb-[-50px]">Kontak</div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full text-center">
        <div className="flex flex-col justify-center items-center mx-10">
          <FaMapMarkerAlt className="w-[45px] h-[80px] text-amber-800" />
          <p className="font-bold text-[20px]">Physical Address</p>
          <p>304 North Cardinal St. <br />
          Dorchester Center, MA 02124</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-10">
          <IoTimeSharp className="w-[60px] h-[100px] text-amber-800" />
          <p className="font-bold text-[20px]">Work Hours</p>
          <p>Monday to Friday: 7am – 7pm <br />
          Weekend: 10am – 5pm4</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-10">
          <IoMdMail className="w-[60px] h-[110px] text-amber-800" />
          <p className="font-bold text-[20px]">Email Address</p>
          <p>info@company.com <br />
          contact@company.com</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-10">
          <BsFillPhoneFill className="w-[60px] h-[100px] text-amber-800" />
          <p className="font-bold text-[20px]">Phone Numbers</p>
          <p>1-555-123-4567 <br />
          1-800-123-4567</p>
        </div>
      </div>
    </div>
  );
}
