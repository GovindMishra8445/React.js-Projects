// import React, { useState } from "react";
// import Input from "./Input";
// import Select from "./Select";
// import { toast } from "react-toastify";

// const ExpenseForm = ({
//   expense,
//   setExpense,
//   setExpenses,
//   editingRowId,
//   setEditingRowId,
// }) => {
//   const [errors, setErrors] = useState({});

//   const validationConfig = {
//     title: [
//       { required: true, errorMessage: "Please enter a title." },
//       {
//         minLength: 3,
//         errorMessage: "Title should be at least 3 characters.",
//       },
//     ],
//     category: [
//       { required: true, errorMessage: "Please select a category." },
//     ],
//     amount: [
//       { required: true, errorMessage: "Please enter an amount." },
//       {
//         pattern: /^(0|[1-9]\d*)$/,
//         errorMessage: "Please enter a valid number.",
//       },
//     ],
//   };

//   const validate = (formData) => {
//     const errorData = {};

//     Object.entries(formData).forEach(([key, value]) => {
//       for (const rule of validationConfig[key] || []) {
//         if (rule.required && !value) {
//           errorData[key] = rule.errorMessage;
//           break;
//         }
//         if (rule.minLength && value.length < rule.minLength) {
//           errorData[key] = rule.errorMessage;
//           break;
//         }
//         if (rule.pattern && !rule.pattern.test(value)) {
//           errorData[key] = rule.errorMessage;
//           break;
//         }
//       }
//     });

//     setErrors(errorData);
//     return errorData;
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const validationResult = validate(expense);
//   //   if (Object.keys(validationResult).length > 0) return;

//   //   if (editingRowId) {
//   //     setExpenses((prev) =>
//   //       prev.map((item) =>
//   //         item.id === editingRowId ? { ...expense, id: editingRowId } : item
//   //       )
//   //     );
//   //   } else {
//   //     setExpenses((prev) => [
//   //       ...prev,
//   //       { ...expense, id: crypto.randomUUID() },
//   //     ]);
//   //   }

//   //   setExpense({ title: "", category: "", amount: "" });
//   //   setEditingRowId("");
//   // };



//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const validateResult = validate(expense);
//     if (Object.keys(validateResult).length) {
//       toast.error("Please fix form errors");
//       return;
//     }
  
//     if (editingRowId) {
//       setExpenses((prevState) =>
//         prevState.map((prevExpense) => {
//           if (prevExpense.id === editingRowId) {
//             return { ...expense, id: editingRowId };
//           }
//           return prevExpense;
//         })
//       );
//       toast.success("Expense updated successfully!");
//     } else {
//       setExpenses((prevState) => [
//         ...prevState,
//         { ...expense, id: crypto.randomUUID() },
//       ]);
//       toast.success("Expense added successfully!");
//     }
  
//     setExpense({
//       title: "",
//       category: "",
//       amount: "",
//     });
//     setEditingRowId("");
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExpense((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setErrors({});
//   };

//   const categoryOptions = [
//     "Grocery",
//     "Clothes",
//     "Bills",
//     "Education",
//     "Medicine",
//   ];

//   return (
//     <form className="expense-form" onSubmit={handleSubmit}>
//       <Input
//         label="Title"
//         id="title"
//         name="title"
//         value={expense.title}
//         onChange={handleChange}
//         placeholder="Enter expense title"
//         error={errors.title}
//       />

//       <Select
//         label="Category"
//         id="category"
//         name="category"
//         value={expense.category}
//         onChange={handleChange}
//         options={categoryOptions}
//         placeholder="Select a category"
//         defaultOption="Select Category"
//         error={errors.category}
//       />

//       <Input
//         label="Amount"
//         id="amount"
//         name="amount"
//         value={expense.amount}
//         onChange={handleChange}
//         placeholder="Enter the amount"
//         error={errors.amount}
//       />

//       <button className="add-btn" type="submit">
//         {editingRowId ? "Save" : "Add"}
//       </button>
//     </form>
//   );
// };

// export default ExpenseForm;





// components/ExpenseForm.js
import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  expense,
  setExpense,
  setExpenses,
  editingRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const CATEGORIES = [
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

  const validationConfig = {
    title: [
      { required: true, errorMessage: "Please enter the title" },
      {
        minLength: 3,
        minLengthMessage: "Title should be at least 3 characters",
      },
    ],
    category: [
      { required: true, errorMessage: "Please select a category" },
    ],
    amount: [
      { required: true, errorMessage: "Please enter an amount" },
      {
        pattern: /^(0|[1-9]\d*)$/,
        errorMessage: "Please enter a valid number",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.errorMessage;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.minLengthMessage;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.errorMessage;
          return true;
        }
        return false;
      });
    });

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return prevExpense;
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRowId("");
      return;
    }
    
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        placeholder="Enter expense title"
        error={errors.title}
      />
      
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={CATEGORIES}
        defaultOption="Select Category"
        error={errors.category}
      />
      
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Enter amount"
        error={errors.amount}
      />
      
      <button className="add-btn">
        {editingRowId ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;