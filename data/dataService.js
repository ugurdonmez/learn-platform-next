import { getBasicConcepts } from "./store/basicConcepts"
import { getControlStructures } from "./store/controlStructures"

export default class DataService {

    

    getQuestion(dataName, moduleNumber, questionNumber) {

        // TODO: should be static in the future
        let data = {
            basicConcepts: getBasicConcepts(),
            controlStructures: getControlStructures(),
        }

        let modules = data[dataName]
        let question = modules['modules'][moduleNumber]['questions'][questionNumber]
        let totalQuestion = modules['modules'][moduleNumber]['questions'].length

        return {
            question,
            totalQuestion
        }
    }

    getTest() {
        return 'test results'
    }
}