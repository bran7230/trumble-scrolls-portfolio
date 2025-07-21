const languages = [
  'C++', 'Java', 'C#', 'CUDA', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Bash'
];

export const LanguageScroll = () => {
  // Duplicate the array to create seamless loop
  const duplicatedLanguages = [...languages, ...languages];

  return (
    <div className="w-full overflow-hidden bg-secondary/30 border-y border-border">
      <div className="flex animate-scroll-left">
        {duplicatedLanguages.map((language, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 py-4 mx-4 text-lg font-semibold text-primary bg-tech-gradient bg-clip-text text-transparent whitespace-nowrap"
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};