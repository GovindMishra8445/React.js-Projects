import React, { useState } from "react";
import VendorDashboardNav from "../../components/navbar/VendorDashboardNav";
import { CircleX, Plus, Edit, Trash2, Eye } from "lucide-react";

const vendorProducts = [
  {
    id: "1",
    name: "Organic Almonds",
    category: "Dry Fruits",
    subCategory: "Nuts",
    price: 450,
    stock: 150,
    status: "Active",
    image: "/images/almonds.jpg",
    description: "Premium organic almonds from Kashmir",
    sales: 45,
  },
  {
    id: "2",
    name: "Premium Cashews",
    category: "Dry Fruits",
    subCategory: "Nuts",
    price: 380,
    stock: 200,
    status: "Active",
    image: "/images/cashews.jpg",
    description: "High-quality cashews from Kerala",
    rating: 4.6,
    sales: 38,
  },
  {
    id: "3",
    name: "Mixed Dry Fruits",
    category: "Dry Fruits",
    subCategory: "Mixed",
    price: 550,
    stock: 75,
    status: "Active",
    image: "/images/mixed-fruits.jpg",
    description: "Assorted premium dry fruits",
    sales: 32,
  },
  {
    id: "4",
    name: "Pistachios",
    category: "Dry Fruits",
    subCategory: "Nuts",
    price: 420,
    stock: 100,
    status: "Inactive",
    image: "/images/pistachios.jpg",
    description: "Fresh pistachios from Iran",
    sales: 28,
  },
];

const initialForm = {
  // name: "",
  // category: "",
  // subCategory: "",
  // price: "",
  // stock: "",
  // status: "Active",
  // image: "",
  // description: "",
  // sales: "",
  productName: "",
  productImage: "",
  productDescription: "",
  productPrice: "",
  productOriginalPrice: "",
  productQuantity: "",
  stockStatus: "",
};

const initialSubCategoryForm = {
  // name: "",
  // category: "",
  // description: "",
  subCategoryName: "",
  subCategoryDescription: "",
};

const VendorProducts = () => {
  const [products, setProducts] = useState(vendorProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState("product"); // "product" or "subCategory"
  const [form, setForm] = useState(initialForm);
  const [subCategoryForm, setSubCategoryForm] = useState(initialSubCategoryForm);
  const [subCategories, setSubCategories] = useState([
    { id: "1", name: "Nuts", category: "Dry Fruits", description: "Various types of nuts" },
    { id: "2", name: "Mixed", category: "Dry Fruits", description: "Mixed dry fruits" },
    { id: "3", name: "Seeds", category: "Dry Fruits", description: "Various types of seeds" },
  ]);

  const handleStatusToggle = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, status: product.status === "Active" ? "Inactive" : "Active" }
          : product
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubCategoryFormChange = (e) => {
    const { name, value } = e.target;
    setSubCategoryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...form,
      id: Date.now().toString(),
      price: Number(form.price),
      stock: Number(form.stock),
      rating: Number(form.rating),
      sales: Number(form.sales),
    };
    setProducts((prev) => [newProduct, ...prev]);
    setShowAddModal(false);
    setForm(initialForm);
  };

  const handleAddSubCategory = (e) => {
    e.preventDefault();
    const newSubCategory = {
      ...subCategoryForm,
      id: Date.now().toString(),
    };
    setSubCategories((prev) => [newSubCategory, ...prev]);
    setSubCategoryForm(initialSubCategoryForm);
  };

  const openModal = (type) => {
    setModalType(type);
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setForm(initialForm);
    setSubCategoryForm(initialSubCategoryForm);
  };

  // Get unique categories for dropdown
  const categories = [...new Set(products.map(product => product.category))];
  
  // Get sub-categories for selected category
  const getSubCategoriesForCategory = (category) => {
    return subCategories.filter(sub => sub.category === category);
  };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] ">
      <VendorDashboardNav />
      <div className="flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0284c7]">My Products</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your product catalog</p>
        </div>
        <button
          onClick={() => openModal("product")}
          className="bg-[#0284c7] text-white cursor-pointer px-4 py-2 rounded-md hover:bg-[#0285c7da] transition flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Add Product/Sub Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <CircleX />
            </button>
            
            
            <div className="flex gap-2 mb-6 mt-8">
              <button
                onClick={() => setModalType("product")}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition ${
                  modalType === "product"
                    ? "bg-[#0284c7] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Add Product
              </button>
              <button
                onClick={() => setModalType("subCategory")}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition ${
                  modalType === "subCategory"
                    ? "bg-[#0284c7] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Add Sub Category
              </button>
            </div>

            {/* Add Product Form */}
            {modalType === "product" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-gray-800">Add Product</h2>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <input type="text" name="productName" value={form.productName} onChange={handleFormChange} required className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Image</label>
                    <input type="file" name="productImage" value={form.productImage} onChange={handleFormChange} required className="w-full border rounded px-3 py-2" />
                  </div>
                  {/* <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select name="category" value={form.category} onChange={handleFormChange} required className="w-full border rounded px-3 py-2">
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Sub Category</label>
                    <select name="subCategory" value={form.subCategory} onChange={handleFormChange} required className="w-full border rounded px-3 py-2">
                      <option value="">Select Sub Category</option>
                      {form.category && getSubCategoriesForCategory(form.category).map((subCategory) => (
                        <option key={subCategory.id} value={subCategory.name}>
                          {subCategory.name}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Price (₹)</label>
                      <input type="number" name="productPrice" value={form.productPrice} onChange={handleFormChange} required className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Stock</label>
                      <input type="number" name="productQuantity" value={form.productQuantity} onChange={handleFormChange} required className="w-full border rounded px-3 py-2" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                      {/* <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Sales</label>
                        <input type="number" name="sales" value={form.sales} onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
                      </div> */}
                      <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Original Price</label>
                      <input type="number" name="productOriginalPrice" value={form.productOriginalPrice} onChange={handleFormChange} required className="w-full border rounded px-3 py-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea name="productDescription" value={form.productDescription} onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Stock Status</label>
                    <select name="stockStatus" value={form.stockStatus} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={closeModal} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded bg-[#0284c7] text-white hover:bg-[#0285c7da]">Add Product</button>
                  </div>
                </form>
              </>
            )}

            {/* Add Sub Category Form */}
            {modalType === "subCategory" && (
              <>
                <h2 className="text-lg font-bold mb-4 text-gray-800">Add Sub Category</h2>
                <form onSubmit={handleAddSubCategory} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Sub Category Name</label>
                    <input type="text" name="subCategoryName" value={subCategoryForm.subCategoryName} onChange={handleSubCategoryFormChange} required className="w-full border rounded px-3 py-2" />
                  </div>
                  {/* <div>
                    <label className="block text-sm font-medium mb-1">Parent Category</label>
                    <select name="category" value={subCategoryForm.category} onChange={handleSubCategoryFormChange} required className="w-full border rounded px-3 py-2">
                      <option value="">Select Parent Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Sub Category Description</label>
                    <textarea name="subCategoryDescription" value={subCategoryForm.subCategoryDescription} onChange={handleSubCategoryFormChange} className="w-full border rounded px-3 py-2" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={closeModal} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded bg-[#0284c7] text-white hover:bg-[#0285c7da]">Add Sub Category</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
        <div className="min-w-[800px]">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#0284c7]">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Product</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Category</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Sub Category</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Price</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Stock</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Sales</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center">
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-900 truncate">{product.name}</div>
                        <div className="text-sm text-gray-500 truncate">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{product.category}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{product.subCategory}</td>
                  <td className="px-4 md:px-6 py-4 text-sm font-semibold text-gray-900">
                    {formatCurrency(product.price)}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{product.stock}</td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <span
                      className={`px-2 w-full py-1 text-xs rounded-full ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{product.sales}</td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-1 flex-wrap">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="text-blue-600 cursor-pointer hover:text-blue-800 p-1"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleStatusToggle(product.id)}
                        className={`p-1 cursor-pointer ${
                          product.status === "Active"
                            ? "text-red-600 hover:text-red-800"
                            : "text-green-600 hover:text-green-800"
                        }`}
                      >
                        {product.status === "Active" ? "Inactive" : "Activate"}
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 cursor-pointer hover:text-red-800 p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-lg p-4 md:p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <CircleX />
            </button>

            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Product Details: {selectedProduct.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Product Information</h3>
                <p><strong>Name:</strong> {selectedProduct.name}</p>
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Sub Category:</strong> {selectedProduct.subCategory}</p>
                <p><strong>Price:</strong> {formatCurrency(selectedProduct.price)}</p>
                <p><strong>Stock:</strong> {selectedProduct.stock}</p>
                <p><strong>Status:</strong> {selectedProduct.status}</p>
                <p><strong>Sales:</strong> {selectedProduct.sales} units</p>
                <p><strong>Description:</strong> {selectedProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorProducts; 