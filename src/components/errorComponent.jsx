import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h2>God dang it! Something went wrong.</h2>
      <p>{error?.statusText || "Dang it, an error occurred."}</p>
    </div>
  );
}

export default ErrorBoundary;
