import{logs} from '../data/logs';
const Logs=()=>{
    const highimpactlogs=logs.filter(log=>(log.carbon>4))
    const lowimpactlogs=logs.filter(log=>(log.carbon<4))

    return(<>
    <div>
         <header style={{padding: "o.5 rem", backgroundColor: "#ff0000", color: "white", textAlign: "center"}}>
        <h2>high emission causes</h2>
        </header>
        <p>After Filteration above 4</p>
        <ul style={{padding: "o.5 rem", backgroundColor: "#f70404", color: "white", textAlign: "center"}}>
            {
                highimpactlogs.map(log=>(
                    <li key={log.id}>
                    {log.activity}= {log.carbon} kg CO2
                    </li>
                ))
            }
        </ul>
    </div>
    <div>
        <header style={{padding: "o.5 rem", color: "green", textAlign: "center"}}>
        <h2>low emission causes</h2>
        </header>
        <p>After Filteration below 4</p>
        <ul style={{padding: "o.5 rem", backgroundColor: "#04f714", color: "white", textAlign: "center"}}>
            {
                lowimpactlogs.map(log=>(
                    // <li key={log.id} >
                    // {log.activity}= {log.carbon} kg CO2
                    // </li>
                    <li key={log.id} style={{ color: "blue", fontWeight: "bold" }}>
                    {log.activity} = {log.carbon} kg CO2
                    </li>

                ))
            }
        </ul>
    </div>
    </>
)
}
export default Logs;