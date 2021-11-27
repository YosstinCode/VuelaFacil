import Home from "./pages/Home";
import Promociones from "./pages/Promociones";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Router, Route } from "wouter";
import { UserContextProvider } from "./context/userContext";

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/promociones" component={Promociones} />
      </UserContextProvider>
    </Router>
  );
};

export default App;
