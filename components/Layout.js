import Header from './Header'

export default function Layout(props) {
    return (
        <div>
            <Header />
            <div className="appLayout">
                {props.children}
            </div>
        </div>
    )
}