import React from 'react';
import { Spinner } from 'reactstrap';



export const Loading = () => {
    return(
        <div className="col-12">
      		<Spinner color="primary" />
        </div>
    );
};