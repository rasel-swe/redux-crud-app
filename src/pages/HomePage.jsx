import React from 'react';

const homePageStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  maxWidth: '600px',
  margin: '0 auto',
};

const headingStyle = {
  color: '#333',
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '50px',
};

const descriptionStyle = {
  fontSize: '20px',
  marginTop: '20px',
  color: '#555',
  marginBottom: '50px',
};

const listStyle = {
  listStyleType: 'disc',
  textAlign: 'left',
  marginLeft: '20px',
  fontSize: '18px',
  color: '#944',
  marginBottom: '50px',
};

const paragraphStyle = {
  marginTop: '20px',
  fontSize: '18px',
  color: '#555',
};

const HomePage = () => {
  return (
    <div style={homePageStyle}>
      <h2 style={headingStyle}>Welcome to Your Stylish CRUD App</h2>
      <p style={descriptionStyle}>
        This is the Home page of your CRUD app built with Redux Toolkit. You can use this page to:
      </p>
      <ul style={listStyle}>
        <li>View a list of Books</li>
        <li>Add new Books</li>
        <li>Edit existing Books</li>
        <li>Delete Books</li>
      </ul>
      <p style={paragraphStyle}>Feel free to explore the app and start managing your data!</p>
    </div>
  );
};

export default HomePage;
