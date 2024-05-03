import React from "react";
import LineChart from "./LineChart";
import ApexChart from "./apexChart";

const ChartGrid = ({ data }) => {
  return (
    // <div className="flex justify-center gap-6">
    //   <div className="w-1/2">
    //     <LineChart
    //       titleText={"X-axis Magnetic Field Waveform"}
    //       yTitle={"X-axis Magnetic Field/nT"}
    //     />
    //     <LineChart
    //       titleText={"Y-axis Magnetic Field Waveform"}
    //       yTitle={"Y-axis Magnetic Field/nT"}
    //     />
    //   </div>
    //   <div className="w-1/2">
    //     <LineChart
    //       titleText={"Z-axis Magnetic Field Waveform"}
    //       yTitle={"Z-axis Magnetic Field/nT"}
    //     />
    //     <LineChart
    //       titleText={"Total axis Magnetic Field Waveform"}
    //       yTitle={"Total axis Magnetic Field/nT"}
    //     />
    //   </div>
    // </div>

    <div className="flex justify-center gap-5">
      <div className="w-1/2">
        <ApexChart
          hoverTitle={"X-axis"}
          titleText={"X-axis Magnetic Field Waveform"}
          yTitle={"X-axis Magnetic Field/nT"}
          color={"#247BA0"}
        />

        <ApexChart
          hoverTitle={"Z-axis"}
          titleText={"Z-axis Magnetic Field Waveform"}
          yTitle={"Z-axis Magnetic Field/nT"}
          color={"#FF1654"}
        />
      </div>
      <div className="w-1/2">
        <ApexChart
          hoverTitle={"Y-axis"}
          titleText={"Y-axis Magnetic Field Waveform"}
          yTitle={"Y-axis Magnetic Field/nT"}
          color={"#199AFB"}
        />

        <ApexChart
          hoverTitle={"Total-axis"}
          titleText={"Total axis Magnetic Field Waveform"}
          yTitle={"Total axis Magnetic Field/nT"}
          color={"#064e9b"}
        />
      </div>
    </div>
  );
};

export default ChartGrid;
