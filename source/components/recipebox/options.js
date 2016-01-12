import { Button, ButtonToolbar } from 'react-bootstrap'

export default React => {

  const Options = ({ id }, { store }) => (
    <ButtonToolbar>
      <Button onClick={ () => store.dispatch({ type: 'DELETE_RECIPE', id: id }) } bsStyle="danger">Delete</Button>
      <Button onClick={ () => store.dispatch({ type: 'SHOW_RECIPE_DIALOG', action: 'edit', id }) }>Edit</Button>
    </ButtonToolbar> )

  Options.contextTypes = { store: React.PropTypes.object }

  return Options
}
