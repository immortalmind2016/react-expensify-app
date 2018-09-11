import moment from "moment"
import {setTextFilter, setEndDate ,setStartDate,sortByAmount,sortByDate} from "../../actions/filters"
test("should should generate set start  date  action Object ",()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        date:moment(0)
    })
})
    
test("should should generate set end  date  action Object ",()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        date:moment(0)
    })
})
test("should should generate sort by  date  action Object ",()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
      
    })
})
test("should should generate sort by amount  action Object ",()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
      
    })
})

test("should should generate set text filter with provided text  ",()=>{
    const action=setTextFilter("rent");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"rent"
      
    })
})


test("should should generate set text filter with default text  ",()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
      
    })
})