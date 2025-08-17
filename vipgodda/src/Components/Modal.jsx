const Modal = ({onClose, open, onApprove, onSelect}) => {

    return (
        <>
        {
        open && (
        <div className="absolute top-44 left-[40%]">
            <div className="p-4 w-[25rem]">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 h-[16rem]">
                    <button onClick={onClose} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span onClick={onClose} className="sr-only">Close modal</span>
                    </button>
                    <div className="p-8 md:p-5 text-center flex flex-col gap-10">
                        {/* <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Do you want to approve this student's admission</h3> */}
                        <h1>Choosse Payment Type</h1>
                        <div>
                            <select type="text" name='pymt' onChange={(e) => onSelect(e.target.value)} className="h-[2.5rem] pr-1">
                                <option value=''>Select Payment Method</option>
                                <option value='online'>Online</option>
                                <option value='offline'>Offline</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={onApprove} type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Approved
                            </button>
                            <button onClick={onClose} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }
        </>        
    );
}

export default Modal;