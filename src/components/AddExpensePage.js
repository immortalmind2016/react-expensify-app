import React from "react"
import ExpenseForm from "./ExpenseForm"
import {connect} from "react-redux"
import {startAddExpense,addExpense} from "../actions/expenses"

export class AddExpensePage extends React.Component{
    onSubmit=(expense)=>{
            //use push
            // attach then callback
            // dispatch action
            // redirect

        this.props.startAddExpense(expense)
           this.props.history.push("/") // redirect me with React 
         
            }
    render() {
        return (
        <div>
       <h1>Add Expense</h1>
       <ExpenseForm 
       onSubmit={this.onSubmit}
       
       />
    </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    startAddExpense:(expense)=>dispatch(startAddExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);