

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './sliderComponent.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';



function SliderComponent() {
    console.log("swiper")
    // function random(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    //   }

    // function imgUrl() {
    //     const id = random(1, 4);
    //     return images[id]
    //   }
    // function imageUrl() {
    //     images.forEach(item => {
    //         console.log(item,"item")
    //         return item
    //     })
    // }
      const images =["/images/coast.jpg","/images/toddlerplaysand.jpg"]
      console.log(images.length,"length")
    //   ,"/images/toddlerplaysand.jpg","/images/cat.jpg","/images/child.jpg"]
    //   function createSlide(item) {
    //     console.log(item,"item here ")
    //     return (
    //       <SwiperSlide>
    //         {/* <img className="img" src={item} alt="image not found" /> */}
    //         <img className="img" src='/images/child.jpg' alt="image not found" />
    //       </SwiperSlide>
    //     );
    //   }
    return(
        <div className="slider-div">
            <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={1}
                navigation
                // autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                height='60%'
                // width = '60%'
                >
                {images.map((item,index)=>{
             
                 return(  <SwiperSlide>
                         <img className="img" src='/images/child.jpg' alt="cghfgh" ></img>
                    </SwiperSlide>  )  
             
                })
                } 
                {/* <SwiperSlide>
                    <img className="img" src='/images/child.jpg' alt="image not found" />
                </SwiperSlide>
              
                <SwiperSlide>
                    <img className="img" src='/images/toddlerplaysand.jpg' alt="image not found" />
                </SwiperSlide>  */}

                
            </Swiper>
        </div>
    )
}

export default SliderComponent