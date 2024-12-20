// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // ReactDOM.render(
// //   <Router>  {/* Wrap your app with Router here */}
// //     <App />
// //   </Router>,
// //   document.getElementById('root')
// // );



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


////////********************************************************************/

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
// import SignUp from './components/SignUp'
// import Login from "./components/Login";
// import TaxCalculator from "./components/TaxCalculator";

// export default function App1() {
//   return (
//     <BrowserRouter>
//       <Routes>
      
//           <Route index element={<App />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/tax" element={<TaxCalculator />} />

    
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);