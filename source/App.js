import { createStore } from 'redux'

import hello from 'store/reducers/hello'
import createTitle from 'components/title'
import createHello from 'components/hello'
import createRecipeBox from 'components/recipebox'

const store = createStore(hello)

const setMode = (mode) => store.dispatch({ type: 'SET_MODE', mode })

store.subscribe(() => {
  console.log(store.getState())
})

export default React => ({ foo, recipes, ...props }) => {
  const Title = createTitle(React)
  const Hello = createHello(React)
  const RecipeBox = createRecipeBox(React)
  const helloProps =
  { ...props
  , actions:
    { setMode }
  }

  return (
    <div className="content container">
      <Title { ...props } />
      <Hello { ...helloProps } />
      <p>Content goes here: { foo }</p>

      <RecipeBox recipes={ recipes } />
    </div>
  )
}
