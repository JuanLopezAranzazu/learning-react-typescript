import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RawNote, Priority } from "./../../types/Note";
import { NoteList } from "./../../components/notes/NoteList";

type NotesProps = {
  onDelete: (id: string) => void;
  notes: RawNote[];
};

// Componente para mostrar y filtrar la lista de notas
export const Notes = ({ notes, onDelete }: NotesProps) => {
  const [selectedPriority, setSelectedPriority] = useState<Priority | "ALL">(
    "ALL"
  );
  const navigate = useNavigate();

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriority(e.target.value as Priority | "ALL");
  };

  // Filtrar las notas por prioridad
  const filteredNotes =
    selectedPriority === "ALL"
      ? notes
      : notes.filter((note) => note.priority === selectedPriority);

  return (
    <>
      <div>
        <button type="button" onClick={() => navigate("/notes/add")}>
          Crear Nota
        </button>
        <select value={selectedPriority} onChange={handlePriorityChange}>
          <option value="ALL">TODAS</option>
          <option value={Priority.LOW}>{Priority.LOW}</option>
          <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
          <option value={Priority.HIGH}>{Priority.HIGH}</option>
        </select>
      </div>
      <NoteList notes={filteredNotes} onDelete={onDelete} />
    </>
  );
};
