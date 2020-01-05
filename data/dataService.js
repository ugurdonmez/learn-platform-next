import { getBasicConcepts } from "./store/basicConcepts"

export default class DataService {

    getQuestion(dataName, moduleNumber, questionNumber) {

        let data = {
            basicConcepts: getBasicConcepts()
        }

        let modules = data[dataName]
        let q = modules['modules'][moduleNumber]['questions'][questionNumber]

        return q
    }

    getTest() {
        return 'test results'
    }
}