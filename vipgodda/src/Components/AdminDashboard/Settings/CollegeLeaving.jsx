// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// const LeavingCertificate = () => {
//   const certRef = useRef();

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownloadPDF = async () => {
//     const canvas = await html2canvas(certRef.current);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//     pdf.save("Leaving_Certificate.pdf");
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
//       <div ref={certRef} className="p-8 border-2 border-gray-300 bg-gray-50 rounded-lg">
//         <div className="text-center mb-6">
//           {/* <img src="https://picsum.photos/200/300" alt="College Logo" className="w-24 mx-auto mb-4" /> */}
//           <h1 className="text-3xl font-bold uppercase">Medical College Name</h1>
//           <p className="text-lg font-semibold">Affiliated with XYZ University</p>
//           <p className="text-sm text-gray-600">Address: XYZ Road, City, Country</p>
//         </div>

//         <h2 className="text-2xl font-bold text-center my-4">College Leaving Certificate</h2>

//         <div className="text-lg space-y-4">
//           <p>This is to certify that <span className="font-semibold">[Student Name]</span>, son/daughter of <span className="font-semibold">[Parent's Name]</span>, was a student of our college from <span className="font-semibold">[Admission Year]</span> to <span className="font-semibold">[Leaving Year]</span>. During this period, they pursued the course <span className="font-semibold">[Course Name]</span> and successfully completed/left due to <span className="font-semibold">[Reason]</span>.</p>
          
//           <p>The student's date of birth as per our records is <span className="font-semibold">[DOB]</span>. Their conduct and academic performance were <span className="font-semibold">[Conduct & Performance]</span>.</p>

//           <p>This certificate is issued upon their request for future reference.</p>
//         </div>

//         <div className="flex justify-between mt-10">
//           <div>
//             <p className="border-t border-black w-48 text-center pt-2">Principal's Signature</p>
//           </div>
//           <div>
//             <p className="border-t border-black w-48 text-center pt-2">College Seal</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex justify-between">
//         <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded shadow">Print Certificate</button>
//         <button onClick={handleDownloadPDF} className="bg-green-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
//       </div>
//     </div>
//   );
// };

// export default LeavingCertificate;


import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Navbar";

const LeavingCertificate = () => {
  const certRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    admissionYear: "",
    leavingYear: "",
    courseName: "",
    reason: "",
    dob: "",
    performance: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(certRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("Leaving_Certificate.pdf");
  };

  return (
    <><Navbar/><div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200 relative">
          {/* Popup Form */}
          {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full">
                      <h2 className="text-2xl font-bold mb-4 text-center">Enter Student Details</h2>
                      <form className="grid grid-cols-2 gap-4">
                          <input type="text" name="studentName" placeholder="Student Name" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="text" name="parentName" placeholder="Parent Name" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="text" name="admissionYear" placeholder="Admission Year" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="text" name="leavingYear" placeholder="Leaving Year" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="text" name="courseName" placeholder="Course Name" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="text" name="reason" placeholder="Reason for Leaving" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="date" name="dob" className="p-2 border rounded" onChange={handleChange} required />
                          <input type="text" name="performance" placeholder="Performance" className="p-2 border rounded" onChange={handleChange} required />
                          <button type="button" className="col-span-2 bg-blue-500 text-white py-2 rounded" onClick={() => setIsOpen(false)}>Submit</button>
                      </form>
                  </div>
              </div>
          )}

          <button onClick={() => setIsOpen(true)} className="mb-4 bg-gray-700 text-white px-4 py-2 rounded shadow">Fill Certificate</button>

          {/* Certificate */}
          <div ref={certRef} className="p-8 border-2 border-gray-300 bg-gray-50 rounded-lg">
              <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold uppercase">Medical College Name</h1>
                  <p className="text-lg font-semibold">Affiliated with XYZ University</p>
                  <p className="text-sm text-gray-600">Address: XYZ Road, City, Country</p>
              </div>

              <h2 className="text-2xl font-bold text-center my-4">College Leaving Certificate</h2>

              <div className="text-lg space-y-4">
                  <p>This is to certify that <span className="font-semibold">{formData.studentName}</span>, son/daughter of <span className="font-semibold">{formData.parentName}</span>, was a student of our college from <span className="font-semibold">{formData.admissionYear}</span> to <span className="font-semibold">{formData.leavingYear}</span>. During this period, they pursued the course <span className="font-semibold">{formData.courseName}</span> and successfully completed/left due to <span className="font-semibold">{formData.reason}</span>.</p>

                  <p>The student's date of birth as per our records is <span className="font-semibold">{formData.dob}</span>. Their conduct and academic performance were <span className="font-semibold">{formData.performance}</span>.</p>

                  <p>This certificate is issued upon their request for future reference.</p>
              </div>

              <div className="flex justify-between mt-10">
                  <div>
                      <p className="border-t border-black w-48 text-center pt-2">Principal's Signature</p>
                  </div>
                  <div>
                      <p className="border-t border-black w-48 text-center pt-2">College Seal</p>
                  </div>
              </div>
          </div>

          <div className="mt-6 flex justify-between">
              <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded shadow">Print Certificate</button>
              <button onClick={handleDownloadPDF} className="bg-green-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
          </div>
      </div></>
  );
};

export default LeavingCertificate;
