import '../live.scss'
import python from '../assets/icons/python.png'
import dynamic from 'next/dynamic'
const TextEditor = dynamic(import('../components/textEditor'), {
    ssr: false
  })
  

const Live = props => {

    let options = {
        lineNumbers: true,
    };

    return (
        <div className="live_header">
            <div className="live_wrapper">
                <div className="live_headerLogo">
                    <img alt="png" src={python} />
                </div>
            </div>

            <div className="live_topToolbar">
                <div className="defaultActions">
                    <button className="tab-box active">
                        Python 3
                    </button>
                </div>

                <div className="outputTab">
                    <button className="tab-box">
                        Output
                    </button>
                </div>
            </div>

            <div className="editorContainer">
                <div className="pythonEditor">
                    <div>test</div>
                    <TextEditor lan='javascript' theme="twilight"/>
                </div>

                <div className="output">
                    <div className="defaultOutput">

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Live