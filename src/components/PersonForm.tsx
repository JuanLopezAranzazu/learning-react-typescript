import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonData } from "../types/Person";

type PersonFormProps = {
  onSubmit: (data: PersonData) => void;
} & Partial<PersonData>;

// Componente para mostrar un formulario de persona
export const PersonForm = ({ onSubmit, name = "" }: PersonFormProps) => {
  const [formValues, setFormValues] = useState({ name: name ? name : "" });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
    navigate("..");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formValues.name}
        name="name"
        placeholder="Nombre..."
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
