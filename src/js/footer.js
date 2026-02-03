const fetchfooter=async ()=>{
    try{
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res= await data.json()
        logo(res.footer)
        goup(res.footer)
        tell(res.footer)
        guide(res.footer)
        menu(res.footer)
        app(res.footer)
        explanation(res.footer)
        rule(res.footer)
        end(res.footer)
        
        
        

    }
    catch(error){
        console.log(error);
        
    }
}
export default{fetchfooter}

function logo(res){
    let log=document.querySelector(".footer-goUp-logo")
    log.innerHTML=`<img src="${res.goup.logo}" /> `

}

function goup(res){
    let goup=document.querySelector(".footer-goUp-button")
    goup.innerHTML=`
       <a href="" class="footer-goUp-button-link w-[155px] h-[40px] border border-[lightgray] rounded-[8px] flex items-center justify-center gap-[8px] no-underline">
        <span class="footer-goUp-button-text font-iranyekan text-[12px] text-gray-500 font-normal">${res.goup.cta.text}</span>
        <img src="${res.goup.cta.svg}" alt="" class="footer-goUp-button-svg" />
      </a> `
    
      goup.addEventListener("click",()=>{
           window.scrollTo({   //برای این که اسکرول تو کار کنه نباید برای اچ رف تگ ای مقدار هشتگ رو بدیم
              top:0,
              behavior:"smooth"
           })
      })
}

function tell(res){
    let tell=document.querySelector(".footer-tell")
    
    tell.innerHTML=`   <p class="footer-tell-text  font-iranyekan text-[12px] text-digi-text"> ${res.tell.text[0]}   ${res.tell.phone[0]}</p>
          <div class="footer-tell-divider w-[1px] h-3 bg-[grey]"></div>
          <p class="footer-tell-text  font-iranyekan text-[12px] text-digi-text">${res.tell.phone[1]}</p>
          <div class="footer-tell-divider  w-[1px] h-3 bg-[grey]"></div>
          <p class="footer-tell-text  font-iranyekan text-[12px] text-digi-text">${res.tell.text[1]}</p> `
}

function guide(res){
    let guide=document.querySelector(".footer-guide")
    let part=res.guide.map((item)=>{
        return ` <div class="footer-guide-item w-[20%] h-full">
          <a href="${item.link}" class="footer-guide-item-link block w-full h-full no-underline">
           <div class="footer-guide-item-link-top w-full h-70% pt-[20px]">
            <img src="${item.icon}" alt="" class="footer-guide-item-link-top-svg 
            w-[56px] h-[56px] mx-auto block" />
          </div>
          <div class="footer-guide-item-link-bottom w-full h-[30%]">
            <p class="footer-guide-item-link-bottom-text font-iranyekan text-digi-text text-[11px] text-center">${item.title}</p>
        </div>
      </a>
    </div> `
    })
     guide.innerHTML=part.join("")
}

function menu(res){
   let menu=res.menu.map((col)=>{
    
     if(col.type==="last"){
        return` 
        <div class="footer-menu-part-last w-1/4 h-full">
          <div class="footer-menu-part-last-top w-full h-1/2">
            <h6 class="footer-menu-part-last-top-text font-iranyekan text-digi-text text-[16px] mr-[20px]">
              ${col.title}</h6>
          <div class="footer-menu-part-last-top-social flex gap-[8px] mt-[30px]">
              ${col.social.map((item)=>{
                  return` <a href="${item.link}" class="footer-menu-part-last-top-social-link flex w-[60px] 
                  h-[75px] justify-end items-center no-underline ">
                     <img src="${item.icon}" class="footer-menu-part-last-top-social-link-svg w-[60px]
                      h-[60px]" />
                   </a>`}).join("")
               }
           </div>
        </div>
        <div class="footer-menu-part-last-bottom w-full h-1/2">
            <h6 class="footer-menu-part-last-bottom-text font-iranyekan font-bold text-[#2b2b2b] text-[15px] mr-[20px]">
             ${col.email.title}</h6>
            <div class="footer-menu-part-last-bottom-email w-full h-[50px] mt-[20px] flex gap-[10px] ">
            <input type="email" placeholder="${col.email.placeholder}" class=" w-[80%] h-full bg-[#f0f0f1] rounded-[10px] mr-[20px] font-iranyekan font-normal text-[15px] text-gray-500 pr-1.5 ">
            <button type="submit" class=" w-[20%] h-full  rounded-[10px] font-iranyekan text-[white] text-[15px] mr-[10px] font-normal bg-[#f0f0f1]">${col.email.button}</button> 
            </div>
       </div>
    </div>`
        
}else{
            return`<div class="footer-menu-part w-[25%] h-full">
          <div class="footer-menu-part-top w-full h-[calc(290px/7)] flex items-center">
            <h4 class="footer-menu-part-top-text font-iranyekan text-[16px] text-digi-text">${col.title}</h4>
          </div>
          <div class="footer-menu-part-bottom w-full h-[calc(290px-(290px/7))]">
                 ${col.items.map((item)=>{
                    return ` <div class="footer-menu-part-bottom-item w-full h-[calc(290px/7)]">
               <a href="${item.link}" class="footer-menu-part-bottom-item-link flex items-center w-full h-full no-underline">
               <span class="footer-menu-part-bottom-item-link-text font-iranyekan text-[14px] text-gray-500">
               ${item.text}</span>
              </a>
              </div>`}).join("")
             }
     </div>
  </div> `
  }
})
document.querySelector(".footer-menu").innerHTML=menu.join("")

}

function app(res){
    let right=document.querySelector(".footer-app-right")
    right.innerHTML=` <img src="${res.app.logo}" alt="" class="footer-app-right-logo w-[44px] h-[44px]"/>
    <h6 class="footer-app-right-text font-iranyekan text-[22px] text-[whitesmoke] font-normal">
      ${res.app.title}
    </h6>`

    let middle= document.querySelector(".footer-app-middle")
    let links= res.app.links.map((link)=>{
        if(link.store==="more"){
            return` <div class="footer-app-left-more w-[44px] h-[44px] mr-1.5">
      <a href="${link.link}" class="footer-app-left-more-link  w-full h-full bg-digi-white rounded-[5px] flex items-center justify-center">
        <img src="${link.icon}" alt="more"class="footer-app-left-more-link-svg w-[42px] h-[44px]"/>
      </a>
    </div> `

        }else{
            return`<a href="${link.link}" class="footer-app-middle-link block w-[142px] h-[44px]">
                      <img src="${link.icon}" alt=""class="footer-app-middle-link-svg w-[142px] h-[44px]"/>
                   </a>`
        }

    })
    middle.innerHTML=links.join("")

}

function explanation(res){
    let expright_top= document.querySelector(".footer-explanation-right-top")
    expright_top.innerHTML=` <h2 class="footer-explanation-right-top-head font-iranyekan text-[20px] text-digi-text">
                   ${res.explanation.title}</h2>
               <p class="footer-explanation-right-top-text w-full font-iranyekan text-[12px] text-[#62666D] mt-[10px] leading-[25px]">${res.explanation.description}</p>
               <p class="footer-explanation-right-top-lightText w-full h-[30px] font-iranyekan text-[13px] text-[#62666D] leading-[25px] overflow-hidden opacity-[0.2]">${res.explanation.descriptionlight}</p> `

    let  expright_bottom= document.querySelector(".footer-explanation-right-bottom")  
    expright_bottom.innerHTML=` 
                              <button class="footer-explanation-right-bottom-link flex justify-end items-center w-[120px] h-[20px] cursor-pointer">
                              <h6 class="footer-explanation-right-bottom-link-text inline-block font-iranyekan text-[13px] font-normal text-[#6ae1fc]">${res.explanation.cta[0].text}</h6>
                              <img src="${res.explanation.cta[0].svg}" alt=""class="footer-explanation-right-bottom-link-svg" />
                              </button> `  
                              
   let expleft= document.querySelector(".footer-explanation-left")
   let icons=res.explanation.icons.map((icon)=>{
        return`<div class="footer-explanation-left-div w-[109px] h-[109px] rounded-[8px] border border-[lightgrey]">
                   <a href="${icon.link}" class="footer-explanation-left-div-link flex justify-center items-center">
                        <img src="${icon.img}" alt="${icon.alt}" class="footer-explanation-left-div-link-img w-[75px] h-[75px] mt-[10px]" />
                   </a>
                </div>`
   }) 


   let expright_sub= document.querySelector(".footer-explanation-right-sub")
   expright_sub.innerHTML=` <h2 class="footer-explanation-right-top-head font-iranyekan text-[20px]      text-digi-text">${res.explanation.title}</h2>
   <p class="footer-explanation-right-top-text w-full font-iranyekan text-[12px] text-[#62666D] mt-[10px] leading-[25px]">${res.explanation.description}</p>
   <p class="footer-explanation-right-top-text w-full font-iranyekan text-[12px] text-[#62666D] mt-[10px] leading-[25px]">${res.explanation.descriptionlight}</p>
  
    <button class="footer-explanation-right-sub-link flex justify-start items-center w-[120px] h-[20px] cursor-pointer mt-5 ">
       <h6 class="footer-explanation-right-sub-link-text inline-block font-iranyekan text-[13px] font-normal text-[#6ae1fc]">${res.explanation.cta[1].text}</h6>
        <img src="${res.explanation.cta[1].svg}" alt=""class="footer-explanation-right-sub-link-svg" />
    </button>`


   expleft.innerHTML= icons.join("") 
   open_explanation_sub(expright_sub,expright_top, expright_bottom)                        
}

function open_explanation_sub(expright_sub,expright_top, expright_bottom){
   let open=document.querySelector(".footer-explanation-right-bottom-link")
   let close= document.querySelector(".footer-explanation-right-sub-link")
   open.addEventListener("click",function(){
       expright_sub.classList.remove("hidden")
       expright_top.classList.add("hidden")
       expright_bottom.classList.add("hidden")
   })
   close.addEventListener("click",function(){
      expright_sub.classList.add("hidden")
      expright_top.classList.remove("hidden")
      expright_bottom.classList.remove("hidden")

   })

}


function rule(res){
    let rule= document.querySelector(".footer-rule")
    rule.innerHTML=` <p class="footer-rule-text font-iranyekan text-[11px] text-[#62666D]">${res.rule}</p>`
}

function end(res){
   let partners_top= res.partners.map((partner)=>{
    if(partner.id>=0 && partner.id<=7){
        let top_item=document.createElement("div")
        top_item.className="footer-end-top-item w-[12.5%] h-full border-l border-b border-[#E0E0E2]"
        top_item.innerHTML=
                `<a href="${partner.link}" class="footer-end-top-item-link flex items-center justify-center w-full h-full">
                  <img src="${partner.img}" alt="" class="footer-end-top-item-link-svg  h-[20px]" />
                </a>`
        let svg= top_item.querySelector(".footer-end-top-item-link-svg")
        if(partner.alt==="mag"){svg.classList.add("w-[107.05px]")}
        else if(partner.alt==="pay"){svg.classList.add("w-[75.28px]")}
        else if(partner.alt==="style"){svg.classList.add("w-[128.75px]")}
        else if(partner.alt==="plus"){svg.classList.add("w-[67.59px]")}
        else if(partner.alt==="club"){svg.classList.add("w-[74.63px]")}
        else if(partner.alt==="jet"){svg.classList.add("w-[82.5px]")}
        else if(partner.alt==="mehr"){svg.classList.add("w-[125px]")}
        else if(partner.alt==="next"){svg.classList.add("w-[85px]")}
        return top_item.outerHTML
      }
   })
    document.querySelector(".footer-end-top").innerHTML=partners_top.join("")
    
    let partners_bottom= res.partners.map((partner)=>{
        if(partner.id>=8 && partner.id<=13){
            let bottom_item=document.createElement("div")
            bottom_item.className="footer-end-bottom-item w-[16.7%] h-full border-l border-[#E0E0E2]"
            bottom_item.innerHTML=
                   `<a href="${partner.link}" class="footer-end-botoom-item-link flex items-center justify-center w-full h-full">
                       <img src="${partner.img}" alt="" class="footer-end-bottom-item-link-svg  h-[20px]" />
                    </a>`
             let svg= bottom_item.querySelector(".footer-end-bottom-item-link-svg")
             if(partner.alt==="express"){svg.classList.add("w-[121.25px]")} 
             else if(partner.alt==="ganjeh"){svg.classList.add("w-[px83.52]")} 
             else if(partner.alt==="digify"){svg.classList.add("w-[57.5px]")} 
             else if(partner.alt==="smartech"){svg.classList.add("w-[160px]")} 
             else if(partner.alt==="business"){svg.classList.add("w-[153.75px]")} 
             else if(partner.alt==="service"){svg.classList.add("w-[138.75px]")} 
             return bottom_item.outerHTML
        }
    })
     document.querySelector(".footer-end-bottom").innerHTML=partners_bottom.join("")
}
