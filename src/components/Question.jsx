import { useState, useEffect, useRef } from "react";

function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null);

    function resetProgressBar() {
        if (progressBar.current) {
            // Reset progress bar animation
            progressBar.current.style.transition = "none";
            progressBar.current.style.width = "0%";

            // Allow the browser to reflow before starting the animation
            setTimeout(() => {
                progressBar.current.style.transition = "width 10s linear";
                progressBar.current.style.width = "100%";
            }, 50);
        }
    }

    function gotoNextQuestion() {
        if (timer.current) {
            clearTimeout(timer.current); // Clear the timer
        }

        setAnswer(selectedOption); // Submit the selected option
        setSelectedOption(null); // Reset the selected option for the next question
    }

    useEffect(() => {
        resetProgressBar(); // Reset the progress bar whenever the question changes

        // Start a timer to automatically go to the next question after 10 seconds
        timer.current = setTimeout(gotoNextQuestion, 10 * 1000);

        // Cleanup: clear the timer when the question changes or the component unmounts
        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, [question]); // Dependency ensures this effect runs when `question` changes

    return (
        <div className="question">
            <div className="progress-bar-container">
                <div className="progress-bar" ref={progressBar}></div>
            </div>
            <div className="question-count">
                <b>{currentQuestion}</b> of <b>{totalQuestions}</b>
            </div>
            <div className="main">
                <div className="title">
                    <span>Question:</span>
                    <p>{question.title}</p>
                </div>
                <div className="options">
                    {question.options.map((option, index) => (
                        <div
                            className={index === selectedOption ? "option active" : "option"}
                            key={index}
                            onClick={() => setSelectedOption(index)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div className="control">
                <button onClick={gotoNextQuestion}>Next</button>
            </div>
        </div>
    );
}

export default Question;
