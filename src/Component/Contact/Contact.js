import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import 'boxicons';
import './Contact.styles.css'

const ContactUs = () => {

    let formRef = useRef();
    function sendEmail(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const mobile = e.target.mobile.value;
        const message = e.target.message.value;
        console.log(name, mobile, email, message);

        emailjs.sendForm('service_btpj7en',
            'template_o148vhb',
            e.target,
            't-cyiD61lsTorblIn'
        ).then(res => {
            console.log(res);
            formRef.current?.reset();
            toast('hi')

        }).catch(error => {
            console.log(error);
        })
        // toast('Your message');

    }
    return (
        <div className="my-7 hero bg-blend-lighten lg:w-4/5 mx-auto mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="div text-center lg:text-left lg:pl-20">
                    <h1 className="text-accent text-center text-4xl font-bold mb-7 ">Contact Me</h1>

                    <p className="flex gap-1 ml-2 text-white "><box-icon color='white' name='mail-send'></box-icon>asifalazadami2021@gmail.com</p>
                    <p className="flex gap-1 ml-2 text-white "><box-icon color='white' type='logo' name='whatsapp'></box-icon>+8801707525010</p>
                    <p className="flex gap-1 ml-2 text-white "><box-icon color='white' type='logo' name='facebook'></box-icon>
                        <a target='blank' href="http://facebook.com/devmdasifofficial">MD ASIF AL AZAD</a>
                    </p>
                    <p className="flex gap-1 ml-2 text-white "><box-icon color='white' type='logo' name='linkedin'></box-icon>
                        <a target='blank' href="https://www.linkedin.com/in/fl9mdasif/">MD ASIF AL AZAD</a>
                    </p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={sendEmail} ref={formRef}>
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder="Your Mobile Numebr" name='mobile' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-info" placeholder="Your Message" name='message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary text-accent" type="submit" value='SEND MESSAGE' />
                            </div>
                            {/* <ToastContainer /> */}
                        </form>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ContactUs;