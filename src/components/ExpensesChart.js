import React from 'react'
import Chart from './Chart'

export default function ExpensesChart(props) {
    const chartDataPoints = [
         {lable:"Jan", value:0},
         {lable:"Feb", value:0},
         {lable:"March", value:0},
         {lable:"April", value:0},
         {lable:"May", value:0},
         {lable:"June", value:0},
         {lable:"July", value:0},
         {lable:"Aug", value:0},
         {lable:"Sep", value:0},
         {lable:"Oct", value:0},
         {lable:"Nov", value:0},
         {lable:"Dec", value:0},
    ];

    for(const expense of props.expenses){
        const expensMonth = expense.date.getMonth(); 
        chartDataPoints[expensMonth].value += expense.amount;
    }
    return (
        <div>
            <Chart dataPoints={chartDataPoints}/>
        </div>
    )
}
