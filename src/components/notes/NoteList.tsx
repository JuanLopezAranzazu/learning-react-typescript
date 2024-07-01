import { RawNote } from "../../types/Note";
import { Note } from "./Note";

type NoteListProps = {
  onDelete: (id: string) => void;
  notes: RawNote[];
};

// Componente para mostrar una lista de notas
export const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <>
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={onDelete} />
      ))}
    </>
  );
};
