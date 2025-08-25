import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, X, Minimize2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendChatMessage, ConversationMessage } from "@/lib/chat";
import { parseMarkdown } from "@/lib/markdown";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Ethan in AI form... I can help answer questions about his background, experience, and services. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [conversationHistory, setConversationHistory] = useState<ConversationMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Ethan in AI form... I can help answer questions about his background, experience, and services. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
      // Update conversation history BEFORE making the API call
      const updatedHistory = [
        ...conversationHistory,
        { role: 'user' as const, content: inputValue }
      ];
      
      // Send message with updated conversation history
      const response = await sendChatMessage(inputValue, updatedHistory);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Update conversation history with the assistant's response
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: inputValue },
        { role: 'assistant', content: response }
      ]);
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

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 bg-gradient-accent hover:opacity-90 transition-smooth glow-accent shadow-lg"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 w-96 transition-smooth card-glow ${
      isMinimized ? 'h-16' : 'h-[500px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4 text-background" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Ethan's AI Assistant</h3>
            <Badge variant="secondary" className="text-xs bg-success/20 text-success">
              Online
            </Badge>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 p-0"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-accent text-background' 
                      : 'bg-gradient-accent'
                  }`}>
                    {message.isUser ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3 text-background" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-3 text-sm ${
                      message.isUser
                        ? 'bg-accent text-background'
                        : 'bg-muted text-foreground text-left'
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
                  <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center">
                    <Bot className="h-3 w-3 text-background" />
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Ethan's experience..."
                className="flex-1 transition-smooth"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                size="sm"
                className="bg-apple-blue hover:bg-apple-blue-light transition-smooth"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};