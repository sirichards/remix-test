import { formatHeirarchialMenu } from "~/utils/helpers"
import Navigation from "~/components/Navigation"

export default function Header(props) {
  const menu = formatHeirarchialMenu(props.menu.menuItems.nodes)
  return(
    <header className="p-6 bg-slate-100">
      <Navigation menu={menu} />
    </header>
  )
}