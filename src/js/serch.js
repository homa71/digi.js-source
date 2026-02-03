const fetchlogo=async()=>{
    try{
        let logo=[]
        let ldata=await fetch("https://homa71.github.io/digi-api/db.json")
        let lres= await ldata.json()
        logo=lres.slogo.map((item)=>{
            return`<div class="w-full h-full">
            <a href="./index.html" class="flex w-full h-full items-center justify-end ">
              <img src="${item.image}" alt="${item.alt}" class="w-[195px] h-[30px]">
            </a>
           </div>
            `
        })
        document.querySelector(".logo").innerHTML=logo.join("")

    }catch(error){console.log(error);
    }
}


const fetchregister=async()=>{
    try{
        let register=[]
        let rdata= await fetch("https://homa71.github.io/digi-api/db.json")
        let rres= await rdata.json()
        register=rres.sregister.map((item)=>{
            return` <div class="w-[135px] h-[40px] ">
              <a href="#" class="flex  w-full h-full border border-solid border-[lightgray] rounded-lg  items-center justify-center gap-x-[5px]   no-underline">
                <img src="${item.image1}" alt="${item.alt1}">
                <span class="font-iranyekan text-[12px] font-bold text-digi-text">${item.title1}</span>
                <div class="w-[2px] h-[13px] bg-digi-text"></div>
                <span class="font-iranyekan text-[12px] font-bold text-digi-text">${item.title2}</span>
              </a>
            </div>
              <div class="w-[1px] h-[25px] bg-[lightgray]"></div>
            <div class="w-[30px] h-[30px] pt-1 mr-3.5">
              <a href="#">
                <img src="${item.image2}" alt="${item.alt2}">
              </a>
            </div>
            `
        })
        document.querySelector(".register").innerHTML=register.join("")


    }catch(error){console.log(error);
    }
}
export default {fetchlogo,fetchregister}
