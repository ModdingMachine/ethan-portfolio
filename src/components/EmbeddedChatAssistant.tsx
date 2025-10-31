import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendChatMessage } from "@/lib/chat";
import { parseMarkdown } from "@/lib/markdown";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const EmbeddedChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiAvailable, setApiAvailable] = useState<boolean | null>(null);
  const { toast } = useToast();

  // Check API availability on mount
  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await sendChatMessage('ping');
        setApiAvailable(true);
        setMessages([
          {
            id: '1',
            text: "I can help answer more in depth questions about Ethan and show off what he can do!",
            isUser: false,
            timestamp: new Date()
          }
        ]);
      } catch (error) {
        setApiAvailable(false);
        setMessages([
          {
            id: '1',
            text: "⚠️ AI Assistant is currently unavailable. The API key may be disabled or misconfigured. Please contact the site administrator.",
            isUser: false,
            timestamp: new Date()
          }
        ]);
      }
    };
    checkAPI();
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(inputValue);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-apple-bg-primary/30 backdrop-blur-sm rounded-apple-lg border border-apple-border-primary overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-2 md:p-3 border-b border-apple-border-primary bg-apple-bg-secondary/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">AI Assistant</h4>
            <Badge variant="secondary" className="text-xs bg-apple-green-bg text-apple-green">
              Online
            </Badge>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-60 md:h-80 overflow-y-auto p-2 md:p-3 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[85%] md:max-w-[80%] ${
                message.isUser ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
                             <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                 message.isUser 
                   ? 'bg-apple-blue text-white' 
                   : 'bg-apple-blue'
               }`}>
                 {message.isUser ? (
                   <User className="h-2.5 w-2.5 md:h-3 md:w-3" />
                 ) : (
                   <Bot className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                 )}
               </div>
               <div
                 className={`rounded-apple-md p-1.5 md:p-2 text-xs md:text-sm ${
                   message.isUser
                     ? 'bg-apple-blue text-white'
                     : 'bg-apple-bg-secondary text-apple-text-primary text-left'
                 }`}
               >
                {message.isUser ? message.text : parseMarkdown(message.text)}
              </div>
            </div>
          </div>
        ))}
                 {isLoading && (
           <div className="flex justify-start">
             <div className="flex items-start space-x-2">
               <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-apple-blue flex items-center justify-center">
                 <Bot className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
               </div>
               <div className="bg-apple-bg-secondary rounded-apple-md p-1.5 md:p-2 text-xs md:text-sm">
                 <div className="flex space-x-1">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-apple-blue rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                 </div>
               </div>
             </div>
           </div>
         )}
      </div>

      {/* Input */}
      <div className="p-2 md:p-3 border-t border-apple-border-primary bg-apple-bg-secondary/50">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Ethan's experience..."
            className="flex-1 transition-apple-normal bg-apple-bg-primary/50 text-xs md:text-sm border-apple-border-primary focus:border-apple-blue"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim() || apiAvailable === false}
            size="sm"
            className="bg-apple-blue hover:bg-apple-blue-light transition-smooth px-2 md:px-3 disabled:opacity-50"
          >
            <Send className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};