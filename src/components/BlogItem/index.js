import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, description, publishedDate} = eachBlog
  return (
    <li className="list-item-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
