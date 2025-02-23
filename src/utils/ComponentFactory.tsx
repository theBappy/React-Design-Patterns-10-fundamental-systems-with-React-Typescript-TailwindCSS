import Button from "../components/FactoryChallenge/Button";
import Card from "../components/FactoryChallenge/Card";
import Modal from "../components/FactoryChallenge/Modal";
import { ButtonProps, CardProps, ModalProps } from "./component-types";

export type ComponentConfig  = 
    | {type:'card', props: CardProps}
    | {type: 'button'; props: ButtonProps}
    | {type: 'modal', props: ModalProps}


function ComponentFactory(config:ComponentConfig){
    switch (config.type) {
        case 'button':
            return <Button {...config.props} />
        case 'card':
            return <Card {...config.props} />

        case 'modal':
            return <Modal {...config.props} />

        default:
            throw new Error('Unknow component type')
    }
}

export default ComponentFactory