import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../context/LangContext.jsx';

export default function Chatbot() {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const welcome = useMemo(() => (
    lang === 'ta'
      ? "வணக்கம்! 👋 கடன் வகை, வட்டி, ஆவணங்கள், CIBIL உதவி போன்றவற்றை கேளுங்கள்."
      : lang === 'hi'
        ? "नमस्ते! 👋 लोन प्रकार, ब्याज, दस्तावेज़ और CIBIL सहायता के बारे में पूछें।"
        : "Hi there! 👋 Ask about loan types, interest rates, documents, and CIBIL support."
  ), [lang]);
  const [messages, setMessages] = useState([{ text: welcome, sender: "bot" }]);
  const [input, setInput] = useState("");
  const suggestions = useMemo(() => (
    lang === 'ta'
      ? ["கடன் வகைகள்", "வட்டி விகிதம்", "தேவையான ஆவணங்கள்", "குறைந்த CIBIL உதவி", "ஆதரவை தொடர்பு கொள்ள"]
      : lang === 'hi'
        ? ["लोन प्रकार", "ब्याज दर", "ज़रूरी दस्तावेज़", "लो CIBIL सहायता", "सपोर्ट से बात करें"]
        : ["Loan types", "Interest rates", "Required documents", "Low CIBIL help", "Talk to support"]
  ), [lang]);

  useEffect(() => {
    setMessages([{ text: welcome, sender: "bot" }]);
  }, [welcome]);

  const getReply = (question) => {
    const q = question.toLowerCase();
    if (q.includes("interest") || q.includes("rate") || q.includes("வட்டி") || q.includes("ब्याज")) {
      return "Interest rates depend on loan type, profile, and documents. We can guide you with an exact quote after a quick eligibility check.";
    }
    if (q.includes("document") || q.includes("paper") || q.includes("kyc") || q.includes("ஆவண") || q.includes("दस्तावेज")) {
      return "Common documents: PAN, ID proof, address proof, bank statements, and income/business proof. Requirements change by product.";
    }
    if (q.includes("cibil") || q.includes("credit")) {
      return "Yes, we support low CIBIL cases through suitable lenders. Share your profile and we will suggest available options.";
    }
    if ((q.includes("loan") && q.includes("type")) || q.includes("கடன் வக") || q.includes("लोन प्रकार")) {
      return "We support Private Finance, Project Loan, NRI Loan, Investment Loan, Low CIBIL Loan, and Cheque Basis Loan.";
    }
    if (q.includes("support") || q.includes("call") || q.includes("contact") || q.includes("தொடர்பு") || q.includes("संपर्क")) {
      return "You can call +91 809 809 6666 or use the Contact form. Our team usually responds within 2 business hours.";
    }
    if (q.includes("emi")) {
      return "Use the EMI calculator on the home page. Adjust amount, rate, and tenure to get monthly EMI instantly.";
    }
    return "Thanks for your message. I can help with loan types, rates, documents, low CIBIL options, and application steps.";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { text, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages([...newMessages, {
        text: getReply(text),
        sender: "bot" 
      }]);
    }, 1000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input);
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
        <div className="chat-suggestions">
          {suggestions.map((q) => (
            <button key={q} type="button" className="suggestion-btn" onClick={() => sendMessage(q)}>
              {q}
            </button>
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
