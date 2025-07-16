
'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your HOPE healthcare assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Tell me about your products",
    "What are your pricing plans?",
    "How do I get started?",
    "Contact support"
  ];

  const botResponses: { [key: string]: string } = {
    "products": "We offer advanced healthcare solutions including OraCare Pro for oral health screening, AI-powered diagnostics, telemedicine platforms, and comprehensive patient management systems. Would you like to know more about any specific product?",
    "pricing": "We have flexible pricing plans starting from $99/month for our basic telemedicine platform up to enterprise solutions. Our OraCare Pro starts at $2,999. Would you like to see our detailed pricing page?",
    "started": "Getting started is easy! You can sign up for a free consultation, and our team will help you choose the right solution for your practice. We also offer comprehensive training and support.",
    "support": "Our support team is available 24/7 to help you. You can reach us at support@hope-health.com or call 1-800-HOPE-123. We also offer live chat support during business hours.",
    "hello": "Hello! Welcome to HOPE Healthcare Solutions. I'm here to help you learn about our advanced medical technology and find the right solution for your practice.",
    "help": "I can help you with information about our products, pricing, getting started, or connecting you with our support team. What would you like to know?",
    "default": "I understand you're looking for information. Our team specializes in healthcare technology solutions. Could you please be more specific about what you'd like to know? I can help with products, pricing, support, or getting started."
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('product') || lowerMessage.includes('solution')) {
      return botResponses.products;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('plan')) {
      return botResponses.pricing;
    } else if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('signup')) {
      return botResponses.started;
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
      return botResponses.support;
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return botResponses.hello;
    } else if (lowerMessage.includes('what') || lowerMessage.includes('how') || lowerMessage.includes('can you')) {
      return botResponses.help;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${
        isOpen 
          ? 'w-full h-full sm:w-96 sm:h-96 max-w-sm sm:max-w-none inset-0 sm:inset-auto' 
          : 'w-auto h-auto'
      }`}>
        {isOpen ? (
          <div className="bg-card rounded-none sm:rounded-2xl shadow-2xl border-0 sm:border border-custom flex flex-col h-full">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 rounded-none sm:rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-customer-service-2-line text-xs sm:text-sm w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">HOPE Assistant</h3>
                  <p className="text-xs text-blue-100">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer p-1"
                title="Close chat"
              >
                <i className="ri-close-line text-lg sm:text-xl w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-2 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-secondary text-card'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary px-3 sm:px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-body rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-body rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-body rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-3 sm:px-4 pb-2">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="px-2 sm:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 sm:p-4 border-t border-custom">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-card text-heading"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg hover:opacity-90 disabled:bg-gray-300 dark:disabled:bg-gray-600 transition-all cursor-pointer whitespace-nowrap"
                  title="Send message"
                >
                  <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer"
            title="Open chat"
          >
            <i className="ri-customer-service-2-line text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
          </button>
        )}
      </div>
    </>
  );
}