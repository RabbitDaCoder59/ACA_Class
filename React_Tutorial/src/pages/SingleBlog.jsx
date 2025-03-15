import { Link, useParams } from "react-router";
import { BlogData } from "../utils/data";

const SingleBlog = () => {
  const { id } = useParams();
  const post = BlogData.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <h1 className="text-center text-2xl mt-10 text-red-500">
        Post not found
      </h1>
    );
  }
  console.log(BlogData.title);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-3">{post.content}</p>
      <Link to="/blog" className="text-blue-500 mt-4 inline-block font-medium">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default SingleBlog;
