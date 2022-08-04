import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './sliderComponent.css'



function SliderComponent() {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    function imgUrl() {
        const id = rand(1, 200);
        return `https://picsum.photos/id/${id}/1920/1080`;
      }
      
      function createSlide() {
        return (
          <SwiperSlide>
            <img className="img" src={imgUrl()} alt="" />
          </SwiperSlide>
        );
      }
    return(
        <div className="slider-div">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                // autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                height='60%'
                >
                {createSlide()}
                {createSlide()}
                {createSlide()}
                {createSlide()}
            </Swiper>
        </div>
    )
}

export default SliderComponent