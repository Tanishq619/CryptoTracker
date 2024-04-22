import React from "react";
import Progbar from "./Progbar";

export default function Modal({ selectedCoin, setViewModal }) {
  //   const obj = JSON.stringify(selectedCoin);
  //   console.log("Hi i am clicked coin" + JSON.stringify(selectedCoin));

  const {
    image,
    name,
    current_price,
    price_change_percentage_24h,
    price_change_percentage_7d_in_currency,
    total_volume,
    market_cap,
    circulating_supply,
  } = { selectedCoin };

  console.log("hI I AM " + selectedCoin);
  return (
    <div className="absolute  z-10 w-[20rem] md:w-[40%] h-auto pb-6 bg-gray-100 shadow-2xl left-[13%] top-[55%] shadow-gray-600 rounded-xl  md:top-[50%] md:left-[50%] -translate-x-[50%]  -translate-y-[50%] flex flex-col gap-8   ">
      <div className="w-full px-8 py-4 flex justify-between items-center">
        <span className="flex gap-4 items-center">
          <img src={selectedCoin.image} alt="coin" width={"40px"} />
          <h5 className="text-xl font-semibold">{selectedCoin.name}</h5>
        </span>
        <span className="cursor-pointer " onClick={() => setViewModal(false)}>
          ✖️
        </span>
      </div>

      <div className="w-full flex justify-between px-8 py-4">
        <span className="text-lg font-semibold w-28 ">
          <p>Price</p>
          <p>{selectedCoin.current_price}</p>
        </span>
        <span className="text-lg font-semibold w-28 ">
          <p>24H</p>
          <p
            className={`${
              selectedCoin.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {selectedCoin.price_change_percentage_24h > 0 ? "⬆️" : "🔻"}{" "}
            {selectedCoin.price_change_percentage_24h.toFixed(2)}
          </p>
        </span>
        <span className="text-lg font-semibold w-28">
          <p>7D</p>
          <p
            className={`${
              selectedCoin.price_change_percentage_7d_in_currency > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {selectedCoin.price_change_percentage_7d_in_currency > 0
              ? "⬆️"
              : "🔻"}{" "}
            {selectedCoin.price_change_percentage_7d_in_currency.toFixed(2)}
          </p>
        </span>
      </div>
      <div className="px-8">
        <p className="text-lg font-semibold w-28">Market Cap</p>
        <p className="text-md font-medium ">{selectedCoin.market_cap}</p>
      </div>

      <div className="px-8">
        <p className="text-lg font-semibold w-28">Volume (24H)</p>
        <p className="text-md font-medium ">{selectedCoin.total_volume}</p>
      </div>

      <div className="px-8">
        <p className="text-lg font-semibold w-50">Ciculating Supply (24H)</p>
        <p className="text-md font-medium ">
          {selectedCoin.circulating_supply}
        </p>
        <Progbar
          width1={25}
          current={selectedCoin.circulating_supply}
          final={selectedCoin.total_supply}
        />
      </div>
    </div>
  );
}
