"use client";

import React, { createContext, useContext, useState } from "react";
import { motion } from "motion/react";

const UserContext = createContext<string | undefined>(undefined);

function Parent() {
  const [user, setUser] = useState("Alice");

  return (
    <UserContext.Provider value={user}>
      <div className="border-2 border-blue-500 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Parent Component</h3>
        <p className="mb-2">Provides UserContext: &ldquo;{user}&rdquo;</p>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border p-1 rounded"
          placeholder="Change user name"
        />
        <Child />
      </div>
    </UserContext.Provider>
  );
}

function Child() {
  return (
    <div className="border-2 border-green-500 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Child Component</h4>
      <p>I don&apos;t use or pass any user-related props.</p>
      <Grandchild />
    </div>
  );
}

function Grandchild() {
  const user = useContext(UserContext);
  return (
    <motion.div
      className="border-2 border-red-500 p-4 rounded-lg mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="font-bold mb-2">Grandchild Component</h5>
      <p>Hello, {user}!</p>
      <p className="text-sm mt-2">
        I&apos;m using the UserContext directly, without any props passed
        through Child.
      </p>
    </motion.div>
  );
}

export function SimpleContextExample() {
  return (
    <div className="my-4 p-4 border rounded-lg shadow-sm">
      <Parent />
      <p className="mt-4">
        Try changing the user name in the Parent component. Notice how it
        updates in the Grandchild component without being passed as a prop
        through the Child component.
        <br />
        <br />
        This demonstrates how{" "}
        <i>
          Context allows data to &ldquo;tunnel&rdquo; through intermediate
          components.
        </i>
      </p>
    </div>
  );
}
