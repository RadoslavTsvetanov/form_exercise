import React from "react"

export default function App() {
  var [User, changeUserData] = React.useState({
    email: "",
    password: "",
    confirmed_password: "",
    join_newsletter: ""
  })
  function changeData() {
    const { name, type, checked, value } = event.target
    changeUserData((currentData) => {
      return {
        ...currentData, [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function SubmitHandler() {
    event.preventDefault()
    var succesful_login = false
    console.log((User.password === User.confirmed_password) ? ("Succesfully signed up", succesful_login = !succesful_login) : "passwords dont match")
    if (User.join_newsletter && succesful_login) {
      console.log("hi")
    }
  }
  console.log(User)
  return (
    <div className="form-container">
      <form className="form" onSubmit={SubmitHandler}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={changeData}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={changeData}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmed_password"
          onChange={changeData}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="join_newsletter"
            onChange={changeData}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
