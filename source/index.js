/* global React */
import { render } from 'react-dom'
import createApp from './App'

const App = createApp(React)

const recipes =
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

const props =
{ foo: 'yay!  🎸🎶'
, recipes: recipes
, title: 'Recipe Box'
, helloClass: 'hello'
}

render(
  <App { ...props }></App>,
  document.getElementById('root')
)
