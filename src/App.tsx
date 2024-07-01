import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Missing } from "./scenes/Missing";
// persons
import { Persons } from "./scenes/persons/Persons";
import { PersonAdd } from "./scenes/persons/PersonAdd";
import { PersonEdit } from "./scenes/persons/PersonEdit";
// notes
import { Notes } from "./scenes/notes/Notes";
import { NoteAdd } from "./scenes/notes/NoteAdd";
import { NoteEdit } from "./scenes/notes/NoteEdit";
import { Home } from "./scenes/Home";
import { v4 as uuidV4 } from "uuid";
import { PersonData, RawPerson } from "./types/Person";
import { NoteData, RawNote, Priority } from "./types/Note";
// hooks
import { useLocalStorage } from "./hooks/useLocalStorage";

const arrayPersons: RawPerson[] = [
  {
    id: uuidV4(),
    name: "Juan",
  },
  {
    id: uuidV4(),
    name: "Pedro",
  },
  {
    id: uuidV4(),
    name: "Maria",
  },
];

const arrayNotes: RawNote[] = [
  {
    id: uuidV4(),
    title: "Nota 1",
    description: "Descripcion de la nota 1",
    priority: Priority.LOW,
  },
  {
    id: uuidV4(),
    title: "Nota 2",
    description: "Descripcion de la nota 2",
    priority: Priority.MEDIUM,
  },
  {
    id: uuidV4(),
    title: "Nota 3",
    description: "Descripcion de la nota 3",
    priority: Priority.HIGH,
  },
];

function App() {
  const [persons, setPersons] = useLocalStorage<RawPerson[]>(
    "PERSONS",
    arrayPersons
  );
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", arrayNotes);

  // Funcion para agregar una persona
  const onAddPerson = (data: PersonData) => {
    setPersons((prevPersons) => {
      return [...prevPersons, { id: uuidV4(), ...data }];
    });
  };

  // Funcion para editar una persona
  const onEditPerson = (id: string, data: PersonData) => {
    setPersons((prevPersons) => {
      return prevPersons.map((person) => {
        if (person.id === id) {
          return { ...person, ...data };
        }
        return person;
      });
    });
  };

  // Funcion para eliminar una persona
  const onDeletePerson = (id: string) => {
    setPersons((prevPersons) => {
      return prevPersons.filter((person) => person.id !== id);
    });
  };

  // Funcion para agregar una nota
  const onAddNote = (data: NoteData) => {
    setNotes((prevNotes) => {
      return [...prevNotes, { id: uuidV4(), ...data }];
    });
  };

  // Funcion para editar una nota
  const onEditNote = (id: string, data: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data };
        }
        return note;
      });
    });
  };

  // Funcion para eliminar una nota
  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        {/* persons */}
        <Route
          path="persons"
          element={<Persons persons={persons} onDelete={onDeletePerson} />}
        />
        <Route
          path="persons/add"
          element={<PersonAdd onSubmit={onAddPerson} />}
        />
        <Route
          path="persons/edit/:id"
          element={<PersonEdit persons={persons} onSubmit={onEditPerson} />}
        />
        {/* notes */}
        <Route
          path="notes"
          element={<Notes notes={notes} onDelete={onDeleteNote} />}
        />
        <Route path="notes/add" element={<NoteAdd onSubmit={onAddNote} />} />
        <Route
          path="notes/edit/:id"
          element={<NoteEdit notes={notes} onSubmit={onEditNote} />}
        />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
