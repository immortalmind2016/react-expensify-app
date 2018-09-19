import React from "react"
import moment from "moment" // deal with now time
import {SingleDatePicker} from "react-dates"

//const date=new Date();
const now=moment()
console.log(now.format('MMMM Do YYYY'))

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
        description:props.expense?props.expense.description:"",
        note:props.expense?props.expense.note:"",
        amount:props.expense?(props.expense.amount/100).toString():"",
        createdAt:props.expense?moment(props.expense.createdAt):moment(),
        calanderFocused:false,
        error:undefined,
        
    }
    
    }
    
     
   onDescriptionChange=(e)=>{
       const description=e.target.value;
        console.log(description)
       this.setState(()=>({description}))
 

   }
     onNoteChange=(e)=>{
       const note=e.target.value;
       this.setState(()=>({note}))
   }
   onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){this.setState(()=>({amount}))}
   } 
   onDateChange=(createdAt)=>{
       if(createdAt){
        this.setState({createdAt})
       }

   }
   onFocusChange=({focused})=>{
        this.setState({calanderFocused:focused})
   }
   onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description||!this.state.amount){
            //set Error state equate to "please provide Description and amount "
            this.setState({error:"please provide Description and amount ."})
        }else{
            //cleare The error
            this.setState({error:undefined})
             this.props.onSubmit({
            description:this.state.description,
            amount:parseFloat(this.state.amount,10)*100,
            createdAt:this.state.createdAt.valueOf(),
            note:this.state.note
        })
        }   
       
   }
    render(){
       return (
      
          
             <form className="form" onSubmit={this.onSubmit}>
               {this.state.error &&<p className="form__error">{this.state.error}</p>}
              <input 
              className="text-input"
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
              <input 
              className="text-input"
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
                />
                 <div>
            <SingleDatePicker
            
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calanderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={(day)=>false}
            
             />
            </div>
              <textArea
              className="textarea"
              placeholder="add a note for your Expense (optional)"
            value={this.state.description}
            onChange={this.onNoteChange}
              >
              </textArea>
              <div>
               <button className="button-layout">{!this.props.expense?"Add Expense":"Save"}</button>
              
              </div>              
             

              
            
             </form>
      
       )
   }
}