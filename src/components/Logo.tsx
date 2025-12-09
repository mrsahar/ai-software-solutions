interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-5xl md:text-7xl",
  };

  return (
    <div className={`font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-[#2d5f4d]">Ever</span>
      <span 
        className="bg-gradient-to-r from-[#5a8f6f] via-[#7db357] to-[#a8c64a] bg-clip-text text-transparent"
      >
        logic
      </span>
    </div>
  );
};

export default Logo;
