import { FaArrowRightLong, FaRegComment } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { formatDate } from "../../../utils";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, index }) => {

    const { _id, image, comments, createdAt, title } = blog;

    const gradients = [
        `from-[#FF5F6D] to-[#FFC371]`,
        `from-[#08B259] to-[#F3E51A]`,
        `from-[#7E8FFF] to-[#92EFFD]`
    ];

    return (
        <div className="shadow rounded-lg">
            <div>
                <img className="rounded-tl-lg rounded-tr-lg" src={image} alt="" />
            </div>

            <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaRegComment />
                        <p>{comments?.length} comments</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiCalendarDate />
                        <p>{formatDate(createdAt)}</p>
                    </div>
                </div>

                <div className="my-4">
                    <h4 className="text-xl font-medium line-clamp-2 mb-3">{title}</h4>

                    <Link to={`/blog-details/${_id}`}>
                        <Button size="sm" className={`text-sm flex items-center gap-3 rounded capitalize bg-gradient-to-r ${gradients[index % gradients.length]}`}>
                            <FaArrowRightLong />
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
