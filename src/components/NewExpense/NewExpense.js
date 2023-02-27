import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

const NewExpense = () => {
    const saveDataHandler = (saveExpenseData) => {
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString()
        };

        console.log('We are in NewExpense', expenseData);
    };

    return(
        <div className='new-expense'>
            <NewExpenseForm onSaveData={saveDataHandler}/>
        </div>
    );
};

export default NewExpense;