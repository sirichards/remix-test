import Hero from "./blocks/Hero"
import TextBlock from "./blocks/TextBlock"

export default function FlexibleContent({blocks}) {
  if (blocks) {
    return blocks.map((block, i) => {
      switch (block.__typename) {
      
        /* -- ACF BLOCKS -- */
        case 'Page_Acfflexiblecontent_Blocks_Hero':
          return <Hero data={block} key={i} />
        case 'Page_Acfflexiblecontent_Blocks_TextFullWidth':
          return <TextBlock data={block} key={i} />
        
        default:
         return <pre key={i}>{JSON.stringify(block, null, 2)}</pre>
      }
    })
  } else return null
}