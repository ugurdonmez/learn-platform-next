import Layout from '../components/Layout'
import DataService from '../data/dataService';

const Question = props => {

    console.log(props)

    return (
        <Layout>
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
    const question = dataService.getQuestion(name, moduleNumber, questionNumber)

    return  {
        question
    }
}

export default Question