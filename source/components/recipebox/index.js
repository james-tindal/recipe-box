import { Button } from 'react-bootstrap'
import createRecipeTable from 'components/recipebox/recipetable'
import createRecipeDialog from 'components/recipebox/recipedialog'

export default React => ({ recipes }) => {
  const RecipeTable = createRecipeTable(React)
  const RecipeDialog = createRecipeDialog(React)

  return (
    <div>
      <RecipeTable recipes={recipes} />
      <Button bsStyle="primary">Add Recipe</Button>

      <RecipeDialog />
    </div>
  )
}
