import Layout from '../components/Layout'
import TestClass from '../data/dataService'
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

    let dataService = new DataService()
    const question = dataService.getQuestion('aaa', 'aaa', 'aaa')

    return  {
        question
    }
       
     
}

export default Question