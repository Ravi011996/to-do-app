import SignInForm from "./components/sign-in-form/sign-in-form.component";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation.router";
import CreateTask from './components/to-do-forms/create-task.component';
import EditTask from './components/to-do-forms/edit-task.component';
import SignupForm from './components/sign-up-form/sign-up-form.component';
import TaskCalendar from './components/to-do-calander/react-calendar.component'
import Home from './routes/home.router';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
          <Route path="/login" element={<SignInForm />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/edit/:id" element={<EditTask />}></Route>
          <Route path="/add" element={<CreateTask />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
          <Route path="/calendar" element={<TaskCalendar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
