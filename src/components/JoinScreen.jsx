import { useState } from "react";

function JoinScreen({ start, setUserName }) {
    const [name, setName] = useState("");

    function handleStart() {
        if (name.trim() === "") {
            alert("Please enter your name to start the quiz.");
            return;
        }
        setUserName(name);
        start();
    }

    return (
        <div className="join-screen">
            <h2>Join Quiz</h2>
            <br></br>
            <p>This is the only quiz you'll ever need in your lifetime!</p>
            <br></br>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default JoinScreen;
