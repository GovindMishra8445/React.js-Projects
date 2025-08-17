// function ({ recentHistory, setRecentHistory, setSelectedHistory }) {
//   const clearHistory = () => {
//     localStorage.clear();
//     setRecentHistory([]);
//   };

//   return (
//     <>
//       <div className="col-span-1 dark:bg-zinc-800 bg-red-100 pt-3">
//         <h1 className="text-xl dark:text-white text-zinc-800 flex text-center justify-center">
//           <span>Recent Search</span>
//           <button onClick={clearHistory} className="cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20px"
//               viewBox="0 -960 960 960"
//               width="20px"
//               fill="#EFEFEF"
//             >
//               <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
//             </svg>
//           </button>
//         </h1>
//         <ul className="text-left overflow-auto mt-2">
//           {recentHistory &&
//             recentHistory.map((item, index) => (
//               <li
//                 key={index}
//                 onClick={() => setSelectedHistory(item)}
//                 className="pl-5 px-5 truncate dark:text-zinc-400 text-zinc-700 cursor-pointer dark:hover:bg-zinc-700  dark:hover:text-zinc-200 hover:bg-red-200 hover:text-zinc-800"
//               >
//                 {item}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default RecentSearch;

function RecentSearch({ recentHistory, setRecentHistory, setSelectedHistory }) {
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  if (!recentHistory || recentHistory.length === 0) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b dark:border-zinc-700 border-zinc-200">
          <h2 className="text-lg font-medium dark:text-white text-zinc-800 flex justify-between items-center">
            <span>Recent Searches</span>

            <button
              onClick={clearHistory}
              className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
              aria-label="Clear history"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-center p-4 text-center text-zinc-500 dark:text-zinc-400">
          <p>No recent searches</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b dark:border-zinc-700 border-zinc-200">
        <h2 className="text-lg font-medium dark:text-white text-zinc-800 flex justify-between items-center">
          <span>Recent Searches</span>

          <button
            onClick={clearHistory}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
            aria-label="Clear history"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y dark:divide-zinc-700 divide-zinc-200">
          {recentHistory.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedHistory(item);
              }}
              className="px-4 py-3 truncate dark:text-zinc-300 text-zinc-700 cursor-pointer 
                         hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-zinc-500 dark:text-zinc-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentSearch;
