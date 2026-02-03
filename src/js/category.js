const fetchcategory= async ()=>{
    try{
        let category=[]
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res=await data.json()
        category=res.category.map((item)=>{
            if(item.type==="more"){
                return` <div class="category-item w-1/10 h-full flex justify-center items-center ">
                 <a href="${item.link}" class="category-item-link  block h-[80%]  no-underline ">
                     <div class="category-item-more  w-[52px] h-[52px] rounded-full bg-[lightgrey] mx-auto flex items-center justify-center gap-x-0.5">
                         <div class="category-item-more-in  w-[5px] h-[5px] rounded-full bg-[grey]"></div>
                        <div class="category-item-more-in  w-[5px] h-[5px] rounded-full bg-[grey]"></div>
                        <div class="category-item-more-in  w-[5px] h-[5px] rounded-full bg-[grey]"></div>
                   </div>
                   <h6 class="category-item-text  w-[52px] mx-auto my-2.5 font-iranyekan text-[12px] font-normal text-digi-text leading-5 text-center ">${item.title}</h6>
                </a>
          </div>`

            }else{
                return` <div class="category-item w-1/10 h-full flex justify-center items-center ">
                     <a href="${item.link}" class="category-item-link block h-[80%]  no-underline ">
                     <img
                     src="${item.image}"
                     alt=""
                     class="category-item-img  block w-[52px] h-[52px] mx-auto "
                     />

                     <h6 class="category-item-text w-[52px] mx-auto my-2.5 font-iranyekan text-[12px] font-normal text-digi-text leading-5 text-center "> ${item.title}</h6>
                </a>
            </div>`

            }

        })

       document.querySelector(".category-center").innerHTML=category.join("") 
      

    }catch(error){
        console.log(error);
        
    }

}
export default{fetchcategory}