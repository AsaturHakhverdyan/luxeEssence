import { useEffect, useState } from "react";
import axios from "axios";
import { ICatchError, ICategories } from "../../../../utils/interface";

const useGetCategories = () => {

  const [categoriesError, setCategoriesError] = useState<ICatchError>();
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    (async () => {
      setCategoriesLoading(true);
      try {
        const { data } = await axios.get("https://hydralab-dev.10web.site/wp-json/get/categories");
        if (data) {
          setCategories(data)
          setCategoriesLoading(false);
        }
      } catch (err: any | undefined) {
        setCategoriesError(err);
      } finally {
        setCategoriesLoading(false);
      }
    })();
  }, []);
  return {
    categoriesLoading,
    categories,
    categoriesError
  };
}

export default useGetCategories;
