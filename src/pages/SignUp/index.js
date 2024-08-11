import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";

const SignUp = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  return <h2 className="signUpSection">Hello Signup</h2>;
};
export default SignUp;
