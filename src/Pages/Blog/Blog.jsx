import React from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import BlogCard from "../../Components/Blog/BlogCard";

function Blog() {
  return (
    <div>
      <CoverBanner heading={"Latest News Blogs"} subHeading={"Blogs"} />
      <div className="py-10">
        <Container>
          <div className="py-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="py-10">
            {/* TODO Pagination Here */}
            <h2>TODO Pagination Here</h2>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Blog;
