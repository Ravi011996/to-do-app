import SignInForm from "./components/sign-in-form/sign-in-form.component";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation.component";
import TaskForm from './components/to-do-forms/to-do-form';
import SignupForm from './components/sign-up-form/sign-up-form.component';
import TaskTable from  './components/to-do-table/to-do-table.component';
import TaskChart from './components/to-do-pi-chart/to-do-pi-chart.component';
import TaskCalendar from './components/to-do-calander/react-calendar.component'

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
          <Route path="/add" element={<TaskForm />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
          <Route path="/table" element={<TaskTable />}></Route>
          <Route path="/chart" element={<TaskChart />}></Route>
          <Route path="/calendar" element={<TaskCalendar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
