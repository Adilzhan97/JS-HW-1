let age = 20;
let age2 = 12;
let tt = typeof(age)
let nn = typeof(age2)

if (tt == nn) {
   if (age >= 18 && age < 60) {
      console.log("Full content")
   }

   else if (age < 18) {
      console.log("Multiki")   
   }

   else if (age >= 60) {
      console.log("Kultura") 

   } 
} else {
      console.log("Good luck!")
        
}