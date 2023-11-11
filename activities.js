const calculator = (name1,name2)=>{
   const man = Math.floor(Math.random()*100)
   const woman = Math.floor(Math.random()*100)
   const average = (man + woman)/2
   setTimeout(()=>{
  console.log(`the socer of ${name1} is ${man} and the socer of ${name2} is ${woman}`)
   },1000)
   setTimeout(()=>{
    console.log(`the average is ${average}`)
   },2000)
   setTimeout(()=>{
    if (average >=70){
        console.log("you are compatible and can marry")
    }else if(average>=60){
        console.log("you arer slightly compatible")
    }else if(average>=50){
        console.log("you are managable")
    }else if(average>=40){
        console.log("you can not marry")
    }else{
        console.log("run for your life")
    }
   },3000)
}
calculator("john","gloria")