import React from 'react'

const Course = ({course}) => {
   const {id,title,description,price,link,image}=course;
  return (
    <div className='course'>
      
        <img  className='images' src={image} width={200} height={250} />
        <h4 className='title-course'>{title}</h4>
        <h5 className='course-desc'>{description}</h5>
        <h3 className='course-price'>{price} TL</h3>
        <a href={link}>satın almak için</a>
    
    </div>
  )
}

export default Course
