import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
import Card from "./Card"

export default function NewExpense(props) {

    const saveExpenseDataHandle = (enterExpenseData) =>{

        const expenseData = {
            ...enterExpenseData,
            id: 1,  
        };
        props.onAddExpense(expenseData)
        // console.log(expenseData);
    }

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandle}/>
        </Card>
    )
}
