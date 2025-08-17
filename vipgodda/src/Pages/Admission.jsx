import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import * as yup from 'yup';
import { Axios } from "../Utils/axios";
import { useNavigate } from "react-router-dom";

const Admission = () => {

    // const AdmissionSchema = yup.object().shape({
    //     name: yup.string().required("Name is required!"),
    //     email: yup.string().required("Email is required!"),
    //     mothersName: yup.string().required("Mother's Name is required!"),
    //     mobileNumber: yup.number().required("Mobile No. is required!"),
    //     yearOf10thPassout: yup.number().notRequired(),
    //     aadharNumber: yup.number().required("Aadhar Number is required"),
    //     street_add: yup.string().required("Street Address is required!"),
    //     city: yup.string().required("City is required!"),
    //     state: yup.string().required("State is required!"),
    //     country: yup.string().required("Country's Name is required!"),
    //     pin: yup.string().required("Pin is required!"),
    //     gender: yup.string().required("Gender is required!"),
    //     dob: yup.string().required("Date of birth is required!"),
    //     bloodGroup: yup.string().required("State is required!"),
    //     branchName: yup.string().required("State is required!"),        
    // })

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
            const response = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admissions`, {
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
        <Layout>
            <div className="p-6 bg-white w-[90%] max-w-7xl flex flex-col shadow-lg shadow-slate-400 rounded-md mx-auto ">
                <h2 className="text-2xl font-bold text-left text-primary">VIPS GODDA Admission</h2>

                <div className="flex flex-col items-center my-10">
                    <h3 className="text-xl font-semibold text-center text-primary">Procedure</h3>
                    <div className="mt-4 space-y-2 text-gray-600">
                        <p><span className="font-semibold text-primary">Step 1: Submit Application -</span> Fill out the online application form with all the required details.</p>
                        <p><span className="font-semibold text-primary">Step 2: Document Verification -</span> Upload the required documents for verification.</p>
                        <p><span className="font-semibold text-primary">Step 3: Admission Confirmation -</span> Pay the admission fee to secure your seat.</p>
                    </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-center text-primary">Admission Form</h2>
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
            </div>
        </Layout>
    );
};

export default Admission;
