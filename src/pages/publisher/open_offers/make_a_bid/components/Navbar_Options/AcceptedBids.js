import React from 'react'
import BidCard from '../BidCard';

const AcceptedBids = () => {
  const allBids=[1,2];
  return (
    <>
    {allBids.map((bid)=>
    <BidCard key={bid}/>
    )}
    </>
  )
}

export default AcceptedBids