import React, { useState, useEffect } from 'react';
import './Postings.scss';
import PostingCard from '../PostingCard';
import Navigation from "../Navigation";

const Postings = ({ postings, searchByKeyWord }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const categories = postings.reduce((totalCategories, posting) => {
      if (!totalCategories.includes(posting.category)) {
        totalCategories.push(posting.category)
      }
      return totalCategories;
    }, []);
    setCategories(categories);
  } 

  const postingCards = postings.map(posting => (
    <PostingCard posting={posting} />
  ))

  useEffect(() => getCategories(), [])
  
  return (
    <section className="postings-container">
      <div className="postings-title-wrapper">
        <h1 className="postings-title">Open Volunteer Positions</h1>
      </div>
      <div>
        <Navigation searchByKeyWord={searchByKeyWord} categories={categories}/>
      </div>
      <section className="postings-wrapper">
        {postingCards}
      </section>
    </section>
  )
}

export default Postings