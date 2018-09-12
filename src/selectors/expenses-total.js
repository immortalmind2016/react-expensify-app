import moment from "moment"
const selectExpensesTotal=(expenses)=>{
  
return expenses
.map((expense)=>expense.amount)  // to make it array of number
.reduce((sum ,value)=>sum+value,0)
 
}



export default selectExpensesTotal