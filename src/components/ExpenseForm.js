import React , {useState} from 'react'
import "./ExpenseForm.css"


export default function ExpenseForm(props) {

const [Title, setTitle] = useState('')
const [Amount, setamount] = useState('')
const [enterDate, setDate] = useState('')

    const titleChangeHandle = (event) =>{
        setTitle(event.target.value);
    }

    const amountChangeHandle = (event) =>{
        setamount(event.target.value);
    }

    const dateChangeHandle = (event) =>{
        setDate(event.target.value);
    }

    const submitHandle = (event) =>{
        event.preventDefault();

        const expenseData = {
            title:Title,
            amount:Amount,
            date:new Date(enterDate)
        };
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setTitle('');
        setamount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandle}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={Title} onChange={titleChangeHandle}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={Amount} onChange={amountChangeHandle} min="100" step="10"/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterDate} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandle}/>
                </div>

            </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    )
}
