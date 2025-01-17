import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { contextCountry } from "../context/ContextApi";
import { FaAngleLeft } from "react-icons/fa6";

export default function Country() {
  const { id } = useParams();
  const { testimonials, isDark } = useContext(contextCountry);
  const [star, setStar] = useState(false);

  console.log(id);
  const filterData = testimonials.filter((item) => item.id === Number(id));
  console.log(filterData);

  return (
    <div>
      <img
        src={filterData[0].src}
        alt=""
        className="w-full h-[300px] object-cover"
      />
      <div
        className={`${
          isDark ? "bg-black text-white" : "bg-white text-gray-800"
        } w-[50px] h-[50px] absolute top-[30px] left-[30px] z-[999] flex items-center rounded-full justify-center`}
      >
        <FaAngleLeft />
      </div>
      <div
        className={`${
          isDark ? "bg-gray-700 text-white" : "bg-[#f5f6f7] text-gray-800"
        } w-full relative top-[-50px] rounded-t-3xl`}
      >
        <div className="container max-w-[400px] mx-auto px-4 ">
          {filterData?.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center justify-between pt-[20px]"
                onClick={() => setStar(!star)}
              >
                <h2 className="text-xl font-semibold">{item?.name}</h2>
                <div className="flex items-center  py-1 px-2 rounded-full border cursor-pointer">
                  {star ? <FaStar /> : <FaRegStar />}
                  <p>5.0</p>
                </div>
              </div>
              <div className="mt-4">
                <p>{item.quote}</p>
              </div>
              <div className="mt-3">
                <h3 className="text-[18px] font-semibold">
                  {item.designation}
                </h3>
                <div className="flex overflow-x-scroll gap-4 scrollbar-hide w-full py-5">
                  {item.cities.map((i) => (
                    <div
                      key={i.id}
                      className={`${
                        isDark ? "bg-gray-900" : "bg-slate-300"
                      }card  px-3 py-6 rounded-2xl w-[300px]`}
                    >
                      <img
                        src={i.src}
                        alt=""
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="flex items-end justify-between">
                        <div>
                          <h4 className="text-[16px] font-semibold mb-2">
                            {i.name}
                          </h4>
                          <p>{i.desc}</p>
                          <div className="flex items-center">
                            <FaRegStar />
                            <p className="font-semibold">4.8</p>
                            <p className="ms-2">56k review</p>
                          </div>
                        </div>
                        <div className="rounded-full bg-gray-800 text-white p-4">
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
