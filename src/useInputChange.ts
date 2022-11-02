import { ChangeEvent, useState } from "react";

export default function useInputChange(initalValue: string) {
  const [value, setValue] = useState(initalValue);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    handleInputChange,
  };
}
