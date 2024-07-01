import { useParams } from "react-router-dom";
import { NoteForm } from "../../components/notes/NoteForm";
import { NoteData, RawNote } from "../../types/Note";

type NoteEditProps = {
  onSubmit: (id: string, data: NoteData) => void;
  notes: RawNote[];
};

export const NoteEdit = ({ notes, onSubmit }: NoteEditProps) => {
  const { id } = useParams<{ id: string }>();
  const note: RawNote | undefined = notes.find((note) => note.id === id);

  if (!note) {
    return <div>Nota no encontrada</div>;
  }

  console.log(id, note);

  return (
    <div>
      <h1>Editar Nota</h1>
      <NoteForm
        onSubmit={(data) => onSubmit(id, data)}
        title={note.title}
        description={note.description}
        priority={note.priority}
      />
    </div>
  );
};
