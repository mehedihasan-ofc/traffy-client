import { Link } from "react-router-dom";
import ServicesSlider from "../ServicesSlider/ServicesSlider";

const ServicesBoard = ({ category }) => {

    return (
        <div className="border border-gray-300 rounded-md p-3">

            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-xl font-medium">{category?.categoryName}</h4>
                </div>
                <div>
                    <Link to={`/all-services/${category?.id}`}>
                        <h4>See All</h4>
                    </Link>
                </div>
            </div>

            <div className="mt-2">
                <ServicesSlider services={category?.services} />
            </div>

        </div>
    );
};

export default ServicesBoard;