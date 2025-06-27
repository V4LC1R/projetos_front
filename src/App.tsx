import { UserProvider } from "@context/UserContext"
import { Router } from "./routes"
import { InterationProvider } from "@context/InterationContext"
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <UserProvider>
      <InterationProvider>
        <Router/>
        <Toaster
          position="top-right"
          reverseOrder
        />
      </InterationProvider>
    </UserProvider>
  )
}

export default App
