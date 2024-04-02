import FAQImg from "../../../assets/faq.jpg";
import FaqAccordion from "../../../components/FaqAccordion/FaqAccordion";

const QuesAns = () => {
    return (
        <div className="my-container">

            <div className="grid grid-cols-2 items-center gap-5">
                <div>
                    <img src={FAQImg} alt="" />
                </div>
                <div>
                    <FaqAccordion />
                </div>
            </div>

        </div>
    );
};

export default QuesAns;