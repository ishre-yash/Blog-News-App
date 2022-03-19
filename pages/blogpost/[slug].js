import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'


const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);


  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div>
        {blog && blog.content}
      </div>
    </main>
  </div>;
};



export async function getServerSideProps(context) {
  const { slug } = context.query;
   
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog }, 
  }
}
export default slug;