// import { useState } from "react";
// import "./App.css";
// import ExpenseFrom from "./components/ExpenseFrom";
// import ExpenseTable from "./components/ExpenseTable";
// import expenseData from "./expenseData";
// import { useLocalStorage } from "./hooks/useLocalStorage";

// function App() {
//   const [expense, setExpense] = useLocalStorage("expense", {
//     title: "",
//     category: "",
//     amount: "",
//   });
//   const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
//   const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");

//   return (
//     <>
//       <main>
//         <h1>Track Your Expense</h1>
//         <div className="expense-tracker">
//           <ExpenseFrom
//             setExpenses={setExpenses}
//             expense={expense}
//             setExpense={setExpense}
//             editingRowId={editingRowId}
//             setEditingRowId={setEditingRowId}
//           />
//           <ExpenseTable
//             expenses={expenses}
//             setExpense={setExpense}
//             setExpenses={setExpenses}
//             setEditingRowId={setEditingRowId}
//           />
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import "./App.css";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ExpenseForm from "./components/ExpenseFrom";
import ExpenseTable from "./components/ExpenseTable";
import Stats from "./components/Stats";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");
  const [showStats, setShowStats] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  // Toggle animation function
  const toggleAnimation = () => {
    setAnimationEnabled(!animationEnabled);
    document.body.classList.toggle('no-animations', !animationEnabled);
  };

  // Calculate stats for the Stats component
  const calculateStats = () => {
    if (!expenses.length) return {
      totalExpenses: 0,
      averageAmount: 0,
      highestExpense: { title: 'None', amount: 0 },
      categoryCounts: {}
    };

    const totalExpenses = expenses.reduce((sum, exp) => sum + parseInt(exp.amount), 0);
    const averageAmount = Math.round(totalExpenses / expenses.length);
    const highestExpense = expenses.reduce((prev, current) => 
      parseInt(prev.amount) > parseInt(current.amount) ? prev : current
    );
    
    const categoryCounts = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + 1;
      return acc;
    }, {});

    return {
      totalExpenses,
      averageAmount,
      highestExpense,
      categoryCounts
    };
  };

  return (
    <>
      <div className={`app-container ${isDarkMode ? 'dark-theme' : ''} ${animationEnabled ? 'animations-enabled' : 'no-animations'}`}>
        <div className="background-animation">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
        
        <main>
          <div className="header-container">
            <h1>Expense Tracker <span className="header-emoji">💰</span></h1>
            <div className="settings">
              <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
              <button className="animation-toggle" onClick={toggleAnimation}>
                {animationEnabled ? '✓ Animations' : '✗ Animations'}
              </button>
              <button 
                className="stats-toggle" 
                onClick={() => setShowStats(!showStats)}
              >
                {showStats ? 'Hide Stats' : 'Show Stats'}
              </button>
            </div>
          </div>
          
          {showStats && <Stats stats={calculateStats()} />}
          
          <div className="expense-tracker">
            <ExpenseForm
              setExpenses={setExpenses}
              expense={expense}
              setExpense={setExpense}
              editingRowId={editingRowId}
              setEditingRowId={setEditingRowId}
            />
            <ExpenseTable
              expenses={expenses}
              setExpense={setExpense}
              setExpenses={setExpenses}
              setEditingRowId={setEditingRowId}
            />
          </div>
        </main>
        
        <footer>
          <p>© {new Date().getFullYear()} Expense Tracker App</p>
        </footer>
      </div>
    </>
  );
}

export default App;