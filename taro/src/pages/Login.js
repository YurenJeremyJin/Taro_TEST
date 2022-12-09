import React from "react";

export default function Login() {

    return (
        <form id="form">
          <label>
            Email: <br/>
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password: <br/>
            <input type="password" name="password" />
          </label>
          <br /><br/>
          <button type="submit" id="login_btn">Log in</button>
        </form>
      );
    }

