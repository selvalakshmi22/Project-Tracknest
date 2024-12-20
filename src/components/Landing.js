// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;





// import React from 'react';
// import './styles.css'; // Ensure this path is correct, relative to your App.js file
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignUp from './components/SignUp'


// function App() {
//   return (
//     <Router>
//     <div>
//       {/* Navbar */}
//       <header className="navbar">
//         <div className="logo">TrackNest</div>
//         <nav className="nav-links">
//           <a href="#">How it Works?</a>
//           <a href="#">About Us</a>
//           <a href="#">Help</a>
//           <a href="#">Feedback</a>
//         </nav>
//         <div className="auth-buttons">
//           <button className="btn btn-signup">Sign up</button>
//           <button className="btn btn-login">Log in</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="hero-section">
//         <div className="hero-content">
//           <h1>Track Your Expenses To Save Money</h1>
//           <p>Helps you to organize your income and expenses</p>
//           <button className="btn btn-get-started">Get Started</button>
//         </div>
//         <div className="hero-image">
//           <img src="3d.png" alt="Tracking" />
//         </div>
//       </main>
//       <Routes>
//          <Route path="/" element={<App />} />
//           <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import './Landing.css'; 
import { Link } from "react-router-dom";

const Landing=() => {
  return (
    <div>
      {/* Navbar */}
      <header className="landing-navbar">
        <div className="logo">
        <img src="logo.jpg" alt="tracknest-logo" />
        </div>
        <nav className="nav-links">
          <a href="/d2.png">Demo video</a>
          <a href="/d5.png">About Us</a>
          <a href="/d6.png">Help</a>
          <a href="/d3.png">Feedback</a>
        </nav>
        <div className="auth-buttons">
        <Link to="/signup">
          <button className="btn btn-signup">Sign up</button>
        </Link>
        <Link to="/Login">
          <button className="btn btn-login">Log in</button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1>Track Your 
               Expenses To 
                Save Money</h1>
          <p>Helps you to organize your income and expenses</p>
          <Link to="/signup">
          <button className="btn btn-get-started">Get Started</button>
          </Link>

        </div>
        <div className="hero-image">
          <img src="3d.png" alt="Tracking" />
        </div>
      </main>
        <div className="d2-image">
          <img src="d2.png" alt="dashboard" />
        </div>
   
        <div className="d3-image">
          <img src="d3.png" alt="Save_cost" />
        </div>

        <div className="d4-image">
          <img src="d4.png" alt="use_anytime" />
        </div>

        <div className="d5-image">
          <img src="d5.png" alt="use_anytime" />
        </div>

        <div className="d6-image">
          <img src="d6.png" alt="use_anytime" />
        </div>

      {/* <Routes>
        <Route path="/signup" element={<SignUp />} />
      
      </Routes> */}
    </div>
  );
}

export default Landing;



