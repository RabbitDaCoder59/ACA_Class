import { Routes, Route } from "react-router";
import Blog from "../pages/Blog";
import Post from "../pages/SingleBlog";

const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/:id" element={<Post />} />
    </Routes>
  );
};

export default BlogRoutes;
