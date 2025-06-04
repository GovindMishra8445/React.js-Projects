import { useState } from 'react';

const CompanyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Trigger Button */}
      <a
        href="/src/components/CompanyPolicy.jsx"
        onClick={() => setIsOpen(true)}
        className="text-blue-600 underline cursor-pointer hover:text-blue-800"
      >
        Open Popup Modal
      </a>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Container */}
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Welcome!</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="mb-6">
              <p className="text-gray-600">
                This is a beautiful modal created with React and Tailwind CSS. 
                You can add any content here including forms, images, or videos.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyPolicy;