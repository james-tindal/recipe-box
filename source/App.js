import createTitle from 'components/title'
import createRecipeBox from 'components/recipebox'

export default React => ({ title, state }) => {
  const Title = createTitle(React)
  const RecipeBox = createRecipeBox(React)

  return (
    <div className="content container">
      <Title>{ title }</Title>
      <RecipeBox { ...state } />
    </div> )
}
