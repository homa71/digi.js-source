const fetchincredible= async ()=>{
    try{
        let incredible=[]
        let data= await fetch("https://homa71.github.io/digi-api/db.json")
        let res= await data.json()
         incredible=res.incredible.map((item)=>{
            if(item.type==="first"){
                return` <div class="swiper-slide first ">
                       <div class="swiper-slide-item-first  w-full h-full bg-[#DA2F4E]">
                          <a href="${item.link}" class="swiper-slide-item-first-link block w-full h-full no-underline  ">
                            <img
                             src="${item.logo}"
                             alt=""
                             class="swiper-slide-item-first-link-svg block !w-[88px] !h-[88px] mx-auto mb-[5px]"
                            />

                           <div class="swiper-slide-item-first-link-clock  w-[111px] h-[38px] flex gap-x-[1px]
                           justify-center items-center mx-auto">
                            <div class="swiper-slide-item-first-link-clock-second w-[30px] h-[30px] bg-[whitesmoke] rounded-[5px] flex justify-center items-center">
                              <span class="swiper-slide-item-first-link-clock-second-number font-number text-[20px] text-digi-text">35</span>
                            </div>
                            <div class="swiper-slide-item-first-link-clock-colon font-iranyekan text-[25px] text-[whitesmoke]"> :
                            </div>
                            <div class="swiper-slide-item-first-link-clock-minute  w-[30px] h-[30px] bg-[whitesmoke] rounded-[5px] flex justify-center items-center">
                              <span class="swiper-slide-item-first-link-clock-minute-number font-number text-[20px] text-digi-text">50</span >
                            </div>
                            <div class="swiper-slide-item-first-link-clock-colon font-iranyekan text-[25px] text-[whitesmoke]"> :</div>
                            <div class="swiper-slide-item-first-link-clock-hour  w-[30px] h-[30px] bg-[whitesmoke] rounded-[5px] flex justify-center items-center">
                              <span
                          class="swiper-slide-item-first-link-clock-hour-number font-number text-[20px] text-digi-text">03</span >
                           </div>
                        </div>
                    <img
                      src="${item.icon1}"
                      alt=""
                      class="swiper-slide-item-first-link-svg-2 !w-[80px] !h-[80px] mt-[5px] mx-auto"
                    />
                    <div class="swiper-slide-item-first-link-observe w-[111px] h-[20px] flex justify-center items-center mt-2.5 mr-1">
                      <h6 class="swiper-slide-item-first-link-observe-text font-iranyekan text-[12px] text-[whitesmoke]">
                        ${item.ctatext}
                      </h6>
                      <img
                        src="${item.icon2}"
                        alt=""
                        class="swiper-slide-item-first-link-observe-svg !w-[18px] !h-[18px]"
                      />
                    </div>
                  </a>
                </div>
                    </div>
                `

            }else if(item.type==="last"){
                return`
                    <div class="swiper-slide last bg-[#fff] rounded-tl-lg rounded-bl-lg">
                        <div class="swiper-slide-item-last w-full h-full flex justify-center items-center  ">
                            <a href="${item.link}" class="swiper-slide-item-link  no-underline ">
                              <img src="${item.icon}" alt="">
                              <h5 class=" font-iranyekan text-[#434467] text-[12px] font-normal mt-1">${item.ctatext} </h5>
                            </a>
                        </div>
                    </div>
                `

            }else{
              let divslide=document.createElement("div")
              divslide.className="swiper-slide "
              divslide.innerHTML=` <div class=" swiper-slide-in w-full h-full bg-[#fff]"> 
               <div class="swiper-slide-item w-full h-full pt-1.5  ">
                  <a href="${item.link}" class="swiper-slide-item-link block w-full h-full no-underline ">
                    <div class="swiper-slide-item-link-top w-full h-[60%] flex justify-center items-center">
                      <img
                        src="${item.image}"
                        alt=""
                        class="sale-center-bottom-part-item-link-top-img w-full h-full"
                      />
                    </div>
                    <div class="swiper-slide-item-link-divText w-full h-[20%] flex justify-center items-center">
                      <p class="swiper-slide-item-link-divText-p  w-[111px] font-iranyekan text-[11px] text-[#434467] text-center leading-5 line-clamp-2">
                        ${item.title}
                      </p>
                    </div>
                    <div class="swiper-slide-item-link-middle w-full h-[10%] flex">
                      <div class="swiper-slide-item-link-middle-right w-[30%] h-full flex justify-center items-center">
                        <div
                          class="swiper-slide-item-link-middle-right-percent  w-[25px] h-[15px] rounded-[20px] bg-crimson flex justify-center items-center"
                        >
                          <span
                            class="swiper-slide-item-link-middle-right-percent-number font-number text-[12px] font-bold text-[whitesmoke] "
                            >${item.badge}</span
                          >
                        </div>
                      </div>
                      <div class="swiper-slide-item-link-middle-left  w-[70%] h-full flex items-center justify-end gap-x-[3px]">
                        <spsn class="swiper-slide-item-link-middle-left-number  font-number font-bold text-[14px] text-digi-text"
                          >${item.price}</spsn
                        >
                        <img
                          src="${item.icon}"
                          alt=""
                          class="swiper-slide-item-link-middle-left-svg"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide-item-link-bottom w-full h-[10%] flex items-center justify-end">
                      <span
                        class="swiper-slide-item-link-bottom-numberLine line-through font-number text-[13px] text-[#ccc2c9] ml-[27px]"
                        >${item.oldprice}</span
                      >
                    </div>
                  </a>
                </div>
              </div>
                 `
               
                addradius(item,divslide)
                return divslide.outerHTML

              
            }

        })
         document.querySelector(".incredible-wrapper").innerHTML=incredible.join("")

    }catch(error){
        console.log(error);
    }
  
 
}
export default{fetchincredible}


function addradius(item,divslide){
  
  if(item.type==="second"){
     divslide.querySelector(".swiper-slide-in").className="w-full h-full bg-[#fff] rounded-tr-lg rounded-br-lg"
  }

}