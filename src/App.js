import { useState, useEffect } from "react";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false) , 10000)
  }, [])

  return <>{loading === false ? <>Main App</> : <Loading />} :</>;
}

export default App;