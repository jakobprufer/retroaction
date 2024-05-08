import React from "react";

const Boxplot = ({ value1, value2 }) => {
  // Generating random values around the input punctual values
  const generateRandomValues = (center, deviation, count) => {
    const values = [];
    for (let i = 0; i < count; i++) {
      const randomValue = center + (Math.random() - 0.5) * deviation;
      values.push(randomValue);
    }
    return values;
  };

  // Generate random data around the input punctual values
  const data1 = generateRandomValues(value1, 5, 50);
  const data2 = generateRandomValues(value2, 5, 50);

  return (
    <div className="flex flex-row justify-center items-center space-x-8">
      <div className="w-1/2">
        <div className="text-center mb-2">Boxplot 1</div>
        <div className="bg-gray-200 p-4">
          {/* Displaying boxplot for data1 */}
          <div className="relative flex flex-col items-center">
            <div className="h-1/2 bg-gray-400 w-2"></div>
            <div className="flex space-x-2">
              {data1.map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-500 h-1 w-2 transform -translate-y-1/2"
                  style={{ left: `${index * 6}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-center mb-2">Boxplot 2</div>
        <div className="bg-gray-200 p-4">
          {/* Displaying boxplot for data2 */}
          <div className="relative flex flex-col items-center">
            <div className="h-1/2 bg-gray-400 w-2"></div>
            <div className="flex space-x-2">
              {data2.map((value, index) => (
                <div
                  key={index}
                  className="bg-green-500 h-1 w-2 transform -translate-y-1/2"
                  style={{ left: `${index * 6}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxplot;
