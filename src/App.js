import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import "./styles/app.scss";
import { routePaths } from "./constants/constants";
import ManageTasks from "./screens/ManageTasks";
import CreateTask from "./screens/CreateTask";

function App() {
  return (
    <MainScreen>
      <Routes>
        <Route path={routePaths.DEFAULT} element={<ManageTasks />} />
        <Route path={routePaths.CREATE} element={<CreateTask />} />
      </Routes>
    </MainScreen>
  );
}

export default App;
