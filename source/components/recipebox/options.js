import { Button } from 'react-bootstrap'

//takes recipe id and exports edit + delete button. edits recipe
export default React => ({ recipeId }) => {

  return (
    <div>
      <Button bsStyle="danger">Delete</Button>
      <Button>Edit</Button>
    </div>
  )
}
