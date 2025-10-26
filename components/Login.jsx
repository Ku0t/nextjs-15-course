"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { login, signup } = useAuth();
  const router = useRouter();

  const cantAuth = !email.includes("@") || password.length < 6;

  async function handleAuthUser() {
    if (cantAuth) {
      return;
    }

    setIsAuthenticating(true);

    try {
      if (isRegister) {
        // then we need to register a user
        await signup(email, password);
      } else {
        // otherwise they're wanting to login
        await login(email, password);
      }
      // so if we get here with no error, then we're authenticated so push to notes page
      router.push("/notes");
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    } finally {
      setIsAuthenticating(false);
    }
  }
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      return handleAuthUser();
    }
  };

  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient">KTNOTES</h1>
        <h2>Organised note taking made easy</h2>
        <p>
          Build your very own archive of easily navigated and indexed
          information and notes
        </p>
        <div className="full-line"></div>
        <h6>{isRegister ? "Create an account" : "Log in"}</h6>
        <div>
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            type="password"
            placeholder="********"
          />
        </div>
        <button
          onClick={handleAuthUser}
          disabled={cantAuth || isAuthenticating}
          className="submit-btn"
        >
          <h6>{isAuthenticating ? "Submitting..." : "Submit"}</h6>
        </button>
        <div className="secondary-btns-container">
          <button
            onClick={() => {
              setIsRegister(!isRegister);
            }}
            className="card-button-secondary"
          >
            <small>{isRegister ? "Log In" : "Sign Up"}</small>
          </button>
          <button className="card-button-secondary">
            <small>Forgot Password</small>
          </button>
        </div>
        <div className="full-line"></div>
        <footer>
          <a target="_blank" href="https://github.com/Ku0t/nextjs-15-course">
            <img
              src="https://avatars.githubusercontent.com/u/156494711?s=400&v=4"
              alt="pfp"
            />
            <h6>@Ku0t</h6>
            <i className="fa-brands fa-github"></i>
          </a>
        </footer>
      </div>
    </>
  );
}
