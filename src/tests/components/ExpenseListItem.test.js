import React from "react"
import {shallow} from "enzyme"
import {ExpenseListItem} from "../../components/ExpenseListItem"
const expense ={
        id:"2",
        dispatch:"",
        description:"rent2",
        amount:50,
        createdAt:10,
        note:"hh"
    }
test("should render expenselist item with provided expense",()=>{
  const wrapper=shallow(<ExpenseListItem {...expense} />)
  expect(wrapper).toMatchSnapshot();

})