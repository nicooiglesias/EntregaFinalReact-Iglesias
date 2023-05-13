import { useState } from "react"
import style from './contactForm.module.css'

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
        <form className={style.form} onSubmit={handleSubmit}>
            <label className={style.label}>
                Nombre y Apellido:
            <input className={style.input} value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className={style.label}>
                Telefono:
            <input className={style.input} value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <label className={style.label}>
                Email:
            <input className={style.input} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <button className={style.button}>Generar orden</button>
        </form>
    )
}

export default ContactForm