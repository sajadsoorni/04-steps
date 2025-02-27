import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
      <Challenge />
    </div>
  );
}

function Steps() {
  const [step, stepStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: 'Bob' });

  function handlePrevious() {
    if (step > 1) stepStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      stepStep((s) => s + 1);
      stepStep((s) => s + 1);
    }

    // BAD PRACTICE
    // test.name = 'Mahtab';
    // setTest({ name: 'Alex' });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Pervious
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Challenge() {
  return (
    <div className="challenge">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setcount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setcount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setcount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is'
            : count > 0
            ? `${count} days from today `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
