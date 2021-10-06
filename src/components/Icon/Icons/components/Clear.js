/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Clear = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M5.89242 3.5C5.78263 3.5 5.68084 3.54275 5.60855 3.61333C5.53687 3.68331 5.5 3.77435 5.5 3.86538V16.1346C5.5 16.2256 5.53687 16.3167 5.60855 16.3867C5.68084 16.4572 5.78263 16.5 5.89242 16.5H14.1742C14.284 16.5 14.3858 16.4572 14.4581 16.3867C14.5298 16.3167 14.5667 16.2256 14.5667 16.1346V6.00039C14.5667 6.00034 14.5667 6.00045 14.5667 6.00039C14.5666 5.90955 14.5298 5.81856 14.4584 5.74867M14.4584 5.74867L12.2712 3.61325C12.199 3.54277 12.0973 3.50006 11.9876 3.5C11.9876 3.5 11.9877 3.5 11.9876 3.5H5.89242M14.1742 18C14.6704 18 15.1498 17.8077 15.506 17.46C15.8628 17.1116 16.0667 16.6352 16.0667 16.1346V6.00023C16.0666 5.49998 15.8629 5.02379 15.5064 4.67555L13.3189 2.53979C12.9628 2.19238 12.4836 2.0001 11.9878 2H5.89242C5.39624 2 4.91687 2.19227 4.56067 2.54005C4.20385 2.88841 4 3.36478 4 3.86538V16.1346C4 16.6352 4.20385 17.1116 4.56067 17.46C4.91687 17.8077 5.39624 18 5.89242 18H14.1742Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path d="M8 8L12 12M12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
Clear.displayName = 'Clear';
Clear.propTypes = {
  size: PropTypes.string
}
export default Clear;
/* tslint:enable */
/* eslint-enable */