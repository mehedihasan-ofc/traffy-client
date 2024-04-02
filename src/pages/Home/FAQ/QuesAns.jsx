import { FaArrowRightLong } from "react-icons/fa6";
import FAQImg from "../../../assets/faq.jpg";
import FaqAccordion from "../../../components/FaqAccordion/FaqAccordion";
import { useGetFaqQuery } from "../../../features/faq/faqApi";

const QuesAns = () => {

    const { data: faq } = useGetFaqQuery();

    return (
        <div className="my-container">

            <div className="grid grid-cols-2 items-center gap-5">
                <div>
                    <img src={FAQImg} alt="" />
                </div>
                <div>

                    <div className="flex items-center gap-2">
                        <FaArrowRightLong className="text-primary" />
                        <h5 className="text-2xl font-medium">Frequently Asked Questions</h5>
                    </div>

                    <div className="mt-5">
                        {faq?.map(singleFaq => <FaqAccordion key={singleFaq?._id} faq={singleFaq} />)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuesAns;