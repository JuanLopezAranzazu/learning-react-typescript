import { Link } from "react-router-dom";
import { RawPerson } from "./../../types/Person";

type PersonProps = {
  onDelete: (id: string) => void;
  person: RawPerson;
};

// Componente para mostrar la información de una persona
export const Person = ({ person, onDelete }: PersonProps) => {
  return (
    <div>
      <Link to={`/persons/edit/${person.id}`}>
        <h1>{person.name}</h1>
      </Link>
      <button type="button" onClick={() => onDelete(person.id)}>
        Eliminar
      </button>
    </div>
  );
};
