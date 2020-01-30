import Layout from '../components/Layout'
import DataService from '../data/dataService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'

const Question = props => {
    let code

    if (props.question.code) {
        let url = "live.html?code=" + encodeURI(props.question.codeText)
        code =
            <div className="codeContainer">
                <span className="codeBlock">
                    <span className="code">
                        {props.question.code.map((line, i) => <div>{line}</div>)}
                    </span>
                </span>
                <a href={url} className="runCodeLink">Kendiniz Deneyin</a>
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

    let nextModule = props.questionNumber < props.totalQuestion ? props.moduleNumber : parseInt(props.moduleNumber) + 1
    let nextQuestionNumber = props.questionNumber < props.totalQuestion ? props.questionNumber : 0


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
                        console.log('clicked')
                        Router.push({
                            pathname: '/question',
                            query: { 
                                name: props.name,
                                module: nextModule,
                                question: nextQuestionNumber,
                            }
                        })
                    
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