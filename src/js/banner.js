const fetchbanner = async () => {
  try {
    let hb = [];
    let data = await fetch("https://homa71.github.io/digi-api/db.json");
    let res = await data.json();
    hb = res.banner.map((item) => {
      return `<div class="w-full h-full">
      <a href="#" class="block w-full h-full bg-crimson">
            <img class="w-full h-full object-cover object-center" src="${item.image}" alt="${item.alt}">
          </a> 
          </div>`;
    });
    document.querySelector(".header-banner").innerHTML = hb.join("");
  } catch (error) {
    console.log(error);
  }
};
export default { fetchbanner };
