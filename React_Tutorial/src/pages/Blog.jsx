import { Link } from "react-router";
import { BlogData } from "../utils/data.js";
const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>
      <div className="space-y-6">
        {BlogData.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="block">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <span className="text-blue-500 mt-3 inline-block font-medium">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
