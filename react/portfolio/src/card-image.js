export default function CardImage() {
    return (
        <div className="cardimage-container">
            <img src={require("./images/profile.jpg")} className="card-image"/>
            <h3 className="cardimage-title">Your Name</h3>
            <a href="mailto:youremail@email.com"><p>you@email.com</p></a>
            <div className="image-div">
                <a href="https://github.com/"><img src={require("./images/github.png")} className="github"/></a>
                <a href="https://in.linkedin.com"><img src={require("./images/linkedin.png")} className="linkedin"/></a> 
            </div>
            <h5>About:</h5>
            <p>I'm a self taught programmer with a keen interest on building and learning new things.</p>
            <hr/>
            <h5>Skills:</h5>
            <p>C, Java, Javascript, Python, Android, React, Bootstrap, HTML, CSS</p>
            <hr/>
            <h5>Projects:</h5>
            <h5>Android</h5>
            <p>Android app made using Google Maps SDK</p>
            <a href="https://github.com"><p>See on Github</p></a>
            <hr/>
            <h5>Python</h5>
            <p>A web app made using Flask and aws</p>
            <a href="https://github.com"><p>See on Github</p></a>
            <hr/>
            <h5>Portfolio - React</h5>
            <p>A simple React page</p>
            <a href="https://github.com/"><p>See on Github</p></a>
        </div>
    )
        
    
}