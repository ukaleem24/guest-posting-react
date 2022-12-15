import React, { useState } from 'react';
import {
  
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';



const Help = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
          setOpen();
        } else {
          setOpen(id);
        }
      };
  return (
    <>
      <Accordion  open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Help;
