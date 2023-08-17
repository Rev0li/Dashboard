import React from "react";
import UserItem from "./UserItem";
import { List } from "@chakra-ui/react";

export default function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No user found.</h2>
      </div>
    );
  }

  return (
    <List>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          email={user.mail}
        />
      ))}
    </List>
  );
}
