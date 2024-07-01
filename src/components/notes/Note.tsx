import { Link } from "react-router-dom";
import { RawNote } from "./../../types/Note";
import { RawCategory } from "./../../types/Category";

type NoteProps = {
  onDelete: (id: string) => void;
  note: RawNote;
  categories: RawCategory[];
};

// Componente para mostrar la información de una nota
export const Note = ({ note, categories, onDelete }: NoteProps) => {
  // Buscar la categoría de la nota
  const category: RawCategory | undefined = categories.find(
    (category) => category.id === note.categoryId
  );

  if (!category) {
    return <div>Categoría no encontrada</div>;
  }

  console.log(category);

  return (
    <div>
      <Link to={`/notes/edit/${note.id}`}>
        <h1>{note.title}</h1>
      </Link>
      <p>{note.description}</p>
      <p>{note.priority}</p>
      <p>{category?.name}</p>
      <button type="button" onClick={() => onDelete(note.id)}>
        Eliminar
      </button>
    </div>
  );
};
