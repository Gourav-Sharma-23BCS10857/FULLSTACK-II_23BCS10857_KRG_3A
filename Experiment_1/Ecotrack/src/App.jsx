import Header from "./components/Header";
import Logs from "./pages/Logs";
import Dashboard from "./pages/dashboard";

const App=()=>{
  return(
    <>
    <Header title="EcoTrack"/>
    <main style={{padding:"1rem"}}> 
    <Dashboard/>
    <Logs/>
    {/* entrypoint is main file */}
    {/* i dont need to return main file here but it is good practice as it is entry point  */}
    </main>
    </>
    );
  };
  export default App;