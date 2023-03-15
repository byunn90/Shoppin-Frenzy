const Handlebars = require('handlebars');
const $ = require('jquery');

const reviewTemplate = Handlebars.compile(`
  {{#if isAuthenticated}}
    <form class="review-form" method="POST" action="/products/{{product_id}}/reviews">
      <h3>Leave a Review:</h3>
      <div class="form-group">
        <label for="rating">Rating:</label>
        <select class="form-control" name="rating" id="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" name="comment" id="comment"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Review</button>
    </form>
  {{else}}
    <p>You must be logged in to submit a review.</p>
  {{/if}}
`);

function renderReviewForm(product_id, isAuthenticated) {
  const data = { product_id, isAuthenticated };
  const reviewHtml = reviewTemplate(data);
  $('#review-container').html(reviewHtml);
}

$(document).ready(function() {
  // Get the product ID and authentication status from the page
  const product_id = $('#product-id').val();
  const isAuthenticated = $('#is-authenticated').val() === 'true';

  // Render the review form
  renderReviewForm(product_id, isAuthenticated);
});

