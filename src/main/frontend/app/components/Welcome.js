import React from 'react';
import '../css/welcome.scss'

const Welcome = (props) => {

  return (
    <div className="container">
      <h1>Check out some of the top dev must-haves!</h1>
      <h2>What We Are All About</h2>
      <p>Programmers of all levels want to know what sort of tech gear they need in order to work at peak efficiency.</p>
      <p>Dev Must Haves has already compiled the best list of gear according to what you value most:</p>
      <ul>
        <li>comfort</li>
        <li>budget</li>
        <li>customizability</li>
      </ul>
      <p>See what others have that you are missing in the tech world, leave reviews or suggest a new product for others to try!</p>

      <div><a href="/products"> Click here to view all products </a></div>
      <div><a href="/registration"> Click here to register </a></div>
      <div><a href="/login"> Click here to login </a></div>
    </div>
  )
}
export default Welcome;
