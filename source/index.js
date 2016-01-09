/* global React */
import { render } from 'react-dom'
import createApp from './App'

const App = createApp(React)

const props = {
  foo: 'yay!  🎸🎶',
  title: 'Recipe Box',
  helloClass: 'hello'
}

render(
  <App { ...props }></App>,
  document.getElementById('root')
)
