import React from "react"
import {shallow} from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"

test("should render ExpenseForm correctly ",()=>{
    const Wrapper=shallow(<ExpenseForm />);
    expect(Wrapper).toMatchSnapshot();
})
const expense={
        id:"2",
        description:"rent2",
        amount:50,
        createdAt:10,
        note:"hh"
    }
test("should render ExpenseForm correctly with expense data ",()=>{
    const Wrapper=shallow(<ExpenseForm expense={expense} />);
    expect(Wrapper).toMatchSnapshot();
})

test("should render error for invalid form submission ",()=>{
    const wrapper=shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();

    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{
        }
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
   

})

test("should set description on input change  ",()=>{
    const wrapper=shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();

    wrapper.find("input").at(0).simulate("change",{
        target:{value:"rent"}

    })
    expect(wrapper.state("description")).toBe("rent")
})



test("should set note on textarea change  ",()=>{
    const wrapper=shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();

    wrapper.find("textArea").at(0).simulate("change",{
        target:{value:"test"}

    })
    expect(wrapper.state("note")).toBe("test")
})

test("should call onSubmit prop for valid form submission",()=>{
    // use Spies -spy
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate("submit",{
        preventDefault:()=>{
        }
    })
    expect(wrapper.state("error")).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({

        description:"rent2",
        amount:50,
        createdAt:10,
        note:"hh"
    });

        //const onSubmitSpy=jest.fn();
        //onSubmitSpy("mohamed","cairo")
      //  expect(onSubmitSpy).toHaveBeenCalledWith("mohamed","cairo");
})

/*
test("should set new SingleDatePicker change  ",()=>{
    const wrapper=shallow(<ExpenseForm />);
    const now =moment();
    wrapper.find("SingleDatePicker").prop("onDateChange")(now)
    expect(wrapper.state("createdAt")).toEqual(now)
})
      

test("should set new SingleDatePicker focused  ",()=>{
    const wrapper=shallow(<ExpenseForm />);
 const focused=true;
    wrapper.find("SingleDatePicker").prop("onFocusChange")({focused})
    expect(wrapper.state("calanderFocused")).toBe(focused)
})
     
      */
      
      
      
      
      
