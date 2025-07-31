import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        cohortName="React Training July"
        mentor="Santhosh"
        status="ongoing"
      />
      <CohortDetails
        cohortName="Spring Boot May"
        mentor="Priya"
        status="completed"
      />
      <CohortDetails
        cohortName="Spring Boot Aug"
        mentor="Santhiga"
        status="ongoing"
      />
      <CohortDetails
        cohortName="React Training Jan"
        mentor="Suganya"
        status="completed"
      />
      <CohortDetails
        cohortName="JavaScript May"
        mentor="Theerach"
        status="completed"
      />
      <CohortDetails
        cohortName="Html Mar"
        mentor="Maharaja"
        status="ongoing"
      />
    </div>
  );
}

export default App;
