import React, {useState} from "react";
import './NewExpenseForm.css';

const NewExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const changeAmountHandler = (event) => {
        setAmount(event.target.value);
    };
    const changeDateHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        console.log(expenseData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={changeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={changeAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2022-01-01' step='2025-12-31' onChange={changeDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;