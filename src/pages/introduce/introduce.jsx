import React, { useState } from 'react';
import './introduce.css';
import Dropdown from '../../components/Dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
  const difficulty = ['','easy', 'medium', 'hard'];
  const [difficultyChange, setDifficultyChange] = useState('');
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;

  console.log(difficultyChange, 'difficultyChange');

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };

  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src='https://assets.turbologo.com/blog/tr/2019/11/19134439/gaming-logo-cover-480x288.jpg' alt='' />
        <Dropdown data={difficulty} setDiffticutyChange={setDifficultyChange} />
          <div onClick={startQuiz} className='introduce-btn'>
          Quiz'e başla
        </div>
      </div>
    
    
    </div>
  );
};

export default Introduce;
