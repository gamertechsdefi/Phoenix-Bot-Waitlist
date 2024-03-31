"use client";
import "next/image";
import "next/font/google";
import HomeNavBar from "../components/home-navbar";

export default function Interactions() {
  return (
    <div className="">

      <div className="flex flex-col items-center justify-center h-[100vh]">
        <div>
            <h1>PHT FARM INCENTIVES</h1>
        </div>

        {/* tasks card starts here */}

        {/* task card template */}
        <div className=" flex mb-4 w-[70%]" style={{ height: "100px" }}>
          <div className="bg-gray-300 rounded-tl-[20px] rounded-bl-[20px] w-[80%]">
            <h1 className="px-8 py-8">Follow Phoenix Token</h1>
          </div>
          <div className="text-center py-8 bg-[orange] rounded-tr-[20px] rounded-br-[20px] w-[20%]">
            <h2>Success</h2>
          </div>
        </div>

        <div className=" flex mb-4 w-[70%]" style={{ height: "100px" }}>
          <div className="bg-gray-300 rounded-tl-[20px] rounded-bl-[20px] w-[80%]">
            <h1 className="px-8 py-8">Follow Phoenix Token</h1>
          </div>
          <div className="text-center py-8 bg-[gray] rounded-tr-[20px] rounded-br-[20px] w-[20%]">
            <h2>Pending</h2>
          </div>
        </div>

        <div className=" flex mb-4 w-[70%]" style={{ height: "100px" }}>
          <div className="bg-gray-300 rounded-tl-[20px] rounded-bl-[20px] w-[80%]">
            <h1 className="px-8 py-8">Follow Phoenix Token</h1>
          </div>
          <div className="text-center py-8 bg-[red] rounded-tr-[20px] rounded-br-[20px] w-[20%]">
            <h2>Failed</h2>
          </div>
        </div>

        

        {/* task card template ends here */}
      </div>
    </div>
  );
}
