
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './sliderComponent.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';




function SliderComponent({images}) {
     
    return(
        <div className="slider-div">
            <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                height='60%'
                >
                {images.map((item,index)=>{
             
                 return(  <SwiperSlide>
                         <img className="img" src={item} alt="cghfgh" ></img>
                    </SwiperSlide>  )  
             
                })
                }     
            </Swiper>
        </div>
    )
}

export default SliderComponent