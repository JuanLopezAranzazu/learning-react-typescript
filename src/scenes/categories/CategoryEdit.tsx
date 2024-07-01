import { useParams } from "react-router-dom";
import { CategoryData, RawCategory } from "../../types/Category";
import { CategoryForm } from "../../components/categories/CategoryForm";

type CategoryEditProps = {
  onSubmit: (id: string, data: CategoryData) => void;
  categories: RawCategory[];
};

// Componente para editar una nota
export const CategoryEdit = ({ categories, onSubmit }: CategoryEditProps) => {
  const { id } = useParams<{ id: string }>();
  // Buscar la nota
  const category: RawCategory | undefined = categories.find(
    (category) => category.id === id
  );

  if (!category) {
    return <div>Categoria no encontrada</div>;
  }

  console.log(id, category);

  return (
    <div>
      <h1>Editar Categoria</h1>
      <CategoryForm
        onSubmit={(data) => onSubmit(id, data)}
        name={category.name}
      />
    </div>
  );
};
