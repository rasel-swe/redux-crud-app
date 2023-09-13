import React from 'react';

const errorPageStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  },
  content: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '2rem',
    color: '#ff5555',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

const ErrorPage = () => {
  return (
    <div style={errorPageStyles.container}>
      <div style={errorPageStyles.content}>
        <h1 style={errorPageStyles.title}>Oops! Something Went Wrong</h1>
        <p style={errorPageStyles.message}>We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
