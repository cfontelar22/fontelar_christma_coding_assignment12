import React from 'react';
import Button from './components/Button/Button.tsx';
import Label from './components/Label/Label.tsx';
import Dropdown from './components/Dropdown/Dropdown.tsx';

function App() {
  const handleLabelClick = () => {
    console.log('Default Label clicked');
  };

  const handleDropdownClick = () => {
    console.log('Dropdown clicked');
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} Button clicked`);
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Web Component Library</h1>
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        {/* Button Section */}
        <div style={{ marginBottom: '20px' }}>
          <h2>Button</h2>
          <div style={{ display: 'inline-block' }}>
            {/* Search Button */}
            <Button text="Search" backgroundColor="#FF5733" onClick={() => handleButtonClick('Search')} />
            {/* Disabled Search Button */}
            <Button text="Search" backgroundColor="#FF5733" disabled onClick={() => handleButtonClick('Disabled Search')} />
            {/* View Button */}
            <Button text="View" backgroundColor="#FFC300" onClick={() => handleButtonClick('View')} />
            {/* Disabled View Button */}
            <Button text="View" backgroundColor="#FFC300" disabled onClick={() => handleButtonClick('Disabled View')} />
            {/* View More Projects Button */}
            <Button text="View More Projects" backgroundColor="#28A745" onClick={() => handleButtonClick('View More Projects')} />
            {/* Disabled View More Projects Button */}
            <Button text="Disabled View More Projects" backgroundColor="#28A745" disabled onClick={() => handleButtonClick('Disabled View More Projects')} />
            {/* Left Arrow Button */}
            <Button text="&lt;" backgroundColor="#2E86C1" onClick={() => handleButtonClick('Left Arrow')} />
            {/* Right Arrow Button */}
            <Button text="&gt;" backgroundColor="#F39C12" onClick={() => handleButtonClick('Right Arrow')} />
            {/* Disabled Left Arrow Button */}
            <Button text="&lt;" backgroundColor="#2E86C1" disabled onClick={() => handleButtonClick('Disabled Left Arrow')} />
            {/* Disabled Right Arrow Button */}
            <Button text="&gt;" backgroundColor="#F39C12" disabled onClick={() => handleButtonClick('Disabled Right Arrow')} />
            {/* About Button */}
            <Button text="About" backgroundColor="#6A5ACD" onClick={() => handleButtonClick('About')} />
            {/* Disabled About Button */}
            <Button text="About" backgroundColor="#6A5ACD" disabled onClick={() => handleButtonClick('Disabled Abouts')} />
            {/* Projects Button */}
            <Button text="Projects" backgroundColor="#FF1493" onClick={() => handleButtonClick('Projects')} />
            {/* Disabled Projects Button */}
            <Button text="Projects" backgroundColor="#FF1493" disabled onClick={() => handleButtonClick('Disabled Projects')} />
          </div>
        </div>
        
        {/* Label Section */}
        <div style={{ marginBottom: '20px' }}>
          <h2>Label</h2>
          <div style={{ display: 'inline-block' }}>
            <Label text="Default Label" onClick={handleLabelClick} /> 
            <Label text="Disabled Label" disabled onClick={handleLabelClick} /> 
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
    </div>
  );
}

export default App;
