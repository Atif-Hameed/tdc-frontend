/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react'
import Container from '@/components/shared/container'
import Heading from '@/components/shared/heading'
import { ClockIcon, MailIcon, PhoneIcon } from '@/svgs'
import Button from '@/components/shared/custom-btn';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccessMessage('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
                setErrors({});
            } else {
                setSuccessMessage('Something went wrong. Try again.');
            }
        } catch (err) {
            setSuccessMessage('Server error.');
        }
    };
    return (
        <div className='py-7'>
            <Container>
                <div className="grid md:px-8 max-w-7xl mx-auto lg:grid-cols-12 md:gap-0 gap-3 grid-cols-1 ">
                    <div className="md:col-span-4 md:order-1 order-2 rounded-md md:rounded-l-2xl bg-primary p-4">
                        <div className="text-white p-5 max-w-sm">
                            <Heading className='!text-left md:!text-[40px] !font-barlow !font-bold'>
                                Contact Us
                            </Heading>
                            <p className='text-base font-barlow leading-8'>Reach out to us with any questions or collaboration ideas. We are here to support tribes and partners in our mission.</p>

                            <div className="space-y-3 py-8">
                                <span className='flex items-center gap-2'><PhoneIcon />  <span>+27 83 440 7087</span></span>
                                <span className='flex items-center gap-2'><MailIcon /> <span>pietro@trllndllr.com</span></span>
                                <span className='flex items-center gap-2'><ClockIcon /> <span>Mon-Fri: 8:00am - 6:00pm</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 md:order-2 order-1 font-teacher bg-contactbg p-4 rounded-md md:rounded-r-2xl">
                        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-3 md:p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-medium text-xl">First Name</label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Input First Name"
                                        className="w-full placeholder:text-semiBlack font-inter p-2 mt-1 bg-white focus:outline-0 rounded"
                                    />
                                    {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
                                </div>

                                <div>
                                    <label className="font-medium text-xl">Last Name</label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Input Last Name"
                                        className="w-full font-inter placeholder:text-semiBlack p-2 mt-1 bg-white focus:outline-0 rounded"
                                    />
                                    {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-medium text-xl">Email Address (Required)</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        className="w-full font-inter placeholder:text-semiBlack p-2 mt-1 bg-white focus:outline-0 rounded"
                                    />
                                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="font-medium text-xl">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Input Phone Number"
                                        className="w-full font-inter placeholder:text-semiBlack p-2 mt-1 bg-white focus:outline-0 rounded"
                                    />
                                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="font-medium text-xl">Subject</label>
                                <input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Input Subject"
                                    className="w-full font-inter p-2 placeholder:text-semiBlack mt-1 bg-white focus:outline-0 rounded"
                                />
                                {errors.subject && <p className="text-red-600 text-sm">{errors.subject}</p>}
                            </div>

                            <div>
                                <label className="font-medium text-xl">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Input your Messages"
                                    className="w-full font-inter p-2 placeholder:text-semiBlack mt-1 bg-white focus:outline-0 rounded min-h-[120px]"
                                />
                                {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                            </div>

                            <Button
                                label='Send Message'
                                type="submit"
                                style="!bg-primary !text-base !text-white !font-barlow !font-bold !rounded-lg !px-6 py-3 uppercase"
                            />

                            {successMessage && <p className="text-sm text-green-600 mt-2">{successMessage}</p>}
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm