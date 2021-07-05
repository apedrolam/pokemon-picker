import React from 'react'
import {Link} from 'react-router-dom'

const Home = ({pokemon: results}) => {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {
        results &&
        results.map((val, id) => (
          <div className="mt-4 text-2xl text-blue-400 urlList">
            <Link to={`/about/${val.id}`} key={id}>{ val.name }</Link> 
          </div>
          
        ))
      }
    </div>
  )
}

export default Home
