Contact new draft
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const username = form.name.trim();
        const user_email = form.email.trim();
        const user_message = form.message.trim();

        if (username === '' || user_email === '' || user_message === '') {
            setLoading(false);
            toast.error("Please fill all the fields.", {
                position: 'bottom-right',
            });
            return;
        }

        emailjs.send(
            EMAIL_JS_SERVICE_ID,
            EMAIL_JS_TEMPLATE_ID,
            {
                from_name: username,
                to_name: "Sharath",
                reply_to: user_email,
                to_email: "sharathkulal373@gmail.com",
                message: user_message,
            },
            EMAIL_JS_PUBLIC_KEY
        ).then(
            () => {
                setLoading(false);
                toast.success("Message sent successfully!", {
                    position: 'bottom-right',
                });
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            },
            (error) => {
                setLoading(false);
                console.error(error);
                toast.error("Uh, oh! Something went wrong. Please try again later.", {
                    position: 'bottom-right',
                });
            }
        );
    };

    return (
        <div className='relative z-0 bg-black w-screen h-screen mt-12'>
            <div className='text-white contact overflow-x-hidden pt-12 mt-8' id='contact'>
                <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
                    <p className='font-light'>REACH OUT TO ME</p>
                    <h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} />
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                        <label>Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} />
                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
