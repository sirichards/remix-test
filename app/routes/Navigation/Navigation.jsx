import PropTypes from 'prop-types'
import { NavLink } from "@remix-run/react"

/**
 * Render the Sub menu arrow component.
 *
 * @return {object} The Arrow component.
 */
 function Arrow() {
  return (
    <span
      role="button"
      aria-label="expand the dropdown menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
      >
        <path d="M6 0l12 12-12 12z" />
      </svg>
    </span>
  )
}

/**
 * Render the NavigationMenu component.
 *
 * Recursively displays a menu and its children.
 *
 
 * @param  {object}  props      NavigationMenu props.
 * @param  {Array}   props.menu Array of menu items.
 * @return {Element}            The NavigationMenu component.
 */
function NavigationMenu({ menu }) {
  if (!menu || !menu?.length) {
    return null
  }
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <>
      {menu.map((item) => {
        const children =
          item.children && item.children.length > 0 ? item.children : ''

        return (
          <li key={item.id}>
            {item.path.charAt(0) === "/" ? (
              <NavLink
                to={item.path}
                target={item.target ? item.target : '_self'}
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                className="flex px-3 py-2 text-slate-700 hover:text-slate-900"
              >
                {item.label}
                {children && children?.length && <Arrow />}
              </NavLink>
            ) : (
              <a 
                href={item.path} 
                target={item.target} 
                rel={item.target === "_blank" ? "noopener noreferrer" : null}
                className="flex px-3 py-2 text-slate-700 font-medium hover:text-slate-900"
              >
                {item.label}
              </a>
            )}

            {!!children && !!children.length && (
              <ul>
                <NavigationMenu menu={children} />
              </ul>
            )}
          </li>
        )
      })}
    </>
  )
}

NavigationMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Render the Navigation component.
 *
 * @param  {object}  props           Navigation props.
 * @param  {Array}   props.menu      Array of menu items.
 * @param  {string}  props.className Optional classname for the element.
 * @return {Element}                 The Navigation component.
 */
export default function Navigation({ menu }) {
  return (
    <>
      {!!menu?.length && (
        <ul className="flex space-x-4">
          <NavigationMenu menu={menu} />
        </ul>
      )}
    </>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.object)
}