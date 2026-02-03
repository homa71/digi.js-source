const fetchstory=async () =>{
    try{
        let story=[]
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res=await data.json()
        story=res.story.map((item)=>{
          return  ` <div class="swiper-slide">
          
                  <a href="${item.link}" class=" w-full h-full pt-[13px]">
                    <img class="swiper-slide-item-img block !w-[60px] !h-[60px] rounded-full  mx-auto my-[15px] outline-1 outline-solid outline-[purple] outline-offset-2 "
                    src="${item.image}" alt="" />
                    <p class="swiper-slide-item-p  font-iranyekan text-[9px] text-[rgb(85,83,83)] line-clamp-2 leading-5">${item.title}</p>
                  </a>
                
              </div> `
        })
        document.querySelector(".story-wrapper").innerHTML=story.join("")
        
    }catch(error){
        console.log(error);
        
    }

}
export default{fetchstory}