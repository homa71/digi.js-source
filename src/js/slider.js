const fetchslider= async ()=>{
    try{
        let slider=[]
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res=await data.json()
        slider=res.slider.map((item)=>{
            return` <div class="swiper-slide">
                    <a href="${item.link}" class=" w-full h-full ">
                     <img class="block w-full h-full object-cover"  src="${item.image}" alt="">
                   </a>
            </div> `
        })
         document.querySelector(".slider-wrapper").innerHTML=slider.join("")
        
       }catch(error){
         console.log(error);
      }
}
export default{fetchslider}