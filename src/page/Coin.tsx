import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getCoin } from "../api";

import Wrapper from "../Components/Wrapper";
import SwitchButton from "../Components/SwitchButton";

type TypeCoin = {
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  name: string;
  id: string;
};

const Coin = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery<TypeCoin>(["coin", id], () =>
    getCoin(id!)
  );

  return (
    <Wrapper title={data?.id.toUpperCase() || ""}>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          <small className=" text-white">
            {data?.description && data?.description?.length > 300
              ? data?.description?.substring(0, 300) + "..."
              : data?.description}
          </small>
          <div className=" place-items-stretch mt-5 grid-flow-col grid grid-cols-2 grid-rows-2 gap-2 ">
            <div className=" rounded-md bg-indigo-200 font-semibold">
              <small className="ml-3 mt-3 text-xs uppercase">status</small>
              <h3 className="px-1 mt-1 text-center text-xl leading-6">
                {data?.development_status?.split(" ")[0]}
              </h3>
            </div>
            <div className=" rounded-md bg-indigo-200 font-semibold">
              <small className="ml-3 mt-1 text-xs uppercase">StartedAt</small>
              <h3 className="px-1 mt-1 text-center text-xl leading-6">
                {data?.started_at?.substring(0, 10)}
              </h3>
            </div>
            <div className=" rounded-md bg-indigo-200 font-semibold">
              <small className="ml-3 mt-1 text-xs uppercase">Structure</small>
              <h3 className="px-1 mt-1 text-center text-xl leading-6">
                {data?.org_structure && data?.org_structure.length > 12
                  ? data?.org_structure.substring(0, 12)
                  : data?.org_structure}
              </h3>
            </div>
            <div className=" rounded-md bg-indigo-200 font-semibold">
              <small className="ml-3 mt-1 text-xs uppercase">ProtoType</small>
              <h3 className="px-1 mt-1 text-center text-xl leading-6">
                {data?.proof_type && data.proof_type.length > 12
                  ? data.proof_type.substring(0, 12)
                  : data?.proof_type}
              </h3>
            </div>
          </div>
          <div className="mt-5">
            <ul className=" grid grid-cols-2 gap-2">
              <li>
                <SwitchButton to={"exchange"} />
              </li>
              <li>
                <SwitchButton to={"price"} />
              </li>
            </ul>

            <Outlet context={{ id: id }} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Coin;
