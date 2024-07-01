import { RawPerson } from "../types/Person";
import { Person } from "./Person";

type PersonListProps = {
  onDelete: (id: string) => void;
  persons: RawPerson[];
};

// Componente para mostrar una lista de personas
export const PersonList = ({ persons, onDelete }: PersonListProps) => {
  return (
    <>
      {persons.map((person, index) => (
        <Person key={index} person={person} onDelete={onDelete} />
      ))}
    </>
  );
};
