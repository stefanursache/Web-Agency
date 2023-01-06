import React from 'react';

const CalendlyWidget = () => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/nflagency/30min"
        style={{ minWidth: '320px', height: '630px' }}
      />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
    </>
  );
};

export default CalendlyWidget;