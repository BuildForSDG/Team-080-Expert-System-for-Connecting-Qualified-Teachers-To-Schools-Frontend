import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';





export default function StartQuiz() {

	return(
			
        <Row className="form-group">
            <Col className="col-sm-12">
	            <div className="assess-icon" style={{marginTop: '190px'}} >
	                <div style={{marginTop:'15px'}} >
	                	<Link to="/quiz">
	                		<Button className="take-assessment" type="button">
	                			Start Assessment
	                		</Button>
	            		</Link> 
	        		</div>
	    		</div>
            </Col>
        </Row>
	);
}
