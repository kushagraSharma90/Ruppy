import React from "react";

const RotatingWordsCircle = () => {
  const radius = 200;

  return (
    <div className="absolute top-8 -left-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] pointer-events-none">
      <svg
        className="animate-[spin_20s_linear_infinite]"
        viewBox="0 0 400 400"
        width="100%"  
        height="100%"
      >
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

        <text fill="#333" fontSize="18" fontFamily="Arial">
          <textPath href="#textCircle" startOffset="0%" method="align" spacing="auto">
            <tspan fill="#3b82f6">Used-Car-Loan</tspan>
            <tspan fill="#666"> .........</tspan>
            <tspan fill="#f97316"> New-car-Loan</tspan>
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
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotatingWordsCircle;
