import React, { ChangeEvent, useState } from "react";
import useInputChange from "./useInputChange";
const tabClassName = "px-6 py-3 text-xs rounded cursor-pointer";
const tabActiveClassName = "text-white bg-blue-500 pointer-events-none";
type SortedData = "desc" | "asc";
function App() {
  const [sortedType, setSortedType] = useState<SortedData>("desc");
  const handleSortData = (value: SortedData) => {
    setSortedType(value);
  };
  // const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");
  // const handleClickDesc = () => {
  //   setSortedType("desc");
  //   setActiveTab("tab1");
  // };
  // const handleClickAsc = () => {
  //   setSortedType("asc");
  //   setActiveTab("tab2");
  // };
  const { value: fullname, handleInputChange } = useInputChange("evondev");
  // const [fullname, setFullName] = useState("");
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFullName(e.target.value);
  // };
  return (
    <div className="App">
      <div className="flex items-center p-5 gap-x-5">
        <TabItem
          isActive={sortedType === "desc"}
          onClick={() => handleSortData("desc")}
        >
          Sort Desc
        </TabItem>
        <TabItem
          isActive={sortedType === "asc"}
          onClick={() => handleSortData("asc")}
        >
          Sort Asc
        </TabItem>
        <input type="text" name="fullname" onChange={handleInputChange} />
        {/* <div
          className={`${tabClassName} ${
            activeTab === "tab1" ? tabActiveClassName : "bg-gray-100"
          }`}
          onClick={handleClickDesc}
        >
          Sort DESC
        </div>
        <div
          className={`${tabClassName} ${
            activeTab === "tab2" ? tabActiveClassName : "bg-gray-100"
          }`}
          onClick={handleClickAsc}
        >
          Sort ASC
        </div> */}
      </div>
    </div>
  );
}

interface TabItemProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
function TabItem({
  children,
  isActive = false,
  onClick = () => null,
}: TabItemProps) {
  return (
    <div
      className={`${tabClassName} ${
        isActive ? tabActiveClassName : "bg-gray-100"
      }`}
      onClick={isActive ? undefined : onClick}
    >
      {children}
    </div>
  );
}

export default App;
