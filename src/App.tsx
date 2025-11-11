import './App.css';
import { recipes } from './data';
import { RecipeCard } from './RecipeCard';

function App() {

  return (
    <div>
      <h1>Ma Playlist Hiver</h1>
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>

      <div>
        2 chansons ajoutées au favoris
      </div>
    </div>
  )
}

export default App
