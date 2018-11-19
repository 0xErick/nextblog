import Header from './Header'
import styles, { button, body } from '../styles'
const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <style jsx>{styles}</style>
    <style jsx>{button}</style>
    <style jsx global>{body}</style>
    <Header />
    {props.children}
  </div>
)

export default Layout
