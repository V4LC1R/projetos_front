import { UserProvider } from "@context/UserContext"
import { Router } from "./routes"

function App() {

  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  )
}

export default App
