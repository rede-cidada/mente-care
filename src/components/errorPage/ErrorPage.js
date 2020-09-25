import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => (

    <div className="container-error">
      <h1 className="title">404</h1>
      <p className="sub-title">Oops! Page not found</p>
      <p className="txt">We can't seem to find the page you're looking for. </p>
      <button className="btn"><Link className="link" to="/">Go back home</Link></button>
   </div>
)

export default ErrorPage
