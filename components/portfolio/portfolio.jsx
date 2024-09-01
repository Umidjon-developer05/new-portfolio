import Carusel from "@/components/carusel/carusel";
import GlobalsApi from "@/src/_utils/GlobalsApi";
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [Portfolio, setPortfolio] = useState([]);
  async function GetALLN() {
    const resp = await GlobalsApi.getAllPortfolio();
    console.log(resp);
    setPortfolio(resp?.portfolios);
  }
  useEffect(() => {
    GetALLN();
  }, []);
  return (
    <div className="sm:mb-40">
      <Carusel portfolio={Portfolio} />
    </div>
  );
};

export default Portfolio;
