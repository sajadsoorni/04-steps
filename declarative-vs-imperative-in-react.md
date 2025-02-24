## 📝 Declarative vs. Imperative in React

### What does "React is declarative" mean?
- **Declarative programming** focuses on describing **what** the UI should look like based on the current state.
- **Imperative programming** focuses on describing **how** to change the UI step by step.

### Examples:

#### ✅ Declarative (React)
```jsx
const [count, setCount] = useState(0);

return (
  <div>
    <p>The count is {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```

- You declare what the UI should be, and React updates the DOM for you.

#### ❌ Imperative (Vanilla JS)
```javascript
let count = 0;

const countDisplay = document.createElement('p');
countDisplay.textContent = `The count is ${count}`;

const button = document.createElement('button');
button.textContent = 'Increment';
button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = `The count is ${count}`;
});

document.body.append(countDisplay, button);
```

- You manually specify how the DOM should update step by step.

---

In summary:
- **React (Declarative):** "Show me what the UI should look like."
- **Vanilla JS (Imperative):** "Here’s how to change the UI."

