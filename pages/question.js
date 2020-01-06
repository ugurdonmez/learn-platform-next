import Layout from '../components/Layout'
import DataService from '../data/dataService';

const Question = props => {

    console.log('question props')
    console.log(props)

    return (
        <Layout headerTitle={props.name}
                questionTitle={props.question.title}>
            <div className="questionOutline">
                <span className="questionSizeText">
                    {props.questionNumber} / {props.totalQuestion}
                </span>
            </div>
            {props.question.title}
            {props.question.text}
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
        totalQuestion: result.totalQuestion
    }
}

export default Question