// 
import React from "react";

const RotatingWordsCircle = () => {
  const radius = 190;
  const circumference = 2 * Math.PI * radius;
  const dotCount = 100;

  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const angle = (i / dotCount) * 2 * Math.PI;
    const x = 200 + radius * Math.cos(angle);
    const y = 200 + radius * Math.sin(angle);
    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r="2"
        fill="#0ea5e9"
        opacity="0.8"
      />
    );
  });

  return (
    <div className="absolute top-8 -left-10 w-[400px] h-[400px]pointer-events-none">
      <svg
        className="animate-[spin_20s_linear_infinite]"
        width="550"
        height="540"
        viewBox="0 0 400 400"
      >
        {/* Dots */}
        {/* {dots} */}

        {/* Hidden circular path for text */}
        <defs>
          <path
            id="textCircle"
            d={`
              M ${200 - radius},200
              a ${radius},${radius} 0 1,1 ${2 * radius},0
              a ${radius},${radius} 0 1,1 -${2 * radius},0
            `}
            fill="none"
          />
        </defs>

        {/* Text following the path */}
        <text fill="#333" fontSize="18" fontFamily="Arial">
      <textPath
        href="#textCircle"
        startOffset="0%"
        method="align"
        spacing="auto"
      >
        <tspan fill="#3b82f6">Used-Car-Loan</tspan> 
        <tspan fill="blue-700"> .........</tspan>
        <tspan  fill="#f97316"> New-car-Loan</tspan> 
         <tspan fill="#666">......... </tspan>
        <tspan fill="#3b82f6"> Personal-Loan</tspan> 
         <tspan fill="#666"> ........</tspan>
        <tspan fill="#f97316"> Loan-Against-car</tspan> 
         <tspan fill="#666"> .........</tspan>
          <tspan fill="#3b82f6">Used-Car-Loan</tspan> 
        <tspan fill="#666"> .........</tspan>
        <tspan fill="#f97316"> New-car-Loan</tspan> 
         <tspan fill="#666">......... </tspan>
        <tspan fill="#3b82f6"> Personal-Loan</tspan> 
         <tspan fill="#666">.........</tspan>
        <tspan fill="#f97316"> Loan-Against-car</tspan> 
         <tspan fill="#666"> .........</tspan>
           <tspan fill="#f97316"> Used-Car-Loan</tspan> 

        

        
      </textPath>
    </text>
      </svg>
    </div>
  );
};

export default RotatingWordsCircle;
