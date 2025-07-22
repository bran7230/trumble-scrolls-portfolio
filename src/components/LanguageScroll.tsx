const languages = [
  'C++', 'Java', 'C#', 'CUDA', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Bash'
];

export const LanguageScroll = () => {
  // Triple the array for truly seamless scrolling
  const scrollLanguages = [...languages, ...languages, ...languages];

  return (
    <div className="w-full overflow-hidden bg-secondary/20 border-y border-border">
      <div 
        className="flex"
        style={{
          animation: 'scroll-seamless 30s linear infinite',
        }}
      >
        {scrollLanguages.map((language, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 py-4 mx-4 text-lg font-semibold text-foreground whitespace-nowrap"
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};