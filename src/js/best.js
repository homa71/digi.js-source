const fetchbest=async ()=> {
    try{
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res=await data.json()
        res.best.map((item)=>{
            if(item.type==="top"){
               let top= document.querySelector(".best-center-top")
             top.innerHTML=`<div class="best-center-top-right w-[60%] h-full flex items-center justify-end gap-2">
                <img src="${item.svg}" alt=""  class="best-center-top-right-svg"/>
               <h2 class="best-center-top-right-text font-iranyekan text-[20px] font-normal text-[#2b2b2b]">
               ${item.title} </h2>
           </div>
           <div class="best-center-top-left w-[40%] h-full flex items-center justify-end">
              <a href="${item.cta.link}" class="best-center-top-left-link font-iranyekan text-[15px] text-[#19BFD3] ml-4"> ${item.cta.text} </a>
          </div> `
        }else if(item.type==="bottom"){
           let bottom= item.slides.map((slide)=>{
               return`<div class="swiper-slide  bg-[#fff]">
                         <div class="swiper-slide-div w-full h-full">
                            ${ slide.cards.map((card)=>{
                                if(card.type==="last"){
                                    return`<div class="swiper-slide-div-item w-full h-[33%]">
                                    <a href="${card.link}" class="swiper-slide-div-item-link flex items-center justify-center gap-[5px] w-full h-full no-underline">
                                       <img src="${card.image}" alt="" class="swiper-slide-div-item-link-img 
                                       !w-[65px] !h-[70px]" />
                                       <span class="swiper-slide-div-item-link-number font-number text-[30px] font-bold  text-[#19BFD3]">${card.number}</span>
                                       <p class="swiper-slide-div-item-link-text font-iranyekan text[#3F4064] text-[12px] text-right leading-[25px] line-clamp-2">${card.description} </p>
                                    </a>
                                 </div> `
                                }else{
                                    return `<div class="swiper-slide-div-item w-full h-[33%]">
                                    <a href="${card.link}" class="swiper-slide-div-item-link flex items-center justify-center gap-[5px] w-full h-full no-underline">
                                       <img src="${card.image}" alt="" class="swiper-slide-div-item-link-img 
                                       !w-[65px] !h-[70px]" />
                                       <span class="swiper-slide-div-item-link-number font-number text-[30px] font-bold  text-[#19BFD3]">${card.number}</span>
                                       <p class="swiper-slide-div-item-link-text font-iranyekan text[#3F4064] text-[12px] text-right leading-[25px] line-clamp-2">${card.description} </p>
                                    </a>
                                 </div>
                                 <div class="swiper-slide-div-divider w-[140px] h-[1px] bg-[#F0F0F1] mr-[95px]"></div>`

                                }
                                
                            }).join("")
                           
                           }  
                      </div>
                </div>`
            })
              document.querySelector(".best-wrapper").innerHTML=bottom.join("")

        }
      })

    }catch(error){
        console.log(error);
    }
}
export default{fetchbest}