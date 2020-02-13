import React from 'react'

export default function Todo(props){
  const { title, description, imgUrl, _id } = props
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt="" width={300}/>
    </div>
  )
}