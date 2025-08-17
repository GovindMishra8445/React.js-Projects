import React, { useState } from 'react';

const mockBulkInquiries = [
  {
    id: 'BULK_001',
    company: 'Acme Corp',
    contactPerson: 'Rahul Sharma',
    email: 'rahul@acme.com',
    phone: '+91 90000 11111',
    product: 'Organic Almonds',
    quantity: 100,
    message: 'Need 100kg for corporate gifting. Please quote best price.',
    date: '2025-01-10',
    status: 'Pending',
  },
  {
    id: 'BULK_002',
    company: 'Global Foods',
    contactPerson: 'Priya Verma',
    email: 'priya@globalfoods.com',
    phone: '+91 90000 22222',
    product: 'Premium Cashews',
    quantity: 200,
    message: 'Looking for 200kg for export. Need price and delivery time.',
    date: '2025-01-12',
    status: 'Responded',
  },
  {
    id: 'BULK_003',
    company: 'Healthy Bites',
    contactPerson: 'Amit Singh',
    email: 'amit@healthybites.com',
    phone: '+91 90000 33333',
    product: 'Mixed Dry Fruits',
    quantity: 150,
    message: 'Interested in 150kg. Please share samples and rates.',
    date: '2025-01-14',
    status: 'Closed',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'Responded':
      return 'bg-blue-100 text-blue-700';
    case 'Closed':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const Bulkinquiry = () => {
  const [inquiries, setInquiries] = useState(mockBulkInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    const updated = inquiries.map((inquiry) =>
      inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
    );
    setInquiries(updated);
  };

  return (
    <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
      <div className="min-w-[800px]">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-[#0284c7]">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Inquiry ID</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Total Orders</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Contact Person</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Address</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Quantity</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Date</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
              <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">User Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {inquiries.map((inq) => (
              <tr key={inq.id} className="hover:bg-gray-50 transition-all">
                <td className="px-4 md:px-6 py-4 text-sm text-gray-700 font-medium">{inq.id}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{inq.company}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{inq.contactPerson}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{inq.product}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{inq.quantity}</td>
                <td className="px-4 md:px-6 py-4 text-sm">{inq.date}</td>
                <td className="px-4 md:px-6 py-4 text-sm space-y-1">
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(inq.status)}`}>
                      {inq.status}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    <button
                      onClick={() => handleStatusChange(inq.id, 'Responded')}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(inq.id, 'Closed')}
                      className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleStatusChange(inq.id, 'Pending')}
                      className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded hover:bg-yellow-200"
                    >
                      Pending
                    </button>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <button
                    onClick={() => setSelectedInquiry(inq)}
                    className="text-xs cursor-pointer bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-medium hover:bg-blue-200 transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for inquiry details */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-lg p-4 md:p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              <span>&times;</span>
            </button>
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Bulk Inquiry Details: {selectedInquiry.id}
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Company Information</h3>
              <p><strong>Company:</strong> {selectedInquiry.company}</p>
              <p><strong>Contact Person:</strong> {selectedInquiry.contactPerson}</p>
              <p><strong>Email:</strong> {selectedInquiry.email}</p>
              <p><strong>Phone:</strong> {selectedInquiry.phone}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-1">Inquiry Details</h3>
              <p><strong>Product:</strong> {selectedInquiry.product}</p>
              <p><strong>Quantity:</strong> {selectedInquiry.quantity} kg</p>
              <p><strong>Date:</strong> {selectedInquiry.date}</p>
              <p><strong>Status:</strong> <span className={`ml-2 px-2 py-1 text-xs rounded ${getStatusColor(selectedInquiry.status)}`}>{selectedInquiry.status}</span></p>
              <p><strong>Message:</strong> {selectedInquiry.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bulkinquiry;
