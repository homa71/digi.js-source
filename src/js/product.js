const fetchproduct=async ()=>{
    try{
        let data=await fetch("https://homa71.github.io/digi-api/db.json")
        let res=await data.json()
        let product=res.product.map((item)=>{
           if(item.type==="top"){
              fetchtop(item)

           }else{
            return`
            <div class="product-center-botton-item  h-full flex justify-center items-start ">
          <a href="${item.link}" class="product-center-botton-first-item-link inline-block no-underline">
            <img src="${item.image}" alt="${item.alt}"
              class="product-center-botton-first-item-img w-[80px] h-[80px] block mx-auto mt-[10px]" />
            <h6 class="product-center-botton-first-item-text font-iranyekan text-[13px] font-normal text-[#2b2b2b] text-center mt-[15px]">
              ${item.title}
            </h6>
          </a>
        </div>
            `
           }
        })
        document.querySelector(".product-center-botton").innerHTML=product.join("")

    }catch(error){
        console.log(error);
        
    }
}
export default{fetchproduct}



function fetchtop(item){
   let top= document.querySelector(".product-center-top")
   top.innerHTML=`
    <h2 class="product-center-top-text font-iranyekan text-[20px] font-normal text-[#2b2b2b]">
        ${item.title}
      </h2>
   `
}