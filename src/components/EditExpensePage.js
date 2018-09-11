import React from "react"
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {editExpense} from "../actions/expenses"
const EditExpensePage=(props)=>{
    return (
    <div>

        <ExpenseForm 
            onSubmit={(expense)=>{
                console.log("updated",expense)
                props.dispatch(editExpense(props.match.params.id,expense))
                props.history.push("/")
            }}
            expense={props.expense}
        />
    </div>
    )
}
const mapStateToProps=(state,props)=>{
     return {
         expense:state.expenses.find((expense)=>(expense.id===props.match.params.id))
     }
}
export default connect(mapStateToProps)(EditExpensePage)