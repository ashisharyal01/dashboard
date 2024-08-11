import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";

const Login = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  return <h1 className="loginSection"> Login-page</h1>;
};

export default Login;
