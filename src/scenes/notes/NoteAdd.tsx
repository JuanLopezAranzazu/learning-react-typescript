import { NoteForm } from "../../components/notes/NoteForm";
import { NoteData } from "../../types/Note";
import { RawCategory } from "../../types/Category";

type NoteAddProps = {
  onSubmit: (data: NoteData) => void;
  categories: RawCategory[];
};

// Componente para crear una nota
export const NoteAdd = ({ categories, onSubmit }: NoteAddProps) => {
  return (
    <div>
      <h1>Crear Nota</h1>
      <NoteForm categories={categories} onSubmit={onSubmit} />
    </div>
  );
};
