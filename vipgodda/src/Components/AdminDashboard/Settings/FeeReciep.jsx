import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const FeeReceipt = () => {
  const receiptRef = useRef();
  const [formData, setFormData] = useState({
    studentName: "",
    admissionNo: "",
    course: "",
    amount: "",
    date: "",
    paymentMethod: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(receiptRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, (canvas.height * 210) / canvas.width);
    pdf.save("Fee_Receipt.pdf");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow mb-4"
      >
        Generate Fee Receipt
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Enter Receipt Details</h2>
            <form className="space-y-3">
              <input type="text" name="studentName" placeholder="Student Name" className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="text" name="admissionNo" placeholder="Admission No." className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="text" name="course" placeholder="Course" className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="number" name="amount" placeholder="Amount Paid" className="w-full p-2 border rounded" onChange={handleChange} />
              <input type="date" name="date" className="w-full p-2 border rounded" onChange={handleChange} />
              <select name="paymentMethod" className="w-full p-2 border rounded" onChange={handleChange}>
                <option value="">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Online Transfer">Online Transfer</option>
              </select>
              <button type="button" onClick={() => setIsModalOpen(false)} className="bg-green-500 text-white px-4 py-2 rounded mt-3 w-full">Generate Receipt</button>
            </form>
          </div>
        </div>
      )}

      <div ref={receiptRef} className="p-8 border-2 border-gray-300 bg-gray-50 rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold uppercase">Medical College Name</h1>
          <p className="text-lg font-semibold">Official Fee Receipt</p>
          <p className="text-sm text-gray-600">Address: XYZ Road, City, Country</p>
        </div>

        <h2 className="text-2xl font-bold text-center my-4">Fee Receipt</h2>

        <div className="text-lg space-y-4">
          <p>Receipt No: <span className="font-semibold">#{Math.floor(Math.random() * 10000)}</span></p>
          <p>Student Name: <span className="font-semibold">{formData.studentName}</span></p>
          <p>Admission No: <span className="font-semibold">{formData.admissionNo}</span></p>
          <p>Course: <span className="font-semibold">{formData.course}</span></p>
          <p>Amount Paid: <span className="font-semibold">₹{formData.amount}</span></p>
          <p>Date: <span className="font-semibold">{formData.date}</span></p>
          <p>Payment Method: <span className="font-semibold">{formData.paymentMethod}</span></p>
        </div>

        <div className="flex justify-between mt-10">
          <div>
            <p className="border-t border-black w-48 text-center pt-2">Cashier's Signature</p>
          </div>
          <div>
            <p className="border-t border-black w-48 text-center pt-2">Official Seal</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded shadow">Print Receipt</button>
        <button onClick={handleDownloadPDF} className="bg-green-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
      </div>
    </div>
  );
};

export default FeeReceipt;