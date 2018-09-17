import React from "react"
import {connect} from "react-redux"
import {startLogin} from "../actions/auth"
export const LoginPage = ({startLogin})=>(
 <div className="loginPage">
  
        <button onClick={startLogin} className="loginPage-btn">Login </button>

 </div>
)

var mapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginPage)
// undefined because it's not needed to use stateToProps