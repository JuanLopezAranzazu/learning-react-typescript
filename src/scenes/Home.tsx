import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Bienvenido</h1>
      <button type="button" onClick={() => navigate("/persons")}>
        Personas
      </button>
      <button type="button" onClick={() => navigate("/notes")}>
        Notas
      </button>
    </div>
  );
};
