import React, {useState} from 'react'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

export default function Expense(props) {

    const [filterYear, setfilterYear] = useState("2021")

    const filterChangeHandle = selectedYear => {
        setfilterYear(selectedYear);
        
    }

    const filterExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })


    return (
        <Card className="expense">
            <ExpenseFilter selected={filterYear}  
            onChangeFilter={filterChangeHandle}
            />
            <ExpensesChart 
                expenses={filterExpenses}
                />
            <ExpenseList 
            item={filterExpenses}

                />
        </Card>
    )
}
