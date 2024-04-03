import { FaRegComment } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

const BlogCard = ({ blog }) => {

    const { _id, image, comments, createdAt, title } = blog;

    console.log(blog);

    return (
        <div className="shadow">
            <div>
                <img src={image} alt="" />
            </div>

            <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <FaRegComment />
                        <p>{comments?.length} comments</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <CiCalendarDate />
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;