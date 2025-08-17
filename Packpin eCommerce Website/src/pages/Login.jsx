import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  const { setLoggedInUser } = useContext(ShopContext);
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (currentState === "Sign Up") {
      if (!/^[A-Za-z ]{2,}$/.test(formData.name))
        newErrors.name = "Enter a valid name (letters only, min 2 chars)";
      if (!/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include a letter and a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const url =
      currentState === "Sign Up"
        ? "https://api.packpin.in/users/register"
        : "https://api.packpin.in/users/login";
    const payload =
      currentState === "Sign Up"
        ? formData
        : { email: formData.email, password: formData.password };

    // try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });
    //   const result = await response.json();
    //   if (response.ok) {
    //     if (result.token) {
    //       localStorage.setItem("LoggedIn", result.token);
    //       setLoggedInUser(result.token);
    //       setTimeout(() => navigate("/profile"), 1000);
    //     }
    //   } else {
    //     alert(
    //       `${currentState} failed: ${result.message || "Please try again."}`
    //     );
    //   }
    // } catch (error) {
    //   alert("An error occurred. Please try again.");
    // }

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const dummyToken = "fake-jwt-token-12345";

      if (currentState === "Login") {
        if (
          formData.email === "test@example.com" &&
          formData.password === "Test@1234"
        ) {
          localStorage.setItem("LoggedIn", dummyToken);
          setLoggedInUser(dummyToken);
          setTimeout(() => navigate("/profile"), 1000);
        } else {
          alert("Invalid email or password");
        }
      } else {
        // For signup, just assume success and store the token
        localStorage.setItem("LoggedIn", dummyToken);
        setLoggedInUser(dummyToken);
        setTimeout(() => navigate("/profile"), 1000);
      }
    } catch (error) {
      console.error("Mock login error:", error);
      alert("Something went wrong. Try again.");
    }

    setFormData({ name: "", phone: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border"
            placeholder="Name"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border"
            placeholder="Phone Number"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </>
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border"
        placeholder="Email"
        required
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
        className="w-full px-3 py-2 border"
        placeholder="Password"
        required
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}
      <div className="w-full justify-between text-sm mt-[-8px] flex">
        <p
          onClick={() =>
            setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
          }
          className="cursor-pointer"
        >
          {currentState === "Login" ? "Don't have an account?" : "Login Here"}
        </p>
      </div>
      <button className="hover:bg-black bg-white hover:text-white text-black border-2 px-8 py-2 mt-4 rounded">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
