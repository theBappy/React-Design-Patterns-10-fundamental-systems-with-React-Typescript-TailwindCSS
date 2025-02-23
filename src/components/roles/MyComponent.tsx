import { WrappedComponentProps } from "../../types/access-controll.types";

const MyComponent = ({
  message,
  userName,
  userPermissions,
}: WrappedComponentProps) => {
  return <div>
    <h1> {message} </h1>
    <p>Welcome, {userName}</p>
    <p>You permission: {userPermissions?.join(',')}</p>
    </div>;
};

export default MyComponent;
