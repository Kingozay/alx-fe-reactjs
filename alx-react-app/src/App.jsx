import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profile Card</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys traveling and cooking" />
    </div>
  );
}

export default App;