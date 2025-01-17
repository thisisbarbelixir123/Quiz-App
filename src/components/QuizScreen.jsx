import { useState } from "react";
import QuestionList from "../data/questions.json";
import QuizResult from "./QuizResult.jsx";
import Question from "./Question.jsx";

function QuizScreen({ retry, userName }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length).fill(null));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult() {
        let correct = 0;
        QuestionList.forEach((question, index) => {
            if (parseInt(question.correctOptionIndex) === markedAnswers[index]) {
                correct++;
            }
        });
        return {
            total: QuestionList.length,
            correct: correct,
            percentage: Math.trunc((correct / QuestionList.length) * 100),
        };
    }

    return (
        <div className="quiz-screen">
            {isQuestionEnd ? (
                <QuizResult result={calculateResult()} retry={retry} userName={userName} />
            ) : (
                <Question
                    question={QuestionList[currentQuestionIndex]}
                    totalQuestions={QuestionList.length}
                    currentQuestion={currentQuestionIndex + 1}
                    setAnswer={(index) => {
                        setMarkedAnswers((arr) => {
                            const newArr = [...arr];
                            newArr[currentQuestionIndex] = index;
                            return newArr;
                        });
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    }}
                />
            )}
        </div>
    );
}

export default QuizScreen;
