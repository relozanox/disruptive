import { useContext } from "react";
import ContentCategoryContext from "./ContentCategoryContext";

const useContentCategory = () =>{
    const context = useContext(ContentCategoryContext);

    if(!context){
        throw new Error('useContentCategory must be used within a ContentCategoryProvider');
    }
    return context;
}

export default useContentCategory;
