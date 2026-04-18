import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 How can we help you with your financial needs today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages([...newMessages, { 
        text: "Thank you for reaching out! A HelpLine Finance executive will be in touch with you shortly. For immediate assistance, call us at +91 809 809 6666.", 
        sender: "bot" 
      }]);
    }, 1000);
  };

  return (
    <>
      <style>{`
        .chat-float-btn {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 900;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--sky-600), var(--sky-800));
          color: white;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(12,35,64,.3);
          cursor: pointer;
          transition: transform .3s;
          border: none;
        }
        .chat-float-btn:hover {
          transform: scale(1.1);
        }
        .chat-window {
          position: fixed;
          bottom: 90px;
          right: 26px;
          width: 340px;
          height: 480px;
          background: white;
          border-radius: var(--r-xl);
          box-shadow: 0 16px 50px rgba(12,35,64,.2);
          z-index: 900;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: all 0.3s var(--ease);
          border: 1px solid var(--border);
        }
        .chat-window.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .chat-header {
          background: linear-gradient(135deg, var(--sky-800), var(--sky-900));
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-header h4 {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }
        .chat-header button {
          color: white;
          font-size: 20px;
          opacity: 0.7;
          transition: 0.2s;
        }
        .chat-header button:hover {
          opacity: 1;
        }
        .chat-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: var(--grey-50);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chat-msg {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 13.5px;
          line-height: 1.5;
        }
        .chat-msg.bot {
          align-self: flex-start;
          background: white;
          color: var(--text);
          border: 1px solid var(--border);
          border-bottom-left-radius: 4px;
        }
        .chat-msg.user {
          align-self: flex-end;
          background: linear-gradient(135deg, var(--sky-600), var(--sky-700));
          color: white;
          border-bottom-right-radius: 4px;
        }
        .chat-input-area {
          padding: 14px;
          background: white;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 8px;
        }
        .chat-input-area input {
          flex: 1;
          padding: 10px 14px;
          border-radius: 20px;
          border: 1px solid var(--border);
          font-size: 13px;
          background: var(--grey-50);
          transition: border-color 0.2s;
        }
        .chat-input-area input:focus {
          border-color: var(--sky-400);
        }
        .chat-input-area button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--sky-600);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
        }
        .chat-input-area button:hover {
          background: var(--sky-700);
        }
        @media(max-width: 600px) {
          .chat-window {
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
            z-index: 1000;
          }
        }
      `}</style>

      {/* Floating Button */}
      <button 
        className="chat-float-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h4>HelpLine Assistant</h4>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <div className="chat-body">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">➤</button>
        </form>
      </div>
    </>
  );
}
