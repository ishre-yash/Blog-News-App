import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import * as fs from 'fs';
import styles from '../../styles/Home.module.css'


const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  

  return <section class="container w-full md:max-w-3xl mx-auto pt-20 lg:pt-28">
     <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal font-poppins">
     <h1 class="font-bold break-normal text-gray-900 pt-6 pb-2 text-4xl md:text-4xl">{blog.title}</h1>
     <p class="text-sm md:text-base font-normal text-gray-600">Published 01 March 2022</p>
     <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_27/2922751/190705-living-in-a-simulation-main-kh.jpg" alt="IMG FROM nbcnews" class="object-cover h-full w-full rounded-lg rounded-b-none shadow-xl" />
      <p class="py-6 text-lg font-poppins select-none" dangerouslySetInnerHTML={createMarkup(blog.content)}></p>
      </div>
    </section>
  ;
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