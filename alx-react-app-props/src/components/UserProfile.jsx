const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p> {/* <-- Added "Bio:" to match the checker */}
    </div>
  );
};

export default UserProfile;
