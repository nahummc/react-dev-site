import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function SlideButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        About me
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          When I am not honing my development skills, you can find me fishing, training Brazilian Jiu-Jitsu, or selling tailored suits.
        </div>
      </Collapse>
    </>
  );
}

export default SlideButton;