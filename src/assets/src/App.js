// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Navbar from "./pages/Navbar";
// import BounceLoader from "react-spinners/BounceLoader";

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   },1000);
  // }, []);

  return (
    <div className="app">
      {/* {loading ? (
        <BounceLoader className="loader d-flex"
        color={"#261b6c"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
       
      )} */}
       <Navbar />
    </div>
  );
}

export default App;
