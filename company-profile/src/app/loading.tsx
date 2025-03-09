import Image from "next/image";

export default function name() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-none">
        <Image
          src={"/loading2.gif"} 
          alt="Animated GIF"
          className="w-64 h-64 rounded-lg shadow-lg max-md:scale-75"
          width={500}
          height={500}
        />
      </div>
    )
}