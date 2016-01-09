import { Well } from 'react-bootstrap'
import createRecipeTable from 'components/recipebox/RecipeTable'
import createAddRecipe from 'components/recipebox/addrecipe'

export default React => ({props}) => {
  const RecipeTable = createRecipeTable(React)
  const AddRecipe = createAddRecipe(React)

  return (
    <Well>
      <RecipeTable />
      <AddRecipe />
    </Well>
  )
}
