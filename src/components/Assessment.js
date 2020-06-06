import React, { Component } from 'react';

const questionsArray = [
    {
      question: 'What is question 1?',
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3'
    },
    {
      question: 'What is question 2?',
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3'
    },
    {
      question: 'What is question 3?',
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3'
    },
  ]
  

class Assessment extends Component {

    constructor (props, context) {
      super(props, context)
      this.state = {
        currentQuestionIndex: 0,
        questions: [],
        answers: []
      }
    }
    
    componentDidMount() {
      // Do your axios call and set the questions state.
      // For the sake of simplicity,I'll be using my array.
      this.setState({questions: questionsArray})
      
    }
    
    handleNext () {
       let incrementCurrentQuestionIndex = this.state.currentQuestionIndex + 1
       this.setState({currentQuestionIndex: incrementCurrentQuestionIndex})
    }
    
    onChangeOption (value) {
      const { currentQuestionIndex } = this.state
      let answers = [...this.state.answers]
      answers[currentQuestionIndex] = value
      
      this.setState({answers}) 
    }
    
    render() {
      const { questions, currentQuestionIndex, answers } = this.state
  
      if (!questions.length) {
        return <div> Loading questions...</div>
      }
  
  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h3>End of the Quiz!</h3>
      </div>
    )
  }
      
      const { question, option1, option2, option3} = questions[currentQuestionIndex]
    
      return (<div>
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h4>{question}</h4>
          
            <label>
              <input type='radio'
                checked={answers[currentQuestionIndex] === option1}
                value={option1}
                onChange={(evt) => this.onChangeOption(evt.target.value)}/>
              {option1}
            </label>
          <br/>
          
            <label>
              <input type='radio'
                checked={answers[currentQuestionIndex] === option2}
                value={option2}
                onChange={(evt) => this.onChangeOption(evt.target.value)}/>
              {option2}
            </label>
            <br/>
            <label>
              <input type='radio'
                checked={answers[currentQuestionIndex] === option3}
                value={option3}
                onChange={(evt) => this.onChangeOption(evt.target.value)}/>
              {option3}
            </label>
          <hr/>
          <button onClick={() => this.handleNext()}>Next</button>
        </div>);
    }
  
  }

  export default Assessment;