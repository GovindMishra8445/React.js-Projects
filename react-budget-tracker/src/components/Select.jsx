// import React from "react";

// function Select({
//   label,
//   id,
//   name,
//   value,
//   onChange,
//   error,
//   options,
//   defaultOption,
// }) {
//   return (
//     <div className="input-container">
//       <label htmlFor={id}>{label}</label>
//       <select id={id} name={name} value={value} onChange={onChange}>
//         {defaultOption && (
//           <option value="" hidden>
//             {defaultOption}
//           </option>
//         )}
//         {options.map((option, i) => (
//           <option key={i} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       <p className="error">{error}</p>
//     </div>
//   );
// }

// export default Select;




import React from "react";

function Select({
  label,
  id,
  name,
  value,
  onChange,
  error,
  options,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Select;