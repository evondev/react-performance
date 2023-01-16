import React, { useState } from "react";
// 1. necessary re-render
// 2. unnecessary re-render
function App() {
  return (
    <div className="App">
      {/* <ComponentWithMouseMove2
        left={<VeryHeavyComponent></VeryHeavyComponent>}
        right={<VeryHeavyComponent2 />}
      >
        <Counter></Counter>
      </ComponentWithMouseMove2> */}
      {/* <ComponentWithMouseMove>
        <Counter></Counter>
        <VeryHeavyComponent></VeryHeavyComponent>
      </ComponentWithMouseMove> */}
    </div>
  );
}
// 1. tách logic component ra riêng nếu nó không liên quan tới nhau
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};
// 2. tạo component sử dụng props children
const ComponentWithMouseMove = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mouseValue, setMouseValue] = useState(0);
  const handleMouseMove = (e: any) => {
    setMouseValue(e.clientX);
  };
  return <div onMouseMove={handleMouseMove}>{children}</div>;
};
// 3. tạo component sử dụng các props khác nhau nhưng truyền vào là 1 Component
const ComponentWithMouseMove2 = ({
  left,
  right,
  children,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  const [mouseValue, setMouseValue] = useState(0);
  const handleMouseMove = (e: any) => {
    setMouseValue(e.clientX);
  };
  return (
    <div onMouseMove={handleMouseMove}>
      {left}
      {children}
      {right}
    </div>
  );
};

const VeryHeavyComponent = () => {
  console.log("VeryHeavyComponent1 render");
  return (
    <div className="grid grid-cols-12 gap-5">
      {Array(2000)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-20 h-20 bg-blue-500"
          >
            {index + 1}
          </div>
        ))}
    </div>
  );
};
const VeryHeavyComponent2 = () => {
  console.log("VeryHeavyComponent2 render");
  return (
    <div className="grid grid-cols-12 gap-5">
      {Array(2000)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-20 h-20 bg-blue-500"
          >
            {index + 1}
          </div>
        ))}
    </div>
  );
};
export default App;
