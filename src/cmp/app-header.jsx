import { Link } from "react-router-dom"

export function AppHeader() {
  return (
    <header className="app-header flex">
      <Link to={"/"}>
        <h1>Mister Toy</h1>
      </Link>
    </header>
  )
}
