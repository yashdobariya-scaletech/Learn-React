import "../components/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React,{useState} from "react";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    console.log("function evalulataed");

    const clickHandle = () => {
        setTitle("update the title")
        console.log(title, "clicked");
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">   
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={clickHandle}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
