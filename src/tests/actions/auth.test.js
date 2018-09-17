import {login,logout} from "../../actions/auth"

test('Should test login action Object',()=>{
    const action=login("1")

    expect(action).toEqual({
        type:"LOGIN",
        uid:"1"
    })
})
test('Should test logout action Object',()=>{
    const action=logout()
    expect(action).toEqual({
        type:"LOGOUT"
   
    })
})