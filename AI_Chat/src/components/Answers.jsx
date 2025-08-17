import React, { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStarts } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";

const Answers = ({ ans, totalResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, [ans]);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <div className="my-4 rounded-md overflow-hidden">
          <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, "")}
            language={match[1]}
            style={atomOneDark}
            PreTag="div"
            className="rounded-md"
            customStyle={{
              borderRadius: "0.375rem",
              fontSize: "0.9rem",
              padding: "1rem",
            }}
          />
        </div>
      ) : (
        <code
          {...props}
          className={`${className} bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm`}
        >
          {children}
        </code>
      );
    },
    p({ children }) {
      return <p className="mb-3 last:mb-0">{children}</p>;
    },
    h1({ children }) {
      return <h1 className="text-xl font-bold mb-3 mt-4">{children}</h1>;
    },
    h2({ children }) {
      return <h2 className="text-lg font-bold mb-2 mt-4">{children}</h2>;
    },
    h3({ children }) {
      return <h3 className="text-md font-bold mb-2 mt-3">{children}</h3>;
    },
    ul({ children }) {
      return <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>;
    },
    ol({ children }) {
      return <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>;
    },
    li({ children }) {
      return <li className="mb-1">{children}</li>;
    },
    blockquote({ children }) {
      return (
        <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-3 py-1 my-2 italic">
          {children}
        </blockquote>
      );
    },
  };

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="text-lg font-semibold mb-2 block">{answer}</span>
      ) : heading ? (
        <span className="text-base font-semibold mb-1 block">{answer}</span>
      ) : (
        <div
          className={`${
            type === "q" ? "text-white" : "dark:text-zinc-100 text-zinc-800"
          }`}
        >
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default Answers;
