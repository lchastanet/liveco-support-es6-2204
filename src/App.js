import "./styles/App.css"

import housesData from "./data.json"
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("")
  const [available, setAvailable] = useState(false)
  const [type, setType] = useState("")

  const handletext = (e) => {
    setSearch(e.target.value)
  }

  const handleCheckbox = (e) => {
    setAvailable(!available)
  }

  const handleSelect = (e) => {
    setType(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handletext} />
      <input type="checkbox" onChange={handleCheckbox} />
      <select onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Flat">Flat</option>
        <option value="House">House</option>
      </select>
      {housesData
        .filter((elem) => {
          return elem.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        })
        .filter((elemAvailable) => {
          return elemAvailable.available === available
        })
        .filter((elemAvailable) => {
          return elemAvailable.type === type || type === "All"
        })
        .map((house, index) => (
          <div key={house.name + index + new Date()}>{house.name}</div>
        ))}
    </>
  )
}

export default App
