import BlogCard from "../../components/Card/BlogCard/BlogCard";
import PageCover from "../../components/Shared/PageCover/PageCover";
import { useGetBlogsQuery } from "../../features/blogs/blogsApi";

const Blog = () => {

    const { data: blogs } = useGetBlogsQuery();

    return (
        <>
            <PageCover title="Our Latest Blog Posts" />

            <div className="my-container my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        blogs?.map((blog, _idx) => <BlogCard key={blog?._id} blog={blog} index={_idx} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Blog;