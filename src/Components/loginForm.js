import React, { useState } from "react";
import "../App.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

 
  const submitForm = (e) => {
    e.preventDefault(); //to prevent auto refresh of page
    if( email && password){
    const newEntry = { id: new Date().getTime().toString(), email, password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");
  }else {
    alert("Please fill the Data");
  }
  }
  return (
    <>
      <div className="forWholebg">
        <form
          className="formBg"
          autoComplete="off"
          action=""
          onSubmit={submitForm}
        >
          <div>
            <label className="mx-auto" htmlFor="email">
              Email
            </label>

            <br />
            <input
              className="mx-auto"
              type="text"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "5px",
                height: "25px",
                padding: "2px",
                borderColor: "ButtonShadow",
              }}
            />
          </div>

          <br />
          <div>
            <label className="mx-auto" htmlFor="password">
              Password
            </label>

            <br />
            <input
              className="mx-auto"
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "5px",
                height: "25px",
                padding: "2px",
                borderColor: "ButtonShadow",
              }}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          {allEntry.map((curElem) => {
            const{ id, email, password}= curElem;
            return (
              <div className="showDataStyles" key={id}>
                <p>{email}</p>
                <p>{password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LoginForm;
