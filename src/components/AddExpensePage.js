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
         <div className="page-header">
                <div className="content-container">
                      <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="content-container">
        
       <ExpenseForm 
       onSubmit={this.onSubmit}
       
       />
           </div>
    </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    startAddExpense:(expense)=>dispatch(startAddExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);