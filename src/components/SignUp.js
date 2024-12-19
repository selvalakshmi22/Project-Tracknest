// import React, { useState } from "react";
// import "./SignUp.css"; // Import the corresponding CSS file

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to backend)
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Repeat Password:", repeatPassword);
//   };

//   return (
//     <div className="signup-container">
//        {/* Left side image */}
//        <div className="signup-image-container">
//           <img src="signup-right-box.png" alt="Sign up" />
//       </div>
//       <div className="signup-form-container">
//       <div className="signup-box">
//         <h2>Sign up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Repeat Password"
//             value={repeatPassword}
//             onChange={(e) => setRepeatPassword(e.target.value)}
//             required
//           />
//           <button className="signup" type="submit">Sign up</button>
//         </form>
//         <div className="social-login">
//           <button className="google-btn">
//           <img src="google_icon.png" alt="Icon" className="btn-icon" />
//           Google</button>
//           <button className="facebook-btn">
//           <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
//           Facebook</button>
//         </div>
//         <p>
//           Already have an account? 
//           <a href="/login">Log in</a>
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SignUp;







import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-page">
      {/* Left Section */}
      <div className="left-section">
      <img src="signup-right-box.jpg" alt="TrackNest" className="left-image" />

      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Sign up</h2>
        <form className="signup-form">
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Repeat Password" required />
          <button type="submit">Sign up</button>
          <div className="divider">or</div>
        </form>
        <div className="social-login">
        <button className="google-btn">
        <img src="google_icon.png" alt="Icon" className="btn-icon" />
        Google</button>
        <button className="facebook-btn">
        <img src="facebook_icon.png" alt="Icon" className="btn-icon" />
        Facebook</button>
          {/* <button>Google</button>
          <button>Facebook</button> */}
        </div>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
