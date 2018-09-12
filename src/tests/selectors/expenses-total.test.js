import selectExpensesTotal from "../../selectors/expenses-total"

const expenses=[
    {
        id:"1",
        description:"rent",
        amount:5,
        createdAt:0,
        note:"hh"
    }, {
        id:"2",
        description:"rent2",
        amount:50,
        createdAt:10,
        note:"hh"
    }
]
test("should test to return total expenses amount",()=>{
const total=selectExpensesTotal(expenses)
console.log(total)

})
test("should test to return total expenses amount 0 with empty Expense",()=>{
const total=selectExpensesTotal([])
console.log(total)

})
