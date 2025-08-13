import { Route, Router, Routes } from "react-router";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<LoginPage/>} />
       
        <Route path="/main" element=
        {<PrivateRoute>
          <MainPage/>
        </PrivateRoute>
      }
      />

      </Routes>
    
    
    </>
  );
}

export default App;
