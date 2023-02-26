import React, { useState } from 'react';
import './Sidebar.css'

function Sidebar(props) {
  const [selectedTags, setSelectedTags] = useState([]);

  function handleTagClick(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <ul className="tag-list">
        <li
          className={`tag ${selectedTags.includes('animal-help') ? 'active' : ''}`}
          onClick={() => handleTagClick('animal-help')}
        >
          Animal Help
        </li>
        <li
          className={`tag ${selectedTags.includes('education') ? 'active' : ''}`}
          onClick={() => handleTagClick('education')}
        >
          Education
        </li>
        <li
          className={`tag ${selectedTags.includes('medical-help') ? 'active' : ''}`}
          onClick={() => handleTagClick('medical-help')}
        >
          Medical Help
        </li>
        <li
          className={`tag ${selectedTags.includes('Diaster') ? 'active' : ''}`}
          onClick={() => handleTagClick('Diaster')}
        >
          Disaster
        </li>
        
        <li
          className={`tag ${selectedTags.includes('old-age') ? 'active' : ''}`}
          onClick={() => handleTagClick('old-age')}
        >
         Old-age
        </li>
     
        <li
          className={`tag ${selectedTags.includes('Environment') ? 'active' : ''}`}
          onClick={() => handleTagClick('Environment')}
        >
        Environment
        </li>
        {/* <li
          className={`tag ${selectedTags.includes('People with disability') ? 'active' : ''}`}
          onClick={() => handleTagClick('People with disability')}
        >
       People with disability
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;