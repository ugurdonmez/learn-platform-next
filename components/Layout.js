import Header from './Header'

export default function Layout(props) {

    return (
        <div>
            <Header headerTitle={props.headerTitle} questionTitle={props.questionTitle}/>
            <div className="appLayout">
                {props.children}
            </div>
        </div>
    )
}