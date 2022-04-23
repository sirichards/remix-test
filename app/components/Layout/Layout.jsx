import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default function Layout({ menu, children }) {
  return (
    <>
      <Header menu={menu} />
      <main>{children}</main>
      <Footer />
    </>
  )
}