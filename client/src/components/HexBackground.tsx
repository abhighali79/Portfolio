export default function HexBackground() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none">
      <div className="hex-container">
        <div className="hex-pattern" />
      </div>
      
      <style>{`
        .hex-container {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.05;
        }
        
        .hex-pattern {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 86px, currentColor 86px, currentColor 87px),
            repeating-linear-gradient(60deg, transparent, transparent 86px, currentColor 86px, currentColor 87px),
            repeating-linear-gradient(120deg, transparent, transparent 86px, currentColor 86px, currentColor 87px);
          color: #f59e0b;
          animation: float 60s linear infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-20%) translateX(-10%);
          }
        }
      `}</style>
    </div>
  );
}
