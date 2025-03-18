import { Form } from "./components/Form"
import { Result } from "./components/Result"

function App() {

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-emerald-400 text-3xl font-bold mt-4 w-80 md:w-1/4">Cryptocurrency <span className="text-white block">Quote</span></h1>
      <Form />
      <Result />
    </div>
  )
}

export default App
