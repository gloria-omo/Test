  //  write file

      const fs = require('fs')

      async function newinfo (){
         try{
            const content = "this is a write file"
            await fs.writeFile("./wasyncawait.txt", content, (err)=>{
                if (err) {
                    console.log(err)
                }else{
                    console.log("successfully")
                }
            })
         }
         catch(e){
          console.log(e.message)
         }
      }
      newinfo()