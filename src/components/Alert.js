import React from 'react';

export const Alert = ({ text }) => {
   return (
      <div class="alert alert-danger" role="alert">
         {text}
      </div>
   )
}

