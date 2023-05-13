import { useState } from "react"
import styles from './CheckoutForm.module.css'

    const CheckoutForm = ({ onConfirm }) => {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        const [verifyEmail, setVerifyEmail] = useState('');
        const [isValid, setIsValid] = useState(false);
        const [errors, setErrors] = useState({});
      
        const handleConfirm = (event) => {
          event.preventDefault();
      
          const userData = { name, phone, email };
          onConfirm(userData);
        };
      
        const handleNameChange = ({ target }) => {
          setName(target.value);
          const nameError = target.value.trim() === '' || !/^[A-Za-z]+\s[A-Za-z]+$/.test(target.value)
            ? 'Ingresa Nombre y Apellido valido.'
            : '';
          setErrors((prevState) => ({ ...prevState, name: nameError }));
          setIsValid(nameError === '' && phone !== '' && validateEmail(email));
        };
      
        const handlePhoneChange = ({ target }) => {
          setPhone(target.value);
          const phoneError = target.value.trim() === '' ? 'Ingresa un número de teléfono válido.' : '';
          setErrors((prevState) => ({ ...prevState, phone: phoneError }));
          setIsValid(phoneError === '' && name !== '' && validateEmail(email));
        };
      
        const handleEmailChange = ({ target }) => {
          setEmail(target.value);
          const emailError = !validateEmail(target.value) ? 'Ingresa un correo electrónico válido.' : '';
          setErrors((prevState) => ({ ...prevState, email: emailError }));
          setIsValid(emailError === '' && name !== '' && phone !== '');
        };
      
        const handleVerifyEmailChange = ({ target }) => {
          setVerifyEmail(target.value);
          const verifyEmailError = target.value !== email ? 'Los correos electrónicos no coinciden.' : '';
          setErrors((prevState) => ({ ...prevState, verifyEmail: verifyEmailError }));
          setIsValid(verifyEmailError === '' && name !== '' && phone !== '' && validateEmail(email));
        };
      
        const validateEmail = (email) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };

        return (
            <div className={styles.Container}>
              <form onSubmit={handleConfirm} className={styles.Form}>
                <label className={styles.Label}>
                  Nombre:
                  <input
                    className={styles.Input}
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    pattern="[A-Za-z\s]+"
                    placeholder="Ej: Roberto Gonzalez"
                  />
                  {errors.name && <span className={styles.Error}>{errors.name}</span>}
                </label>
                <label className={styles.Label}>
                  Teléfono:
                  <input
                    className={styles.Input}
                    type="number"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Ej: 345213428"
                  />
                  {errors.phone && <span className={styles.Error}>{errors.phone}</span>}
                </label>
                <label className={styles.Label}>
                  Email:
                  <input
                    className={styles.Input}
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Ej: robertgonzalez@gmail.com"
                  />
                  {errors.email && <span className={styles.Error}>{errors.email}</span>}
                </label>
                <label className={styles.Label}>
                    Confirmar email:
                    <input
                        className={styles.Input}
                        type="email"
                        value={verifyEmail}
                        onChange={handleVerifyEmailChange}
                        placeholder="Ej: robertgonzalez@gmail.com"
                    />
                    {errors.verifyEmail && <span className={styles.Error}>{errors.verifyEmail}</span>}
                </label>
                <button className={`${styles.Button} ${isValid ? styles.ActiveButton : ''}`} type="submit" disabled={!isValid}>
                  Confirmar compra
                </button>
              </form>
            </div>
        )
}

export default CheckoutForm;