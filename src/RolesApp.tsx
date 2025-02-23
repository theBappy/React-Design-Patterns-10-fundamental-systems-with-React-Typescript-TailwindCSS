import MyComponent from "./components/roles/MyComponent"
import NotAuthorized from "./components/roles/NotAuthorized"
import { withAccessControl } from "./utils/withAccessControlled"

const MyComponentWithAccessControl = withAccessControl(MyComponent)

const App = () => {
  return (
    <div>
        <MyComponentWithAccessControl 
        // roles={['admin', 'manager']} 
        roles={['user', 'guest']} 
        fallbackComponent={NotAuthorized} 
        message="Hello, Admin"
        injectedProps={{
            userName: 'the bappy',
            userPermissions : ['view_dashboard','view_password', 'view_settings'],
        }}
        />
    </div>
  )
}

export default App