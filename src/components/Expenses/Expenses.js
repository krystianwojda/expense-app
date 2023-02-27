import React, {useState} from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return(
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
            {props.expenses.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </div>
    );
};

export default Expenses;