import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Persons } from "./scenes/Persons";
import { Missing } from "./scenes/Missing";
import { PersonAdd } from "./scenes/PersonAdd";
import { PersonEdit } from "./scenes/PersonEdit";
import { v4 as uuidV4 } from "uuid";
import { PersonData, RawPerson } from "./types/Person";

const array: RawPerson[] = [
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

function App() {
  const [persons, setPersons] = useState<RawPerson[]>(array);

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

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={<Persons persons={persons} onDelete={onDeletePerson} />}
        />
        <Route path="add" element={<PersonAdd onSubmit={onAddPerson} />} />
        <Route
          path="edit/:id"
          element={<PersonEdit persons={persons} onSubmit={onEditPerson} />}
        />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
