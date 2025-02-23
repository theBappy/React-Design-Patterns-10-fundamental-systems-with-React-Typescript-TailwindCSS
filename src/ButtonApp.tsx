import ButtonFactory from "./components/FactoryComponents/shared/ButtonFactory"


const App = () => {

    const buttonType = 'danger'
    const buttonLabel = 'Click Me'
  return (
    <div>
        {ButtonFactory(buttonType, buttonLabel)}
    </div>
  )
}

export default App