import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="simple-page">
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
        <h1>This page hasn't been built yet.</h1>
        <p>Maybe that's your first project. In the meantime, here's everything that has been built.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
