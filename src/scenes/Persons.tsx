import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RawPerson } from "./../types/Person";
import { SearchablePersonList } from "./../components/SearchablePersonList";

type PersonsProps = {
  onDelete: (id: string) => void;
  persons: RawPerson[];
};

export const Persons = ({ persons, onDelete }: PersonsProps) => {
  const [state, setState] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {state ? "Ocultar" : "Mostrar"}
      </button>
      <button type="button" onClick={() => navigate("/add")}>
        Crear Persona
      </button>
      {state && <SearchablePersonList persons={persons} onDelete={onDelete} />}
    </>
  );
};
