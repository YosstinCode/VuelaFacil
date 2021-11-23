import Home from "./pages/Home";
import { Router, Route } from "wouter";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default App;
