import React from "react"
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {history} from "../routers/AppRouter"
import {editExpense,setEditExpense,startRemoveExpense} from "../actions/expenses"
const EditExpensePage=(props)=>{
    return (
    <div >
        <div className="page-header">
         <div className="content-container">
         <h1 className="page-header__title">Edit expense</h1>
         </div>
        </div>
        <div className="content-container">
        <ExpenseForm 
            onSubmit={(expense)=>{
                console.log("updated",expense)
                props.dispatch(setEditExpense(props.match.params.id,expense))
                props.history.push("/")
            }}
            expense={props.expense}
        />
        <div style={{paddingBottom:"10px"}}>
       
        <button onClick={()=>{
            console.log(props.match.params)
       props.dispatch(startRemoveExpense({id:props.match.params.id}))
       history.push("/")
        }   }
         className="button-layout button--secondry">Remove Epense
         </button>
          </div>
        </div>
    </div>
    )
}
const mapStateToProps=(state,props)=>{
     return {
         expense:state.expenses.find((expense)=>(expense.id===props.match.params.id))
     }
}
export default connect(mapStateToProps)(EditExpensePage)