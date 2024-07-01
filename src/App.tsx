import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Missing } from "./scenes/Missing";
// notes
import { Notes } from "./scenes/notes/Notes";
import { NoteAdd } from "./scenes/notes/NoteAdd";
import { NoteEdit } from "./scenes/notes/NoteEdit";
// categories
import { Categories } from "./scenes/categories/Categories";
import { CategoryAdd } from "./scenes/categories/CategoryAdd";
import { CategoryEdit } from "./scenes/categories/CategoryEdit";
import { Home } from "./scenes/Home";
import { v4 as uuidV4 } from "uuid";
import { NoteData, RawNote } from "./types/Note";
import { CategoryData, RawCategory } from "./types/Category";
// hooks
import { useLocalStorage } from "./hooks/useLocalStorage";
// default values
import { arrayCategories, arrayNotes } from "./utils/defaultValues";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", arrayNotes);
  const [categories, setCategories] = useLocalStorage<RawCategory[]>(
    "CATEGORIES",
    arrayCategories
  );

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

  // Funcion para agregar una categoria
  const onAddCategory = (data: CategoryData) => {
    setCategories((prevCategories) => {
      return [...prevCategories, { id: uuidV4(), ...data }];
    });
  };

  // Funcion para editar una categoria
  const onEditCategory = (id: string, data: CategoryData) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.id === id) {
          return { ...category, ...data };
        }
        return category;
      });
    });
  };

  // Funcion para eliminar una categoria
  const onDeleteCategory = (id: string) => {
    // Verificar si la categoria tiene notas asociadas
    const hasNotes = notes.some((note) => note.categoryId === id);
    if (hasNotes) {
      console.log("La categoria tiene notas asociadas");
      return;
    }
    setCategories((prevCategories) => {
      return prevCategories.filter((category) => category.id !== id);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        {/* notes */}
        <Route
          path="notes"
          element={
            <Notes
              notes={notes}
              categories={categories}
              onDelete={onDeleteNote}
            />
          }
        />
        <Route
          path="notes/add"
          element={<NoteAdd categories={categories} onSubmit={onAddNote} />}
        />
        <Route
          path="notes/edit/:id"
          element={
            <NoteEdit
              notes={notes}
              categories={categories}
              onSubmit={onEditNote}
            />
          }
        />
        {/* categories */}
        <Route
          path="categories"
          element={
            <Categories categories={categories} onDelete={onDeleteCategory} />
          }
        />
        <Route
          path="categories/add"
          element={<CategoryAdd onSubmit={onAddCategory} />}
        />
        <Route
          path="categories/edit/:id"
          element={
            <CategoryEdit categories={categories} onSubmit={onEditCategory} />
          }
        />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
