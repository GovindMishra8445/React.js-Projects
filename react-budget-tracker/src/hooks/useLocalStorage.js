// import { useEffect, useState } from "react";

// export function useLocalStorage(key, initialData) {
//   const [data, setData] = useState(initialData);

//   useEffect(() => {
//     const exitingData = JSON.parse(localStorage.getItem(key));
//     if (exitingData) {
//       setData(exitingData);
//     } else {
//       localStorage.setItem(key, JSON.stringify(initialData));
//     }
//   }, []);

//   const updateLocalStorage = (newData) => {
//     if (typeof newData === "function") {
//       localStorage.setItem(key, JSON.stringify(newData(data)));
//     } else {
//       localStorage.setItem(key, JSON.stringify(newData));
//     }
//     setData(newData);
//   };
//   return [data, updateLocalStorage];
// }




// // useLocalStorage.js
// import { useState, useEffect } from "react";

// export function useLocalStorage(key, initialValue) {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(error);
//       return initialValue;
//     }
//   });

//   const setValue = (value) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const handleStorageChange = (e) => {
//       if (e.key === key) {
//         setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [key, initialValue]);

//   return [storedValue, setValue];
// }



// hooks/useLocalStorage.js
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      const updatedData = newData(data);
      localStorage.setItem(key, JSON.stringify(updatedData));
      setData(updatedData);
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
    }
  };
  return [data, updateLocalStorage];
}