// Query partial: retrieve primary menu
const primaryMenu = `
  menu(id: "primary", idType: NAME) {
    menuItems(first: 100) {
      nodes {
        id
        parentId
        label
        path
        target
      }
    }
  }
`

export default primaryMenu