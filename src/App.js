import React from "react";
import CallToAct from "./components/donation_call";
import DonateForm from "./components/donation_form";
import "./App.css";

function App() {
  return (
    <div>
      <div className="w-full flex flex-wrap">
        <div className="relative w-full lg:w-1/2 flex flex-col min-h-screen bg-cover bg-indigo-600">
          <CallToAct />
        </div>
        <div className="relative w-full lg:w-1/2 flex flex-col h-screen">
          <DonateForm />
        </div>
      </div>
    </div>
  );
}

export default App;
