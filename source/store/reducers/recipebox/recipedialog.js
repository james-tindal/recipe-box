const assign = Object.assign;
const get = attr => object => object[attr]
const getId = get('id')

export default (state, {type, action, id}) => {
  if ( type === 'SHOW_RECIPE_DIALOG' && action === 'add' )
    return assign({}, state,
      { dialog: { show: true, action }} )

  if ( type === 'SHOW_RECIPE_DIALOG' && action === 'edit' ) {
    const recipe = state.recipes.filter(el => getId(el) === id)[0]
    return assign({}, state,
      { dialog: { show: true, me: 'satan', action, recipe }} )
  }

  return state
}


