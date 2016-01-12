import dialog from 'store/reducers/recipebox/recipedialog'

const assign = Object.assign;
const defaultState =
{ dialog:
  { show: false
  }
, recipes:
  [ { id: 0
    , name: 'Cake'
    , ingredients: [ 'Butter', 'Sugar', 'Eggs', 'Flour' ]
    }
  , { id: 1
    , name: 'Salad'
    , ingredients: [ 'Kale', 'Quinoa', 'Aubergine' ]
    }
  // , { id: 3
  //   , name: 'Pizza'
  //   , ingredients: [ 'Flour', 'Water', 'Yeast', 'Passata', 'Cheese']
  //   }
  ]
}

export default (
    state = defaultState, action = {}
  ) => {

  switch (action.type) {
    case 'SHOW_RECIPE_DIALOG':
      console.log('action');
      return { dialog: 'satan'}
    case 'HIDE_RECIPE_DIALOG':
      return assign({}, state,
      { dialog: { show: false }} )

    case 'ADD_RECIPE':
      const newRecipes = assign({}, state.recipes, action.recipe)
      return assign({}, state, {
        recipes: newRecipes
      })
    // case 'EDIT_RECIPE'
    //   return
    // case 'DELETE_RECIPE'
    //   return
    default:
      return state
  }

};
