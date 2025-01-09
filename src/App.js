import SignInForm from "./components/sign-in-form/sign-in-form.component";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation.component";
import TaskForm from './components/to-do-forms/to-do-form'
function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
          <Route path="/add" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
