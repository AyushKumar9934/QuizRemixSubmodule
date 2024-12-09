import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type AnswerOption = {
    answer: string;
    isCorrect?: boolean;
};

type Question = {
    question: string;
    answerOptions: AnswerOption[];
};
const question1 = [
    {
      "question": "What type of framework is Next.js?",
      "answerOptions": [
        {
          "answer": "Frontend"
        },
        {
          "answer": "Backend"
        },
        {
          "answer": "FullStack",
          "isCorrect": true
        },
        {
          "answer": "None of the above"
        }
      ]
    }
  
  ]
type AnswerType = { answerByUser: string };

const Layout4: React.FC<{ allquestion: Question[] }> = ({ allquestion: questions=question1 }) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedOptions, setSelectedOptions] = useState<AnswerType[]>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [progressWidth, setProgressWidth] = useState<number>(0);

    // Update progressWidth on currentQuestion change
    useEffect(() => {
        setProgressWidth(((currentQuestion + 1) / questions.length) * 100);
    }, [currentQuestion, questions.length]);

    const handleCheck = () => setIsChecked(true);

    const handlePrevious = (): void => {
        setCurrentQuestion((prev) => Math.max(0, prev - 1));
        setIsChecked(false);
    };

    const handleNext = (): void => {
        setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1));
        setIsChecked(false);
    };

    const handleAnswerOption = (answer: string) => {
        setSelectedOptions((prev) => {
            const newOptions = [...prev];
            newOptions[currentQuestion] = { answerByUser: answer };
            return newOptions;
        });
        setSelectedAnswer(answer);
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mx-3 my-1">
                <div className="flex justify-between items-center gap-1">
                    <div onClick={handlePrevious}><FaArrowLeft /></div>
                    <div onClick={handleNext}><FaArrowRight /></div>
                </div>
                <div>
                    <p>{currentQuestion + 1}/{questions.length} in Layout5</p>
                </div>
                <div className="rounded-full px-4 py-2 bg-slate-100">00:00</div>
            </div>
            <div className="w-auto bg-gray-200 rounded-full h-6px dark:bg-gray-700 m-5 mt-2 mb-2">
                <div className="bg-blue-600 h-6px rounded-full" style={{ width: `${progressWidth}%` }}></div>
            </div>
          
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Q. {currentQuestion + 1} of {questions.length}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {questions[currentQuestion].question}
                </p>
                <div className="pt-4 pb-2">
                    {questions[currentQuestion].answerOptions.map((answerOption, i) => {
                        const optionToBeGreen = isChecked && answerOption.isCorrect;
                        const isSelected = selectedAnswer === answerOption.answer;

                        return (
                            <div
                            key={i}
                            className={`m-1 mt-0 flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white 
                                ${optionToBeGreen ? 'bg-green-500' : isSelected ? 'bg-blue-300' : 'bg-yellow-300'} 
                                ${isChecked ? 'opacity-50' : ''} 
                                rounded-full min-w-full hover:bg-blue-800 focus:ring-4 focus:outline-none`}
                        >
                                <button
                                    className="block w-full"
                                    name={answerOption.answer}
                                    value={answerOption.answer}
                                    onClick={() => handleAnswerOption(answerOption.answer)}
                                    disabled={isChecked}
                                >
                                    {answerOption.answer}
                                </button>
                            </div>
                        );
                    })}
                </div>
                
                <button
                    disabled={isChecked}
                    onClick={handleCheck}
                    className={`flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-full min-w-full 
                        hover:bg-blue-800 focus:ring-4 focus:outline-none ${isChecked ? 'opacity-50' : ''}`}
                >
                    Check Your Answer
                </button>
                <p className="flex justify-center gap-1 items-center font-normal text-gray-700 dark:text-gray-400">
                    Powered by <span className="font-mono text-2xs font-bold">Chabbi</span>
                </p>
            </div>
        </div>
    );
};

export default Layout4;