import { useState } from "react";
import { RawPerson } from "../types/Person";
import { PersonList } from "./PersonList";

type SearchablePersonListProps = {
  onDelete: (id: string) => void;
  persons: RawPerson[];
};

// Componente para filtrar personas por nombre
export const SearchablePersonList = ({
  persons,
  onDelete,
}: SearchablePersonListProps) => {
  const [state, setState] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(state.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={state}
        onChange={handleChange}
      />
      <PersonList persons={filteredPersons} onDelete={onDelete} />
    </div>
  );
};
