import Link from 'next/link'

const Header = ({ title, meta, id }) => <div style={{ marginBottom: '20px' }}><Link as={`/p/${id}`} href={`/post?id=${id}`}><a style={{
    fontSize: '27px',
    fontWeight: 400,
    fontFamily: 'Athelas, STHeiti, Microsoft Yahei, serif'
}}>{title}</a></Link> <div style={{
    fontSize: '15px', color: '#8a8a8a'
}}>{meta}</div></div>
const Content = ({ content }) => <div>
    {
        content ? <p>{content.replace(/<[/]?p>/g, '')}</p> : <p>Welcome to <a href="https://hexo.io/" target="_blank" rel="noopener">Hexo</a>! This is your very first post. Check <a href="https://hexo.io/docs/" target="_blank" rel="noopener">documentation</a> for more info. If you get any problems when using Hexo, you can find the answer in <a href="https://hexo.io/docs/troubleshooting.html" target="_blank" rel="noopener">troubleshooting</a> or you can ask me on <a href="https://github.com/hexojs/hexo/issues" target="_blank" rel="noopener">GitHub</a>.</p>
    }
</div>

export default { Header, Content }
