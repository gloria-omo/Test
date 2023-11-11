const chalk = require('chalk')

// const  traffic=()=>{
//     const green=setInterval(()=>{
//         console.log("Go :green color")
//     },1000)
    
//     setTimeout(()=>{
//         clearInterval(green)
//         console.log("stop moving")
//     },11000)
    
//      setTimeout(()=>{
//         const yellow=setInterval(()=>{
//             console.log("ready:yellowcolor")
//         },1000)
    
//         setTimeout(()=>{
//             clearInterval(yellow)
//             console.log("yellow has stopped")
            
//             },5000)},12000)
    
    
//             setTimeout(()=>{
//         const red=setInterval(()=>{
//             console.log("stop:red color")
//         },1000)
//        setTimeout(()=>{
        
//     clearInterval(red)
//     console.log("i am done running")
//        },10000) 
//     },18000)
    
//     }
    
//     traffic()
    
//     setInterval(()=>{
//         traffic()
//     },27000)






// const traffic = ()=>{
//     const red = setTimeout(()=>{
// console.log(chalk.red("RED:stop"))
//     },1000)

//     const yellow = setTimeout(()=>{
// console.log(chalk.yellow('YELLOW:ready to go'))
//     },15000)
//     const green = setTimeout(()=>{
// console.log(chalk.green("GREEN:go"))
//     },30000)
// }

// traffic()








const trafficLight = ()=>{
    const red = setInterval(() => {
        console.log(chalk.red("RED:Stop "))
    },1000);
  setTimeout(()=>{
    clearInterval(red)
  },1000)  

  setTimeout(()=>{
    const yellow = setInterval(() => {
        console.log(chalk.yellow("YELLOW:Ready to go"))
    },15000);
    setTimeout(()=>{
        clearInterval(yellow)  
    },15000)
  })
  setTimeout(()=>{
 const green = setInterval(() => {
     console.log(chalk.green("GREEN:Go now"))
 }, 30000);
 setTimeout(()=>{
    clearInterval(green)
 },30000)

   })
}



trafficLight()



