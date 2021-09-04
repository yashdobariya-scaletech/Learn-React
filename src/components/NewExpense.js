import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
import Card from "./Card"

export default function NewExpense() {
    return (
        <Card className="new-expense">
            <ExpenseForm />
        </Card>
    )
}
