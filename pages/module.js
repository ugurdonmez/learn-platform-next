import Router from 'next/router'
import Layout from '../components/Layout'
import { getBasicConcepts } from '../data/store/basicConcepts'
import ModuleBox from '../components/ModuleBox'
import { getControlStructures } from '../data/store/controlStructures'

const Module = props => {

    return (
        <Layout headerTitle={props.name}>
            <div className="moduleView">
                {props.data.modules.map((module, i) => 
                            <ModuleBox 
                                key={i}
                                no={i+1}
                                total={props.data.modules.length}
                                name={module.title}
                                questionNumber={module.questions.length}
                                
                                click={() => Router.push({
                                    pathname: '/question',
                                    query: { 
                                        name: props.name,
                                        module: i,
                                        question: 0,
                                    }
                                    })}
                                />)}
            </div>
        </Layout>
    )
}

Module.getInitialProps = async function (context) {

    const moduleName = context.query.data

    let data

    if (moduleName === 'basicConcepts') {
        data = getBasicConcepts()
    } else if (moduleName === 'controlStructures') {
        data = getControlStructures()
    }

    return {
        data,
        name: moduleName
     }
}

export default Module


