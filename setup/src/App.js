import React, {useState} from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
console.log(items)
function App() {
  const [itemss, setItems] = useState(items)
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn">All</button>
          <button className="filter-btn">Breakfast</button>
          <button className="filter-btn">Lunch</button>
          <button className="filter-btn">Shakes</button>
        </div>
        <div className="section-center">
          {itemss.map((item) => {
            return <Menu key={item.id} {...item} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
