import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import QuizScreen from "./components/QuizScreen.jsx";
import JoinScreen from "./components/JoinScreen.jsx";

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [userName, setUserName] = useState("");

    return (
        <>
            <Navbar />
            <div className="quiz-container">
                {isQuizStarted ? (
                    <QuizScreen
                        retry={() => setIsQuizStarted(false)}
                        userName={userName}
                    />
                ) : (
                    <JoinScreen
                        start={() => setIsQuizStarted(true)}
                        setUserName={setUserName}
                    />
                )}
            </div>
        </>
    );
}

export default App;
