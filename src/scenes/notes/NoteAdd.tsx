import { NoteForm } from "../../components/notes/NoteForm";
import { NoteData } from "../../types/Note";

type NoteAddProps = {
  onSubmit: (data: NoteData) => void;
};

export const NoteAdd = ({ onSubmit }: NoteAddProps) => {
  return (
    <div>
      <h1>Crear Nota</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};
