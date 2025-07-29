"use client";

import { CustomButton } from "@/react/components/ui/customButton/CustomButton";
import { useEffect, useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState<string>("")
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])
  return (
    <div> 
      <h2 data-testid="value-elem">{value}</h2>
      {toggle && <div>toggle</div>}
      {data && <div>data</div>}
      <h1>Hello, world</h1>
      <CustomButton onClick={() => setToggle(prev => !prev)} title="Click me"/>
      <input role="input" onChange={(e) => setValue(prev => e.target.value)} type="text" placeholder="Hello, world!" />
    </div>
  );
}
