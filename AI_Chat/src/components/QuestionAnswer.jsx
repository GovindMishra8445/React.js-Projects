// import Answer from "./Answers";
// const QuestionAnswer = ({ item, index }) => {
//   return (
//     <>
//       <div
//         key={index + Math.random()}
//         className={item.type == "q" ? "flex justify-end" : ""}
//       >
//         {item.type == "q" ? (
//           <li
//             key={index + Math.random()}
//             className="text-right p-1 border-8 dark:bg-zinc-700  dark:border-zinc-700 bg-red-100 border-red-100 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit
//                    "
//           >
//             <Answer
//               ans={item.text}
//               totalResult={1}
//               index={index}
//               type={item.type}
//             />
//           </li>
//         ) : (
//           item.text.map((ansItem, ansIndex) => (
//             <li key={ansIndex + Math.random()} className="text-left p-1">
//               <Answer
//                 ans={ansItem}
//                 totalResult={item.length}
//                 type={item.type}
//                 index={ansIndex}
//               />
//             </li>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default QuestionAnswer;


import React from 'react';
import Answers from './Answers';

const QuestionAnswer = ({ item, index }) => {
  const isQuestion = item.type === 'q';

  return (
    <div className={isQuestion ? 'flex justify-end' : ''}>
      {isQuestion ? (
        <div className="max-w-[75%] md:max-w-[60%]">
          <div className="bg-violet-500 text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-sm">
            <Answers
              ans={item.text}
              totalResult={1}
              index={index}
              type={item.type}
            />
          </div>
        </div>
      ) : (
        <div className="max-w-[85%] md:max-w-[75%]">
          <div className="bg-white dark:bg-zinc-700 px-4 py-3 rounded-2xl shadow-sm">
            {item.text.map((ansItem, ansIndex) => (
              <div key={ansIndex} className="text-left">
                <Answers
                  ans={ansItem}
                  totalResult={item.text.length}
                  type={item.type}
                  index={ansIndex}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
