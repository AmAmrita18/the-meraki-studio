import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';

import ServicesSlidesVertical from "./ServicesSlidesVertical";
import MobileDigitalServices from "./MobileDigitalServices";
import MobileBusinessServices from "./MobileBusinessServices";

const Services = () => {
  
  const [tabValue, setTabValue] = useState('');

  const { tab } = useParams();
  const location = useLocation();


  useEffect(() => {
    // Extracting query parameters
    const searchParams = new URLSearchParams(location.search);
    const tabValue = searchParams.get('tab');

    setTabValue(tabValue);

  }, [location.search]);

  return (
    <>
      <div className="w-full md:block hidden bg-white">
        <ServicesSlidesVertical />
      </div>
      <div className="md:hidden">
      {
        tabValue === 'digital' && (
          <MobileDigitalServices />
        )
      }
      {
        tabValue === 'business' && (
          <MobileBusinessServices />
        )
      }
      </div>
    </>
  );
};

export default Services;
