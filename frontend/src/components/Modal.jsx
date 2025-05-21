import React, { useState } from 'react';

function Modal({ open, onClose, children }) {
  return (
    <div 
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-50
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`
          border-3 bg-base-300 rounded-lg shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;