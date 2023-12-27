/*let user =[
    {
        "name":"keshav",
        "email":"rkthakur941@gmail.com"
    },
    {
        "name":"sachin",
        "email":"rkthakur941@gmail.com"

    }
    
]
localStorage.setItem("name",JSON.stringify(user)) // store the data in string form and use to store the multiple data in local storage
JSON.parse(localStorage.getItem("name")) // get the data in Array form again*/
//localStorage.setItem("keshav",'NM') // LocalStorage mei hmesa data string format mei hi jata ha
let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    let name = e.target.uname.value;
    let email= e.target.email.value;
    let phone= e.target.phone.value;
    let checkstatus = 0;
   let userData =  JSON.parse(localStorage.getItem("name")) ?? [];
   for(let v of userData){
    if(v.email==email||v.phone==phone){
        checkstatus = 1;
        break;

    }
   }
   if(checkstatus==1){
    alert("Email or Phone Already Exists")
   }
   else{userData.push({
    'name':name,
    'email':email,
    'phone':phone

   })

   localStorage.setItem("name",JSON.stringify(userData))
   e.target.reset();
}
   
   display();
   //console.log(userData)
    //console.log(name)
    //console.log(email)
   // console.log(phone)
    e.preventDefault(); // page ke relod ko rokdena / or refresh ko rukdena
})





let maindocument = document.querySelector(".main");

let display = ()=>{
    let userData =  JSON.parse(localStorage.getItem("name")) ?? [];
    let finaldata = '';
    userData.forEach((element,i) => { // ek Array ke ander do object ha element btayga ga object ko i btayga index ko
        finaldata+=` <div class = "items">
        <span onclick = 'removeData(${i})'>&times</span>
        <h5>Name</h5>
        <div>${element.name}</div>

        <h5>Email</h5>
        <div>${element.email}</div>

        <h5>Phone</h5>
        <div>${element.phone}</div>
    </div>`
        
    });
    maindocument.innerHTML = finaldata;

    console.log(finaldata)
    //console.log(userData)

}

let removeData = (index)=>{
    let userData =  JSON.parse(localStorage.getItem("name")) ?? [];
    userData.splice(index,1);
    localStorage.setItem("name",JSON.stringify(userData))
    display();


}
display();