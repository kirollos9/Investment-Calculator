import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";
const calcObject={
    initialInvestment:1000,
    annualInvestment:10,
    expectedReturn:10,
    duration:100
};
function App() {
  let errorFlag=false;
  const [investObject,setInvestObject]=useState(calcObject);
  function onSelect(inputIdentifier,newValue){
    setInvestObject((prevObject)=>{
        return(
            {
                ...prevObject,
                [inputIdentifier]:+  newValue
            }
        );})

    }
    errorFlag=investObject.duration<1;
  return (
  <>
    <Header/>
    <UserInput handleChange={onSelect} investObject={investObject}/>
    {errorFlag?<p className="center">that is wrong in the data in the duration</p>:<Results input={investObject}/>}
    
  </>
  );
}

export default App
