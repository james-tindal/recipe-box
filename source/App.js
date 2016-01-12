import createTitle from 'components/title'
import createRecipeBox from 'components/recipebox'

export default React => {
  const Title = createTitle(React)
  const RecipeBox = createRecipeBox(React)

  const App = ({ store, state, title }) => {
    App.prototype.getChildContext = () => ({ store })
    App.childContextTypes = { store: React.PropTypes.object }

    console.log(state);
    App.prototype.render = () =>
      <div className="content container">
        <Title title={ title } />
        <RecipeBox { ...state } />
      </div>
  }
  return App
}
