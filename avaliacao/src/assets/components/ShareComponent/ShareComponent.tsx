import { useEffect, useState } from "react";
import { consultaAcaoPorCodigo } from "../../services/ShareAPI";
import { ShareRequestProps } from "../../interfaces/ShareRequestProps";


const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);// pega aquele esqueleto com as informações
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {// função de estado: ele vai aguardar o retorno da api e depois redenriza // faz a consulta do api
      consultaAcaoPorCodigo(symbol)// executa o cliente
        .then((response) => {
          setShareData(response.data);// chamando funções
          setLoading(false);// mostra o erro
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [symbol]);//paramentro dependente// tem que declarar a variavel para rodar
    if (loading) return <div> Loading ...</div>;
    if (error) return <div> Error: {error}</div>;
  
    //logourl veio do esqueleto de swagger
    return (
      <>
        <div>
          <img src={share?.logourl} alt={'${symbol}'} width={100} /> 
          <h1>{share?.shortName}</h1>
          <h2>{share?.longName}.</h2>
          <h2>{share?.marketCap}.</h2>
          <h2>{share?.shortName}.</h2>
          <h2>{share?.priceEarnings}.</h2>
  
        </div>
      </>
    );
  };
  
  export default ShareComponent;
  