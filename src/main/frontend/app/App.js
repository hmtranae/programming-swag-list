import React from 'react';

const App = (props) => {
  pathname = window.location.pathname;
  return (
    <div>
      {pathname}
    </div>
  )
}

export default App;