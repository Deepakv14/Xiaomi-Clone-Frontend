import React from 'react'
import '../styles/ProductReviewsCard.css'

const ProductReviewsCard = ({index,name,review,price,image}) => {
  return (
    <div className="ProductReviewsCard">
    <img src={image} alt={`${index} Review`}/>
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard