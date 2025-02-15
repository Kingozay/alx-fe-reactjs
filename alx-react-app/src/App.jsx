import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <h1>Hello, ALX React Project!</h1>
      <UserProfile name="John Doe" email="john@example.com" location="New York" />
      <UserProfile name="Jane Smith" email="jane@example.com" location="London" />
    </div>
  );
}

export default App;