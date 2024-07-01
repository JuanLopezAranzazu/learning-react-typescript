import { Link } from "react-router-dom";
import { RawNote } from "./../../types/Note";

type NoteProps = {
  onDelete: (id: string) => void;
  note: RawNote;
};

// Componente para mostrar la información de una nota
export const Note = ({ note, onDelete }: NoteProps) => {
  return (
    <div>
      <Link to={`/notes/edit/${note.id}`}>
        <h1>{note.title}</h1>
      </Link>
      <p>{note.description}</p>
      <p>{note.priority}</p>
      <button type="button" onClick={() => onDelete(note.id)}>
        Eliminar
      </button>
    </div>
  );
};
