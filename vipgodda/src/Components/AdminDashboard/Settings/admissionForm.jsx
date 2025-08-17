import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const AdmissionForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    guardianName: "",
    guardianPhone: "",
    previousSchool: "",
    gradeApplied: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(formRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Admission_Form.pdf");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-2xl rounded-xl border border-gray-200">
      <div className="text-center mb-6">
        <img src="/logo.png" alt="College Logo" className="mx-auto h-20" />
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Medical College Admission Form</h2>
      </div>
      <div ref={formRef} className="p-6 border rounded-lg bg-gray-100">
        <form className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block font-medium">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Guardian Name</label>
            <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Guardian Phone</label>
            <input type="tel" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Previous School</label>
            <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block font-medium">Grade Applied For</label>
            <input type="text" name="gradeApplied" value={formData.gradeApplied} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Upload Documents</label>
            <input type="file" className="w-full border p-3 rounded-lg" required />
          </div>
        </form>
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-lg">Print Form</button>
        <button onClick={handleDownloadPDF} className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg">Download PDF</button>
      </div>
    </div>
  );
};

export default AdmissionForm;