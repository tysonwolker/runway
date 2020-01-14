import React from 'react';

import SvgIcon from '../../components/SvgIcon';

export default function CalendarIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2c.368 0 .667.298.667.667v4.666a.667.667 0 0 1-1.334 0V2.667c0-.369.299-.667.667-.667zM6.667 2c.368 0 .666.298.666.667v4.666a.667.667 0 1 1-1.333 0V2.667C6 2.298 6.298 2 6.667 2zm10.666 0c.369 0 .667.298.667.667v4.666a.667.667 0 1 1-1.333 0V2.667c0-.369.298-.667.666-.667zm-2 5.333a2 2 0 0 0 3.334 1.5v9.834H5.333V8.833a2 2 0 0 0 3.334-1.5H10a2 2 0 1 0 4 0h1.333zM8.667 4H10v2H8.667V4zm10.666 0H22v18H2V4h2.667v2H4v14h16V6h-.667V4zM14 4h1.333v2H14V4z" />
    </SvgIcon>
  );
}
