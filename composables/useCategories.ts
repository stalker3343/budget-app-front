import { useQuery } from "@tanstack/vue-query";

// Определяем интерфейс для filters
type CategoryFilters = {
  category_type?: Ref<string | undefined>;
};

export const useGetCategories = (filters: CategoryFilters = {}) => {
  const { data: categories } = useQuery({
    queryKey: ["categories", filters.category_type],
    queryFn: () => {
      const { category_type } = filters;

      return $fetch("/api/categories/list", {
        method: "GET",
        query: {
          category_type: category_type?.value,
        },
        server: false,
      });
    },
  });

  return {
    categories,
  };
};
