import React from "react";

export const UserGreeting = () => {
  const isLoggedIn = false;
  //   return <div>Welcome {isLoggedIn ? "Vishwash" : "Gaust"} </div>;
  return <div>Welcome {isLoggedIn && "Vishwas"} </div>;
};

// export default UserGreeting;
