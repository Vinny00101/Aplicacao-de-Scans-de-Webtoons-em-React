import { Swiper, SwiperSlide } from 'swiper/react';
import SoloLeveling from '../../assets/Solo-levenlig-copia-teste.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import './style/slide.css'

function Slide() {
    const ImgLink = () => {
        return (
            <>
                <a href="#">
                    <img src={SoloLeveling} alt="Minha Imagem" />
                </a>
            </>
        );
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            slidesPerView={6.5}
            navigation
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                },
                808: {
                    slidesPerView: 3,
                    spaceBetween: 3,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 2,
                },
                1100: {
                    slidesPerView: 5,
                    spaceBetween: 3,
                },
                1110: {
                    slidesPerView: 6.5,
                    spaceBetween: 1,
                }
            }}
        >
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <div className='img'><ImgLink/></div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slide;
