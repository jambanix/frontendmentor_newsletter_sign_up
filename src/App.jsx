import { Image } from "./components/Image";
import { Form } from "./components/Form";
import { Success } from "./components/Success";
import { Body } from "./components/Body";
import { useState } from "react";

function App() {
 
  const [success, setSuccess] = useState(false);
  const handleSetDisplay = () => setSuccess(prev => !prev);

  return (
    <>
      <main className="flex items-center justify-center h-screen w-full bg-dark-navy">
        {
          !success
          ?
          (
            <Body className="grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full sm:w-[80%] max-w-[928px] md:p-4">
              <Form className="md:col-start-1 md:row-span-1 row-start-2 p-2 md:p-6" onSubmit={handleSetDisplay}/>
              <Image className="md:col-start-2 md:row-span-1 row-start-1"/>
            </Body>
          )
          :
            <Body>
              <Success onClick={handleSetDisplay}/>
            </Body>
        }
      </main>
    </>
  )
}

export default App
