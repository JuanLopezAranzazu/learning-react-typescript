import { CategoryData } from "../../types/Category";
import { CategoryForm } from "../../components/categories/CategoryForm";

type CategoryAddProps = {
  onSubmit: (data: CategoryData) => void;
};

// Componente para crear una nota
export const CategoryAdd = ({ onSubmit }: CategoryAddProps) => {
  return (
    <div>
      <h1>Crear Categoria</h1>
      <CategoryForm onSubmit={onSubmit} />
    </div>
  );
};
