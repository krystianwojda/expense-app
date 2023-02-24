import ExpenseData from "./ExpenseData";
import './ExpenseItem.css';

const ExpenseItem = () => {
    return(
        <div className='expense-item'>
            <ExpenseData/>
            <div className='expense-item__description'>
                <h2>Food</h2>
                <div className='expense-item__price'>$130.99</div>
            </div>
        </div>
    );
};

export default ExpenseItem;