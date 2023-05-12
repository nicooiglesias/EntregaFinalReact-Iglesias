import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button>Generar orden</button>
        </form>
    )
}

export default ContactForm