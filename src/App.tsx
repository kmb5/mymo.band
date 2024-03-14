import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faApple, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
      <div className="md:container md:mx-auto">
        <h1 className="text-3xl font-bold underline">Hello, World!</h1>
      </div>
      <div>
        <FontAwesomeIcon icon={faSpotify} />
        <FontAwesomeIcon icon={faApple} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </>
  )
}

export default App
