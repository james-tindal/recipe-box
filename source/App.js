import createTitle from 'components/title'
import createRecipeBox from 'components/recipebox'

export default React => {
  const Title = createTitle(React)
  const RecipeBox = createRecipeBox(React)

  const App = ({ title, store }) => {
    App.prototype.getChildContext = () => ({ store })
    App.childContextTypes = { store: React.PropTypes.object }

    App.prototype.render = () =>
      <div className="content container">
        <Title title={ title } />
        <RecipeBox { ...store.getState() } dispatch={ store.dispatch } />
      </div>
  }
  return App
}
