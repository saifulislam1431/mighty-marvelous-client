import React from 'react';

const Contact = () => {
    return (
        <section>
            <div>
                <div className='text-center lg:px-20'>
                    <h1 className='text-primary brand-title text-2xl'>Contact Us</h1>
                    <p className='my-5 font-medium'>Have a question or need assistance? Contact us! We're here to help. Get in touch with our friendly team by filling out the contact form or reaching out via email or phone.</p>
                </div>
                <form className='flex flex-col items-center justify-center space-y-5'>
                            
                            <input type="text" name="user_name" placeholder="Enter Name" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-secondary bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                            
                            <input type="email" name="user_email"
                            placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-secondary bg-opacity-10 focus:bg-opacity-30 outline-none' required />


                            <textarea type="text" placeholder="Type Your Feedback " name="message"className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-secondary bg-opacity-10 focus:bg-opacity-30 outline-none' required />


                            <button className='mySecBtn my-5'>Send Message</button>
                        </form>
            </div>
        </section>
    );
};

export default Contact;