import { useParams } from "react-router-dom";
import { PersonForm } from "../components/PersonForm";
import { PersonData, RawPerson } from "../types/Person";

type PersonEditProps = {
  onSubmit: (id: string, data: PersonData) => void;
  persons: RawPerson[];
};

export const PersonEdit = ({ persons, onSubmit }: PersonEditProps) => {
  const { id } = useParams<{ id: string }>();
  const person: RawPerson | undefined = persons.find(
    (person) => person.id === id
  );

  if (!person) {
    return <div>Persona no encontrada</div>;
  }

  console.log(id, person);

  return (
    <div>
      <h1>Editar Persona</h1>
      <PersonForm onSubmit={(data) => onSubmit(id, data)} name={person.name} />
    </div>
  );
};
