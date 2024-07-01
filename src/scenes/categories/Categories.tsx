import { useNavigate } from "react-router-dom";
import { RawCategory } from "../../types/Category";
import { CategoryList } from "./../../components/categories/CategoryList";

type CategoriesProps = {
  onDelete: (id: string) => void;
  categories: RawCategory[];
};

// Componente para mostrar la lista de categorias
export const Categories = ({ categories, onDelete }: CategoriesProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button type="button" onClick={() => navigate("/categories/add")}>
          Crear Categoria
        </button>
      </div>
      <CategoryList categories={categories} onDelete={onDelete} />
    </>
  );
};
