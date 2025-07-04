"use client";
import { useState } from 'react';

export default function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Something went wrong. Please try again.'); 
    }
  };

  return (
      <section id="contact" className="py-20 bg-[#1f1f1f] text-white">
    <div className="p-4 max-w-md mx-auto">
    <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input 
          type="email" 
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded" />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
        {status && <p className="text-sm text-green-600">{status}</p>}
      </form>
    </div>
    </section>
  );
}


// components/Contact.js
// export default function Contact() {
//   return (
    // <section id="contact" className="py-20 bg-[#1f1f1f] text-white">
    //   <div className="container mx-auto px-4 max-w-2xl">
    //     <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">Contact Me</h2>
    //     <form className="grid gap-6">
    //       <div className="grid md:grid-cols-2 gap-4">
    //         <input type="text" placeholder="Full Name" className="p-3 rounded-md bg-[#2a2a2a] text-white" />
            // <input type="email" placeholder="Email Address" className="p-3 rounded-md bg-[#2a2a2a] text-white" />
    //       </div>
    //       <div className="grid md:grid-cols-2 gap-4">
    //         <input type="text" placeholder="Mobile Number" className="p-3 rounded-md bg-[#2a2a2a] text-white" />
    //         <input type="text" placeholder="Email Subject" className="p-3 rounded-md bg-[#2a2a2a] text-white" />
    //       </div>
    //       <textarea rows="5" placeholder="Your Message" className="p-3 rounded-md bg-[#2a2a2a] text-white"></textarea>
    //       <div className="text-center">
    //         <button type="submit" className="bg-cyan-500 text-black px-6 py-2 rounded-md">Send Message</button>
    //       </div>
    //     </form>
    //   </div>
    // </section>
//   );
// }