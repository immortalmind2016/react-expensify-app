import * as firebase from "firebase"

 const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATA_BASE_URL,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database=firebase.database();

export {firebase,database as default}


/*
database.ref("expenses").on("child_removed",(snapshot)=>{
    console.log(snapshot.key,snapshot.val())
})
database.ref("expenses").on("child_changed",(snapshot)=>{
    console.log(snapshot.key,snapshot.val())
}) 
database.ref("expenses").on("child_added",(snapshot)=>{
    console.log(snapshot.key,snapshot.val())
})
*/
/*
database.ref("expenses").once("value")
.then((snapshot)=>{

snapshot.forEach((childSnapshot)=>{
expenses.push({
    id:childSnapshot.key,
    ...childSnapshot.val()
})

})
console.log(expenses)

}).catch(()=>{

})
*/
/*
database.ref("expenses").on("value",(snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
    id:childSnapshot.key,
    ...childSnapshot.val()
})
    })
    console.log(expenses)
})
*/

// setup "expenses" with three items (description,note,amount,createdAt)
/*
database.ref("expenses").push({
            description:"rent",
            note:"nothing",
            amount:500,
            createdAt:0
        })
database.ref("expenses").push({
    description:"rent2",
    note:"nothing",
    amount:500,
    createdAt:0
})
database.ref("expenses").push({
    description:"rent3",
    note:"nothing",
    amount:500,
    createdAt:0
})

*/



/*
database.ref("notes/-LMDxX37zFskr-TOsBoY").remove()*/
/*database.ref("notes").push(
    {
        title:"todo",
        body:"go for a run"
    }
)
*/

/*
const firebaseNotes={
    notes:{
        apogererew:{
        title:"1st note !",
        body:"this is my note"
    },
    safsafs:{
        title:"2nd note !",
    body:"this is my 2nd note"
    }
    }
}
const notes=[
    { 
    id:"12",
    title:"1st note !",
    body:"this is my note"

    },
    {
    id:"761ase",
    title:"another note !",
    body:"this is my note"
    }
] 
*/
//database.ref("notes").set(notes)


/*

database.ref().set({
    name:"Mohamed Salah",
    isSingle:false,
    age:26,
    location:{
        city:"cairo",
        country:'egypt'
    }
}).then(()=>{
    console.log("Data is saved")
}).catch((error)=>{
 console.log("this faild .",error)
})
// database like promises

database.ref("age").set(27)
database.ref("location/ciry").set("New York")
database.ref("attributes").set({
    height:73,
    weight:150
}).then(()=>{
    console.log("second set Working well")
}).catch((error)=>{
    console.log("things didn't work in second one",error)
})
database.ref("isSingle").remove()
database.ref().once("value").then((snapshot)=>{
const val=snapshot.val()
console.log("VALUE : ",val)
}).catch(()=>{

})

//if server update data - listening 
database.ref().on("value",(snapshot)=>{
    console.log(snapshot.val())
})
*/