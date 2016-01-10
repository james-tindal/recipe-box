import { Button, ButtonToolbar } from 'react-bootstrap'

export default React => ({ recipeId }) => {

  return (
    <ButtonToolbar>
      <Button bsStyle="danger">Delete</Button>
      <Button>Edit</Button>
    </ButtonToolbar>
  )
}
