import Header from "../components/header";
import GraficoBarra from "../components/graficoBarras";
import "../App.css";


export default function Dashboard(){
    return(
        <div>
           <Header/>
           <section className="cards">
               <div className="card">
                    <h6>Temperatura</h6>
                    <h2>32°C</h2>
               </div>
                <div className="card">
                    <h6>Umidade</h6>
                    <h2>68%</h2>
               </div>
                <div className="card">
                    <h6>Pressão</h6>
                    <h2>1012 hPa</h2>
               </div>
                <div className="card">
                    <h6>Vento</h6>
                    <h2>10km/h</h2>
               </div>
           </section>

           <section className="graficos">
               <h6>Gráficos</h6>
               <div className="grafico">
                    <GraficoBarra/>
               </div>
               <div className="grafico">
                    <GraficoBarra/>
               </div>
           </section>

           <section className="leituras">
            <h6>Leituras Recentes</h6>
            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Temperatura</th>
                        <th>Umidade</th>
                        <th>Vento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:00</td>
                        <td>35°C</td>
                        <td>50%</td>
                        <td>7km/h</td>
                    </tr>
                    <tr>
                        <td>16:00</td>
                        <td>37°C</td>
                        <td>40%</td>
                        <td>9km/h</td>
                    </tr>
                    <tr>
                        <td>20:00</td>
                        <td>28°C</td>
                        <td>70%</td>
                        <td>14km/h</td>
                    </tr>
                </tbody>
            </table>
           </section>
        </div>
    )
}