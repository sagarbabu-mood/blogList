import BlogItem from '../BlogItem'
import './index.css'

const app = props => {
  const {blogsList} = props
  return (
    <ul className="list-items-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </ul>
  )
}

export default app
