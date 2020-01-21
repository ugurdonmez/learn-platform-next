import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/mode/c_cpp'
import 'brace/theme/twilight'
import 'brace/theme/xcode'
import AceEditor from 'react-ace'

const textEditor = (props) => (
  <div>
    <div>text editor</div>
    <AceEditor
        mode={props.lan}
        theme={props.theme}
        onChange={props.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{
            $blockScrolling: true
        }}
        fontSize={21}
        height='80vh'
        width='100%'
    />
  </div>
)

export default textEditor
