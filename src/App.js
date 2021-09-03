import ExpenseItem from "./components/ExpenseItem"


function App() {
  const expenses = [ 
    {title: "Room Rent", amount: '₹7000', date: new Date(2021,8,1)},
    {title: "Transpotation", amount: '₹2000', date: new Date(2021,2,1)},
    {title: "Buy Car", amount: '₹5000000', date: new Date(2019,9,1)},
    {title: "Trip", amount: '₹17000', date: new Date(2021,4,1)},
  ]
  return (
    <div className="app">
      <h1>Lets Get Stared</h1>
            <div className="main">
                <ExpenseItem
                  date= {expenses[0].date}
                  title= {expenses[0].title}
                  amount= {expenses[0].amount}
                />
                <ExpenseItem 
                  date= {expenses[1].date}
                  title= {expenses[1].title}
                  amount= {expenses[1].amount}
                />
                <ExpenseItem 
                  date= {expenses[2].date}
                  title= {expenses[2].title}
                  amount= {expenses[2].amount}
                />
                <ExpenseItem 
                  date= {expenses[3].date}
                  title= {expenses[3].title}
                  amount= {expenses[3].amount}
                />
            </div>
    </div>
  );
}

export default App;
