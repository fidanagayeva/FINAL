"use client";

import React from "react";
import "./globals.css"; 

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-custombgclr flex items-center justify-center z-50">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingSpinner;
