import React from 'react'
import { Link } from 'react-router'

function HomePage() {
  return (
    <div>
        <Link to={"/courses"} >CoursePage</Link>
    </div>
  )
}

export default HomePage