import React, { Component } from 'react';
import Certificate from './Certificate';
import Assessment from './Assessment';
import CreateAccount from './CreateAccount';

class ProcessForm extends Component {
    state = {
        step: 1
        
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

   
    render(){
        
        const {step} = this.state;
        
      
        switch(step) {
        case 2:
            return <CreateAccount
                    nextStep={this.nextStep}
                
                    />
        case 1:
            return <Certificate
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    
                    />
         case 3:  
                    return <Assessment
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    
                    />
      
        }
    }
}

export default ProcessForm;