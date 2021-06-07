import React from 'react'

const Card = (props) => {
  // Object destructiring
  const {img, title, description} = props;

  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img 
        alt={ title }
        className="card-img-top" 
        src={ img }
      />
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ description }</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card;
