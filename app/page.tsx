"use client"
import Chart from "../src/components/charts/chart";
import Sidebar from "@/src/components/sidebar/sidebar";
import Table from "@/src/components/table/table";
import ChartHeader from "@/src/components/chart.header/chart.header";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const menuShow = () => {
    setShowSidebar(true)
  }
  console.log(showSidebar)
  return (

    <div className="h-[100dvh] w-[100%] flex">
      <div className={showSidebar ? 'w-[58%] h-full absolute z-[105]'  : "w-[18%] h-full sidebar"}>
        <div className={"h-full "}>

          <Sidebar setShowSidebar = {setShowSidebar} />
        </div>
      </div>
      <div className={`w-[82%] h-[100%] p-[1vw] responsive-view`}>
        <div className="w-full h-[5%] chart-header ">
          <div className="menu-icon hidden">
            <button onClick={menuShow}>
              <img src={"/images/menu-icon.png"} className="w-7" />
            </button>
          </div>
          <div className="h-full">

            <ChartHeader />
          </div>
        </div>
        <div className="w-full h-[50%] overflow-x-scroll charts  mt-10">
          <Chart />
        </div>
        <div className="w-full h-[45%] overflow-x-scroll table-scroll">
          <Table />
        </div>
      </div>
    </div>
  );
}