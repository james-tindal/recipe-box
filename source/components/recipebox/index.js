import { Button } from 'react-bootstrap'
import createRecipeTable from 'components/recipebox/recipetable'
import createRecipeDialog from 'components/recipebox/recipedialog'

export default React => {
  const RecipeTable = createRecipeTable(React)
  const RecipeDialog = createRecipeDialog(React)

  const RecipeBox = ({ recipes, dialog }, { store } ) =>
    <div>
      <RecipeTable recipes={recipes} />
      <Button
        bsStyle="primary"
        onClick={ () => store.dispatch({ type: 'SHOW_RECIPE_DIALOG', action: 'add' }) }
      >Add Recipe</Button>

      <RecipeDialog { ...dialog }/>
    </div>

  RecipeBox.contextTypes = { store: React.PropTypes.object }

  return RecipeBox
}
