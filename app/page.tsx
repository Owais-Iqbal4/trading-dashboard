
import Chart from "../src/components/charts/chart";
import Sidebar from "@/src/components/sidebar/sidebar";
import Table from "@/src/components/table/table";
import ChartHeader from "@/src/components/chart.header/chart.header";

export default function Home() {
  return (

    <div className="h-[100dvh] w-[100%] flex">
      <div className="w-[18%] h-full bg-blue-50">
        <Sidebar />
      </div>
      <div className="w-[82%] h-[100%] p-[1vw] overflow-x-scroll">
      <div className="w-full h-[5%]">
          <ChartHeader />
        </div>
        <div className="w-full h-[50%] overflow-x-scroll">
          <Chart />
        </div>
        <div className="w-full h-[45%] overflow-x-scroll">
          <Table />
        </div>
      </div>
    </div>
  );
}