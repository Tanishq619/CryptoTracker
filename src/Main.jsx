import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Coinlist from "./Coinlist";

import "swiper/css";
import { useState } from "react";
import Stars from "./Stars";
import Modal from "./Modal";
export default function Main() {
  const [star, setStar] = useState(false);

  const [selectedCoin, setSelectedCoin] = useState();
  const [viewModal, setViewModal] = useState(false);
  return (
    <div className="absolute w-full bg-gray-200  pt-10 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[10rem] "
      >
        <SwiperSlide className="mt-2 md:w-[33%] w-full md:ml-0 -ml-6">
          <Card heading={"Take a quiz"} para={"Learn and earn $CBK"} />
        </SwiperSlide>
        <SwiperSlide className="mt-2 md:w-[33%] w-full">
          <Card
            heading={"Portfolio 🔥"}
            para={"Track your trades in one place,not all over the place"}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-2 md:w-[33%] w-full">
          <Card
            heading={"Portfolio 🔥"}
            para={"Track your trades in one place,not all over the place"}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-2 md:w-[33%] w-full">
          <Card
            heading={"Portfolio 🔥"}
            para={"Track your trades in one place,not all over the place"}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-2 w-[33%]">
          <Card
            heading={"Portfolio 🔥"}
            para={"Track your trades in one place,not all over the place"}
          />
        </SwiperSlide>
        <SwiperSlide className="mt-2 w-[33%]">
          <Card
            heading={"Portfolio 🔥"}
            para={"Track your trades in one place,not all over the place"}
          />
        </SwiperSlide>
      </Swiper>

      <h1 className="text-2xl font-bold ml-20">
        Top 100 Crptocurrencies by Market Cap
      </h1>

      <div className="w-full sm:text-xs  flex justify-between items-center px-2 py-3 ">
        <div className="flex gap-4 md:ml-20 mt-6">
          <span
            className="bg-gray-300 p-1 text-gray-700 font-medium hover:text-blue-400 cursor-pointer rounded-md flex gap-1"
            onClick={() => setStar(!star)}
          >
            <Stars full={star} className={"w-5"} /> Favourite
          </span>
          <span className="bg-gray-300 p-1 text-gray-700 font-medium hover:text-blue-400 cursor-pointer rounded-md">
            Crptocurrencies
          </span>
          <span className="bg-gray-300 p-1 text-gray-700 font-medium hover:text-blue-400 cursor-pointer rounded-md">
            DeFi
          </span>
          <span className="bg-gray-300 p-1 text-gray-700 font-medium hover:text-blue-400 cursor-pointer rounded-md">
            NFTs and Collections
          </span>
        </div>
        <div className="mt-6 flex gap-4 mr-20 items-center">
          <span className="text-gray-700 font-medium">Show rows</span>
          <select className="bg-gray-300 rounded-xl p-1">
            {Array.from({ length: 10 }, (el, i) => (
              <option>{(i + 1) * 10}</option>
            ))}
          </select>
        </div>
      </div>
      {viewModal && (
        <Modal selectedCoin={selectedCoin} setViewModal={setViewModal} />
      )}
      <Coinlist
        setViewModal={setViewModal}
        setSelectedCoin={setSelectedCoin}
        selectedCoin={selectedCoin}
        viewModal={viewModal}
      />
    </div>
  );
}
