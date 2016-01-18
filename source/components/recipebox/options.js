import { Button, ButtonToolbar } from 'react-bootstrap'

export default React => {

  const Options = ({ id }, { dispatch }) => (
    <ButtonToolbar>
      <Button onClick={ () => dispatch({ type: 'DELETE_RECIPE', recipe: id }) } bsStyle="danger">Delete</Button>
      <Button onClick={ () => dispatch({ type: 'SHOW_RECIPE_DIALOG', action: 'edit', id }) }>Edit</Button>
    </ButtonToolbar> )

  Options.contextTypes = { dispatch: React.PropTypes.func }

  return Options
}
