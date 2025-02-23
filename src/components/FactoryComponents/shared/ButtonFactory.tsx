import DangerButton from "../DangerButton";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const ButtonFactory = (type: string, label: string) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} />;
    case "secondary":
      return <SecondaryButton label={label} />;
    case "danger":
      return <DangerButton label={label} />;
    default:
      return <button>{label}</button>;
  }
};

export default ButtonFactory
