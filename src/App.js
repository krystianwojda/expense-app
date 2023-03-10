import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
    {
        id: 1,
        title: 'Car Insurance',
        amount: 499.00,
        date: new Date(2022, 9,25)
    },
    {
        id: 2,
        title: 'New Laptop',
        amount: 1299,
        date: new Date(2022, 7, 7)
    },
    {
        id: 3,
        title: 'Iphone 12 Pro',
        amount: 899.99,
        date: new Date(2022, 12,24)
    },
    {
        id: 4,
        title: 'Michelin tyres',
        amount: 500,
        date: new Date(2023,1,14)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(dummy_expenses);

    const saveExpenseHandler = (expense) => {
        setExpenses((prevState) => {
            return [
                expense,
                ...prevState
            ];
        })
    };

    return(
        <div>
            <NewExpense onSaveExpense={saveExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
};

export default App;
