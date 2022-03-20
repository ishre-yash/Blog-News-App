import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(3);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 3}`);
    setCount(count + 3);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <section className="text-gray-600 body-font">
      
      
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yap! You have seen it all</b>
          </p>
        }
      >
        <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold flex flex-col justify-center items-center text-blue-600 hover:text-blue-700 mb-5">
        Blogs
      </h1>
          <div className="flex flex-wrap -m-4">
            
            {blogs.map((blogitem) => {
              return (
                <div key={blogitem.slug} className="p-4 lg:w-1/3">
                  
                  <div className="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center ">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {blogitem.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {blogitem.metadesc.substr(0, 140)}...
                    </p>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                      <a className="text-blue-500 hover:text-blue-700 inline-flex items-center hover:scale-105">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </section>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
