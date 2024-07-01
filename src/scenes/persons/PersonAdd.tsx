import { PersonForm } from "../../components/persons/PersonForm";
import { PersonData } from "../../types/Person";

type PersonAddProps = {
  onSubmit: (data: PersonData) => void;
};

export const PersonAdd = ({ onSubmit }: PersonAddProps) => {
  return (
    <div>
      <h1>Crear Persona</h1>
      <PersonForm onSubmit={onSubmit} />
    </div>
  );
};
