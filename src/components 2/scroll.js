import React, { useState, useEffect, useRef } from 'react';
import ButtonToTop from "./buttontotop";
import StripeCheckoutButton from './StripeCheckout';
import axios from "axios";
import "./styles.css";


function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(containerRef.current);
  }, []);

  const handleDonate = (id) => {
    return <StripeCheckoutButton price={10} />;
  };

  const handleShare = (id) => {
    const message = 'Check out this post on my app: https://www.example.com';
    const encodedMessage = encodeURIComponent(message);
    const url = "https://wa.me/?text=${encodedMessage}";
    window.open(url);
    // Handle share button click
    console.log(`Share button clicked for item ${id}`);
  };

  const handleAnimalHelp = (id) => {
    const animalTypes = ['Dogs', 'Cats', 'Birds', 'Fish', 'Other'];
    const selectedType = prompt(`Please specify the type of animal you have experience helping:\n${animalTypes.join('\n')}`);

    if (selectedType && animalTypes.includes(selectedType)) {
      const volunteerData = {
        name: 'Volunteer Name',
        email: 'volunteer@email.com',
        phone: '123-456-7890',
        type: selectedType,
      };
      alert('Thank you for offering to help! The person who posted this request will be contacted with your information.');
      console.log(`Animal help button clicked for item ${id}`);
      console.log('Volunteer information:', volunteerData);
    } else {
      alert('Invalid animal type selected. Please try again.');
    }
  };

  const handleMedicalHelp = (id) => {
    const medicalExpertise = ['Nursing', 'Doctor', 'First Aid', 'Other'];
    const selectedExpertise = prompt(`Please specify your medical expertise:\n${medicalExpertise.join('\n')}`);

    if (selectedExpertise && medicalExpertise.includes(selectedExpertise)) {
      const volunteerData = {
        name: 'Volunteer Name',
        email: 'volunteer@email.com',
        phone: '123-456-7890',
        expertise: selectedExpertise,
      };
      alert('Thank you for offering to help! The person who posted this request will be contacted with your information.');
      console.log(`Medical help button clicked for item ${id}`);
      console.log('Volunteer information:', volunteerData);
    } else {
      alert('Invalid medical expertise selected. Please try again.');
    }
  };
  const handleEducationHelp = (id) => {
    const subjectAreas = ['Mathematics', 'Science', 'English', 'History', 'Other'];
    const selectedArea = prompt(`Please specify your area of expertise:\n${subjectAreas.join('\n')}`);
  
    if (selectedArea && subjectAreas.includes(selectedArea)) {
      const volunteerData = {
        name: 'Volunteer Name',
        email: 'volunteer@email.com',
        phone: '123-456-7890',
        expertise: selectedArea,
      };
      alert('Thank you for offering to help! The person who posted this request will be contacted with your information.');
      console.log(`Education help button clicked for item ${id}`);
      console.log('Volunteer information:', volunteerData);
    } else {
      alert('Invalid area of expertise selected. Please try again.');
    }
  };
  
  const handleDisasterHelp = (id) => {
    const disasterTypes = ['Natural', 'Man-made', 'Other'];
    const selectedType = prompt(`Please specify the type of disaster you can help with:\n${disasterTypes.join('\n')}`);
  
    if (selectedType && disasterTypes.includes(selectedType)) {
      const volunteerData = {
        name: 'Volunteer Name',
        email: 'volunteer@email.com',
        phone: '123-456-7890',
        type: selectedType,
      };
      alert('Thank you for offering to help! The person who posted this request will be contacted with your information.');
      console.log(`Disaster help button clicked for item ${id}`);
      console.log('Volunteer information:', volunteerData);
    } else {
      alert('Invalid disaster type selected. Please try again.');
    }
  };
  
  const handleOldAgeHelp = (id) => {
    const volunteerData = {
      name: 'Volunteer Name',
      email: 'volunteer@email.com',
      phone: '123-456-7890',
    };
    alert('Thank you for offering to help! The person who posted this request will be contacted with your information.');
    console.log(`Old age help button clicked for item ${id}`);
    console.log('Volunteer information:', volunteerData);
  };
  
  const handleEnvironmentHelp = (id) => {
    const volunteerData = {
      name: 'Volunteer Name',
      email: 'volunteer@email.com',
      phone: '123-456-7890',
    };
    alert('Thank you for offering to help! The person who posted this request will be contacted with your information.');
    console.log(`Environment help button clicked for item ${id}`);
    console.log('Volunteer information:', volunteerData);
  };

  const handleHelp = (id) => {
    const helpOptions = ['Animal', 'Medical', 'Education', 'Disaster', 'Old Age', 'Environment'];
    const selectedHelp = prompt(`Please select the Category:\n${helpOptions.join('\n')}`);
  
    switch (selectedHelp) {
      case 'Animal':
        handleAnimalHelp(id);
        break;
      case 'Medical':
        handleMedicalHelp(id);
        break;
      case 'Education':
        handleEducationHelp(id);
        break;
      case 'Disaster':
        handleDisasterHelp(id);
        break;
      case 'Old Age':
        handleOldAgeHelp(id);
        break;
      case 'Environment':
        handleEnvironmentHelp(id);
        break;
      default:
        alert('Invalid help type selected. Please try again.');
        break;
    }
  };
  
  const handleReport = (id) => {
    // Handle share button click
    const reportReasons = ['Fake', 'Hate speech', 'Violence', 'Sexual content', 'Inappropriate content'];
    const selectedReason = prompt(`Please specify a reason for reporting:\n${reportReasons.join('\n')}`);

  if (selectedReason && reportReasons.includes(selectedReason)) {
    alert(`You reported item ${id} for ${selectedReason}. Thank you for helping us keep our community safe.`);
  } else {
    alert('Invalid reason selected. Please try again.');
  }
    console.log('Report button clicked for item ${id}');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <ButtonToTop/>
    <div className="container" ref={containerRef}>
      {data.map((item) => (
        <div key={item.id} className="item">
          <div className="item-images">
            <img src={`https://source.unsplash.com/600x600/?medical-help/${item.id}`} alt={`Image ${item.id}`} />
          </div>
          <div style={{ fontSize: "18px", padding: "10px" }} className="container-1">
            <div className="item-title">{item.title}</div>
            <div className="item-buttons">
              {handleDonate(item.id)}
              <button onClick={() => handleShare(item.id)}>Share</button>
              <button onClick={() => handleHelp(item.id)}>Help</button>
              <button onClick={() => handleReport(item.id)}>Report</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
