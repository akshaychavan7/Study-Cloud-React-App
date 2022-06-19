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
  // const [divBClasses, setDivBClasses] = useState("div-b");
  // const [divCClasses, setDivCClasses] = useState("div-c");
  let divAClasses = "div-a border-radius-left";
  let divBClasses = "div-b";
  let divCClasses = "div-c";
  let divDClasses = "div-d border-radius-right";

  // for div A border radius
  if (bPercentage <= 0 && cPercentage <= 0 && dPercentage <= 0) {
    divAClasses = divAClasses + " border-radius-right";
  }

  // for div B border radius
  if (aPercentage <= 0) {
    divBClasses = divBClasses + " border-radius-left";
  }
  if (cPercentage <= 0 && dPercentage <= 0) {
    divBClasses = divBClasses + " border-radius-right";
  }

  // for div C border radius
  if (aPercentage <= 0 && bPercentage <= 0) {
    divCClasses = divCClasses + " border-radius-left";
  }
  if (dPercentage <= 0) {
    divCClasses = divCClasses + " border-radius-right";
  }

  // for div D border radius
  if (aPercentage <= 0 && bPercentage <= 0 && cPercentage <= 0) {
    divDClasses = divDClasses + " border-radius-left";
  }

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
          <span className="div-a border-radius-left" style={{ width: widthA }}>
            A
          </span>
        </Tooltip>
        <Tooltip
          title={
            (parseFloat(widthB.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className={divBClasses} style={{ width: widthB }}>
            B
          </span>
        </Tooltip>
        <Tooltip
          title={
            (parseFloat(widthC.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className={divCClasses} style={{ width: widthC }}>
            C
          </span>
        </Tooltip>
        <Tooltip
          title={
            (parseFloat(widthD.split("%")[0]) + 0.2).toFixed(2).toString() + "%"
          }
          arrow
        >
          <span className="div-d border-radius-right" style={{ width: widthD }}>
            D
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default BarChart;
