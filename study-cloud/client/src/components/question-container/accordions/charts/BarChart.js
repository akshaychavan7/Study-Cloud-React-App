import { Stack, Tooltip } from "@mui/material";
import { useState } from "react";
import "./BarChart.css";
const BarChart = (props) => {
  // const equalWidth = 98 / 4;
  // console.log("equalWidth", equalWidth);
  let totalCount = 0,
    aCount = 0,
    bCount = 0,
    cCount = 0,
    dCount = 0;
  getQuestionStats();
  let aPercentage = (aCount / totalCount) * 100 - 0.2;
  let bPercentage = (bCount / totalCount) * 100 - 0.2;
  let cPercentage = (cCount / totalCount) * 100 - 0.2;
  let dPercentage = (dCount / totalCount) * 100 - 0.2;
  console.log(aPercentage, bPercentage, cPercentage, dPercentage);
  const [widthA, setWidthA] = useState(aPercentage.toFixed(2).toString() + "%");
  const [widthB, setWidthB] = useState(bPercentage.toFixed(2).toString() + "%");
  const [widthC, setWidthC] = useState(cPercentage.toFixed(2).toString() + "%");
  const [widthD, setWidthD] = useState(dPercentage.toFixed(2).toString() + "%");

  function getQuestionStats() {
    for (let comment of props.comments) {
      switch (comment.selected_answer) {
        case "1":
          aCount += 1;
          break;
        case "2":
          bCount += 1;
          break;
        case "3":
          cCount += 1;
          break;
        case "4":
          dCount += 1;
          break;
      }
      totalCount += 1;
    }
  }

  console.log(typeof widthA);
  return (
    <div className="chartdiv">
      <div className="bar-container">
        <Tooltip
          title={
            (parseFloat(widthA.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className="div-a" style={{ width: widthA }}>
            A
          </span>
        </Tooltip>
        <Tooltip
          title={
            (parseFloat(widthB.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className="div-b" style={{ width: widthB }}>
            B
          </span>
        </Tooltip>
        <Tooltip
          title={
            (parseFloat(widthC.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className="div-c" style={{ width: widthC }}>
            C
          </span>
        </Tooltip>
        <Tooltip
          title={
            (parseFloat(widthD.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className="div-d" style={{ width: widthD }}>
            D
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default BarChart;
