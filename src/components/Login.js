// import React from "react";
// import "./Login.css"; // Make sure to create and style this CSS file

// function Login() {
//   return (
//     <div className="login-container">
        
//       {/* Logo Section */}
//       <div className="logo">
//         <h1>
//           <span className="logo-icon">TN</span> TrackNest
//         </h1>
//       </div>

//       {/* Login Form */}
//       <div className="login-form">
//         <h2>Log in</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email"></label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password"></label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-login">
//             Log In
//           </button>
//         </form>

//         {/* Forgot Password */}
//         <div className="forgot-password">
//           <a href="#">Forgot password?</a>
//         </div>

//         {/* Social Logins */}
//         <div className="social-login">
//           <div className="social-buttons">
//             <button className="btn btn-google">
//             <img src="google_icon.png" alt="Icon" className="btn-icon" />
//             Google</button>
//             <button className="btn btn-facebook">
//             <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
//             Facebook</button>
//           </div>
//         </div>

//         {/* Sign Up Link */}
//         <div className="signup-link">
//           <p>
//             Don't have an account? <a href="/signup">Sign Up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="left-section">
        <h1>Log in</h1>
        <form className="login-form">
          <input type="email" placeholder="Your email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Log In</button>
          <a href="/email" className="forgot-password">Forgot password?</a>
          <div className="divider">or</div>
          <div className="social-buttons">
            <button className="social-button google">
            <img src="google_icon.png" alt="Icon" className="btn-icon" />
              Google</button>
            <button className="social-button facebook">
            <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
              Facebook</button>
          </div>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
      <div className="right-section">
      <img src="login-left-box.jpg" alt="TrackNest_Visualization" className="right-image" />
      </div>
    </div>
  );
}
export default Login;
