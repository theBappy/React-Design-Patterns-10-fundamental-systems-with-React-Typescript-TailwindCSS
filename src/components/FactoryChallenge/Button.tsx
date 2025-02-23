import { ButtonProps } from "../../utils/component-types"


const Button = ({label, onClick, disabled}:ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
        {label}
    </button>
  )
}

export default Button