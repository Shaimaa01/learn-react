// Click event = An interaction when a user clicks on a specific element
//              we can respond to clicks by passing
//              a callback to the onclick event handler.

 


import imageUrl from "./assets/images/bear.jpg";

function ProfilePicture() {

    const handleClick = (e)=> e.target.style.display = "none";


  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
