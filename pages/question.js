import Layout from '../components/Layout'
import DataService from '../data/dataService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'

const Question = props => {
    let code

    if (props.question.code) {
        code =
            <div className="codeContainer">
                <span className="codeBlock">
                    <span className="code">
                        {props.question.code.map((line, i) => <div>{line}</div>)}
                    </span>
                </span>
                <a href="#" className="runCodeLink">Kendiniz Deneyin</a>
            </div>
    }

    let note

    if (props.question.note) {
        note = 
            <span className="noteBlock">
                <span className="noteText">
                    {props.question.note}
                </span>
            </span>
    }

    let nextQuestionExist = props.questionNumber < props.totalQuestion

    return (
        <Layout headerTitle={props.name}
                questionTitle={props.question.title}>
            <div className="questionOutline">
                <span className="questionSizeText">
                    {props.questionNumber} / {props.totalQuestion}
                </span>
            </div>

            <div className="textContentContainer">
                <h1>{props.question.title}</h1>
                {props.question.text}

                {code}

                {note}
            </div>


            <button 
                className="questionNextButton"
                onClick={() => {
                    if (nextQuestionExist) {
                        console.log('clicked')
                        Router.push({
                            pathname: '/question',
                            query: { 
                                name: props.name,
                                module: props.moduleNumber,
                                question: props.questionNumber+1,
                            }
                        })
                    }
                }}>
                <FontAwesomeIcon icon={faArrowRight} style={{color:"#FFF"}} size="2x"/>
            </button>
        </Layout>
    )
}

Question.getInitialProps = async function (context) {

    let name= context.query.name,
        moduleNumber = context.query.module,
        questionNumber = context.query.question

    let dataService = new DataService()
    const result = dataService.getQuestion(name, moduleNumber, questionNumber)


    return  {
        name,
        question: result.question,
        questionNumber: parseInt(questionNumber)+1,
        totalQuestion: result.totalQuestion,
        moduleNumber
    }
}

export default Question