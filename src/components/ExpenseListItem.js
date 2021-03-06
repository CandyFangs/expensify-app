import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div> 
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>How much: {amount}</p>
    <p>When: {createdAt}</p>
  </div>
);

export default ExpenseListItem;