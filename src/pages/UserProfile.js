import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext() || [];

  const user = users.find((u) => u.id === parseInt(params.id));

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <aside>
      <h2>{user.name}</h2>
    </aside>
  );
}

export default UserProfile;