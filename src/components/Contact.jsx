import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [emailJSLoaded, setEmailJSLoaded] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        script.onload = () => {
            window.emailjs.init('CSmh-asZ7GEr6X0iW');
            setEmailJSLoaded(true);
        };
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setFormStatus('Please fill in all fields');
            setTimeout(() => setFormStatus(''), 3000);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus('Please enter a valid email address');
            setTimeout(() => setFormStatus(''), 3000);
            return;
        }

        if (!emailJSLoaded) {
            setFormStatus('Email service is loading, please try again...');
            setTimeout(() => setFormStatus(''), 3000);
            return;
        }

        setIsSending(true);
        setFormStatus('');

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        window.emailjs.send(
            'service_2rjlt6x',
            'template_qnukcsa',
            templateParams
        )
            .then(() => {
                setIsSending(false);
                setFormStatus('Message sent! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus(''), 5000);
            })
            .catch((error) => {
                console.error('Email send failed:', error);
                setIsSending(false);
                setFormStatus('Failed to send message. Please try again.');
                setTimeout(() => setFormStatus(''), 5000);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Get in Touch
                </h2>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-cyan-300">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Message <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <Send size={20} className={isSending ? 'animate-pulse' : ''} />
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                        {formStatus && (
                            <div
                                className={`text-center text-sm font-medium ${formStatus.includes('Please') ||
                                        formStatus.includes('valid') ||
                                        formStatus.includes('Failed')
                                        ? 'text-red-400'
                                        : 'text-green-400'
                                    }`}
                            >
                                {formStatus}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}