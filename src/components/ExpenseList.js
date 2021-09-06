import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList(props) {

    
    if(props.item.length === 0 ){
        return <h3>No Record Found More</h3>
    }
    return (
        <div>
        {props.item.map((expense ,index) => (
            <ExpenseItem  
                key={index} 
                title={expense.title} 
                date={expense.date} amount={expense.amount}/>))   }
        </div>
    )
}
