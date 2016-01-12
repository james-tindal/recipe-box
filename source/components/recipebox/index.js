import { Button } from 'react-bootstrap'
import createRecipeTable from 'components/recipebox/recipetable'
import createRecipeDialog from 'components/recipebox/recipedialog'

export default React => ({ recipes, dialog }) => {
  const RecipeTable = createRecipeTable(React)
  const RecipeDialog = createRecipeDialog(React)
  console.log(dialog);
  return (
    <div>
      <RecipeTable recipes={recipes} />
      <Button bsStyle="primary">Add Recipe</Button>

      <RecipeDialog { ...dialog }/>
    </div> )
}
