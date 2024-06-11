"use client"

import { MailIcon, GithubIcon, DownloadIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import CircleImage from "@/components/circle-image";
import TransitionPage from '@/components/transition-page';
import { useState } from 'react';
import { useForm } from '@formspree/react';

const TestimonialsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [state, handleSubmit] = useForm("mbjneqbb"); // Replace with your Formspree endpoint

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(e);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className='flex flex-col justify-center h-lvh'>
                <div>
                    <title>Contact - Your Name</title>
                    <meta name="description" content="Contact page for Your Name's portfolio" />
                </div>
                <div className="container mx-auto mt-8 p-4 ">
                    <div className="flex flex-wrap">
                        {/* Left Area for Sending Email */}
                        <div className="w-full md:w-1/2 px-2 md:px-4 mb-4">
                            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                            <p className="mb-4">Feel free to reach out to me with any inquiries or collaboration opportunities!</p>
                            <form className="max-w-md" onSubmit={submitForm}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-400">Name</label>
                                    <input type="text" id="name" name="name" className="form-input mt-1 block w-full bg-black focus:border-transparent outline-none p-3" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-400">Email</label>
                                    <input type="email" id="email" name="email" className="form-input mt-1 block w-full bg-black focus:border-transparent outline-none p-3" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-400">Message</label>
                                    <textarea id="message" name="message" rows={4} className="form-textarea mt-1 block w-full bg-black focus:border-transparent outline-none p-3" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">Send Message</button>
                            </form>
                        </div>
                        {/* Right Area for Displaying Contact Details */}
                        <div className="w-full md:w-1/2 px-2 md:px-4 mb-4">
                            <h1 className="text-3xl font-bold mb-4">Contact Details</h1>
                            <br></br>
                            <p className="mb-4">You can also find me at:</p>
                            <div className="flex items-center mb-4">
                                <MapPinIcon className="text-gray-400 mr-4" size={24} />
                                <p className="text-gray-400">Waterway Sundew, Singapore</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <PhoneIcon className="text-gray-400 mr-4" size={24} />
                                <p className="text-gray-400">507-440-3407</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <MailIcon className="text-gray-400 mr-4" size={24} />
                                <a href="mailto:limk69966@gmail.com" className="text-gray-400">limk69966@gmail.com</a>
                            </div>
                            <div className="flex items-center mb-4">
                                <GithubIcon className="text-gray-400 mr-4" size={24} />
                                <a href="https://github.com/greensoft0608" className="text-gray-400">github.com/greensoft0608</a>
                            </div>
                            <div className="flex items-center">
                                <DownloadIcon className="text-gray-400 mr-4" size={24} />
                                <a href="/myresume.pdf" download className="text-gray-400">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;
