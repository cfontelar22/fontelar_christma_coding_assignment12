import React, { useState } from 'react';
import InputField from './components/InputField/InputField.tsx'; 
import Button from './components/Button/Button.tsx';
import Label from './components/Label/Label.tsx';
import Dropdown from './components/Dropdown/Dropdown.tsx';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputHovered, setInputHovered] = useState(false);
  const [inputActive, setInputActive] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [activePage, setActivePage] = useState('About');


  const handleInputClick = () => {
    console.log('InputField clicked');
    setInputActive(true);
    setInputHovered(false);
  };

  const handleInputHover = () => {
    console.log('InputField hovered');
    setInputHovered(true);
  };

  const handleInputLeave = () => {
    setInputHovered(false);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };
  
  const [activeButton, setActiveButton] = useState(null);

  const handleLabelClick = (label) => {
    console.log(`${label} Label clicked`);
    setActivePage(label);
  };

  const handleLabelHover = (label) => {
    console.log(`${label} Label hovered`);
  };
  
  const handleDropdownClick = () => {
    console.log('Dropdown clicked');
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} Button clicked`);
    setActiveButton(buttonName);
  };

  const handleButtonHover = (buttonName) => {
    console.log(`${buttonName} Button hovered`);
    setActiveButton(buttonName);
  };

 

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Web Component Library</h1>

      {/* InputField Section */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Default State Column */}
        <div style={{ marginRight: '20px' }}>
          <h2>Input Field</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <InputField
              placeholder="Keyword Search"
              value={inputValue}
              onChange={handleInputChange}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              onMouseEnter={handleInputHover}
              onMouseLeave={handleInputLeave}
              style={{
                backgroundColor: inputActive ? '#c0deed' : (inputHovered ? '#eee' : 'transparent'),
                border: inputActive ? '2px solid #4CAF50' : 'none'
              }}
            />
            
          </div>
        </div>
      </div>
      

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {/* Default State Column */}
        <div style={{ marginRight: '20px' }}>
          <h2>Default State</h2>
          {/* Button Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Search Button */}
            <Button text="Search" backgroundColor="#FF5733" style={{ marginBottom: '10px' }} />
            {/* View Button */}
            <Button text="View" backgroundColor="#FFC300" style={{ marginBottom: '10px' }} />
            {/* View More Projects Button */}
            <Button text="View More Projects" backgroundColor="#28A745" style={{ marginBottom: '10px' }} />
            {/* Left Arrow Button */}
            <Button text="&lt;" backgroundColor="#2E86C1" style={{ marginBottom: '10px' }} />
            {/* Right Arrow Button */}
            <Button text="&gt;" backgroundColor="#F39C12" style={{ marginBottom: '10px' }} />
            {/* About Button */}
            <Button text="About" backgroundColor="#6A5ACD" style={{ marginBottom: '10px' }} />
            {/* Projects Button */}
            <Button text="Projects" backgroundColor="#FF1493" style={{ marginBottom: '10px' }} />
          </div>
        </div>

        {/* Hover State Column */}
        <div style={{ marginRight: '20px' }}>
          <h2>Hover State</h2>
          {/* Button Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Search Button */}
            <Button text="Search" backgroundColor="#FF5733" hoverBackgroundColor="#FF4500" onClick={() => handleButtonClick('Search')} onMouseEnter={() => handleButtonHover('Search')} style={{ marginBottom: '10px' }} />
            {/* View Button */}
            <Button text="View" backgroundColor="#FFC300" hoverBackgroundColor="#FFD700" onClick={() => handleButtonClick('View')} onMouseEnter={() => handleButtonHover('View')} style={{ marginBottom: '10px' }} />
            {/* View More Projects Button */}
            <Button text="View More Projects" backgroundColor="#28A745" hoverBackgroundColor="#32CD32" onClick={() => handleButtonClick('View More Projects')} onMouseEnter={() => handleButtonHover('View More Projects')} style={{ marginBottom: '10px' }} />
            {/* Left Arrow Button */}
            <Button text="&lt;" backgroundColor="#2E86C1" hoverBackgroundColor="#4c667b" onClick={() => handleButtonClick('Left Arrow')} onMouseEnter={() => handleButtonHover('Left Arrow')} style={{ marginBottom: '10px' }} />
            {/* Right Arrow Button */}
            <Button text="&gt;" backgroundColor="#F39C12" hoverBackgroundColor="#9a7022" onClick={() => handleButtonClick('Right Arrow')} onMouseEnter={() => handleButtonHover('Right Arrow')} style={{ marginBottom: '10px' }} />
            {/* About Button */}
            <Button text="About" backgroundColor="#6A5ACD" hoverBackgroundColor="#9370DB" onClick={() => handleButtonClick('About')} onMouseEnter={() => handleButtonHover('About')} style={{ marginBottom: '10px' }} />
            {/* Projects Button */}
            <Button text="Projects" backgroundColor="#FF1493" hoverBackgroundColor="#FF69B4" onClick={() => handleButtonClick('Projects')} onMouseEnter={() => handleButtonHover('Projects')} style={{ marginBottom: '10px' }} />
          </div>
        </div>

       {/* Active/Pressed State Column */}
      <div style={{ marginRight: '20px' }}>
        <h2>Active/Pressed State</h2>
        {/* Button Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Search Button */}
        <Button
        text="Search" backgroundColor={activeButton === 'Search' ? '#8c3622' : '#FF5733'} onClick={() => handleButtonClick('Search')} style={{ marginBottom: '10px', border: activeButton === 'Search' ? '2px solid black' : 'none', }} />
        {/* View Button */}
      <Button
      text="View" backgroundColor={activeButton === 'View' ? '#FFA500' : '#FFC300'} onClick={() => handleButtonClick('View')} style={{ marginBottom: '10px', border: activeButton === 'View' ? '2px solid black' : 'none', }}  />
      {/* View More Projects Button */}
      <Button
      text="View More Projects" backgroundColor={activeButton === 'View More Projects' ? '#32704d' : '#28A745'} onClick={() => handleButtonClick('View More Projects')} style={{ marginBottom: '10px', border: activeButton === 'View More Projects' ? '2px solid black' : 'none', }} />
      {/* Left Arrow Button */}
      <Button
      text="&lt;" backgroundColor={activeButton === 'Left Arrow' ? '#233340' : '#2E86C1'} onClick={() => handleButtonClick('Left Arrow')} style={{ marginBottom: '10px', border: activeButton === 'Left Arrow' ? '2px solid black' : 'none', }} />
      {/* Right Arrow Button */}
      <Button
      text="&gt;" backgroundColor={activeButton === 'Right Arrow' ? '#5a400e' : '#F39C12'} onClick={() => handleButtonClick('Right Arrow')} style={{ marginBottom: '10px', border: activeButton === 'Right Arrow' ? '2px solid black' : 'none', }} />
      {/* About Button */}
      <Button
      text="About" backgroundColor={activeButton === 'About' ? '#341f97' : '#6A5ACD'} onClick={() => handleButtonClick('About')} style={{ marginBottom: '10px', border: activeButton === 'About' ? '2px solid black' : 'none', }} />
    {/* Projects Button */}
    <Button
      text="Projects" backgroundColor={activeButton === 'Projects' ? '#D81B60' : '#FF1493'} onClick={() => handleButtonClick('Projects')} style={{marginBottom: '10px', border: activeButton === 'Projects' ? '2px solid black' : 'none', }} />
  </div>
</div>

    {/* Disabled State Column */}
        <div>
          <h2>Disabled State</h2>
          {/* Button Section */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Disabled Search Button */}
            <Button text="Search" backgroundColor="#FF5733" disabled style={{ marginBottom: '10px' }} />
            {/* Disabled View Button */}
            <Button text="View" backgroundColor="#FFC300" disabled style={{ marginBottom: '10px' }} />
            {/* Disabled View More Projects Button */}
            <Button text="View More Projects" backgroundColor="#28A745" disabled style={{ marginBottom: '10px' }} />
            {/* Disabled Left Arrow Button */}
            <Button text="&lt;" backgroundColor="#2E86C1" disabled style={{ marginBottom: '10px' }} />
            {/* Disabled Right Arrow Button */}
            <Button text="&gt;" backgroundColor="#F39C12" disabled style={{ marginBottom: '10px' }} />
            {/* Disabled About Button */}
            <Button text="About" backgroundColor="#6A5ACD" disabled style={{ marginBottom: '10px' }} />
            {/* Disabled Projects Button */}
            <Button text="Projects" backgroundColor="#FF1493" disabled style={{ marginBottom: '10px' }} />
          </div>
        </div>
      </div>

  

     {/* Label Section */}
     <div style={{ marginBottom: '20px' }}>
        <h2>Label</h2>
        <div style={{ display: 'inline-block' }}>
          <Label
            text="About"
            onClick={() => handleLabelClick('About')}
            active={activePage === 'About'}
            onMouseEnter={() => handleLabelHover('About')}
          />
          <Label
            text="Projects"
            onClick={() => handleLabelClick('Projects')}
            active={activePage === 'Projects'}
            onMouseEnter={() => handleLabelHover('Projects')}
          />
        </div>
      </div>
  

      {/* Dropdown Section */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Dropdown</h2>
        <div style={{ display: 'inline-block' }}>
          <Dropdown 
            options={['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town']}
            onClick={handleDropdownClick}
          />
          <Dropdown 
            options={['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town']}
            disabled
          />
        </div>
      </div>
    </div>

    
  );
}



export default App;
