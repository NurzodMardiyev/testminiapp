import { FiSearch } from "react-icons/fi";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import useTelegramUser from "../useTelegramUser";
import { useContext } from "react";
import { contextCountry } from "../context/ContextApi";
export default function Landing() {
  const user = useTelegramUser();
  const { isDark } = useContext(contextCountry);
  return (
    <div className={`${isDark ? "bg-gray-700" : "bg-[#f5f6f7]"}`}>
      {user ? (
        <div className="container max-w-[400px] mx-auto pt-4 px-4">
          {/* header */}
          <div className="flex justify-between items-center">
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h1 className={` text-2xl font-medium`}>
                Hello, {user.first_name}
              </h1>
              <p className="text-md">{user.username}</p>
            </div>
            <div className="w-[50px] h-[50px] ">
              <img
                src={user.photo_url}
                alt={user.first_name}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          {/* search */}
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-[#737373] mb-2">
              Search Country
            </h2>
            <form action="" className="w-full ">
              <div className="relative w-full">
                <input
                  type="text"
                  className={`${
                    isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                  } border-none outline-none py-5 rounded-full w-full  pl-16 pr-4`}
                />
                <FiSearch className="text-4xl absolute top-[14px] left-4 text-[#808080]" />
              </div>
            </form>
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-semibold text-[#737373] mb-2">
              Sellect your next trip
            </h2>
            <div className="w-full flex items-center gap-[10px] overflow-x-scroll overflow-y-hidden scrollbar-hide">
              <div className="bg-black text-white py-2 px-5 rounded-full">
                <p>Asia</p>
              </div>
              <div className="bg-white py-2 px-5 rounded-full">
                <p>Yevrope</p>
              </div>
              <div className="bg-white py-2 px-5 rounded-full">
                <p>America</p>
              </div>
              <div className="bg-white py-2 px-5 rounded-full">
                <p>Australia</p>
              </div>
              <div className="bg-white py-2 px-5 rounded-full">
                <p>Africa</p>
              </div>
            </div>
          </div>
          {/* Sellect trip */}
          <AnimatedTestimonials />
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}
