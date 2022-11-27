import ResultNav from "components/atoms/result/nav/nav";
import AlleyItem from "components/organisms/home/alley_item";
import ResultTemplate from "components/templates/result/result_template";
import React, { useEffect } from "react";

const Result = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ResultTemplate />
    </div>
  );
};

export default Result;
