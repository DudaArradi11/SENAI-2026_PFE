import Header from '../components/header';

export default function Relatorio(){
    const leituras = [
        {horario: "15:00", qualidadeAr: "Ruim", iqa:44, temperatura: "32°C", umidade: "40%"},
        {horario: "18:20", qualidadeAr: "Pessíma", iqa:24, temperatura: "29°C", umidade: "50%"},
        {horario: "20:00", qualidadeAr: "Ruim", iqa:10 , temperatura: "27°C", umidade: "70%"},
        {horario: "23:00", qualidadeAr: "Boa", iqa:45, temperatura: "24°C", umidade: "90%"}
    ]

    return(
        <div className="relatorio-container">
            <h2>Relatório da Estação Meteorológica</h2>
            <p>Dados sobre o clima em tempo real.</p>
            <section className='relatorio-graficos'>
                {/* inserir gráficos */}
            </section>

            <section className='relatorio-leituras'>
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade do ar</th>
                            <th>Índice de qualidade do ar</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAr}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}