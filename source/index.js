/* global React */
import { render } from 'react-dom'
import createApp from './App'

import { createStore } from 'redux'
import recipeBox from 'store/reducers/recipebox'

const initialState =
{ dialog:
  { show: false }
, recipes:
  [ { id: 0
    , name: 'Cake'
    , ingredients: [ 'Butter', 'Sugar', 'Eggs', 'Flour' ]
    }
  , { id: 1
    , name: 'Salad'
    , ingredients: [ 'Kale', 'Quinoa', 'Aubergine' ]
    }
  , { id: 3
    , name: 'Pizza'
    , ingredients: [ 'Flour', 'Water', 'Yeast', 'Passata', 'Cheese']
    }
  ]
}

const store = createStore(recipeBox, initialState)
const App = createApp(React)

const renderApp = (state) => {
  const props =
  { store, state
  , title: 'Recipe Box'
  }
  render(
    <App { ...props }></App>,
    document.getElementById('root')
  )
}

store.subscribe(() => {
  console.log(store.getState());
  renderApp(store.getState())
})
renderApp(initialState)
