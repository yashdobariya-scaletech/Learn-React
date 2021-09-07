import React from 'react'
import "./Chart.css";
import ChartBar from "../components/ChartBar"

export default function Chart(props) {
    console.log(props.dataPoints,"log");
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(dataPointValues,"point");
    const totalMaximum = Math.max(...dataPointValues);
    console.log(totalMaximum,"total");

    return (
        <div className="chart"> 
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.lable}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    lable={dataPoint.lable}
                />
            ))}
        </div>
    )
}
