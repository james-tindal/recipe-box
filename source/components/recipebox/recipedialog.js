import { Button, Modal } from 'react-bootstrap'

export default React => type =>
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'add' ? 'Add a' : 'Edit'} Recipe</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="primary">{type === 'add' ? 'Add' : 'Edit'} Recipe</Button>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
