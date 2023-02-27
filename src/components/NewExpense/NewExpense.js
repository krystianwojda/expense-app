import React, {useState} from "react";

import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveDataHandler = (saveExpenseData) => {
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString()
        };

        props.onSaveExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <NewExpenseForm onSaveData={saveDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewExpense;