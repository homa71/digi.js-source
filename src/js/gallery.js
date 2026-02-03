const fetchgallery=async ()=>{
    try{
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res=await data.json()
        let gallery=res.gallery.map((item)=>{
            
            let divitem=document.createElement("div")
            divitem.className="w-1/4 h-full"
            divitem.innerHTML=  ` <div class="gallery-center-item w-full h-full border-l border-l-[#F0F0F1]">
      <div class="gallery-center-item-top w-full h-[20%] pr-4">
        <h2 class="gallery-center-item-top-h font-iranyekan text-[15px] font-bold text-digi-text pt-[13px]">${item.title}</h2>
        <p class="gallery-center-item-top-text font-iranyekan text-[10px] text-[grey] pt-2">${item.subtitle}</p>
      </div>
      <div class="gallery-center-item-middle w-full h-70% flex flex-wrap  py-[5px] px-[15px]">
        <div class="gallery-center-item-middle-item w-1/2 h-1/2 border-l border-b border-[#F0F0F1]">
          <a href="${item.image[0].link}" class="gallery-center-item-middle-item-link flex justify-center items-center w-full h-full">
            <img src="${item.image[0].src}" alt="" class="gallery-center-item-middle-item-link-img w-[100px] h-[100px] object-cover"/>
          </a>
        </div>
        <div class="gallery-center-item-middle-item w-1/2 h-1/2 border-b border-[#F0F0F1]">
          <a href="${item.image[1].link}" class="gallery-center-item-middle-item-link flex justify-center items-center w-full h-full">
            <img src="${item.image[1].src}" alt="" class="gallery-center-item-middle-item-link-img w-[100px] h-[100px] object-cover"/>
          </a>
        </div>
        <div class="gallery-center-item-middle-item w-1/2 h-1/2 border-l border-[#F0F0F1]">
          <a href="${item.image[2].link}" class="gallery-center-item-middle-item-link flex justify-center items-center w-full h-full">
            <img src="${item.image[2].src}" alt="" class="gallery-center-item-middle-item-link-img w-[100px] h-[100px] object-cover"/>
          </a>
        </div>
        <div class="gallery-center-item-middle-item w-1/2 h-1/2">
          <a href="${item.image[3].link}" class="gallery-center-item-middle-item-link flex justify-center items-center w-full h-full">
            <img src="${item.image[3].src}" alt="" class="gallery-center-item-middle-item-link-img w-[100px] h-[100px] object-cover"/>
          </a>
        </div>
      </div>
      <div class="gallery-center-item-botton w-full h-[10%] flex justify-center">
        <a href="${item.cta.link}" class="gallery-center-item-botton-link flex justify-center items-center w-[70px] h-[30px] no-underline">
          <h2 class="gallery-center-item-botton-link-text inline-block font-iranyekan text-[13px] text-[#6ae1fc]">${item.cta.text}</h2>
          <img src="${item.cta.svg}" alt="" class="gallery-center-item-botton-link-svg ml-1"/>
        </a>
      </div>
    </div> `
           
          
      removeborder(item,divitem)
      
    
      return divitem.outerHTML
            
        })

        document.querySelector(".gallery-center").innerHTML=gallery.join("")
         

    }catch(error){
        console.log(error);
        
    }
}
export default{fetchgallery}


function removeborder(item,divitem){

    
     if(item.type==="last"){
           divitem.querySelector(".gallery-center-item").classList.remove("border-l-[#F0F0F1]","border-l") 
           }
}//اینجا لازم نیست که تابع چیزی ریترن کنه چون دیو آیتم یه متغیره که توش یه تگه و تگ ها هم آبجت هستند پس دیو آیتم یک آّجکت است وآبجکت مقدار داخلش پاس داده نشده اینجا بلکه آدرسش پاس داده شده اینجا پس هر تغییری اینجا روش انجام بشه بالا هم اعمال شدس ونیاز به ریترن نداریم