// marksheet for A levels
// marksheet for A levels code starts here 
let Marks= 100
 
if (Marks<70) {
    console.log("You Got C");
    
}
else if (Marks<60) {
    console.log("You Got D");
    
}
else if (Marks>96){
    console.log("You Got A*");
    
}
else if (Marks<50 ) {
    console.log("You Got C");
    
}
else  {
    console.log("You Got A");
    
}
// markssheet for a level code ends here
// creative it mern stack course starts
let computer="yes1"
let computerskill="yes2"
let fundamentals="yes3"
let github="yes4"
let oldcourse="yes5"
if (computer=="yes1"){
//    nested 2
  if (computerskill=="yes2") {
//    nested 3
if (fundamentals=="yes3") {
    //  nested 4
    if (github=="yes4")
    {
        //  nested 5
        if (oldcourse=="no")
          {
               console.log("Yes,you can enroll");
          }
            else {
                console.log("learn,old courses");
                
            }
           
    }
 else {
    console.log("create,github account");
    
 }
        
}
  

    else {
        console.log("learn fundamentals");
        
    }
  }
   
else {
    console.log("Learn ,computer skill");
    
}    
    
}
else {
    console.log("BUY A COMPUTER");
    
}