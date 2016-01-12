import { Button } from 'react-bootstrap'
import createRecipeTable from 'components/recipebox/recipetable'
import createRecipeDialog from 'components/recipebox/recipedialog'

export default React => ({ recipes, dialog, dispatch }) => {
  const RecipeTable = createRecipeTable(React)
  const RecipeDialog = createRecipeDialog(React)

  const RecipeBox =
    <div>
      <RecipeTable recipes={recipes} />
      <Button
        bsStyle="primary"
        onClick={ () => dispatch({ type: 'SHOW_RECIPE_DIALOG', action: 'add' }) }
      >Add Recipe</Button>

      <RecipeDialog { ...dialog }/>
    </div>

  RecipeBox.contextTypes = { store: React.PropTypes.object }
  return RecipeBox
}
