import profilePic from './assets/images/profile-picture.jpg'

function Card(){
const styles = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "orange",
}

return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile Picture" />
        <h2 className="card-title" >Shaimaa</h2>
        <p style={styles}>Be A BEE</p>
    </div>
)
}

export default Card