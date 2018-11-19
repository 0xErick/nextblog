import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

import Post2 from '../components/Post'
const styles = {
  post: {
    minWidth: '760px',
    maxWidth: '900px',
    marginTop: '20px'
  }
}
const Post = ({ show }) => (
  <Layout>
    <div key={show.id} style={styles.post}>
      <Post2.Header title={show.name} id={show.id} meta="2018-05-16" />
      <Post2.Content content={show.summary} />
    </div>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://raw.githubusercontent.com/saqing/nextblog-content/master/${id}.json`)
  const show = await res.json()
  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
