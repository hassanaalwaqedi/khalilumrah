"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown } from 'lucide-react';
import { chatbotData, defaultResponse } from '@/data/chatbotData';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([
        { type: 'bot', text: 'أهلاً بك! أنا مساعدك الذكي من خليل الواقدي. كيف يمكنني خدمتك في رحلتك الإيمانية اليوم؟' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI processing time
        setTimeout(() => {
            const response = findResponse(userMessage);
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
            setIsTyping(false);
        }, 1000);
    };

    const findResponse = (query: string): string => {
        const lowerQuery = query.toLowerCase();

        // Simple keyword matching
        const match = chatbotData.find(item =>
            item.keywords.some(keyword => lowerQuery.includes(keyword))
        );

        if (match) return match.answer;
        return defaultResponse;
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 left-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${isOpen
                        ? 'bg-red-500 hover:bg-red-600 rotate-90'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600'
                    }`}
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
                {!isOpen && (
                    <span className="text-white font-medium text-sm hidden md:inline-block">
                        مساعد الحاج
                    </span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 left-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-700 to-teal-600 p-4 flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                                <Bot className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                    مساعد الواقدي
                                    <Sparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
                                </h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-emerald-100 text-xs">متصل الآن</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-thin scrollbar-thumb-emerald-200">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'
                                    }`}>
                                    {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === 'user'
                                        ? 'bg-indigo-600 text-white rounded-tr-none'
                                        : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                                    }`}>
                                    {msg.text.split('\n').map((line, i) => (
                                        <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                    <Bot size={16} />
                                </div>
                                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="relative flex items-center gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="اكتب سؤالك هنا..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-400 text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute left-2 p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} className={inputValue.trim() ? '' : 'opacity-80'} />
                            </button>
                        </div>
                        <p className="text-center text-[10px] text-gray-400 mt-2">
                            يعمل هذا الشات بوت بواسطة الذكاء الاصطناعي لتسهيل خدمتك
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
