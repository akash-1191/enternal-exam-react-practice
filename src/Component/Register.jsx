import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        cpass: '',
        phone: ''
    });

    const handChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const { name, email, pass, cpass, phone } = formData;
        const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;

        if (!name) {
            document.getElementById('name-error').innerHTML = "please enter you name";
            document.getElementById('name-error').style.color = 'red';
            return false;
        }
        if (!email) {
            document.getElementById('email-error').innerHTML = "plea enter you email";
            document.getElementById('email-error').style.color = 'red';
            return false;
        }
        if (!email.match(validEmail)) {
            document.getElementById('email-error').innerHTML = "plea enter correct email";
            document.getElementById('email-error').style.color = 'red';
            return false;
        }
        if (!pass) {
            document.getElementById('pass-error').innerHTML = "plea enter you password";
            document.getElementById('pass-error').style.color = 'red';
            return false;
        }
        if (!cpass) {
            document.getElementById('cpass-error').innerHTML = "plea enter you comferm password";
            document.getElementById('cpass-error').style.color = 'red';
            return false;
        }
        if (pass !== cpass) {
            document.getElementById('cpass-error').innerHTML = "do not match";
            document.getElementById('cpass-error').style.color = 'red';
            return false;
        }
        if (!phone) {
            document.getElementById('phone-error').innerHTML = "plea enter you name";
            document.getElementById('phone-error').style.color = 'red';
            return false;
        }
        if (isNaN(phone)) {
            document.getElementById('phone-error').innerHTML = "please enter digit";
            document.getElementById('phone-error').style.color = 'red';
            return false;
        }
        alert("submited...");
        setFormData({
            name: '',
            email: '',
            pass: '',
            cpass: '',
            phone: ''
        })
    }


    return (
        <div>
            <div className="formdiv">
                <pre>{JSON.stringify(formData, undefined, 2)}</pre>
                <div className='mainform'>
                    <h1>register page </h1>
                    <form method="post" onSubmit={handleSubmitForm}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' value={formData.name} onChange={handChange} />
                        <span id='name-error'></span><br />

                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' value={formData.email} onChange={handChange} />
                        <span id='email-error'></span><br />

                        <label htmlFor="pass">Password</label>
                        <input type="text" name='pass' value={formData.pass} onChange={handChange} />
                        <span id='pass-error'></span><br />


                        <label htmlFor="cpass">Con_Password</label>
                        <input type="text" name='cpass' value={formData.cpass} onChange={handChange} />
                        <span id='cpass-error'></span><br />

                        <label htmlFor="phone">Phone NO.</label>
                        <input type="text" name='phone' value={formData.phone} onChange={handChange} />
                        <span id='phone-error'></span><br />


                        <input type="submit" name='submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
