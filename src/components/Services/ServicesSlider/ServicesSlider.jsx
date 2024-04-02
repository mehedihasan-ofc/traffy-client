import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ServicesSlider = ({ services }) => {

    // Generate unique IDs for navigation buttons
    const prevButtonId = `custom-prev-${Math.random().toString(36).substring(7)}`;
    const nextButtonId = `custom-next-${Math.random().toString(36).substring(7)}`;

    return (
        <div style={{ position: "relative" }}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: `.${prevButtonId}`,
                    nextEl: `.${nextButtonId}`,
                }}
                className="mySwiper"
            >
                {services?.map((service) => (
                    <SwiperSlide key={service?._id}>
                        <Link to={`/service-details/${service._id}`}>
                            <div className="border border-gray-300 h-[270px]">
                                <img
                                    className="w-full h-52 object-cover"
                                    src={service?.image}
                                    alt="services image"
                                />

                                <div className="flex justify-between items-center gap-5 p-2">
                                    <h6 className="text-sm font-medium line-clamp-2">{service?.name}</h6>
                                    <p className="text-[#FF5F6D] font-semibold">${service?.pricing}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute -left-[10px] top-1/2 transform -translate-y-1/2 z-10">
                <button className={`custom-swiper-button bg-white border border-gray-300 rounded-full text-webPrimary ${prevButtonId}`}>
                    <MdNavigateBefore className="text-xl" />
                </button>
            </div>

            <div className="absolute -right-[10px] top-1/2 transform -translate-y-1/2 z-10">
                <button className={`custom-swiper-button bg-white border border-gray-300 rounded-full text-webPrimary ${nextButtonId}`}>
                    <MdNavigateNext className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default ServicesSlider;