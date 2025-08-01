
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Subject, ChatMessage } from '../types.ts';
import type { Chat } from '@google/genai';
import { createChatSession } from '../services/geminiService.ts';

// --- Helper Component: CodeBlock ---
interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-md my-4">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-md">
        <span className="text-sm text-slate-400">{language || 'code'}</span>
        <button onClick={handleCopy} className="text-sm text-slate-400 hover:text-white">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// --- Helper Component: MessageRenderer ---
const MessageRenderer: React.FC<{ content: string }> = ({ content }) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return (
        <div>
            {parts.map((part, index) => {
                const codeBlockMatch = part.match(/```(\w+)?\n([\s\S]*?)```/);
                if (codeBlockMatch) {
                    const language = codeBlockMatch[1] || '';
                    const code = codeBlockMatch[2].trim();
                    return <CodeBlock key={index} language={language} code={code} />;
                }
                // Using a div for paragraphs to handle newlines correctly
                return part.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={`${index}-${lineIndex}`}>
                        {line}
                        <br />
                    </React.Fragment>
                ));
            })}
        </div>
    );
};


// --- Main Chat Interface Component ---
interface ChatInterfaceProps {
  subject: Subject;
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ subject, onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // subject.systemInstruction is now available, resolving the original error
    chatSession.current = createChatSession(subject.systemInstruction);
    setMessages([]);
  }, [subject]);
  
  useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        if (chatSession.current) {
            const stream = await chatSession.current.sendMessageStream({ message: input });
            
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', content: '...' }]);
            
            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { role: 'model', content: modelResponse };
                    return newMessages;
                });
            }
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, { role: 'model', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
        setIsLoading(false);
    }
  }, [input, isLoading]);

  return (
    <div className="flex flex-col h-[calc(100vh-150px)] max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-2xl">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">&larr; Back to Syllabus</button>
        <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">{subject.name}</span>
            <div className="w-8 h-8">{subject.icon}</div>
        </div>
      </div>

      <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-6">
        {messages.map((msg, index) => (
            <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && <div className="w-8 h-8 shrink-0">{subject.icon}</div>}
                <div className={`max-w-xl p-4 rounded-lg text-white ${msg.role === 'user' ? 'bg-sky-600' : 'bg-slate-700'}`}>
                    {msg.role === 'model' && msg.content === '...' ? (
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                           <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                           <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                        </div>
                    ) : (
                       <MessageRenderer content={msg.content} />
                    )}
                </div>
            </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-700">
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask about ${subject.name}...`}
            className="flex-1 bg-slate-900 text-white p-3 rounded-lg border border-slate-600 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed">
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;