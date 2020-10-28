import React, { useEffect } from "react";
import { CardDeck } from "react-bootstrap";
import "./Blog.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import DocInfo from "../DocInfo/DocInfo";
import { useState } from "react";

const Blog = () => {

  const [getBlogs , SetBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/getBlogsData')
    .then(res => res.json())
    .then(blogs =>{
       SetBlogs(blogs)
      })
  }, [])

  const [getDoctors , SetDoctors] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/getDoctorsData')
    .then(res => res.json())
    .then(doc =>{
      SetDoctors(doc)
      })
  }, [])


  return (
    <div className='blogs'>
      <div className='blogHeading text-center my-5'>
        <p>OUR BLOG</p>
        <h2>From Our Blog News</h2>
      </div>
      <CardDeck>
        {getBlogs.map(blog => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </CardDeck>
      <div className='ourDoctors'>
        <h3 className='text-center'>Our Doctors</h3>
        <div className='row'>
          {getDoctors.map(doctor => (
            <DocInfo key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
