import React from "react"
import {connect} from "react-redux"
import selectExpenses from "../selectors/expenses"
import ExpenseListItem from "./ExpenseListItem"
// we added export named to Testing
export const ExpenseList=(props)=>(
    <div>
        <h1>Expense List</h1>
     {
         props.expenses.length===0?(<p>No Expenses</p>):(
              props.expenses.map((element)=>(
            <ExpenseListItem key={element.id} {...element} />
                    ))
         )
     }
       
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