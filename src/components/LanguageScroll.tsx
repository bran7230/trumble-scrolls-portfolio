import { useState, useEffect } from 'react';

const languages = [
  'C++', 'Java', 'C#', 'CUDA', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Bash'
];

const codeSnippets = [
  '> coding with C++',
  '> building with Java', 
  '> developing in C#',
  '> accelerating with CUDA',
  '> scripting in Python',
  '> structuring with HTML',
  '> styling with CSS', 
  '> programming JavaScript',
  '> querying with SQL',
  '> automating with Bash'
];

export const LanguageScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = codeSnippets[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentIndex]);

  return (
    <div className="w-full bg-card/30 border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6 font-mono text-lg">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-muted-foreground text-sm">terminal</span>
            </div>
            <div className="mt-4 h-8 flex items-center">
              <span className="text-primary">{displayText}</span>
              <span className="animate-pulse text-primary ml-1">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};