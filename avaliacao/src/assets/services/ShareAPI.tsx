import axios from "axios";// axios faz a conexão com o link ou comunicação/ biblioteca do node: para instalar é npm install axios

const baseUrl='https://jq8d6sq2-7029.brs.devtunnels.ms';
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})



export const consultaAcaoPorCodigo = (codigoAcao: string)  => {
   return apiClient.get<any>(`${baseUrl}/Share/${codigoAcao}`);
}