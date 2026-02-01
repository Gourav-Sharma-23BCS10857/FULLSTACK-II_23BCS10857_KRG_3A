<import>Browserrouter</import>
import Header from "./components/Header";
import Logs from "./pages/Logs";
import Dashboard from "./pages/dashboard";
import login from "./pages/login";  
import dashboardlayout from "./pages/dashboardlayout";
import dashboardsummary from "./pages/dashboardsummary";
import dashboardanalytics from "./pages/dashboardanalytics";


function App(){
  return (
    <>
    <Browserrouter>
    <Header/>

    <Routes>
      <Route path="/login" element={<login/>}></Route>
      <Route path="/" element={<ProtectedRoute><dashboardlayout/></ProtectedRoute>}>

      
      <Route index element={<Dashboard/>}></Route>
      <Route path="summary" element={<dashboardsummary/>}></Route>
      <Route path="analytics" element={<dashboardanalytics/>}></Route>
      <Route path="logs" element={<Logs/>}></Route>
      
      </Route>

    </Routes>

    </Browserrouter>
    </>
  );
}












// const App=()=>{
//   return(
//     <>
//     <Header title="EcoTrack"/>
//     <main style={{padding:"1rem"}}> 
//     <Dashboard/>
//     <Logs/>
//     {/* entrypoint is main file */}
//     {/* i dont need to return main file here but it is good practice as it is entry point  */}
//     </main>
//     </>
//     );
//   };
  export default App;

