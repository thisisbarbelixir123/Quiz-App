function QuizResult({ result, retry, userName }) {
    const passingGrade = 70;
    const hasPassed = result.percentage >= passingGrade;

    return (
        <div className="result-screen">
            <h2>{hasPassed ? `Congratulations, ${userName}!` : `Better luck next time, ${userName}!`}</h2>
            <b>Your score: {result.percentage}%</b>
            <p>
                You answered {result.correct} questions correctly out of {result.total} questions.
            </p>
            {hasPassed ? (
                <p>You passed the quiz! Great job!</p>
            ) : (
                <p>You didn't pass the quiz. Keep trying, and you'll get it next time!</p>
            )}
            <p>Would you like to try again?</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default QuizResult;
