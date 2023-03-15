const express = require('express');
const router = express.Router();
const Review = require('../models/Reviews.js');

router.post('../views/reviewsTemplate.js', async (req, res) => {
  try {
    // Get the product ID from the request URL
    const product_id = req.params.product_id;

    // Get the user ID from the session
    const user_id = req.session.user_id;

    // Get the review data from the request body
    const { rating, comment } = req.body;

    // Create a new review in the database
    const review = await Review.create({
      product_id,
      user_id,
      rating,
      comment
    });

    res.redirect(`/products/${product_id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});