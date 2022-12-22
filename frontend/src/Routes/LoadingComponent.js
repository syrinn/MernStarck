import React, { useEffect } from "react";

export default function LoadingComponent() {
  useEffect(() => {
    <h1> Start Loading </h1>;
    return () => {
      <h1> Loading Finished </h1>;
    };
  }, []);

  return <div />;
}
