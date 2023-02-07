// Write your code here

import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  return (
    <div>
      <h1 className="heading">{message}</h1>
    </div>
  )
}

export default Message
