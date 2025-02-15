function UserProfile(props) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  }
  
  export default UserProfile;