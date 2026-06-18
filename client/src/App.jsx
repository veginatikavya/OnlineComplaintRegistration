import React, { useState } from 'react';
import { ShieldCheck, Bell, Users, BarChart3, MessageSquare, CheckCircle2 } from 'lucide-react';

const sampleComplaints = [
  { id: 'CMP-1001', title: 'Street light not working', category: 'Infrastructure', status: 'In Progress', priority: 'High', agent: 'Ravi Kumar' },
  { id: 'CMP-1002', title: 'Water leakage near apartment', category: 'Utilities', status: 'Assigned', priority: 'Medium', agent: 'Anita Rao' },
  { id: 'CMP-1003', title: 'Garbage not collected', category: 'Sanitation', status: 'Resolved', priority: 'Low', agent: 'Suresh Patel' },
];

function Header() {
  return (
    <header className="header">
      <div className="logo">ComplaintCare</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#complaint">Register Complaint</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="badge">MERN Stack Complaint Management Platform</p>
        <h1>Online Complaint Registration and Management System</h1>
        <p className="heroText">
          A secure and user-friendly system for registering complaints, tracking progress,
          assigning agents, and resolving issues with transparency.
        </p>
        <div className="heroButtons">
          <a className="primaryBtn" href="#complaint">Register Complaint</a>
          <a className="secondaryBtn" href="#dashboard">View Dashboard</a>
        </div>
      </div>
      <div className="heroCard">
        <h3>Complaint Status</h3>
        <div className="statusItem"><span>Registered</span><b>42</b></div>
        <div className="statusItem"><span>In Progress</span><b>18</b></div>
        <div className="statusItem"><span>Resolved</span><b>76</b></div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: <ShieldCheck />, title: 'Secure Login', text: 'JWT authentication and role-based access control.' },
    { icon: <Bell />, title: 'Smart Notifications', text: 'Users receive timely complaint status updates.' },
    { icon: <Users />, title: 'Agent Assignment', text: 'Admins can assign agents based on category and priority.' },
    { icon: <MessageSquare />, title: 'User-Agent Communication', text: 'Users can interact with agents for issue resolution.' },
    { icon: <BarChart3 />, title: 'Admin Analytics', text: 'Track performance, pending cases, and resolution trends.' },
    { icon: <CheckCircle2 />, title: 'Feedback System', text: 'Users can submit ratings after complaint resolution.' },
  ];

  return (
    <section id="features" className="section">
      <h2>System Features</h2>
      <div className="grid">
        {items.map((item) => (
          <div className="featureCard" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section id="dashboard" className="section dashboard">
      <h2>Admin Dashboard Preview</h2>
      <div className="stats">
        <div><h3>136</h3><p>Total Complaints</p></div>
        <div><h3>42</h3><p>New Complaints</p></div>
        <div><h3>18</h3><p>In Progress</p></div>
        <div><h3>76</h3><p>Resolved</p></div>
      </div>
      <div className="tableBox">
        <table>
          <thead>
            <tr><th>ID</th><th>Title</th><th>Category</th><th>Status</th><th>Priority</th><th>Agent</th></tr>
          </thead>
          <tbody>
            {sampleComplaints.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td><td>{c.title}</td><td>{c.category}</td>
                <td><span className={`pill ${c.status.replace(' ', '').toLowerCase()}`}>{c.status}</span></td>
                <td>{c.priority}</td><td>{c.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ComplaintForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section id="complaint" className="section formSection">
      <div>
        <h2>Register a Complaint</h2>
        <p>
          Submit complaint details securely. The complaint will be routed to the correct agent
          and can be tracked using the complaint ID.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="complaintForm">
        <input required placeholder="Full Name" />
        <input required type="email" placeholder="Email Address" />
        <select required>
          <option value="">Select Category</option>
          <option>Infrastructure</option>
          <option>Utilities</option>
          <option>Sanitation</option>
          <option>Service Issue</option>
        </select>
        <input required placeholder="Complaint Title" />
        <textarea required placeholder="Describe your complaint"></textarea>
        <button type="submit">Submit Complaint</button>
        {submitted && <p className="success">Complaint submitted successfully. Tracking ID: CMP-NEW</p>}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h3>Online Complaint Registration and Management System</h3>
      <p>Built using React.js, Node.js, Express.js, and MongoDB.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <ComplaintForm />
      <Footer />
    </>
  );
}
