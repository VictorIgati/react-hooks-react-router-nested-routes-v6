import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function UserCard({ user }) {
  const allUsers = useOutletContext();
  console.log("List of all users from context:", allUsers);

  return (
    <article>
      <h2>{user.name}</h2>
      <p>
        <Link to={`/profile/${user.id}`}>View profile</Link>
      </p>
    </article>
  );
}

export default UserCard;