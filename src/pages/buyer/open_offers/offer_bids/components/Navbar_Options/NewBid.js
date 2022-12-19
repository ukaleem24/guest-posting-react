import React from 'react'
import OfferBidItem from '../OfferBidItem'

const NewBid = () => {

    const newBids=[1,2,3,4,5]


  return (
    <>
    {newBids.map((bid)=>
    <OfferBidItem key={bid}/>
    )}
    </>
  )
}

export default NewBid