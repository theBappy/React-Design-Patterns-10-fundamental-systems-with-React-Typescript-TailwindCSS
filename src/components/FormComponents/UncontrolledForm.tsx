import React, { useRef } from "react"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    subscribe: boolean;
    message: string;
}


const UncontrolledForm = () => {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const subscribeRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData: FormData = {
            firstName: firstNameRef.current?.value ?? '',
            lastName : lastNameRef.current?.value ?? '',
            email: emailRef.current?.value ?? '',
            subscribe: subscribeRef.current?.checked ?? false,
            message: messageRef.current?.value ?? '',
        }
        console.log(formData)
    }



  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        ref={firstNameRef} 
        placeholder="first name"
        />
        <input 
        type="text" 
        ref={lastNameRef} 
        placeholder="last name"
        />
        <input 
        type="email" 
        ref={emailRef} 
        placeholder="email"
        />
        <label>
           <input type="checkbox" ref={subscribeRef} /> 
           subscribe to newsletter
        </label>

        <textarea name="messsage" ref={messageRef} placeholder="message"></textarea>

        <button type="submit">submit</button>
    </form>
  )
}

export default UncontrolledForm