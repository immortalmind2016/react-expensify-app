import moment from "moment"
import selectExpenses from "../../selectors/expenses"
    const expenses=[{
        id:"1",
        description:"Rent",
        note:"",
        amount:100,
        createdAt:0
    },
    {
        id:"2",
        description:"coffe",
        note:"",
        amount:50,
        createdAt:moment(0).subtract(4,"days").valueOf()
    },
     {
        id:"3",
        description:"Tee",
        note:"",
        amount:109500,
        createdAt:moment(0).add(4,"days").valueOf()
    }
    ]

test("should filter by text value",()=>{

    const selectOptions={text:"rent"}
    const result=selectExpenses(expenses,selectOptions);
   
    expect(result).toEqual([{
        id:"1",
        description:"Rent",
        note:"",
        amount:100,
        createdAt:0
    }])
})
test("should filter by amount",()=>{

    const selectOptions={text:"",sortBy:"amount",startDate:undefined,endDate:undefined}
    const result=selectExpenses(expenses,selectOptions);
   
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})


test("should filter by startDate",()=>{

    const selectOptions={text:"",sortBy:"date",startDate:moment(0),endDate:undefined}
    const result=selectExpenses(expenses,selectOptions);
   
    expect(result).toEqual([expenses[2],expenses[0]])
})


test("should filter by endDate",()=>{

    const selectOptions={text:"",sortBy:"date",startDate:undefined,endDate:moment(0)}
    const result=selectExpenses(expenses,selectOptions);
   
    expect(result).toEqual([expenses[0],expenses[1]])
})

test("should filter by date",()=>{

    const selectOptions={text:"",sortBy:"date",startDate:undefined,endDate:undefined}
    const result=selectExpenses(expenses,selectOptions);
   
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})
