// import React, { useState } from "react";
// import "./TaxCalculator.css";
// import "./slidenav.css";

// const TaxCalculator = () => {
//   const [income, setIncome] = useState("");
//   const [deductions, setDeductions] = useState("");

//   const handleCalculate = () => {
//     // Logic for calculating tax
//   };

//   return (
//     <div className="tax-calculator-container">

//       <div className="title" >Tax</div>
//       <div className="content">
//         <h1>Tax Calculator</h1>
//         <form className="tax-form">
//           <div className="form-group">
//             <label>Assessment Year *</label>
//             <select>
//               <option>2023-24</option>
//               <option>2022-23</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Taxpayer Category *</label>
//             <select>
//               <option>Individual</option>
//               <option>HUF</option>
//               <option>Company</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Residential Status *</label>
//             <select>
//               <option>RES</option>
//               <option>NRES</option>
//             </select>
//           </div>
//           {/* <div className="age-group">
//             <button type="button" className="active">
//               Below 60 years (Regular Citizen)
//             </button>
//             <button type="button">Between 60-79 years (Senior Citizen)</button>
//             <button type="button">80 and above (Super Senior Citizen)</button>
//           </div> */}
//           <div className="form-group">
//             <label>Total Annual Income *</label>
//             <input
//               type="number"
//               value={income}
//               onChange={(e) => setIncome(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Total Deductions</label>
//             <input
//               type="number"
//               value={deductions}
//               onChange={(e) => setDeductions(e.target.value)}
//             />
//           </div>
//           <div className="tax-tables">
//             <div>
//               <h3>Old Tax Regime</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Net Taxable Income Slabs</th>
//                     <th>Tax Rate</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Upto ₹2.5 Lakhs</td>
//                     <td>0%</td>
//                   </tr>
//                   <tr>
//                     <td>₹2.5 Lakhs - ₹5 Lakhs</td>
//                     <td>5%</td>
//                   </tr>
//                   <tr>
//                     <td>₹5 Lakhs - ₹10 Lakhs</td>
//                     <td>20%</td>
//                   </tr>
//                   <tr>
//                     <td>Above ₹10 Lakhs</td>
//                     <td>30%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div>
//               <h3>New Tax Regime</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Net Taxable Income Slabs</th>
//                     <th>Tax Rate</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Upto ₹3 Lakhs</td>
//                     <td>0%</td>
//                   </tr>
//                   <tr>
//                     <td>₹3 Lakhs - ₹6 Lakhs</td>
//                     <td>5%</td>
//                   </tr>
//                   <tr>
//                     <td>₹6 Lakhs - ₹9 Lakhs</td>
//                     <td>10%</td>
//                   </tr>
//                   <tr>
//                     <td>₹9 Lakhs - ₹12 Lakhs</td>
//                     <td>15%</td>
//                   </tr>
//                   <tr>
//                     <td>Above ₹12 Lakhs</td>
//                     <td>20%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <button type="button" onClick={handleCalculate}>
//             Calculate
//           </button>
//         </form>
//         <div className="tax-summary">
//           <h3>Tax Summary</h3>
//           <p>Total Annual Income: ₹{income || 0}</p>
//           <p>Total Deductions: ₹{deductions || 0}</p>
//           <p>Tax Amount (as per old regime): ₹0</p>
//           <p>Tax Amount (as per new regime): ₹0</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaxCalculator;


/***************************************************************************/
import React, { useState } from "react";
import "./Tax.css";
import "./slidenav.css";

const Tax = () => {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");

  const handleCalculate = () => {
    // Tax calculation logic
  };

  return (
    <div className="tax-container">
      <div className="tax-header">
        <h2>Tax</h2>
      </div>
      <div className="tax-content">
        <div className="tax-calculator">
          <h1>Tax Calculator</h1>
          <form className="tax-form">
            <div className="form-row">
              <div className="form-group">
                <label>Assessment Year *</label>
                <select>
                  <option>2023-24</option>
                  <option>2022-23</option>
                </select>
              </div>
              <div className="form-group">
                <label>Taxpayer Category *</label>
                <select>
                  <option>Individual</option>
                  <option>HUF</option>
                  <option>Company</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Residential Status *</label>
                <select>
                  <option>RES</option>
                  <option>NRES</option>
                </select>
              </div>
              <div className="form-group">
                <label>Total Annual Income *</label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Total Deductions</label>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleCalculate}>
              Calculate Tax
            </button>
          </form>
        </div>
        <div className="tax-summary">
          <h3>Tax Summary</h3>
          <p>Total Annual Income: ₹{income || 0}</p>
          <p>Total Deductions: ₹{deductions || 0}</p>
          <p>Tax Amount (Old Regime): ₹0</p>
          <p>Tax Amount (New Regime): ₹0</p>
        </div>
      </div>
      <div className="tax-slabs">
        <div className="old regime">
          <h3>Old Tax Regime</h3>
          <table>
            <thead>
              <tr>
                <th>Income Slab</th>
                <th>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Upto ₹2.5 Lakhs</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>₹2.5 Lakhs - ₹5 Lakhs</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>₹5 Lakhs - ₹10 Lakhs</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Above ₹10 Lakhs</td>
                <td>30%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="new regime">
          <h3>New Tax Regime</h3>
          <table>
            <thead>
              <tr>
                <th>Income Slab</th>
                <th>Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Upto ₹3 Lakhs</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>₹3 Lakhs - ₹6 Lakhs</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>₹6 Lakhs - ₹9 Lakhs</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>₹9 Lakhs - ₹12 Lakhs</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Above ₹12 Lakhs</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tax;

