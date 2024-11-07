import { Image } from "./components/Image";
import { Form } from "./components/Form";
import { Success } from "./components/Success";
import { Body } from "./components/Body";
import { useState } from "react";

function App() {
 
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleSetDisplay = (email) => {
    setEmail(prev => email);
    setSuccess(prev => !prev);
  }

  return (
    <>
      <main className="flex items-center justify-center min-h-screen w-full bg-dark-navy">
        {
          !success
          ?
          (
            <Body className="grid-cols-1 grid-rows-[284px_1fr] md:grid-cols-2 md:grid-rows-1 w-full max-w-[500px] md:max-w-[928px] md:p-4">
              <Form className="md:col-start-1 md:row-span-1 row-start-2" onSubmit={handleSetDisplay}/>
              <Image className="md:col-start-2 md:row-span-1 row-start-1"/>
            </Body>
          )
          :
            <Body className="w-full h-screen md:max-w-[504px] md:h-[520px]">
              <Success className="w-full h-screen md:max-w-[504px] md:h-[520px]" onClick={handleSetDisplay}/>
            </Body>
        }
      </main>
    </>
  )
}

export default App
