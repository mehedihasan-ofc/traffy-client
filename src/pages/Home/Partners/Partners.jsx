import Partner1 from "../../../assets/partners/1.png";
import Partner2 from "../../../assets/partners/2.png";
import Partner3 from "../../../assets/partners/3.png";
import Partner4 from "../../../assets/partners/4.png";
import Partner5 from "../../../assets/partners/5.png";

const Partners = () => {
    return (
        <div className="my-container my-10">
            <div className="flex justify-between items-center gap-20">
                <img className="w-[150px] h-[70px] object-contain cursor-pointer" src={Partner1} alt="Partner1" />
                <img className="w-[150px] h-[70px] object-contain cursor-pointer" src={Partner2} alt="Partner2" />
                <img className="w-[150px] h-[70px] object-contain cursor-pointer" src={Partner3} alt="Partner3" />
                <img className="w-[150px] h-[70px] object-contain cursor-pointer" src={Partner4} alt="Partner4" />
                <img className="w-[150px] h-[70px] object-contain cursor-pointer" src={Partner5} alt="Partner5" />
            </div>

            <div className="mt-5">
                <hr className="my-2 border-blue-gray-50" />
                <p className="text-gray-500 text-center">Our Company Provided digital marketing Service</p>
                <hr className="my-2 border-blue-gray-50" />
            </div>
        </div>
    );
};

export default Partners;