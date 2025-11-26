
import { useState } from 'react';
import './App.css';
import { CatGrid } from './CatGrid';
import { cats } from './data';

function App() {
  const [search, setSearch] = useState("")
  // Le state vit dans App.tsx
  // CatGrid prend en type un tableau de cats
  // CatCard prend un type un single cat
  // Pouvoir filtrer avec un input text sur le nom du chat ou son breed
  const filteredCats = cats.filter((filteredCat) => (filteredCat.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()) ||
    filteredCat.breed.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
  ))
  return (
    <div>
      <input
        placeholder="Search cats by name or breed..."
        value={search}
        onChange={(event) => (setSearch(event.target.value))}
        style={{
          padding: '8px 12px',
          fontSize: 16,
          border: '1px solid #ddd',
          borderRadius: 6,
          width: '100%',
          maxWidth: 420,
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          marginBottom: 16,
        }}
      /><h2>Cats</h2>
      <CatGrid cats={filteredCats} />
    </div>
  )
}

export default App
