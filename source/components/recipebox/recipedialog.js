/* global React */ // change to turn off react rule
import { Button, Input, Modal } from 'react-bootstrap'
const { bool, object, string } = React.PropTypes
const assign = (a, b) => Object.assign({}, a, b)

const RecipeDialog = ({ show, action, recipe = {} }, { store }) => {
  const close = () => store.dispatch({ type: 'HIDE_RECIPE_DIALOG'})
  const post = () => {
    const recipeN = assign(recipe, { name: RecipeDialog.name, ingredients: RecipeDialog.ingredients })
    store.dispatch(
    { type: action === 'edit' ? 'EDIT_RECIPE' : 'ADD_RECIPE'
    , recipeN } )
  }

  return (
    <Modal show={show} onHide={ close }>
      <Modal.Header closeButton>
        <Modal.Title>{ action === 'add' ? 'Add a' : 'Edit' } Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <Input
            type="text"
            label="Recipe"
            placeholder="Recipe name"
            value={ recipe.name }
            ref={ref => RecipeDialog.name = ref} />
          <Input
            type="text"
            label="Ingredients"
            placeholder="Enter ingredients, separated by commas"
            value={ recipe.ingredients }
            ref={ref => RecipeDialog.ingredients = ref} />
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          onClick={ post }
          bsStyle="primary">{action === 'add' ? 'Add' : 'Edit'} Recipe</Button>
        <Button
          onClick={ close }
        >Close</Button>
      </Modal.Footer>
    </Modal> )
}

RecipeDialog.contextTypes = { store: object }
RecipeDialog.propTypes = { show: bool.isRequired, action: string.isRequired, recipe: object.isRequired }

export default React => RecipeDialog
