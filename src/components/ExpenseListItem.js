import React from 'react'
import {connect} from "react-redux"
import {removeExpense,startRemoveExpense} from "../actions/expenses"
import {Link} from "react-router-dom"
import moment from "moment";
import numeral from "numeral"
// export a stateless functional Component
// description , amount , createdAt
// remove props.  ( called destructure)
export const ExpenseListItem=({dispatch,id,description , amount , createdAt})=>(

  
    <Link class="list-item" to={`/edit/${id}`}>
    <div>
    <h3 className="list-item__title"> {description}</h3>
     <span className="list-item__sub-title">
     {moment(createdAt).format("MMMM Do, YYYY")}</span>
    </div>
       <h3 className="list-item__data">
     {numeral(amount/100).format("$0,0.00")}
     </h3>

  
    </Link>
  
)
const mapStateToProps=(state)=>{
    return {
        filters:state.filters,
    
 
    }
}
export default connect(mapStateToProps)(ExpenseListItem);     

 

