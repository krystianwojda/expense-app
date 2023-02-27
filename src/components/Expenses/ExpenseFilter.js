import './ExpenseFilter.css';

const ExpenseFilter = () => {
    const changeHandler = event => {
        const filterYearValue = event.target.value;

        console.log(filterYearValue);
    };

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={changeHandler}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;