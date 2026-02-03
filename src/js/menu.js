const fetchmenur = async () => {
  try {
    let items = [];
    let data = await fetch("https://homa71.github.io/digi-api/db.json");
    let res = await data.json();
    items = res.menur.map((item) => {

      if (item.type === "first") {
          return first(item)
        
      
      } else if (item.type === "second") {
        return `  <a href="${item.link}" class="menus-item   w-fit h-full flex items-center gap-x-[5px] no-underline relative overflow-hidden ">
                  <img src="${item.image}" alt="${item.alt}">
                  <span class="font-iranyekan text-[12px] text-[#353638] "> ${item.title}</span>
                  <div class="red-line  w-full h-0.5 bg-[#ed1944] absolute bottom-0 left-[-100%] duration-300 "></div>
                </a>`;
      } else if (item.type === "third") {
        return `  <div class="w-[1px] h-[17px] bg-[lightgray]"></div>
         <a href="${item.link}" class="menus-item   w-fit h-full flex items-center gap-x-[5px] no-underline relative overflow-hidden ">
                <span class="font-iranyekan text-[12px] text-[#353638] "> ${item.title}</span>
                <div class="red-line  w-full h-0.5 bg-[#ed1944] absolute bottom-0 left-[-100%] duration-300 "></div>
             </a>`;
      } else {
        return `  <a href="${item.link}" class="menus-item   w-fit h-full flex items-center gap-x-[5px] no-underline relative overflow-hidden">
                  <span class="font-iranyekan text-[12px] text-[#353638] "> ${item.title}</span>
                  <div class="red-line  w-full h-0.5 bg-[#ed1944] absolute bottom-0 left-[-100%]   duration-300 "></div>
                </a>`;
      }
    });
    document.querySelector(".items").innerHTML = items.join("");
     redLine()
     hover_first(res.menur)
     hover_submenuright_item(res.menur)
     
   
    
     

    } catch (error) {
    console.log(error);
  }
};
export default { fetchmenur};



function redLine(){
      let menusitem = document.querySelectorAll(".menus-item");
       menusitem.forEach((item) => {
        let redline= item.querySelector(".red-line");
        item.addEventListener("mouseenter",()=>mouseenter(redline))
        item.addEventListener("mouseleave",()=>mouseleave(redline))
       });
        
       function mouseenter(redline){
             redline.classList.remove("left-[-100%]")
              redline.classList.add("left-0")
       }
        
       function mouseleave(redline){
            redline.classList.remove("left-0")
            redline.classList.add("left-[-100%]")
      }
    
}


function hover_first(resmenur){
            let first=document.querySelector(".first")
            let submenu=document.querySelector(".submenu")
            let submenuleft= document.querySelector(".submenu-left")
            mouseenter()
            mouseleave()
            
            function mouseenter(){
               first.addEventListener("mouseenter",()=>{
                    submenu.classList.remove("hidden")
                    submenuleft.innerHTML=fetchsubmenuleft(resmenur[0].submenu[0])
                })

            }

            function mouseleave(){
                first.addEventListener("mouseleave",()=>{
                      submenu.classList.add("hidden")
                      submenuleft.innerHTML=""
                })

            }
}


function hover_submenuright_item(resmenur){
  let subrightitem=document.querySelectorAll(".submenuright-item")
  subrightitem.forEach((item,index)=>{
    let submenuleft=document.querySelector(".submenu-left")
    let sri_text=item.querySelector(".sri-h")
    let sri_svg=item.querySelector(".sri-svg")
    mouseenter()
    mouseleave()
    
    function mouseenter(){
      item.addEventListener("mouseenter",()=>{
         submenuleft.innerHTML=fetchsubmenuleft(resmenur[0].submenu[index])
         sri_text.classList.remove("text-digi-text")
         sri_text.classList.add("text-crimson")
         sri_svg.classList.remove("fill-[darkslategray]")
         sri_svg.classList.add("fill-crimson")
         hold_red(submenuleft,sri_text,sri_svg)
         red_sub_left_item() // اینجا صدازدیم چون بعد از هاور کردن روی آیتم های ساب منو راست آیتم های ساب منو چپ ایجاد میشن و ما میخواهیم اونارو انخاب کنیم و روشون ایونت بنویسم
    
      })

   }
   
    function mouseleave(){
       item.addEventListener("mouseleave",()=>{
       sri_text.classList.remove("text-crimson")
       sri_text.classList.add("text-digi-text")
       sri_svg.classList.remove("fill-crimson")
       sri_svg.classList.add("fill-[darkslategray]")
      })
   } 
  
 })

}
  
  
function hold_red(submenuleft,sri_text,sri_svg) {
      submenuleft.onmouseenter=()=>{         
         sri_text.classList.remove("text-digi-text")
         sri_text.classList.add("text-crimson")
         sri_svg.classList.remove("fill-[darkslategray]")
         sri_svg.classList.add("fill-crimson")

         //اینجا به جای لیسنر از این پراپرتی استفاده کردیم تاوقتی میریم روی منو چپ مشکل قرمز شدن همه ایتم های  yمنو راست با هم حل بشه.دلیلش اینه که وقتی روی یک ایتم منوراست میریم حتی اگر روی منو چپ نریم یک لیسنر تو حافظه برای اون ایتم ثبت میشه چون به ازای هر بار هاور یک ایتم ساب منو راست تابع هلد رد هم فراخوانی میشه واین باعث میشه بعد هاور کردن روی چنتا از آیتم های منو راست یک دفعه که میریم روی منو چپ تمام اون اینم ها  که قبلا روشون رفتیم با هم قرمز میشن.ولی این پراپرتی ها فقظ آخرین هلد رد رو که فراخوانی شد اجرا میکنن
      }
         
      submenuleft.onmouseleave=()=>{
           sri_text.classList.remove("text-crimson")
           sri_text.classList.add("text-digi-text")
           sri_svg.classList.remove("fill-crimson")
           sri_svg.classList.add("fill-[darkslategray]")
      }
        
}
  
  
         

function first(menufirstitem){

  let sub=document.createElement("div") //چون کوئری فقط روی تگ ها کار میکنه و روی رشته کار نمیکه ما باید کدمون رو که به صورت رشته بود بریزیم تو یه تگ تا بتونیم روی کدمون کوئری بزنیم.پس داخل ساب تگ دیو رو میسازیم و با innerhtml رشته کدمون رو میریزیم توش 
  sub.className=" first w-fit h-full ";
      sub.innerHTML=` 
                  <a href="${menufirstitem.link}" class="menus-menufirstitem     w-fit h-full flex items-center gap-x-[5px] no-underline relative overflow-hidden">
                  <img src="${menufirstitem.image}" alt="${menufirstitem.alt}">
                  <span class="font-iranyekan text-[14px] font-bold text-[#353638] ">${menufirstitem.title}</span>
                  <div class="red-line w-full h-0.5 bg-[#ed1944] absolute bottom-0 left-[-100%] duration-300 "></div>
                  </a>
                 <div class="submenu w-[80vw] h-[80vh] bg-[#f0f0f1] absolute z-[2] hidden ">
                   <div class="submenu-right w-[20%] h-full bg-[#f0f0f1] ltr overflow-auto ">
                   </div>
                    <div class="submenu-left w-[80%] h-full bg-digi-white absolute top-0 left-0 ltr px-2.5 overflow-y-auto ">
                    </div>
               
      
                </div>`;
      sub.querySelector(".submenu-right").innerHTML = fetchsubmenuright(menufirstitem);

        //   let x= sub.querySelector(".first") بردیم بالا نوشتیم که عمل کنند
        //    console.log(x);
        //  x.addEventListener("mouseenter",()=>{
           
        //   let y= sub.querySelector(".submenu")
        //   y.classList.remove("hidden")
        //    })
          
      return sub.outerHTML //outerHTML تگ دیوی که ساختیم رو دوباره تبدیل به رشته میکنه.باید تبدیل به رشته کنیم و بفرستیم چون بالا که رفت با این دستور و توسط اینر اچ تی ام ال دوباره تبدیل به تگ میشه و ریخته میشه میشه تو تگ اصلی که در دام هست
          // document.querySelector(".items").innerHTML = items.join("");
         //  مشکلی که هست وقتی تبدیل به رشته میشه دیگه ایونت های روش کار نمیکنن چون ایونت هم روی تگ کار میکنه و نه رشته پس ایونت ها رو میبریم بالا که کد تبدیل به تگ میشه در دام، مینویسیم
          
}
        
  
  

function fetchsubmenuright(menufirstitem){
       let submenuright=[]
       submenuright= menufirstitem.submenu.map((subrightitem)=>{
                   return`
                     <a href="${subrightitem.right.link}"class="submenuright-item   w-full h-[50px] pr-5 flex items-center justify-end gap-x-2 no-underline ">
                      <h6 class="sri-h  font-iranyekan text-[12px] font-normal text-digi-text">${subrightitem.right.title}</h6>
                      <svg class=" sri-svg w-[23px] h-[23px] fill-[darkslategray]">
                        <path fill-rule="${subrightitem.right.icon.fillRule}"d="${subrightitem.right.icon.d}" clip-rule="${subrightitem.right.icon.clipRule}"></path>
                      </svg>
                    </a>  `
        })
                   
        return submenuright.join("");
}


        
function fetchsubmenuleft(subrightitem){
        
    return ` <div class="top w-full h-[15%] flex items-center justify-end " >
                                 <a href="${subrightitem.top.link}" class="w-fit h-fit flex justify-center items-center no-underline bg-white">
                                     <img src="${subrightitem.top.icon}" alt=""/>
                                    <h6 class="font-iranyekan text-[12px] text-[#6ae1fc]">${subrightitem.top.title}</h6>
                                 </a>
                               </div>
                               <div class="bottom w-full min-h-[85%]  flex items-stretch gap-x-[1px]  rtl ">
                                   ${fetchbottom(subrightitem)} 
                                   
                               </div>`;
                            //این طوری بذاریم تو تگ  باتن دیگه لازم نیست کوئری سلکتور بزنیم تا اول تگ رو پیدا کنه وبعد توش رو با اینر اچ تی ام ال پر کنیم      
                      
 }


function fetchbottom(subrightitem) {
    
        let cols=[]
        for (let i = 1; i <=4; i++) {
             cols.push( ` <div class="col-${i} w-[25%] h-full ">
             ${subrightitem.children[`col${i}`]?.map((item)=>( // به جای آکولاد از پرانتز استفاده شد نیاز به ریترن نیست
                 
                  `<a href="${item.header.link}" class="title w-fit h-fit flex items-center justify-start      no-underli border-r-2 border-solid border-[#ed1944] pr-2.5 mb-[15px]" >
                  <h4 class="font-iranyekan text-[13px] font-bold text-digi-text" >${item.header.title}</h4>
                  <img src="${item.header.icon}" alt="" />
                  </a>

                  ${item.items.map((items)=>{

                     return ` <a href="${items.link}" class="sub-left-item w-fit h-[40px] flex justify-start items-center  no-underline pr-2.5 mb-[15px] ">
                     <h6 class="sub-left-item-text font-iranyekan  text-[12px] text-[grey]">${items.title} </h6>
                     </a> ` 

                     }).join("")
                  }
                  
                  `

            )).join("")}
           
            
             </div> `)  
       }

           
      return cols.join("")
}


 //   subrightitem.children.col1 و subrightitem.children["col1"] یکی هستند
 //یعنی برای دسترسی به کلیدهای یک آبجکت هم میشه از براکت استفاده کرد 
 // ولی زمانی براکت استفاده میکنیم که کلید ما متغیر باشه مثل بالا که با آی تغییر میکنه 
 //علامت سوال قبل مپ باعث میشه اگر تو ای پی آی ستونی خالی باشه و توش داده نداشته باشه فایل جی اس متوقف نشه و
//آندیفایند برنگردونه و بره سراغ ستون بعدی


 
  function red_sub_left_item(){
   let items = document.querySelectorAll(".sub-left-item");
   console.log(items);
   
  
   items.forEach(item => {
    let text = item.querySelector(".sub-left-item-text");
    if (!text) return; // اگه نبود جلوتر نرو
    
    item.addEventListener("mouseenter", () => {
      text.classList.remove("text-[grey]");
      text.classList.add("text-[red]");
    });
    
    item.addEventListener("mouseleave", () => {
      text.classList.remove("text-[red]");
      text.classList.add("text-[grey]");
    });
  });
}



