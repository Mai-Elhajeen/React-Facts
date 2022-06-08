import React from 'react'

function App() {
  return (
    <section className="react-fact">
        <div className='header'>
          <div className='logo-div'>
            <img src='./logo192.png' alt='react-logo' />
            
              <p>React Facts</p>
          </div>

          <div className='title'>React.js-Project-1</div>
        </div>

        <div className='body'>
          <h1>Fun facts about react</h1>

          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>

          <img src='./logo192.png' alt='react-logo' />
        </div>
    </section>
  );
}

export default App;
