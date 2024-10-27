import { useRouteError } from "react-router-dom";
import "./index.scss";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
}

export default ErrorPage;
