import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState(generateRandomPosition());
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(
    localStorage.getItem('highscore') || 0
  );

  const gameAreaSize = 10;

  // Move the function declaration above its usage
  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * gameAreaSize);
    const y = Math.floor(Math.random() * gameAreaSize);
    return [x, y];
  };

  const updateGame = () => {
    const newSnake = [...snake];
    const head = [...newSnake[0]];

    switch (direction) {
      case 'UP':
        head[1] = (head[1] - 1 + gameAreaSize) % gameAreaSize;
        break;
      case 'DOWN':
        head[1] = (head[1] + 1) % gameAreaSize;
        break;
      case 'LEFT':
        head[0] = (head[0] - 1 + gameAreaSize) % gameAreaSize;
        break;
      case 'RIGHT':
        head[0] = (head[0] + 1) % gameAreaSize;
        break;
      default:
        break;
    }

    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(generateRandomPosition());
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    if (newSnake.some((segment) => segment[0] === head[0] && segment[1] === head[1])) {
      resetGame();
      return;
    }

    newSnake.unshift(head);
    setSnake(newSnake);
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  };

  const resetGame = () => {
    if (score > highscore) {
      setHighscore(score);
      localStorage.setItem('highscore', score);
    }

    setSnake([[0, 0]]);
    setFood(generateRandomPosition());
    setDirection('RIGHT');
    setScore(0);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    const intervalId = setInterval(() => {
      updateGame();
    }, 200);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(intervalId);
    };
  }, [snake, food, direction, score]);

  return (
    <div>
      <div>Score: {score}</div>
      <div>Highscore: {highscore}</div>
      <div className="game-board">
        {Array.from({ length: gameAreaSize }).map((_, row) => (
          <div key={row} className="game-row">
            {Array.from({ length: gameAreaSize }).map((_, col) => (
              <div
                key={`${row}-${col}`}
                className={`game-cell ${
                  snake.some((segment) => segment[0] === col && segment[1] === row)
                    ? 'snake'
                    : food[0] === col && food[1] === row
                    ? 'food'
                    : ''
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnakeGame;
