import { useState } from "react"
import type { Recipe } from "./data"

type RecipeCardProps = { recipe: Recipe }

export function RecipeCard(props: RecipeCardProps) {
    const [favorite, setFavorite] = useState(false)
    const { recipe } = props
    return (
        <div key={recipe.id}>
            <li>{recipe.name}</li>
            <button type='button' onClick={() => (setFavorite(!favorite))}>{favorite ? "Remove from favorite" : "Add to favorite"}</button>
        </div>
    )
}