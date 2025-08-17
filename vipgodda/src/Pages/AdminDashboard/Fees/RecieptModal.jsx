// import React from "react";

// const ReceiptModal = ({ fee, onClose }) => {
//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4">Payment Receipt</h2>
//         <div className="border p-4 mb-4">
//           <p><strong>Student Name:</strong> {fee.studentName}</p>
//           <p><strong>Roll No:</strong> {fee.rollNo}</p>
//           <p><strong>Fees Type:</strong> {fee.feesType}</p>
//           <p><strong>Payment Type:</strong> {fee.paymentType}</p>
//           <p><strong>Date:</strong> {fee.date}</p>
//           <p><strong>Amount:</strong> {fee.amount}</p>
//           <p><strong>Status:</strong> {fee.status}</p>
//         </div>
//         <div className="flex justify-between">
//           <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded-md">Print</button>
//           <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReceiptModal;


import React from "react";
import { IoPrint, IoClose } from "react-icons/io5";
const ReceiptModal = ({ fee, onClose }) => {
  if (!fee) {
    return null; // Prevent rendering if fee data is missing
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-[400px] border border-gray-300 print:w-full print:max-w-md">
        {/* School Header Section */}
        <div className="text-center border-b pb-3 mb-4">
          <h1 className="text-2xl font-bold text-gray-800">🏫 ABC International School</h1>
          <p className="text-sm text-gray-500">123 Main Street, City, Country</p>
          <p className="text-sm text-gray-500">Phone: +1 234 567 890</p>
          <h2 className="text-xl font-semibold mt-2">Payment Receipt</h2>
        </div>

        {/* Receipt Number */}
        <div className="text-right text-sm font-semibold text-gray-600 mb-3">
          <p>Receipt No: <span className="text-blue-600">#INV{fee.id}</span></p>
        </div>

        {/* Receipt Details */}
        <div className="space-y-2 text-gray-700 border border-gray-300 p-4 rounded-lg">
          <p><strong>👤 Student:</strong> {fee.studentName}</p>
          <p><strong>🎓 Roll No:</strong> {fee.rollNo}</p>
          <p><strong>📌 Fees Type:</strong> {fee.feesType}</p>
          <p><strong>💳 Payment Mode:</strong> {fee.paymentType}</p>
          <p><strong>📅 Date:</strong> {fee.date}</p>
          <p><strong>💲 Amount:</strong> <span className="text-green-600 font-semibold">{fee.account}</span></p>
        </div>

        {/* Signature Section */}
        <div className="mt-6 text-right text-gray-700 font-semibold">
          <p>Authorized Signatory</p>
          <div className="h-12 border-b border-gray-500 w-40 mx-auto"></div>
        </div>

        {/* Button Actions */}
        <div className="flex justify-between mt-6">
          <button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
            onClick={() => window.print()} // Print function
          >
            <IoPrint className="text-lg" /> Print Receipt
          </button>
          <button
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
            onClick={onClose} // Close modal
          >
            <IoClose className="text-lg" /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
