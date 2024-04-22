import React, { useEffect, useState } from "react";
import Stars from "./Stars";
import Progbar from "./Progbar";
import Modal from "./Modal";
export default function Coinlist({ setViewModal, setSelectedCoin }) {
  const [coinData, setCoinData] = useState([]);

  function handleModal(element) {
    setViewModal(true);
    setSelectedCoin(element);
  }
  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setCoinData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchCoins();
  }, []);

  return (
    <div className="w-full">
      {coinData && (
        <ul className="flex flex-col md:items-center justify-center oveflow-hidden">
          <li className=" sm:text-xs flex  w-[30rem] gap-20 md:justify-around cursor-pointer md:gap-8 md:items-center md:w-[90%] p-4 border-b-2 border-t-2 border-gray-300  md:mx-auto">
            <p className="w-22 text-md font-semibold">#</p>
            <p className="text-md font-semibold w-22">Name</p>
            <p className="text-md font-semibold w-22 ">Price</p>
            <p className="text-md font-semibold w-22 ">24H ⬇️</p>
            <p className="text-md font-semibold w-22 md:block hidden">7D</p>
            <p className="text-md font-semibold w-22 md:block hidden">
              Market Cap
            </p>
            <p className="text-md font-semibold w-22 md:block hidden">
              Volume(24H)
            </p>
            <p className="text-md font-semibold w-22 md:block hidden">
              Circulating Supply
            </p>
          </li>

          {coinData
            .sort((a, b) => a.market_cap_rank - b.market_cap_rank)
            .map((el, i) => (
              <li
                key={el.id}
                className="flex md:justify-between cursor-pointer gap-12 items-start md:gap-8 md:items-center md:w-[90%] p-4 border-b-2 border-t-2 border-gray-300 md:mx-auto w-[20rem]"
                onClick={() => handleModal(el)}
              >
                <div className="flex gap-4 items-center w-12">
                  <Stars className={"w-5 cursor-pointer "} />
                  <p>{i + 1}</p>
                </div>

                <div className="flex gap-2 items-center w-40 justify-start   px-1">
                  <img src={el.image} alt="" width={"20px"} />
                  <p className="text-sm font-semibold capitalize ml-2">
                    {el.id}
                  </p>
                  <p className="text-gray-400 ml-2">
                    {el.symbol.toUpperCase()}
                  </p>
                </div>

                <p className=" flex justify-start text-md font-semibold w-[3rem] md:w-[7rem]  px-1">
                  ${(el.current_price / 1000).toFixed(2)}
                </p>

                <p
                  className={`${
                    el.price_change_percentage_24h > 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-semibold text-md md:w-[5rem] w-[3rem] flex justify-end tracking-wide `}
                >
                  {el.price_change_percentage_24h > 0 ? "⬆️" : "🔻"}
                  {Number(el.price_change_percentage_24h).toFixed(2)}%
                </p>

                <p
                  className={`${
                    el.price_change_percentage_7d_in_currency > 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-semibold text-md md:flex justify-end tracking-wide  hidden `}
                >
                  {el.price_change_percentage_7d_in_currency > 0 ? "⬆️" : "🔻"}
                  {el.price_change_percentage_7d_in_currency.toFixed(2)}%
                </p>

                <p className="font-semibold text-md md:flex justify-start w-[8rem]  hidden">
                  ${el.market_cap}
                </p>

                <div className="md:flex flex-col item-start  hidden">
                  <p className="font-semibold text-md">${el.total_volume}</p>
                  <p className="text-sm font-md text-gray-500">$932071 BTC</p>
                </div>

                <div className="w-36 md:block hidden">
                  <p className="w-full text-right text-md font-semibold">
                    ${el.circulating_supply.toFixed(2)}
                  </p>
                  <Progbar
                    width1={100}
                    current={el.circulating_supply}
                    final={el.total_supply}
                  />
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 512"
                  className="w-1 cursor-pointer md:block hidden"
                >
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
