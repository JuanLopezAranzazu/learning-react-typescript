import { RawNote } from "../../types/Note";
import { RawCategory } from "../../types/Category";
import { Note } from "./Note";

type NoteListProps = {
  onDelete: (id: string) => void;
  notes: RawNote[];
  categories: RawCategory[];
};

// Componente para mostrar una lista de notas
export const NoteList = ({ notes, categories, onDelete }: NoteListProps) => {
  return (
    <>
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          categories={categories}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};
