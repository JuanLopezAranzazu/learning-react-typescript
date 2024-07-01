import { useNavigate } from "react-router-dom";

export const Missing = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>404 - Not Found!</h1>
      <button type="button" onClick={goBack}>
        Volver
      </button>
    </div>
  );
};
