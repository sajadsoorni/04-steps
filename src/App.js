import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, stepStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: 'Bob' });

  function handlePrevious() {
    if (step > 1) stepStep(step - 1);
  }

  function handleNext() {
    if (step < 3) stepStep(step + 1);

    // BAD PRACTICE
    // test.name = 'Mahtab';
    // setTest({ name: 'Alex' });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
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
    </>
  );
}

export default App;
