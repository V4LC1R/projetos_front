import { UserProvider } from "@context/UserContext"
import { Router } from "./routes"
import { InterationProvider } from "@context/InterationContext"

function App() {

  return (
    <UserProvider>
      <InterationProvider>
        <Router/>
      </InterationProvider>
    </UserProvider>
  )
}

export default App
