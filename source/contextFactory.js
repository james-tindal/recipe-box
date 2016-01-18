
export default component => {
  component.contextTypes = { dispatch: React.PropTypes.func }
  return component
}
