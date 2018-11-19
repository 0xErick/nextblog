import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Post from '../components/Post'

const styles = {
  post: {
    minWidth: '760px',
    maxWidth: '900px',
    marginTop: '20px'
  }
}
const Index = (props) => (
  <Layout>
    <ul>
      {props.shows.map(({ show }) => (
        <div key={show.id} style={styles.post}>
          <Post.Header title={show.name} id={show.id} meta="2018-05-16" />
          <Post.Content />
        </div>

      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://raw.githubusercontent.com/saqing/nextblog-content/master/post-list.json')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
