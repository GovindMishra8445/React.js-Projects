// import React, { useState } from "react";
// import { useFilter } from "../hooks/useFilter";
// import ContextMenu from "../components/ContextMenu";

// const ExpenseTable = ({
//   expenses,
//   setExpenses,
//   setExpense,
//   setEditingRowId,
// }) => {
//   // use hooks logic code

//   const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);
//   const [menuPosition, setMenuPosition] = useState({});
//   const [rowId, setRowId] = useState("");
//   const [sortCallBack, setSortCallBack] = useState(() => () => {});

//   const total = filteredData.reduce(
//     (accumulator, current) => accumulator + parseInt(current.amount),
//     0
//   );

//   // without hooks logic code
//   // const [category, setCategory] = useState("");

//   // const filterData = expense.filter((expense) => {
//   //   return expense.category.toLowerCase().includes(category);
//   // });
//   return (
//     <>
//       <ContextMenu
//         menuPosition={menuPosition}
//         setExpense={setExpense}
//         setMenuPosition={setMenuPosition}
//         expenses={expenses}
//         setExpenses={setExpenses}
//         setEditingRowId={setEditingRowId}
//         rowId={rowId}
//       />
//       <table
//         className="expense-table"
//         onClick={() => {
//           if (menuPosition.left) {
//             setMenuPosition({});
//           }
//         }}
//       >
//         <thead>
//           <tr>
//           <th className="amount-column">
//               <div>
//                 <span>Title</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="10"
//                   viewBox="0 0 384 512"
//                   className="arrow up-arrow"
//                   onClick={() => {
//                     setSortCallBack(() => (a, b) => a.title.localeCompare(b.title));
//                   }}
//                 >
//                   <title>Ascending</title>
//                   <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="10"
//                   viewBox="0 0 384 512"
//                   className="arrow down-arrow"
//                   onClick={() => {
//                     setSortCallBack(() => (a, b) => b.title.localeCompare(a.title));
//                   }}
//                 >
//                   <title>Descending</title>
//                   <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
//                 </svg>
//               </div>
//             </th>
//             <th>
//               <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
//                 <option value="">All</option>
//                 <option value="grocery">Grocery</option>
//                 <option value="clothes">Clothes</option>
//                 <option value="bills">Bills</option>
//                 <option value="education">Education</option>
//                 <option value="medicine">Medicine</option>
//                 <option value="clothes">Clothes</option>
//                 <option value="bills">Bills</option>
//                 <option value="education">Education</option>
//                 <option value="medicine">Medicine</option>
//               </select>
//             </th>
            
//             <th className="amount-column">
//               <div>
//                 <span>Amount</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="10"
//                   viewBox="0 0 384 512"
//                   className="arrow up-arrow"
//                   onClick={() => {
//                     setSortCallBack(() => (a, b) => a.amount - b.amount);
//                   }}
//                 >
//                   <title>Ascending</title>
//                   <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="10"
//                   viewBox="0 0 384 512"
//                   className="arrow down-arrow"
//                   onClick={() => {
//                     setSortCallBack(() => (a, b) => b.amount - a.amount);
//                   }}
//                 >
//                   <title>Descending</title>
//                   <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
//                 </svg>
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData
//             .sort(sortCallBack)
//             .map(({ id, title, category, amount }) => (
//               <tr
//                 key={id}
//                 onContextMenu={(e) => {
//                   e.preventDefault();
//                   setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 });
//                   setRowId(id);
//                 }}
//               >
//                 <td>{title}</td>
//                 <td>{category}</td>
//                 <td>₹{amount}</td>
//               </tr>
//             ))}
//           <tr>
//             <th>Total</th>
//             <th
//               className="clear-sort"
//               onClick={() => {
//                 setSortCallBack(() => () => {});
//               }}
//             >
//               Clear Data
//             </th>
//             <th>₹{total}</th>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ExpenseTable;






import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

const ExpenseTable = ({
  expenses,
  setExpenses,
  setExpense,
  setEditingRowId,
}) => {
  const [filteredData, setQuery, query] = useFilter(expenses, (data) => data.category);
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null
  });

  const sortData = (data, config) => {
    if (!config.key) return data;
    
    return [...data].sort((a, b) => {
      if (config.key === 'amount') {
        return config.direction === 'ascending' 
          ? parseInt(a.amount) - parseInt(b.amount) 
          : parseInt(b.amount) - parseInt(a.amount);
      } else {
        return config.direction === 'ascending'
          ? a[config.key].localeCompare(b[config.key])
          : b[config.key].localeCompare(a[config.key]);
      }
    });
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const clearSort = () => {
    setSortConfig({ key: null, direction: null });
  };

  const sortedData = sortData(filteredData, sortConfig);
  
  const total = sortedData.reduce(
    (accumulator, current) => accumulator + parseInt(current.amount || 0),
    0
  );

  const CATEGORIES = [
    "All",
    "Grocery",
    "Clothes",
    "Bills",
    "Education",
    "Medicine",
    "Entertainment",
    "Transportation",
    "Housing",
    "Food",
    "Other"
  ];

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setExpense={setExpense}
        setMenuPosition={setMenuPosition}
        expenses={expenses}
        setExpenses={setExpenses}
        setEditingRowId={setEditingRowId}
        rowId={rowId}
      />
      <table
        className="expense-table"
        onClick={() => {
          if (menuPosition.left) {
            setMenuPosition({});
          }
        }}
      >
        <thead>
          <tr>
            <th className="amount-column">
              <div>
                <span>Title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => requestSort('title')}
                  style={{ 
                    fill: sortConfig.key === 'title' && sortConfig.direction === 'ascending' 
                      ? '#007bff' : '#000' 
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortConfig({ key: 'title', direction: 'descending' });
                  }}
                  style={{ 
                    fill: sortConfig.key === 'title' && sortConfig.direction === 'descending' 
                      ? '#007bff' : '#000' 
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
            <th>
              <select 
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              >
                {CATEGORIES.map((category, index) => (
                  <option key={index} value={index === 0 ? "" : category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => requestSort('amount')}
                  style={{ 
                    fill: sortConfig.key === 'amount' && sortConfig.direction === 'ascending' 
                      ? '#007bff' : '#000' 
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortConfig({ key: 'amount', direction: 'descending' });
                  }}
                  style={{ 
                    fill: sortConfig.key === 'amount' && sortConfig.direction === 'descending' 
                      ? '#007bff' : '#000' 
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map(({ id, title, category, amount }) => (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 });
                  setRowId(id);
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹{amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No expenses found
              </td>
            </tr>
          )}
          <tr className="total-row">
            <th>Total</th>
            <th
              className="clear-sort"
              onClick={clearSort}
              style={{ cursor: sortConfig.key ? 'pointer' : 'default' }}
            >
              {sortConfig.key ? "Clear Sort" : ""}
            </th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;