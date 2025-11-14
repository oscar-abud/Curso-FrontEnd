import { useState, useEffect } from "react";
import CowCard from "./CowCard";

function Cows() {
  const [cowData, setCowData] = useState([]);
  const [loadingCow, setLoadingCow] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0);

  const handleRetry = () => {
    setError(null);
    setRetry((prev) => prev + 1);
  };

  // GET vacas
  useEffect(() => {
    const fetchCowData = async () => {
      try {
        setLoadingCow(true);
        const res = await fetch("http://localhost:3000/vacas");
        const data = await res.json();
        if (data.length > 0) {
          setCowData(data);
        }
      } catch (error) {
        setLoadingCow(false);
        setError(error.message);
        console.error("Error en obtener los datos de la vaca: ", error);
      } finally {
        setLoadingCow(false);
      }
    };
    fetchCowData();
  }, [retry]);
  console.log("Datos de la vaca desde Cows", cowData);

  return (
    <>
      {loadingCow && <p className="h3 mt-5">Cargando datos de la vaca...</p>}
      {error && (
        <div>
          <p className="h3 mt-5">Error en la obtencion de datos de la vaca</p>
          <button className="btn btn-primary" onClick={handleRetry}>
            Intentar de nuevo
          </button>
        </div>
      )}
      {!loadingCow && !error && cowData.length > 0 && (
        <div className="mt-3">
          {cowData.map((cow) => (
            <div key={cow._id}>
              <CowCard key={cow._id} cowDetail={cow} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cows;
