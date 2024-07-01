import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonData } from "./../../types/Person";

type PersonFormProps = {
  onSubmit: (data: PersonData) => void;
} & Partial<PersonData>;

type FormErrors = {
  name: string;
};

// Componente para mostrar un formulario de persona
export const PersonForm = ({ onSubmit, name = "" }: PersonFormProps) => {
  const [formValues, setFormValues] = useState<PersonData>({
    name: name ? name : "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({ name: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const errors = { ...formErrors };

    switch (name) {
      case "name":
        errors.name = value.length < 3 ? "El nombre es muy corto" : "";
        break;
      default:
        break;
    }
    setFormErrors(errors);
  };

  const validateForm = (errors: FormErrors): boolean => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm(formErrors)) {
      console.log("Formulario inválido");
      return;
    }
    onSubmit(formValues);
    navigate("..");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={formValues.name}
          name="name"
          placeholder="Nombre..."
          onChange={handleChange}
          required
        />
        {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};
