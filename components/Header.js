import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/achives'>
      <a style={linkStyle}>Achives</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
