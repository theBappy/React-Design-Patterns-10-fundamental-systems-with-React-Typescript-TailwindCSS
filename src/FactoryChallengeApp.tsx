import ComponentFactory, { ComponentConfig } from "./utils/ComponentFactory"

const buttonConfig:ComponentConfig = {
    type: 'button',
    props: {
        label: 'Click Me',
        onClick: () => alert('you clicked me'),
        disabled: false,
    }
}

const cardConfig:ComponentConfig = {
    type: 'card',
    props: {
        title: 'card title',
        content: 'some random content',
        footer: 'footer',
    }
}

const modalConfig:ComponentConfig = {
    type: 'modal',
    props: {
        header: 'modal header',
        content: 'modal content',
        footer: 'modal footer',
    }
}


const App = () => {
  return (
    <div>
        {ComponentFactory(buttonConfig)}
        {ComponentFactory(cardConfig)}
        {ComponentFactory(modalConfig)}
    </div>
  )
}

export default App