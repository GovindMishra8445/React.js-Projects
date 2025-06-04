// import React, { useContext, useEffect, useState } from "react";
// import { FaPrint } from "react-icons/fa";
// import { GrView } from "react-icons/gr";
// import { Button, Tooltip } from "@mui/material";
// import { MyContext } from "../../App";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [filterStatus, setFilterStatus] = useState("");
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const context = useContext(MyContext);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("Token not found. Please log in.");
//       setIsLoading(false);
//       return;
//     }

//     fetch("https://api.packpin.in/admin/all-order", {
//       method: "GET",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data);
//         // Use the 'orderData' key from the API response.
//         if (data && data.orderData && Array.isArray(data.orderData)) {
//           setOrders(data.orderData);
//         } else {
//           setOrders([]);
//         }
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching orders:", err);
//         setError(err.message);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleStatusFilter = (e) => {
//     setFilterStatus(e.target.value);
//   };

//   const filteredOrders = filterStatus
//     ? orders.filter(
//         (order) =>
//           order.status &&
//           order.status.toLowerCase() === filterStatus.toLowerCase()
//       )
//     : orders;

//   const handlePrintInvoice = (order) => {
//     console.log("Printing invoice for:", order.order_id);
//     // Add your printing logic here.
//   };

//   const handleViewOrder = (order) => {
//     setSelectedOrder(order);
//     setIsViewModalOpen(true);
//   };

//   const closeViewModal = () => {
//     setIsViewModalOpen(false);
//     setSelectedOrder(null);
//   };

//   return (
//     <div className="orders-component">
//       <div className="flex items-center justify-between px-5 pt-5">
//         <h1 className="text-[20px] font-[600]">All Orders</h1>
//         <div className="filter-section flex items-center">
//           <label htmlFor="statusFilter" className="mr-2">
//             Filter by Status:
//           </label>
//           <select
//             id="statusFilter"
//             onChange={handleStatusFilter}
//             className="border border-gray-300 rounded px-2 py-1"
//           >
//             <option value="">All</option>
//             <option value="placed">Placed</option>
//             <option value="pending">Pending</option>
//             <option value="processing">Processing</option>
//             <option value="cancel">Cancel</option>
//           </select>
//         </div>
//       </div>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="card my-5 shadow-md sm:rounded-lg bg-white">
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
//           <table className="w-full text-xs font-semibold text-left text-gray-500">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-300">
//               <tr>
//                 <th className="px-2 py-2 font-extrabold">S.No.</th>
//                 <th className="px-2 py-2">Order ID</th>
//                 <th className="px-2 py-2">Customer Name</th>
//                 <th className="px-5 py-2">Order Date</th>
//                 <th className="px-5 py-2">Updated At</th>
//                 <th className="px-2 py-2">Pack Of</th>
//                 <th className="px-2 py-2">Price</th>
//                 <th className="px-2 py-2">Quantity</th>
//                 <th className="px-2 py-2">Total Amount</th>
//                 <th className="px-2 py-2">Status</th>
//                 <th className="px-4 py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 <tr>
//                   <td colSpan="11" className="text-center p-4">
//                     Loading Data...
//                   </td>
//                 </tr>
//               ) : filteredOrders.length > 0 ? (
//                 filteredOrders.map((order, index) => {
//                   const firstProduct =
//                     order.products && order.products.length > 0
//                       ? order.products[0]
//                       : null;
//                   return (
//                     <tr
//                       key={order._id || order.order_id || index}
//                       className="border-b"
//                     >
//                       <td className="px-4 py-2 font-extrabold">{index + 1}</td>
//                       <td className="px-4 py-2">{order.order_id}</td>
//                       <td className="px-4 py-2">{order.customerName}</td>
//                       <td className="px-4 py-2">
//                         {new Date(order.orderDate).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-2">
//                         {new Date(order.updatedAt).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-2">
//                         {firstProduct ? firstProduct.packOf : "-"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {firstProduct ? firstProduct.price : "-"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {firstProduct ? firstProduct.quantity : "-"}
//                       </td>
//                       <td className="px-4 py-2">{order.totalAmount}</td>
//                       <td className="px-4 py-2 capitalize">{order.status}</td>
//                       <td className="px-4 py-2 flex gap-2">
//                         <Tooltip title="Print Invoice" placement="top">
//                           <span
//                             onClick={() => handlePrintInvoice(order)}
//                             style={{ cursor: "pointer" }}
//                           >
//                             <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)]">
//                               <FaPrint />
//                             </Button>
//                           </span>
//                         </Tooltip>
//                         <Tooltip title="View Order Details" placement="top">
//                           <span
//                             onClick={() => handleViewOrder(order)}
//                             style={{ cursor: "pointer" }}
//                           >
//                             <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)]">
//                               <GrView />
//                             </Button>
//                           </span>
//                         </Tooltip>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="11" className="text-center p-4">
//                     No Orders Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {isViewModalOpen && selectedOrder && (
//         <div className="modal fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow-md max-w-[90%] max-h-[90%] overflow-y-auto">
//             <h2 className="text-lg font-semibold mb-4">Order Details</h2>
//            <div className="mb-4 flex flex-col gap-2">
//            <p>
//               <strong>Order ID:</strong> {selectedOrder.order_id}
//             </p>
//             <p>
//               <strong>Customer Name:</strong> {selectedOrder.customerName}
//             </p>
//             <p>
//               <strong>Customer Email:</strong> {selectedOrder.customerEmail}
//             </p>
//             <p>
//               <strong>Shipping Address:</strong> {selectedOrder.shippingAddress}
//             </p>
//             <p>
//               <strong>Customer Phone:</strong> {selectedOrder.customerPhone}
//             </p>
//             <p>
//               <strong>Total Amount:</strong> {selectedOrder.totalAmount}
//             </p>
//             <p>
//               <strong>Status:</strong> {selectedOrder.status}
//             </p>
//             <p>
//               <strong>Order Date:</strong>{" "}
//               {new Date(selectedOrder.orderDate).toLocaleString()}
//             </p>
//             <p>
//               <strong>Updated At:</strong>{" "}
//               {new Date(selectedOrder.updatedAt).toLocaleString()}
//             </p>
//            </div>
//             <div>
//             {selectedOrder.products &&
//               selectedOrder.products.length > 0 && (
//                 <div>
//                   <h3 className="mt-4 font-semibold">Products:</h3>
//                   {selectedOrder.products.map((product, index) => (
//                     <div
//                       key={product._id || product.productId || index}
//                       className="mb-2"
//                     >
//                       <p>
//                         <strong>Product Name:</strong> {product.productName}
//                       </p>
//                       <p>
//                         <strong>Pack Of:</strong> {product.packOf}
//                       </p>
//                       <p>
//                         <strong>Quantity:</strong> {product.quantity}
//                       </p>
//                       <p>
//                         <strong>Price:</strong> {product.price}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button
//               onClick={closeViewModal}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

// import React, { useContext, useEffect, useState } from "react";
// import { FaPrint } from "react-icons/fa";
// import { GrView } from "react-icons/gr";
// import { Button, Tooltip } from "@mui/material";
// import { MyContext } from "../../App";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [filterStatus, setFilterStatus] = useState("");
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // change as needed

//   const context = useContext(MyContext);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("Token not found. Please log in.");
//       setIsLoading(false);
//       return;
//     }

//     fetch("https://api.packpin.in/admin/all-order", {
//       method: "GET",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data);
//         if (data && data.orderData && Array.isArray(data.orderData)) {
//           setOrders(data.orderData);
//         } else {
//           setOrders([]);
//         }
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching orders:", err);
//         setError(err.message);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleStatusFilter = (e) => {
//     setFilterStatus(e.target.value);
//     setCurrentPage(1); // reset to first page when filtering
//   };

//   const filteredOrders = filterStatus
//     ? orders.filter(
//         (order) =>
//           order.status &&
//           order.status.toLowerCase() === filterStatus.toLowerCase()
//       )
//     : orders;

//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
//   const displayedOrders = filteredOrders.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePrintInvoice = (order) => {
//     console.log("Printing invoice for:", order.order_id);
//     // Add your printing logic here.
//   };

//   const handleViewOrder = (order) => {
//     setSelectedOrder(order);
//     setIsViewModalOpen(true);
//   };

//   const closeViewModal = () => {
//     setIsViewModalOpen(false);
//     setSelectedOrder(null);
//   };

//   return (
//     <div className="orders-component">
//       <div className="flex items-center justify-between px-5 pt-5">
//         <h1 className="text-[20px] font-[600]">All Orders</h1>
//         <div className="filter-section flex items-center">
//           <label htmlFor="statusFilter" className="mr-2">
//             Filter by Status:
//           </label>
//           <select
//             id="statusFilter"
//             onChange={handleStatusFilter}
//             className="border border-gray-300 rounded px-2 py-1"
//           >
//             <option value="">All</option>
//             <option value="placed">Placed</option>
//             <option value="pending">Pending</option>
//             <option value="processing">Processing</option>
//             <option value="cancel">Cancel</option>
//           </select>
//         </div>
//       </div>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="card my-5 shadow-md sm:rounded-lg bg-white">
//         {/* Table Container with max height and sticky header */}
//         <div
//           className="relative overflow-x-auto shadow-md sm:rounded-lg"
//           style={{ maxHeight: "400px" }}
//         >
//           <table className="w-full text-xs font-semibold text-left text-gray-500">
//             <thead className="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-300">
//               <tr>
//                 <th className="px-2 py-2 font-extrabold">S.No.</th>
//                 <th className="px-2 py-2">Order ID</th>
//                 <th className="px-2 py-2">Customer Name</th>
//                 <th className="px-5 py-2">Order Date</th>
//                 <th className="px-5 py-2">Updated At</th>
//                 <th className="px-2 py-2">Pack Of</th>
//                 <th className="px-2 py-2">Price</th>
//                 <th className="px-2 py-2">Quantity</th>
//                 <th className="px-2 py-2">Total Amount</th>
//                 <th className="px-2 py-2">Status</th>
//                 <th className="px-4 py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 <tr>
//                   <td colSpan="11" className="text-center p-4">
//                     Loading Data...
//                   </td>
//                 </tr>
//               ) : displayedOrders.length > 0 ? (
//                 displayedOrders.map((order, index) => {
//                   const firstProduct =
//                     order.products && order.products.length > 0
//                       ? order.products[0]
//                       : null;
//                   return (
//                     <tr
//                       key={order._id || order.order_id || index}
//                       className="border-b"
//                     >
//                       <td className="px-4 py-2 font-extrabold">
//                         {(currentPage - 1) * itemsPerPage + index + 1}
//                       </td>
//                       <td className="px-4 py-2">{order.order_id}</td>
//                       <td className="px-4 py-2">{order.customerName}</td>
//                       <td className="px-4 py-2">
//                         {new Date(order.orderDate).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-2">
//                         {new Date(order.updatedAt).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-2">
//                         {firstProduct ? firstProduct.packOf : "-"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {firstProduct ? firstProduct.price : "-"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {firstProduct ? firstProduct.quantity : "-"}
//                       </td>
//                       <td className="px-4 py-2">{order.totalAmount}</td>
//                       <td className="px-4 py-2 capitalize">{order.status}</td>
//                       <td className=" sticky top-0 px-4 py-2 flex gap-2  ">
//                         <Tooltip title="Print Invoice" placement="top">
//                           <span
//                             onClick={() => handlePrintInvoice(order)}
//                             style={{ cursor: "pointer" }}
//                           >
//                             <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)] ">
//                               <FaPrint />
//                             </Button>
//                           </span>
//                         </Tooltip>
//                         <Tooltip title="View Order Details" placement="top">
//                           <span
//                             onClick={() => handleViewOrder(order)}
//                             style={{ cursor: "pointer" }}
//                           >
//                             <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.5)]">
//                               <GrView />
//                             </Button>
//                           </span>
//                         </Tooltip>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="11" className="text-center p-4">
//                     No Orders Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         {/* Pagination Footer with a "rubber feet" style */}
//         {filteredOrders.length > itemsPerPage && (
//           <div className="pagination flex justify-end items-center my-4 p-2 bg-white shadow-md rounded-b">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1 mx-1 border border-gray-300 rounded disabled:opacity-50"
//             >
//               <FaAngleLeft />
//             </button>
//             <span className="mx-2">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() =>
//                 setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//               }
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 mx-1 border border-gray-300 rounded disabled:opacity-50"
//             >
//               <FaAngleRight />
//             </button>
//           </div>
//         )}
//       </div>

//       {isViewModalOpen && selectedOrder && (
//         <div className="modal fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow-md max-w-[90%] max-h-[90%] overflow-y-auto">
//             <h2 className="text-lg font-semibold mb-4">Order Details</h2>
//             <div className="mb-4 flex flex-col gap-2">
//               <p>
//                 <strong>Order ID:</strong> {selectedOrder.order_id}
//               </p>
//               <p>
//                 <strong>Customer Name:</strong> {selectedOrder.customerName}
//               </p>
//               <p>
//                 <strong>Customer Email:</strong> {selectedOrder.customerEmail}
//               </p>
//               <p>
//                 <strong>Shipping Address:</strong>{" "}
//                 {selectedOrder.shippingAddress}
//               </p>
//               <p>
//                 <strong>Customer Phone:</strong> {selectedOrder.customerPhone}
//               </p>
//               <p>
//                 <strong>Total Amount:</strong> {selectedOrder.totalAmount}
//               </p>
//               <p>
//                 <strong>Status:</strong> {selectedOrder.status}
//               </p>
//               <p>
//                 <strong>Order Date:</strong>{" "}
//                 {new Date(selectedOrder.orderDate).toLocaleString()}
//               </p>
//               <p>
//                 <strong>Updated At:</strong>{" "}
//                 {new Date(selectedOrder.updatedAt).toLocaleString()}
//               </p>
//             </div>
//             <div>
//               {selectedOrder.products && selectedOrder.products.length > 0 && (
//                 <div>
//                   <h3 className="mt-4 font-semibold">Products:</h3>
//                   {selectedOrder.products.map((product, index) => (
//                     <div
//                       key={product._id || product.productId || index}
//                       className="mb-2"
//                     >
//                       <p>
//                         <strong>Product Name:</strong> {product.productName}
//                       </p>
//                       <p>
//                         <strong>Pack Of:</strong> {product.packOf}
//                       </p>
//                       <p>
//                         <strong>Quantity:</strong> {product.quantity}
//                       </p>
//                       <p>
//                         <strong>Price:</strong> {product.price}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button
//               onClick={closeViewModal}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;






import React, { useContext, useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Button, Tooltip } from "@mui/material";
import { MyContext } from "../../App";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Utility function to highlight matched search text
const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-blue-500 text-white">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 20;
  const context = useContext(MyContext);

  // Helper function to return background color based on status
  const getStatusClass = (status) => {
    if (!status) return "bg-gray-500";
    switch (status.toLowerCase()) {
      case "placed":
        return "bg-yellow-500";
      case "pending":
        return "bg-blue-500";
      case "processing":
        return "bg-green-500";
      case "cancel":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token not found. Please log in.");
      setIsLoading(false);
      return;
    }

    fetch("https://api.packpin.in/admin/all-order", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.orderData && Array.isArray(data.orderData)) {
          setOrders(data.orderData);
        } else {
          setOrders([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleStatusFilter = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  // Filter orders by customerName or order_id and then by status if selected.
  const filteredOrders = orders
    .filter(
      (order) =>
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.order_id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((order) =>
      filterStatus
        ? order.status &&
          order.status.toLowerCase() === filterStatus.toLowerCase()
        : true
    );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const displayedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrintInvoice = (order) => {
    console.log("Printing invoice for:", order.order_id);
    // Add your printing logic here.
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="orders-component">
      {/* Header Section */}
      <div className="flex items-center bg-[#1f2a38] justify-between px-5 py-5 rounded-md shadow-md sticky top-0 z-0">
        <h1 className="text-[20px] font-[600] text-white max-sm:text-[12px]">
          All Orders
        </h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by Customer Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-sm:hidden p-2 border rounded-md text-white  bg-[#1f2a38] hover:border-blue-500 focus:outline-none cursor-pointer"
          />
          <div className="flex items-center gap-2 py-2 px-4 rounded-md">
            <label htmlFor="statusFilter" className="mr-2 text-white max-sm:text-xs">
              Filter by Status:
            </label>
            <select
              id="statusFilter"
              onChange={handleStatusFilter}
              className="border border-gray-500 rounded px-2 py-1 bg-[#1f2a38] text-white"
            >
              <option value="">All</option>
              <option value="placed">Placed</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="cancel">Cancel</option>
            </select>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Orders Table */}
      <div className="card my-5 shadow-md sm:rounded-lg bg-[#1f2a38]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{ maxHeight: "800px" }}>
          <table className="w-full text-sm text-left text-white border-collapse p-3">
            <thead className="text-xs uppercase bg-[#1f2a38] border-b">
              <tr>
                <th className="px-2 py-4 font-extrabold">S.No.</th>
                <th className="px-2 py-4">Order ID</th>
                <th className="px-2 py-4">Customer Name</th>
                <th className="px-5 py-4">Order Date</th>
                <th className="px-5 py-4">Updated At</th>
                <th className="px-2 py-4">Pack Of</th>
                <th className="px-2 py-4">Price</th>
                <th className="px-2 py-4">Quantity</th>
                <th className="px-2 py-4">Total Amount</th>
                <th className="px-2 py-4">Status</th>
                <th className="px-4 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                [...Array(8)].map((_, rowIndex) => (
                  <tr key={rowIndex} className="border-b bg-[#1f2a38] dark:border-gray-700">
                    {[...Array(11)].map((_, colIndex) => (
                      <td key={colIndex} className="px-4 py-2">
                        <div className="h-8 w-16 bg-gradient-to-l from-gray-300 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : displayedOrders.length > 0 ? (
                displayedOrders.map((order, index) => {
                  const firstProduct = order.products && order.products.length > 0 ? order.products[0] : null;
                  return (
                    <tr
                      key={order._id || order.order_id || index}
                      className="border-b bg-[#1f2a38] dark:border-gray-700 group hover:bg-gray-700 text-[15px]"
                    >
                      <td className="px-4 py-4 font-bold">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="px-4 py-4">
                        {highlightText(order.order_id, searchTerm)}
                      </td>
                      <td className="px-4 py-4">
                        {highlightText(order.customerName, searchTerm)}
                      </td>
                      <td className="px-4 py-4">
                        {new Date(order.orderDate).toLocaleString()}
                      </td>
                      <td className="px-4 py-4">
                        {new Date(order.updatedAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-4">
                        {firstProduct ? firstProduct.packOf : "-"}
                      </td>
                      <td className="px-4 py-4">
                        {firstProduct ? firstProduct.price : "-"}
                      </td>
                      <td className="px-4 py-4">
                        {firstProduct ? firstProduct.quantity : "-"}
                      </td>
                      <td className="px-4 py-4">{order.totalAmount}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded text-white ${getStatusClass(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="sticky top-0 px-4 py-4 flex gap-2">
                        <Tooltip title="Print Invoice" placement="top">
                          <span
                            onClick={() => handlePrintInvoice(order)}
                            style={{ cursor: "pointer" }}
                          >
                            <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-white">
                              <FaPrint />
                            </Button>
                          </span>
                        </Tooltip>
                        <Tooltip title="View Order Details" placement="top">
                          <span
                            onClick={() => handleViewOrder(order)}
                            style={{ cursor: "pointer" }}
                          >
                            <Button className="!w-[20px] !h-[20px] hover:!border hover:!border-white">
                              <GrView />
                            </Button>
                          </span>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="11" className="text-center p-4 bg-[#1f2a38] text-white">
                    <span className="inline-block mr-2 text-2xl animate-bounce">
                      😞
                    </span>
                    Oops, no orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {filteredOrders.length > itemsPerPage && (
          <div className="pagination flex justify-end items-center  p-3 bg-[#1f2a38] shadow-md rounded-b text-white">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 mx-1 border border-gray-300 rounded disabled:opacity-50 text-white"
            >
              <FaAngleLeft />
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 mx-1 border border-gray-300 rounded disabled:opacity-50 text-white"
            >
              <FaAngleRight />
            </button>
          </div>
        )}
      </div>

      {isViewModalOpen && selectedOrder && (
        <div className="modal fixed top-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[90%] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Order Details
              </h2>
              <button
                onClick={closeViewModal}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p>
                  <strong>Order ID:</strong> {selectedOrder.order_id}
                </p>
                <p>
                  <strong>Customer Name:</strong> {selectedOrder.customerName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedOrder.customerEmail}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedOrder.customerPhone}
                </p>
                <p>
                  <strong>Shipping Address:</strong>{" "}
                  {selectedOrder.shippingAddress}
                </p>
                <p>
                  <strong>Total Amount:</strong> ₹{selectedOrder.totalAmount}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className={`px-2 py-1 rounded text-white ${getStatusClass(selectedOrder.status)}`}>
                    {selectedOrder.status}
                  </span>
                </p>
                <p>
                  <strong>Order Date:</strong>{" "}
                  {new Date(selectedOrder.orderDate).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(selectedOrder.updatedAt).toLocaleString()}
                </p>
              </div>
              {selectedOrder.products && selectedOrder.products.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Products
                  </h3>
                  {selectedOrder.products.map((product, index) => (
                    <div
                      key={product._id || product.productId || index}
                      className="p-4 border rounded-md shadow-sm bg-gray-100"
                    >
                      <p>
                        <strong>Product Name:</strong> {product.productName}
                      </p>
                      <p>
                        <strong>Pack Of:</strong> {product.packOf}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {product.quantity}
                      </p>
                      <p>
                        <strong>Price:</strong> ₹{product.price}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No products found for this order.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
