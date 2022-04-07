import "./styles/App.css"

import housesData from "./data.json"

import HouseCard from "./components/HouseCard"
import { useState } from "react"
import HouseCardCopy from "./components/HouseCardCopy"

function App() {
  const [search, setSearch] = useState("")

  function setSearchInput(e) {
    setSearch(e.target.value)
    console.log(search)
  }

  const houseOrigin = {
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg",
    available: true,
  }

  return (
    <>
      <input type="text" value={search} onChange={(e) => setSearchInput(e)} />
      <div className="App">
        {housesData
          .filter((house) =>
            house.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((house) => (
            <HouseCard key={house.name} house={house} />
          ))}
      </div>
      {/* passing with spread */}
      <HouseCardCopy {...houseOrigin} />
    </>
  )
}

export default App
