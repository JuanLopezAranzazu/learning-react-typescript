import { Link } from "react-router-dom";
import { RawCategory } from "./../../types/Category";

type CategoryProps = {
  onDelete: (id: string) => void;
  category: RawCategory;
};

// Componente para mostrar la información de una categoria
export const Category = ({ category, onDelete }: CategoryProps) => {
  return (
    <div>
      <Link to={`/categories/edit/${category.id}`}>
        <h1>{category.name}</h1>
      </Link>
      <button type="button" onClick={() => onDelete(category.id)}>
        Eliminar
      </button>
    </div>
  );
};
