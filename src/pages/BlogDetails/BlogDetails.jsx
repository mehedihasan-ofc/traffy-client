import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../features/blogs/blogsApi";
import { FaRegComment } from "react-icons/fa6";
import { formatCreatedAtDate, formatDate } from "../../utils";
import UserImg from "../../assets/user.png";
import { useState } from "react";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading } = useGetBlogByIdQuery(id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [commentText, setCommentText] = useState("");

    if (isLoading) {
        return;
    }

    const { title, description, image, comments, createdAt } = blog;

    const handleCommentSubmit = () => {
        // You can handle comment submission logic here
        console.log("Comment submitted:", {
            name,
            email,
            comment: commentText,
            createdAt: new Date().toISOString(), // Assuming current date/time for simplicity
        });
        // Clear input fields after submission
        setName("");
        setEmail("");
        setCommentText("");
    };

    return (
        <div className="my-container my-10">
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-3">

                    <div className="space-y-10">
                        <div style={
                            {
                                width: "100%",
                                height: "70vh",
                                borderRadius: "5px",
                                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image}) no-repeat center / cover`
                            }
                        } className="flex justify-center items-center text-white">

                            <div className="space-y-3">

                                <div className="w-40 mx-auto border-2 border-primary bg-black text-center p-5 rounded-md">
                                    <h4 className="text-xl">{formatCreatedAtDate(createdAt)}</h4>
                                </div>

                                <h2 className="text-2xl">{title}</h2>

                                <div className="flex items-center justify-center gap-2">
                                    <FaRegComment />
                                    <p>{comments?.length} comments</p>
                                </div>
                            </div>

                        </div>

                        <div className="space-y-5">
                            <h2 className="text-2xl font-medium">{title}</h2>
                            <p className="text-base">{description}</p>
                        </div>

                        <div>
                            <hr className="my-2 border-blue-gray-50" />

                            <h4 className="uppercase text-xl font-medium">Leave us a comment</h4>

                            <div className="space-y-10 mt-6">
                                {comments?.map(comment => <div key={comment?.author}>
                                    <div className="flex gap-3">
                                        <img className="w-8 h-8 object-cover rounded-full" src={UserImg} alt="" />

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-10">
                                                <h6 className="text-lg font-medium">{comment?.author}</h6>
                                                <p>{formatDate(createdAt)}</p>
                                            </div>
                                            <p>{comment?.comment}</p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>

                            <div>
                                <hr className="my-2 border-blue-gray-50" />
                                <div className="space-y-5 mt-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border border-gray-300 rounded px-3 py-2 w-full outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border border-gray-300 rounded px-3 py-2 w-full outline-none"
                                    />
                                    <textarea
                                        rows="4"
                                        placeholder="Your Comment"
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        className="border border-gray-300 rounded px-3 py-2 w-full outline-none"
                                    />
                                    <button
                                        onClick={handleCommentSubmit}
                                        className="text-white px-4 py-2 rounded-md bg-primary"
                                    >
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-span-1">B</div>
            </div>
        </div>
    );
};

export default BlogDetails;