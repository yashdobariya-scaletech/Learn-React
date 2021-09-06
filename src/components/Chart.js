import React from 'react'
import ChartBar from "../components/ChartBar"
export default function Chart(props) {

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.lable}
                    value={dataPoint.value}
                    maxValue={null}
                    lable={dataPoint.lable}
                />
            ))}
        </div>
    )
}
