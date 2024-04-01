import { Button } from "@material-tailwind/react";
import HeroImg from "../../../assets/hero.png";
import HeroBg from "../../../assets/head_bg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";

const Hero = () => {
    return (
        <div style={{ background: `url(${HeroBg}) no-repeat bottom center / cover` }}>
            <div className="my-container grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                <div className="space-y-6">

                    <div className="flex items-center gap-2">
                        <FaArrowRightLong className="text-primary" />
                        <p>Digital Marketing About Company</p>
                    </div>

                    <h1 className="text-5xl font-bold leading-snug">Strategy & Agency marketing for better future!</h1>
                    <p>Unlock Your Online Potential with Traffy: Drive Traffic, Boost Engagement, and Dominate the Digital Landscape!</p>

                    <div className="flex items-center gap-3">
                        <Button className="text-base flex items-center gap-3 capitalize rounded-full bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]">
                            <FaArrowRightLong />
                            Discover More
                        </Button>

                        <Button className="text-base flex items-center gap-3 capitalize rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                            <IoMdPlay />
                            Play This video
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;