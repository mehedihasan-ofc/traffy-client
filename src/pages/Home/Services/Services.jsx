import ServicesBoard from "../../../components/Services/ServicesBoard/ServicesBoard";
import { useGetServicesQuery } from "../../../features/services/servicesApi";

const Services = () => {

    const { data: services } = useGetServicesQuery();

    return (
        <div className="my-container my-10">

            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-3 space-y-5">
                    {
                        services?.map(category => <ServicesBoard key={category?.id} category={category} />)
                    }
                </div>

                <div className="col-span-1 space-y-5">
                    <img className="border" src="https://i.ibb.co/zJ2dLvt/banner-Ads.jpg" alt="" />
                    <img className="border" src="https://i.ibb.co/zJ2dLvt/banner-Ads.jpg" alt="" />
                    <img className="border" src="https://i.ibb.co/zJ2dLvt/banner-Ads.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Services;