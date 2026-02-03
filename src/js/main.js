import 'swiper/css/bundle';  //در ورژن جدید سوئیپر سی اس اس سوئیپر به این صورت ایمپورت میشود که سایت خود سوئیپر برداشتم

import "../css/output.css"
import "../css/swiper.css"











import  banner from "./banner.js"
import menu from "./menu.js"
import serch from "./serch.js"
import swiper from "./swiper.js";
import story from './story.js';
import slider from './slider.js';
import category from './category.js';
import incredible from './incredible.js';
import product from './product.js';
import gallery from './gallery.js';
import best from './best.js';
import footer from './footer.js';
















 async function  all_data() {
    await banner.fetchbanner()
    await serch.fetchlogo()
    await serch.fetchregister()
    await menu.fetchmenur()
    await story.fetchstory()
    await slider.fetchslider() 
    await category.fetchcategory()
    await incredible.fetchincredible() 
    await product.fetchproduct()
    await gallery.fetchgallery()
    await best.fetchbest()
    await footer.fetchfooter()
    swiper.swiper_story()
    swiper.swiper_slider()
    swiper.swiper_incredible()
    swiper.swiper_favorite()
    swiper.swiper_best()

    
    
    
}
 all_data()






