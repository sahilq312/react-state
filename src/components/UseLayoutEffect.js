import { useLayoutEffect, useEffect } from "react";

const UseTutorial5 = () => {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div></div>;
};
export default UseTutorial5;
