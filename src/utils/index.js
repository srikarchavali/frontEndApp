
export const fetchRequest = async (setUser, username, email, password) => {
    console.log(username);
    console.log(email);
    console.log(password);
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json();
        // console.log(data)
        setUser(data)
    } catch (error) {
        console.log(error)
    }
}

export const userList = async (setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })

        const data = await response.json();
        setUser(data.users)
        // console.log(user);

    } catch (error) {
        console.log(error);
    }
    
};

export const deleteUser = async (setUser, username) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}deleteUser`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  export const loginUser = async (setUser, username, email, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };