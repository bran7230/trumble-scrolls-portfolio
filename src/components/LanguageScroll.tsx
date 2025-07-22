import { Code, Coffee, Palette, Globe, Database, Terminal, Zap, Cpu, FileCode, Braces } from 'lucide-react';

const languageIcons = [
  { name: 'C++', icon: Code },
  { name: 'Java', icon: Coffee },
  { name: 'C#', icon: Braces },
  { name: 'CUDA', icon: Cpu },
  { name: 'Python', icon: FileCode },
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Zap },
  { name: 'SQL', icon: Database },
  { name: 'Bash', icon: Terminal }
];

export const LanguageScroll = () => {
  // Triple the array for seamless infinite scrolling
  const scrollItems = [...languageIcons, ...languageIcons, ...languageIcons];

  return (
    <div className="w-full overflow-hidden bg-secondary/20 border-y border-border py-4">
      <div 
        className="flex animate-scroll-left"
      >
        {scrollItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 mx-3 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
              style={{ width: '180px' }}
            >
              <IconComponent className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};