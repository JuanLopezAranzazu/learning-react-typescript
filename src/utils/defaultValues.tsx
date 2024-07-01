import { v4 as uuidV4 } from "uuid";
import { RawNote, Priority } from "./../types/Note";
import { RawCategory } from "./../types/Category";

// Datos iniciales
export const arrayCategories: RawCategory[] = [
  {
    id: uuidV4(),
    name: "Categoria 1",
  },
  {
    id: uuidV4(),
    name: "Categoria 2",
  },
  {
    id: uuidV4(),
    name: "Categoria 3",
  },
];

export const arrayNotes: RawNote[] = [
  {
    id: uuidV4(),
    title: "Nota 1",
    description: "Descripcion de la nota 1",
    priority: Priority.LOW,
    categoryId: arrayCategories[0].id,
  },
  {
    id: uuidV4(),
    title: "Nota 2",
    description: "Descripcion de la nota 2",
    priority: Priority.MEDIUM,
    categoryId: arrayCategories[1].id,
  },
  {
    id: uuidV4(),
    title: "Nota 3",
    description: "Descripcion de la nota 3",
    priority: Priority.HIGH,
    categoryId: arrayCategories[2].id,
  },
];
