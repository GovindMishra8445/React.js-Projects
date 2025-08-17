// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";

// const StudentForm = () => {
//   const [formData, setFormData] = useState({
//     Name: "",
//     fatherName: "",
//     motherName: "",
//     email: "",
//     mobileNo: "",
//     address: "",
//     state: "",
//     country: "",
//     cityORVillage: "",
//     pin: "",
//     gender: "",
//     bloodGroup: "",
//     rollNo: "",
//     courseTaken: "",
//     branchName: "",
//     admissionYear: "",
//   });

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     handleChange(name, value);
//   };

//   const handleSelectChange = (selectedOption) => {
//     handleChange("gender", selectedOption.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     fetch("https://modern-institue-backend.onrender.com/students/register",{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message) {
//           localStorage.setItem("StudentToken", data.accessToken);
//           alert(`${data.message}`);
//           navigate("/student");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const options = [
//     { value: "female", label: "Female" },
//     { value: "male", label: "Male" },
//     { value: "other", label: "Others" },
//   ];
//   return (
//     <div className="">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="Name"
//               placeholder="Enter your name"
//               value={formData.Name}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="fatherName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Father's Name
//             </label>
//             <input
//               type="text"
//               id="fatherName"
//               name="fatherName"
//               placeholder="Enter your father's name"
//               value={formData.fatherName}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="motherName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Mother's Name
//             </label>
//             <input
//               type="text"
//               id="motherName"
//               name="motherName"
//               placeholder="Enter your mother's name"
//               value={formData.motherName}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="email"
//               className="text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="mobileNo"
//               className="text-sm font-medium text-gray-700"
//             >
//               Mobile No
//             </label>
//             <input
//               type="text"
//               id="mobileNo"
//               name="mobileNo"
//               placeholder="Enter your mobile number"
//               value={formData.mobileNo}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="address"
//               className="text-sm font-medium text-gray-700"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="Enter your address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="cityORVillage"
//               className="text-sm font-medium text-gray-700"
//             >
//               City/Village
//             </label>
//             <input
//               type="text"
//               id="cityORVillage"
//               name="cityORVillage"
//               placeholder="Enter your city or village"
//               value={formData.cityORVillage}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="state"
//               className="text-sm font-medium text-gray-700"
//             >
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               placeholder="Enter your state"
//               value={formData.state}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="country"
//               className="text-sm font-medium text-gray-700"
//             >
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               placeholder="Enter your country"
//               value={formData.country}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="gender"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Gender
//             </label>
//             <Select
//               value={options.find((option) => option.value === formData.gender)}
//               onChange={handleSelectChange}
//               options={options}
//               placeholder="Select your gender"
//               required
//               className="block w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="bloodGroup"
//               className="text-sm font-medium text-gray-700"
//             >
//               Blood Group
//             </label>
//             <input
//               type="text"
//               id="bloodGroup"
//               name="bloodGroup"
//               placeholder="Enter your blood group"
//               value={formData.bloodGroup}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="rollNo"
//               className="text-sm font-medium text-gray-700"
//             >
//               Roll No
//             </label>
//             <input
//               type="text"
//               id="rollNo"
//               name="rollNo"
//               placeholder="Enter your roll number"
//               value={formData.rollNo}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="courseTaken"
//               className="text-sm font-medium text-gray-700"
//             >
//               Course Taken
//             </label>
//             <input
//               type="text"
//               id="courseTaken"
//               name="courseTaken"
//               placeholder="Enter your course"
//               value={formData.courseTaken}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="branchName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Branch Name
//             </label>
//             <input
//               type="text"
//               id="branchName"
//               name="branchName"
//               placeholder="Enter your branch name"
//               value={formData.branchName}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               htmlFor="admissionYear"
//               className="text-sm font-medium text-gray-700"
//             >
//               Admission Year
//             </label>
//             <input
//               type="number"
//               id="admissionYear"
//               name="admissionYear"
//               placeholder="Enter your admission year"
//               value={formData.admissionYear}
//               onChange={handleInputChange}
//               required
//               className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>
//         <div className="flex justify-start mt-8">
//           <button
//             type="submit"
//             className={`w-full sm:w-auto px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${
//               loading ? "cursor-wait" : ""
//             }`}
//           >
//             {loading ? "loading.." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default StudentForm;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Axios } from "../../../Utils/axios";

const StudentForm = () => {
   const [formData, setFormData] = useState({
          name: '',
          email: '',
          mothersName: '',
          mobileNumber: '',
          yearOf10thPassout: '',
          aadharNumber: '',
          street_add: '',
          city: '',
          state: '',
          country: '',
          pin: '',
          gender: '',
          dob: '',
          bloodGroup: '',
          branchName: '',
          busService: '',
          hostelService: '',
          classId: '',
      })
  
      console.log(formData)
   
      const [isHostelService, setIsHostelService] = useState(true);
      const [isBusService, setIsBusService] = useState(true);
      const [searchQuery, setSearchQuery] = useState("");
      const [classes, setClasses] = useState([])
      const navigate = useNavigate();
  
      const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData((prev) => (
              {
                  ...prev,
                  [name]: value,
                  busService: isBusService,
                  hostelService: isHostelService,
              }
          ))
      }
  
      useEffect(() => {
          const fetchClasses = async () => {
              try {
                  const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/classes`, {withCredentials: true})
                  setClasses(response.data.data);
              } catch (error) {
                  console.error(error)
              }
          }
  
          fetchClasses();
      }, [])
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const response = Axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admissions`, {
                  name: formData.name,
                  email: formData.email,
                  mothersName: formData.mothersName,
                  mobileNumber: formData.mobileNumber,
                  yearOf10thPassout: formData.yearOf10thPassout,
                  aadharNumber: formData.aadharNumber,
                  street_add: formData.street_add,
                  city: formData.city,
                  state: formData.state,
                  country: formData.country,
                  pin: formData.pin,
                  gender: formData.gender,
                  dob: formData.dob,
                  bloodGroup: formData.bloodGroup,
                  branchName: formData.branchName,
                  busService: formData.busService,
                  hostelService: formData.hostelService,
                  classId: formData.classId,
              })
              if (response) {
                  navigate('/admin-admission')
              }
          } catch (error) {
              console.error(error)
          }
      }

  return (
    <form onSubmit={handleSubmit} className="px-4 space-y-4">
        <div>
            <label className="block font-semibold">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Enter your name" />
        </div>

        <div>
            <label className="block font-semibold">Gender</label>
            <select name="gender" onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div>
            <label className="block font-semibold">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Enter your email" />
        </div>

        <div>
            <label className="block font-semibold">Mobile</label>
            <input type="text" name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Enter mobile number" />
        </div>

        {/* <div>
            <label className="block font-semibold">Father's Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter father's name" />
        </div> */}

        <div>
            <label className="block font-semibold">Mother's Name</label>
            <input type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Enter mother's name" />
        </div>

        <div>
            <label className="block font-semibold">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>

        <div>
            <label className="block font-semibold">Year of 10th Appearing</label>
            <input type="text" name="yearOf10thPassout" value={formData.yearOf10thPassout} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>

        <div>
            <label className="block font-semibold">Class for Addmission</label>
            <select type="text" name="classId" onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Select the Class</option>
                {
                    classes.map((classItem, index) =>(
                        <option key={index} value={classItem._id}>{classItem.gradeLevel}</option>
                    ))
                }
            </select>
        </div>

        <div>
            <label className="block font-semibold">Aadhar Number</label>
            <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} maxLength={12} className="w-full p-2 border rounded-md" />
        </div>

        {/* <div>
            <label className="block font-semibold">Religion</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter religion" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Category</label>
            <select className="w-full p-2 border rounded-md">
                <option>Select a category</option>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
            </select>
        </div> */}

        {/* <div>
            <label className="block font-semibold">Last School Attended</label>
            <input type="text" className="w-full p-2 border rounded-md" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Last Exam Result (in Percentage)</label>
            <input type="text" className="w-full p-2 border rounded-md" />
        </div> */}

        <div>
            <label className="block font-semibold">Street Address</label>
            <textarea className="w-full p-2 border rounded-md" name='street_add' value={formData.street_add} onChange={handleChange} placeholder="Enter your address"></textarea>
        </div>

        <div>
            <label className="block font-semibold">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>


        <div>
            <label className="block font-semibold">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>

        <div>
            <label className="block font-semibold">Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>

        <div>
            <label className="block font-semibold">Pin</label>
            <input type="text" name="pin" value={formData.pin} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>

        <div>
            <label className="block font-semibold">Blood Group</label>
            <select name="bloodGroup" onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Select a category</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="O-">O-</option>
            </select>
        </div>

        <div>
            <label className="block font-semibold">Branch Name</label>
            <input type="text" name="branchName" value={formData.branchName} onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>

        <label className="flex items-center space-x-2">
            <input type="checkbox" name="busService" checked={!isBusService} onChange={(e) => setIsBusService(e.target.checked)} />
            <span>Transport Facility</span>
        </label>

        <label className="flex items-center space-x-2">
            <input type="checkbox" name="hostelService" checked={!isHostelService} onChange={(e) => setIsHostelService(e.target.checked)} />
            <span>Hostel Facility</span>
        </label>

        {/* <div>
            <label className="block font-semibold">Father's Qualification</label>
            <input type="text" name="fatherQualification" className="w-full p-2 border rounded-md" placeholder="Father's Qualification" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Father's Occupation</label>
            <input type="text" name="fatherOccupation" className="w-full p-2 border rounded-md" placeholder="Father's Occupation" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Mother's Qualification</label>
            <input type="text" name="motherQualification" className="w-full p-2 border rounded-md" placeholder="Mother's Qualification" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Mother's Occupation</label>
            <input type="text" name="motherOccupation" className="w-full p-2 border rounded-md" placeholder="Mother's Occupation" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Annual Income</label>
            <input type="text" name="annualIncome" className="w-full p-2 border rounded-md" placeholder="Annual Income" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Upload Aadhar Card</label>
            <input type="file" className="w-full p-2 border rounded-md" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Upload Photo</label>
            <input type="file" className="w-full p-2 border rounded-md" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Upload Transfer Certificate</label>
            <input type="file" className="w-full p-2 border rounded-md" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Upload Character Certificate
            </label>
            <input type="file" className="w-full p-2 border rounded-md" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Upload Last Mark Sheet</label>
            <input type="file" className="w-full p-2 border rounded-md" />
        </div> */}

        {/* <div>
            <label className="block font-semibold">Upload Birth Certificate
            </label>
            <input type="file" className="w-full p-2 border rounded-md" />
        </div> */}

        <button type="submit" className="w-full p-2 font-semibold text-white bg-blue-600 rounded-md">
            Submit
        </button>
    </form>
  );
};

export default StudentForm;

