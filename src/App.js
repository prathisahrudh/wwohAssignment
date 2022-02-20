import { useState, useEffect } from "react";
import Loading from "./Loading";

// Main App , where all the app exists
import Main from "./components/Main";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 9000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <Main />
        </>
      ) : (
        <Loading />
      )}{" "}
    </>
  );
}

export default App;
