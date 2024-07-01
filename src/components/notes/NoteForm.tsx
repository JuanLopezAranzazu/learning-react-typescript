import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NoteData, Priority } from "./../../types/Note";
import { RawCategory } from "./../../types/Category";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  categories: RawCategory[];
} & Partial<NoteData>;

type FormErrors = {
  title: string;
  description: string;
};

// Componente para mostrar un formulario de nota
export const NoteForm = ({
  onSubmit,
  title = "",
  description = "",
  priority = Priority.MEDIUM,
  categoryId = "",
  categories,
}: NoteFormProps) => {
  const [formValues, setFormValues] = useState<NoteData>({
    title: title || "",
    description: description || "",
    priority: priority || Priority.MEDIUM,
    categoryId: categoryId || "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const errors = { ...formErrors };

    switch (name) {
      case "title":
        errors.title = value.length < 3 ? "El titulo es muy corto" : "";
        break;
      case "description":
        errors.description =
          value.length < 10 ? "La descripción es muy corta" : "";
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
          value={formValues.title}
          name="title"
          placeholder="Titulo..."
          onChange={handleChange}
          required
        />
        {formErrors.title && <span>{formErrors.title}</span>}
      </div>
      <div>
        <input
          value={formValues.description}
          name="description"
          placeholder="Descripción..."
          onChange={handleChange}
          required
        />
        {formErrors.description && <span>{formErrors.description}</span>}
      </div>
      <div>
        <select
          value={formValues.priority}
          name="priority"
          onChange={handleChange}
        >
          <option value={Priority.LOW}>{Priority.LOW}</option>
          <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
          <option value={Priority.HIGH}>{Priority.HIGH}</option>
        </select>
      </div>
      <div>
        <select
          value={formValues.categoryId}
          name="categoryId"
          onChange={handleChange}
        >
          <option value="">Seleccione una categoría</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};
