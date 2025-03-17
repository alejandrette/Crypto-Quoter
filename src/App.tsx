import { Form } from "./components/Form"

function App() {

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-emerald-400 text-3xl font-bold mt-4 w-80">Cryptocurrency <span className="text-white block">Quote</span></h1>
      <Form />
    </div>
  )
}

export default App
