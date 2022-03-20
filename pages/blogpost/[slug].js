import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import * as fs from 'fs';
import styles from '../../styles/Home.module.css'


const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  

  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      { blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </main>
  </div>;
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
