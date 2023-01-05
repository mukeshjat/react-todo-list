import React from "react";

const Form = ({fullname, setFullname, email, setEmail, todos, setTodos}) =>{


    const onFormSubmit = (e) =>{
        e.preventDefault();
            setTodos([...todos, {id: new Date, userName:fullname, userEmail: email}])
            setFullname("");
            setEmail("");
            fullname = "";
            email = "";
    }
    // console.log("todos", todos);

    return(
        <>
       <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter Your Name" value={fullname} onChange={(event) => setFullname(event.target.value)} required className="text-input" />
        <input type="text" placeholder="Enter Your Email" value={email} onChange={(event) => setEmail(event.target.value)} required className="text-input" />
        <button type="submit" className="button-add" >Add</button>
       </form>
        </>
    )
}
export default Form;