import React from 'react';

const CalendlyWidget = () => {
  return (
    <>
      <div
        className="calendly-inline-widget noscroll h-auto"
        data-url="https://calendly.com/nflagency/30min"
        
      />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
    </>
  );
};

export default CalendlyWidget;