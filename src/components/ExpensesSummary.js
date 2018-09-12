import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"
import numeral from "numeral"
import React from "react"
import {connect } from "react-redux"
export const ExpensesSummary=(props)=>(
    <div>
      Visible Expenses Numbers : {props.expensesCount}
      Total Amount : {numeral(props.totalAmount/100).format("$0,0.00")}
    </div>
)

const mapStateToProps=(state,props)=>{
     return {
         expensesCount:selectExpenses(state.expenses,state.filters).length,
         totalAmount:selectExpensesTotal(selectExpenses(state.expenses,state.filters))
     }
}

export default connect(mapStateToProps)(ExpensesSummary);