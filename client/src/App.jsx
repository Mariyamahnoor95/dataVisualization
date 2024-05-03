import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Side from "./components/Side";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/fetchData");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log("Data fetched successfully:", fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="flex">
        <Body data={data} />
        <Side />
      </div>
    </>
  );
};

export default App;
