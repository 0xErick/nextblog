import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '760px',
    maxWidth: '900px'
  },
  logo: {
    fontSize: '48px',
    fontFamily: `sans-serif`
  },
  menu: {
    fontSize: '16px',
    fontFamily: `Athelas, STHeiti, Microsoft Yahei, serif`
  }
}

const Header = () => (
  <div style={styles.container} >
    <div style={styles.logo}>
      <Link href='/'>
        <a>Next Blog</a>
      </Link>
    </div>
    <div style={styles.menu}>
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

  </div >
)

export default Header
