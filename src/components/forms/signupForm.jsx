import React, { useState } from "react";
import Input from "../inputs/input";
import PrimaryButton from "../buttons/primaryButton";
import TextButton from "../buttons/textButton";
import "./signupForm.css";

export default function SignUpForm({
  action = "", // Form action URL, where the form data will be sent
  method = "get", // HTTP method for form submission, default is "get"
  title = "Sign Up", // Form title, default is "Sign Up"
}) {
  
  const handleSignupOnClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Custom form submission logic goes here
    alert("The form submitted.");
  };

  return (
    <>
      <form action={action} method={method} onSubmit={handleSignupOnClick}>
        <h3>{title}</h3> {/* Display the form title */}
        <Input
          title={"Username"} // Input field for the username
        />
        <Input
          type="email"
          title={"Email"} // Input field for the email address
        />
        <Input
          type={"password"}
          title={"Password"} // Input field for the password
        />
        <Input
          type={"password"}
          title={"Repeat Password"} // Input field to confirm the password
        />
        <PrimaryButton type={"submit"}>
          SIGN UP {/* Submit button for the form */}
        </PrimaryButton>
        <div className="login">
          Already have an account? <TextButton link={"#"}>Log In</TextButton>{" "}
          {/* Button to navigate to the login page */}
        </div>
      </form>
    </>
  );
}
