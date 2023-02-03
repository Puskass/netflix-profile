import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div>
    <div className="container"> 

      <div className="row"> 
      <img className = "profile-pic" src="http://zoeice.com/assets/img/uploads/profile.png" alt="profile" />
      <p className= 'profile-name'>DEBIL</p>
      </div>

      <div className="row"> 
      <img className = "profile-pic" src="https://blog.giovanh.com/theme/images/ad/twitter_card.png" alt="profile" />
      <p className= 'profile-name'>Uholadja #1</p>
      </div>

      <div className="row"> 
      <img className = "profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" />
      <p className= 'profile-name'>Uholadja #2</p>
      </div>

      <div className="row"> 
      <img className = "profile-pic" src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" alt="profile" />
      <p className= 'profile-name'>JA</p>
      </div>

      <div className="row"> 
      <img className = "profile-pic" src="https://i1.sndcdn.com/avatars-000466999074-x3s0x6-t500x500.jpg" alt="profile" />
      <p className= 'profile-name'>Uholadja #3</p>
      </div>

      </div>
    </div>
  )
}

export default Card