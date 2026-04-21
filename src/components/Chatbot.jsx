import { useEffect, useState, useRef } from 'react';
import { useLang } from '../context/LangContext.jsx';

export default function Chatbot() {
  const { lang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const [messages, setMessages] = useState([{ text: t.chatbot.welcome, sender: "bot" }]);
  const [input, setInput] = useState("");

  // Sync welcome message when language changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].sender === "bot") {
        return [{ text: t.chatbot.welcome, sender: "bot" }];
      }
      return prev;
    });
  }, [lang, t.chatbot.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getReply = (question) => {
    const q = question.toLowerCase();
    const r = t.chatbot.replies;
    
    if (q.includes("private") || q.includes("finance") || q.includes("தனியார்") || q.includes("நிजी")) return r.private;
    if (q.includes("cheque") || q.includes("காசோலை") || q.includes("चेक")) return r.cheque;
    if (q.includes("cibil") || q.includes("credit") || q.includes("மதிப்பெண்") || q.includes("स्कोर")) return r.cibil;
    if (q.includes("document") || q.includes("paper") || q.includes("ஆவண") || q.includes("दस्तावेज")) return r.docs;
    if (q.includes("nri") || q.includes("overseas")) return r.nri;
    if (q.includes("interest") || q.includes("rate") || q.includes("வட்டி") || q.includes("ब्याज")) return r.rates;
    if (q.includes("contact") || q.includes("call") || q.includes("தொடர்பு") || q.includes("संपर्क") || q.includes("whatsapp")) return r.contact;

    return r.default;
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { text, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [...prev, { text: getReply(text), sender: "bot" }]);
    }, 800);
  };

  return (
    <>
      <button className="chat-float-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chat">
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h4>{lang === 'ta' ? 'ஹெல்ப்லைன் உதவியாளர்' : lang === 'hi' ? 'हेल्पलाईन सहायक' : 'HelpLine Assistant'}</h4>
          <button onClick={() => setIsOpen(false)} style={{color:'white', fontSize:'20px'}}>✕</button>
        </div>
        
        <div className="chat-body" ref={scrollRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-suggestions">
          {t.chatbot.suggestions.map((s) => (
            <button key={s} className="suggestion-btn" onClick={() => sendMessage(s)}>
              {s}
            </button>
          ))}
        </div>

        <form className="chat-input-area" onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}>
          <input 
            type="text" 
            placeholder={t.chatbot.placeholder} 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">➤</button>
        </form>
      </div>
    </>
  );
}
