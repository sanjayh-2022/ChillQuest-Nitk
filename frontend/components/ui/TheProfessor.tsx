"use client";
import React, { useState } from "react";

const TheProfessor: React.FC = () => {
  const [messages, setMessages] = useState<{ type: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: `Hmm, let me think... "${input}" is a great question!`,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col max-w-full mx-auto bg-base-300 p-4 shadow-lg rounded-md  h-80p">
      <h2 className="text-xl font-bold text-primary mb-4 text-center uppercase">
        The Professor
      </h2>

      <div className="flex-1 h-full overflow-y-auto p-4 rounded-md bg-neutral text-secondary space-y-4 max-h-[60vh]">
        {messages.length === 0 ? (
          <p className="text-primary-content text-center italic">
            If you have any questions, ask us!
          </p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`chat ${
                message.type === "user" ? "chat-end" : "chat-start"
              }`}
            >
              <div
                className={`chat-bubble ${
                  message.type === "user" ? "bg-green-950 text-secondary-content" : "bg-gray-900 text-primary-content"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 p-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 bg-base-300 text-secondary-content border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Type your question here..."
        />
        <button
          onClick={handleSendMessage}
          className="btn btn-outline ml-2 px-4 py-2 bg-secondary text-secondary-content font-semibold rounded-md hover:bg-primary-focus"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TheProfessor;
