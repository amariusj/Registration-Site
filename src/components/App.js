import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import About from './About';
import Speakers from './Speakers';
import Schedule from './Schedule'
import CallOutButton from './CallOutButton';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import FormModal from './FormModal';
import ConfirmationModal from './ConfirmationModal';

const App = () => {
  return (
    <div id="home" className="App" data-offset="100">
      <Navbar />
      <Jumbotron />

      <div className="container pt-4">
        <About />
        <Speakers />
        <Schedule />
        <CallOutButton />
        <SignUpForm />
        <Footer />
      </div>

      <FormModal />
      <ConfirmationModal />
    </div>
  );
}

export default App;
