import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveDataHandler = (saveExpenseData) => {
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString()
        };

        props.onSaveExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            <NewExpenseForm onSaveData={saveDataHandler}/>
        </div>
    );
};

export default NewExpense;