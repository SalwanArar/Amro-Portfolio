import { RouterProvider } from "react-router-dom";
import { router } from "./data/router";

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

function Fallback() {
  return <p>Performing initial data "load"</p>;
}

function App() {
  return <RouterProvider router={router} fallbackElement={Fallback} />;
}

export default App;
