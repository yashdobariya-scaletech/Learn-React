import "../components/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React from "react";

function ExpenseItem(props) {

    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">   
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                {/* <button onClick={clickHandle}>Change Title</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;
