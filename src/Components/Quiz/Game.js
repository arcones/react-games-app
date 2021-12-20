import { useState } from "react";
import QuizGame from './QuizGame';
import EmptyQuiz from './EmptyQuiz';
import { useEffect } from "react";

const Game = ({ score, setScore, currentQuiz, setCurrentQuiz, setFinished }) => {

    const URL = 'https://core.dit.upm.es/api/quizzes/random10wa?token=2bca751d84825b1e6c2a'

    //const [quizzes, setQuizzes] = useState(require("../../assets/empty-data.json"));
    
    // Desarrollo en local
    const [quizzes, setQuizzes] = useState(require("../../assets/mock-data.json"));
    
    // Desarrollo contra el servidor
    /*
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(json => {setQuizzes(json)})
    }, []); */

    return (
        <div>
            {quizzes.length > 0 && (
                <QuizGame
                    score={score}
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quizzes={quizzes}
                    setFinished={setFinished}
                />
            )}

            {quizzes.length <= 0 && (
                <EmptyQuiz />
            )}
        </div>
    )
}

export default Game
