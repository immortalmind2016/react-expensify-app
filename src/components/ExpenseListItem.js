import React from 'react'
import {connect} from "react-redux"
import {removeExpense} from "../actions/expenses"
import {Link} from "react-router-dom"
// export a stateless functional Component
// description , amount , createdAt
// remove props.  ( called destructure)
export const ExpenseListItem=({dispatch,id,description , amount , createdAt})=>(
    <div>
     <Link to={`/edit/${id}`}><h3> {description}</h3></Link>
     <p>{amount} - {createdAt}</p>
     <button onClick={()=>{
         console.log("---" +id+"---")  
             dispatch(removeExpense({id}))
     }} >Remove</button>
    </div>
)
const mapStateToProps=(state)=>{
    return {
        filters:state.filters,
    
 
    }
}
export default connect(mapStateToProps)(ExpenseListItem);     

 

