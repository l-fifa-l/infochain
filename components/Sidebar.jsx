import { useState } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
// Heading are pulled from data that will be displayed on the sidebar
import { data } from '../utitls/data';

export default function Example() {
  // Accordion is a component that will be used to create the sidebar
  // open is a state that will be used to open the sidebar
  // setOpen is a function that will be used to open the sidebar
  const [open, setOpen] = useState(0);
  let headings = [];
  let href = [];

  // handleOpen is a function that will be used to open the sidebar
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // loop through the data that will be displayed on the sidebar
  for (const [keys, values] of Object.entries(data)) {
    headings.push(JSON.stringify(values.heading));
    href.push(JSON.stringify(values.id));
  }

  return (
    <div className="sticky top-0 z-50 min-w-24 w-full">
      <Accordion
        className="sticky top-0 p-2 z-50 min-w-24 bg-white"
        open={open === 1}
        onClick={() => handleOpen(1)}
      >
        <AccordionHeader>Table of Contents</AccordionHeader>
        <AccordionBody>
          <ul className="list-disc pl-5">
            {/* start of the Table of Contents heading */}
            {headings.map((heading, index) => (
              <li key={index} className="pb-4">
                {heading}
              </li>
            ))}
            {/* end of the Table of Contents heading  */}
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
