import React from 'react';
import '../css/welcome.scss';

const Welcome = (props) => {

  return (
    <div className="container">
      <h1>Check out some of the top dev must-haves!</h1>
      <h2 className="text-center">What We Are All About</h2>
      <p>Programmers of all levels want to know what sort of tech gear they need in order to work at peak efficiency.</p>
      <p>Dev Must Haves has already compiled the best list of gear according to what you value most:</p>
      <ul>
        <li>comfort</li>
        <li>budget</li>
        <li>customizability</li>
      </ul>
      <p>See what you are missing in the tech world, leave reviews or suggest new products for others to try!</p>

      <a className="container btn btn-primary btn-lg btn-block" href="/products"> Click here to view all products </a>
      <a className="container btn btn-danger btn-lg btn-block" href="/logout"> Logout </a>
    </div>
  )
}
export default Welcome;
