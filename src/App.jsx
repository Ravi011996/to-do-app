import {useEffect} from 'react'
import SignInForm from "./components/sign-in-form/sign-in-form.component";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation.router";
import TaskForm from './components/to-do-forms/to-do-form.component';
import SignupForm from './components/sign-up-form/sign-up-form.component';
import TaskTable from  './components/to-do-table/to-do-table.component';
import TaskChart from './components/to-do-pi-chart/to-do-pi-chart.component';
import TaskCalendar from './components/to-do-calander/react-calendar.component'
import Home from './routes/home.router';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils'

function App() {
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("ruuning onAuthStateChangedListener in app.js");
      
      if (user) {
        createUserDocumentFromAuth(user);
      }

      //dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
          <Route path="/login" element={<SignInForm />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/add/:id" element={<TaskForm />}></Route>
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
