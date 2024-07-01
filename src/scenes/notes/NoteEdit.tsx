import { useParams } from "react-router-dom";
import { NoteForm } from "../../components/notes/NoteForm";
import { NoteData, RawNote } from "../../types/Note";
import { RawCategory } from "../../types/Category";

type NoteEditProps = {
  onSubmit: (id: string, data: NoteData) => void;
  notes: RawNote[];
  categories: RawCategory[];
};

// Componente para editar una nota
export const NoteEdit = ({ notes, categories, onSubmit }: NoteEditProps) => {
  const { id } = useParams<{ id: string }>();
  // Buscar la nota
  const note: RawNote | undefined = notes.find((note) => note.id === id);

  if (!note) {
    return <div>Nota no encontrada</div>;
  }

  console.log(id, note);

  return (
    <div>
      <h1>Editar Nota</h1>
      <NoteForm
        categories={categories}
        onSubmit={(data) => onSubmit(id, data)}
        title={note.title}
        description={note.description}
        priority={note.priority}
        categoryId={note.categoryId}
      />
    </div>
  );
};
