import { FaArrowRightLong } from "react-icons/fa6";
import CoverImg from "../../../assets/line_circle.png";

const PageCover = ({ title }) => {
    return (
        <div className="relative">
            <img className="w-full h-96 object-cover object-[center_bottom]" src={CoverImg} alt="" />

            <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
                <div className="flex items-center gap-2">
                        <FaArrowRightLong className="text-primary" />
                        <h2 className="text-4xl font-medium">{title}</h2>
                    </div>
            </div>
        </div>
    );
};

export default PageCover;
