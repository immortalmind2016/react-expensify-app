//react-test-render
//import ReactShallowRenderer from "react-test-renderer/shallow" we used Enzyme instead
import React from "react";
import {shallow} from "enzyme"
import {ExpenseList} from "../../components/ExpenseList"
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
test("should render Expense list with expenses",()=>{
const wrapper=shallow(<ExpenseList expenses={expenses}/>);
//expect(wrapper.find("h1").text()).toBe("Expensify")
//expect(toJson(wrapper)).toMatchSnapshot();  
// now i can use it without toJson instead because i'm configurated my jest.config.json file
expect(wrapper).toMatchSnapshot();  
// snapMatchshoot byb2a 3ndi el Component shoot f file w yqarn

})

test("should render Expense list with Empty expenses array",()=>{

const wrapper=shallow(<ExpenseList expenses={[]}/>);

expect(wrapper).toMatchSnapshot();  

})



//test("should render header correctly ",()=>{
  //  const renderer=new ReactShallowRenderer();
   // renderer.render(<Header />)
   // expect(renderer.getRenderOutput()).toMatchSnapshot() 
    // will generate snapshot to my Component and save it
    // next time i can accept new changes or now
    // we will use enzyme because it's difcult to use renderer with complex components
    // raf Libirary -> request animation frame ( for browser )

//})