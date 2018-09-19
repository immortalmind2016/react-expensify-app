import React from "react"
import {connect} from "react-redux"
import selectExpenses from "../selectors/expenses"
import ExpenseListItem from "./ExpenseListItem"
// we added export named to Testing
export const ExpenseList=(props)=>(
    <div className="content-container">

        <div className="list-header">   
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
     <div className="list-body">

            {
                props.expenses.length===0?(
                    <div class="list-item list-item--message">
                    <span> No Expenses</span>
                    </div>
                    ):(
                    props.expenses.map((element)=>(
                    <ExpenseListItem key={element.id} {...element} />
                            ))
                )
            }
       </div>
    </div>
)

const mapStateToProps=(state)=>{
    return {
        expenses:selectExpenses(state.expenses,state.filters),
    }
}
export default connect(mapStateToProps)(ExpenseList);     
/*

const ConnectedExpensesList=connect((state)=>{
    return {
        expenses:state.expenses
    }
})(ExpenseList);     


 //have it's own HOC

export default ConnectedExpensesList

*/