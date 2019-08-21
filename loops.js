 var strangeThings = []
 
 function forLoop(strangeThings) {
   for (var i = 0; i < 25; i++) {
     if (i === 1) {
       strangeThings.push("I am 1 strange loop.")
     } else {
       strangeThings.push(`I am ${i} strange loops.`)
     }
   }
   return strangeThings
 }
 forLoop(strangeThings)