import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been submitted!');
    };
    return (<main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 0' }}>
      <h1 style={{ color: '#1a1a1a', marginBottom: '1.5rem' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={fieldStyles}>
          <label htmlFor="name" style={labelStyles}>Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={inputStyles} required/>
        </div>
        <div style={fieldStyles}>
          <label htmlFor="email" style={labelStyles}>Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={inputStyles} required/>
        </div>
        <div style={fieldStyles}>
          <label htmlFor="message" style={labelStyles}>Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={textareaStyles} rows={5} required/>
        </div>
        <button type="submit" style={buttonStyles}>Submit</button>
      </form>
    </main>);
};
const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};
const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
};
const labelStyles = {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    color: '#333',
};
const inputStyles = {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
};
const textareaStyles = {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
};
const buttonStyles = {
    padding: '0.75rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#1bbc9b',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};
export default Contact;
