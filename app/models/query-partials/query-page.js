// Query partial: retrieve page
const defaultPageFields = `
	title
	uri
	date
	content
	seo {
		title
		metaDesc
		opengraphImage {
			sourceUrl
		}
		breadcrumbs {
			text
			url
		}
		canonical
	}
	acfFlexibleContent {
		blocks {
			__typename
			... on Page_Acfflexiblecontent_Blocks_Hero {
				title
				desktopImage {
					altText
					mediaItemUrl
					mediaDetails {
						height
						width
					}
					srcSet
				}
			}
			... on Page_Acfflexiblecontent_Blocks_TextFullWidth {
				text
			}
		}
	}
`

export default defaultPageFields