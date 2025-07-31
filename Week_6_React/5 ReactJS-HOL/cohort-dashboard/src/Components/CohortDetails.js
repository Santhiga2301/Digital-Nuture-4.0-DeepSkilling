import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = (props) => {
  return (
    <div className={styles.box}>
      <h3 style={{ color: props.status === 'ongoing' ? 'green' : 'blue' }}>
        {props.cohortName}
      </h3>
      <dl>
        <dt>Mentor</dt>
        <dd>{props.mentor}</dd>
        <dt>Status</dt>
        <dd>{props.status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
