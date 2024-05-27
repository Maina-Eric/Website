// click event - an interaction when a user clicks on a soecifit element
//               we can respond to clicks by passing 
//               a callback to the OnClick event handler

function ProfilePicture () {

    const imageUrl = './src/assets/NYC Desktop Wallpaper 3.png';

    const handleClick = () => console.log("OUCH")
    // const handleClick = (e) => e.target.style.display = "none" // event Handler

        return(<img onClick = {handleClick} src= {imageUrl} width={800} height={500}></img>)
        // return(<img onClick={(e) =>  handleClick(e)} src= {imageUrl} width={800} height={500}></img>) // event handler

}
export default ProfilePicture