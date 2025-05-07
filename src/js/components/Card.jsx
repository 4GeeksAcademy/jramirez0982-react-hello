import React from 'react'

const Card = (props) => {
  return (
    <div className="card container justify-content-center p-0 m-2" style={{width: "16rem"}}>
      <img src={props.urlImages} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5>{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">Find out more!</a>
      </div>
    </div>
  )
}

export default Card