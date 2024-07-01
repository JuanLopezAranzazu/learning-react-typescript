import { RawCategory } from "../../types/Category";
import { Category } from "./Category";

type CategoryListProps = {
  onDelete: (id: string) => void;
  categories: RawCategory[];
};

// Componente para mostrar una lista de categorias
export const CategoryList = ({ categories, onDelete }: CategoryListProps) => {
  return (
    <>
      {categories.map((category, index) => (
        <Category key={index} category={category} onDelete={onDelete} />
      ))}
    </>
  );
};
