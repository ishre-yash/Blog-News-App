import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import * as fs from 'fs';
import styles from '../../styles/Home.module.css'


const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  

  return <section  className="container w-full md:max-w-3xl mx-auto pt-20 lg:pt-28">
    <div  className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal font-poppins">
    <h1  className="font-bold break-normal text-gray-900 pt-6 pb-2 text-4xl md:text-4xl">{blog && blog.title}</h1>
      { blog && <p  className="py-6 text-lg font-poppins select-none" dangerouslySetInnerHTML={createMarkup(blog.content)}></p>}
      </div>
  </section>;
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`)
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
  console.log(allb)
  return {
    paths: allb,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {  
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')   
  return {
    props: { myBlog: JSON.parse(myBlog) },
  }
}
export default Slug;
