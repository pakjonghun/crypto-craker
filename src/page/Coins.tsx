import React from "react";
import { useQuery } from "react-query";
import { getCoins } from "../api";
import { Link } from "react-router-dom";
import Wrapper from "../Components/Wrapper";

type TypeCoins = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

const Coins = () => {
  const { isLoading, data } = useQuery<TypeCoins[]>("coins", getCoins, {
    refetchInterval: 10000,
  });

  return (
    <Wrapper title={"Coin"}>
      <ul>
        {isLoading
          ? "Loading..."
          : data?.slice(0, 10).map((coin) => (
              <li key={coin.id} className="">
                <Link
                  to={`/${coin.id}`}
                  className="flex dark:text-white dark:bg-stone-400 items-center mb-5 bg-stone-100 rounded-md shadow-sm hover:scale-105 transition-all ease-in duration-100 hover:text-red-500 cursor-pointer active:text-purple-500 select-none px-10 py-3 "
                >
                  <img
                    className=" w-10 h-10 mr-3 "
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                    alt="logo"
                  />
                  {coin.name + " →"}
                </Link>
              </li>
            ))}
      </ul>
    </Wrapper>
  );
};

export default Coins;
