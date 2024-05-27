import profilepic from './assets/profilepicture.jpg'
function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="Profile Picture" width={200} height={200} ></img>
            <h2 className="card-title">Eric Maina</h2>
            <p className="card-text">I am at Fintech</p>
        </div>
    );
}

export default Card