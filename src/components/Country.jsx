import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { contextCountry } from "../context/ContextApi";

export default function Country() {
  const { id } = useParams();
  const { testimonials } = useContext(contextCountry);
  const [star, setStar] = useState(false);

  console.log(id);
  const filterData = testimonials.filter((item) => item.id === Number(id));
  console.log(filterData);
  return (
    <div className="">
      <img
        src={filterData[0].src}
        alt=""
        className="w-full h-[300px] object-cover"
      />
      <div className="bg-[#f5f6f7] w-full relative top-[-40px] rounded-t-3xl">
        <div className="container max-w-[400px] mx-auto ">
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
                <div className="flex overflow-x-scroll gap-4 scrollbar-hide w-full">
                  {item.cities.map((i) => (
                    <div
                      key={i.id}
                      className="card bg-white px-3 py-6 rounded-2xl w-[300px]"
                    >
                      <img
                        src={i.src}
                        alt=""
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="flex items-end justify-between">
                        <div>
                          <h4 className="text-[16px] font-semibold">
                            {i.name}
                          </h4>
                          <p>{i.desc}</p>
                          <div className="flex items-center">
                            <FaRegStar />
                            <p className="font-semibold">4.8</p>
                            <p className="ms-2">56k review</p>
                          </div>
                        </div>
                        <div className="rounded-full bg-black text-white p-4">
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="card bg-white px-3 py-6 rounded-2xl w-[300px]">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="flex items-end justify-between">
                      <div>
                        <h4 className="text-[16px] font-semibold">
                          Iconic Brazil
                        </h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div className="flex items-center">
                          <FaRegStar />
                          <p className="font-semibold">4.8</p>
                          <p className="ms-2">56k review</p>
                        </div>
                      </div>
                      <div className="rounded-full bg-black text-white p-4">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="card bg-white px-3 py-6 rounded-2xl w-[300px]">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="flex items-end justify-between">
                      <div>
                        <h4 className="text-[16px] font-semibold">
                          Iconic Brazil
                        </h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div className="flex items-center">
                          <FaRegStar />
                          <p className="font-semibold">4.8</p>
                          <p className="ms-2">56k review</p>
                        </div>
                      </div>
                      <div className="rounded-full bg-black text-white p-4">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
