import { Link } from "@remix-run/react"
import { formatHeirarchialMenu } from "~/utils/helpers"
import Navigation from "~/components/Navigation"

export default function Header(props) {
  const menu = formatHeirarchialMenu(props.menu.menuItems.nodes)
  return(
    <header className="p-6 bg-slate-100 flex justify-between items-center">
      <Link to="/">
        Remix template
      </Link>
      <Navigation menu={menu} />
    </header>
  )
}