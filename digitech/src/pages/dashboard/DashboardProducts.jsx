import DashboardNav from '../../components/navbar/DashboardNav'
import { CircleX, Plus } from 'lucide-react'
import AddProductModal from './DashboardProductsSection/AddProductModal';
import ProductDetailModal from './DashboardProductsSection/ProductDetailModal';

import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";



const DashboardProducts = () => {
  // State initialization
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    by: "",
    time: "",
  });
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selrctedItem, setSelectedItem] = useState(null);
  const [ProductModalOpen, setProductModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getAllProducts()
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);



  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.category || !formData.subCategory || !formData.by || !formData.time) {
    alert("Please fill all fields");
    return;
  }

  setCategorys((prev) => [...prev, formData]); 

  setFormData({ category: "", subCategory: "", by: "", time: "" }); // reset form
  console.log(categorys)
};

  return (
    <div className='px-8'>
        <DashboardNav/>
       <div className="flex justify-between items-center mt-8 px-6 py-4 bg-white shadow-sm rounded-lg">
  <div className="">
    <h4 className="text-xl text-[#0284c7] font-semibold ">Product Management</h4>
    <p className="text-sm text-gray-500 mt-1">Manage your product catalog</p>
  </div>

  <div className="flex gap-4">
    <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn px-4 py-2 bg-[#0284c7] text-white rounded-md hover:bg-[#0285c7da] transition-colors duration-200 text-sm font-medium">
   <Plus />   Add Categroy
    </button>
    <button onClick={()=>setModalOpen(true)} className="btn px-4 py-2 bg-[#0284c7] text-white rounded-md hover:bg-[#0285c7da] transition-colors duration-200 text-sm font-medium">
  <Plus />    Add Product
    </button>
       {/*add Product modal*/}
    {modalOpen ? (
   
    <AddProductModal  onClose={()=>setModalOpen(false)} onAddProduct={handleAddProduct}/>):""}

    {/*Catrgory modal*/}
    <dialog id="my_modal_3" className="modal backdrop-blur-sm transition-opacity duration-300">
  <div className="modal-box ">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>


<div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-2xl ">
  <h2 className="text-xl font-bold mb-6  text-gray-900 tracking-tight">Add New Category</h2>
  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
      <input
        name="category"
        type="text"
        placeholder="e.g., Dry Food"
        value={formData.category}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
    <div>
      <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
      <input
        name="subCategory"
        type="text"
        placeholder="e.g., Almond"
        value={formData.subCategory}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
    <div>
      <label htmlFor="by" className="block text-sm font-medium text-gray-700 mb-1">Added By</label>
      <input
        name="by"
        type="text"
        placeholder="e.g., Jonny"
        value={formData.by}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
    <div>
      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
      <input
        name="time"
        type="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-[#0284c7] hover:bg-[#0285c7e5] text-white py-2.5 rounded-lg font-semibold tracking-wide transition duration-200 ease-in-out transform hover:scale-105"
    >
      Add Category
    </button>
  </form>
</div>


<div className="max-w-4xl mx-auto mt-8">
  <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
          <th className="px-6 py-4 text-left font-semibold">#</th>
          <th className="px-6 py-4 text-left font-semibold">Category</th>
          <th className="px-6 py-4 text-left font-semibold">Subcategory</th>
          <th className="px-6 py-4 text-left font-semibold">Added By</th>
          <th className="px-6 py-4 text-left font-semibold">Time</th>
        </tr>
      </thead>
      <tbody className="text-gray-600">
        {categorys.map((data, idx) => (
          <tr
            key={idx}
            className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
          >
            <td className="px-6 py-4">{idx + 1}</td>
            <td className="px-6 py-4">{data.category}</td>
            <td className="px-6 py-4">Quality Control Specialist</td>
            <td className="px-6 py-4">Littel, Schaden and Vandervort</td>
            <td className="px-6 py-4">Canada</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  </div>
</dialog>
  </div>
</div>



<div className="w-full bg-white">


     <div className="p-6">
      <div className="overflow-x-auto shadow rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Subcategory</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Added by</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((item) => (
              <tr onClick={()=>setSelectedItem(item)} key={item.id} className="cursor-pointer hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-700">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700 capitalize">{item.category}</td>
                <td className="px-6 py-4 text-sm text-gray-700 capitalize">{item.subCategory}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.by}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</div>

{/* Product Modal */}
<ProductDetailModal data={selrctedItem} onClose={()=>setSelectedItem(null)}/>

    </div>
  )
}

export default DashboardProducts