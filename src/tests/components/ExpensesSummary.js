import React from "react"
import {shallow} from "enzyme"
import {ExpensesSummary} from "../../components/ExpensesSummary"
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
test("should test ExpensesSummary with no data",()=>{
    const wrapper=shallow(<ExpensesSummary expensesCount={5} totalAmount={selectExpensesTotal(expenses)}/>)
    expect(wrapper).toMatchSnapshot()
})