import React from 'react'

export default function ChartBar(props) {
    let barFillHeight = '0%';


    if(props.max > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="char-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__lable">{props.lable}</div>
        </div>
    );
};
