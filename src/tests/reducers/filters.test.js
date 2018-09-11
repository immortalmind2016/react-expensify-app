import filtersReduces from "../../reducers/filters"
import moment from "moment"
test("should setup default filter values",()=>{
    const state=filtersReduces(undefined,{type:"@@INIT"})
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month")
    })

})
test("should set sortby to amount",()=>{
    const state=filtersReduces(undefined,{type:"SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
})

test("should set sortby to date",()=>{
    const currentState={
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    }
    const action={type:"SORT_BY_DATE"}
    const state=filtersReduces(currentState,action)
    expect(state.sortBy).toBe("date")
})



test("should set sortby to TEXT",()=>{
    const currentState={
        text:"Rent",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    }
    const action={type:"SET_TEXT_FILTER",text:"rent"}
    const state=filtersReduces(currentState,action)
    expect(state.text).toBe("rent")
})


test("should set filter to start Date",()=>{
    const currentState={
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    }
    const action={type:"SET_START_DATE",date:0}
    const state=filtersReduces(currentState,action)
    expect(state.startDate).toBe(0)
})


test("should set filter to end Date",()=>{
    const currentState={
        text:"",
        startDate:undefined,
        endDate:0,
        sortBy:"amount"
    }
    const action={type:"SET_END_DATE",date:0}
    const state=filtersReduces(currentState,action)
    expect(state.endDate).toBe(0)
})

