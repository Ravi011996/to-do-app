import SignInForm from "./components/sign-in-form/sign-in-form.component";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation.component";
function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
