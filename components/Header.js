import Link from 'next/link'

import arraw from '../assets/icons/1220_three_arraw.png'
import python from '../assets/icons/python.png'


export default function Header(props) {

    const titles = {
        basicConcepts: 'Temel Yapilar',
        controlStructures: 'Kontrol Yapilari',
    }

    let content

    // TODO: fix question title
    if (props.questionTitle) {
        content = 
            <div className="headerContent">
                <img alt="png" src={arraw} />
                <span className="headerTitle">{titles[props.headerTitle]} <br></br> {props.questionTitle} </span>
            </div>
    } else if (props.headerTitle) {
        content = 
            <div className="headerContent">
                <img alt="png" src={arraw} />
                <span className="headerTitle">{titles[props.headerTitle]}</span>
            </div>
    } else {
        content = 
            <div className="headerContent">
                <img alt="png" src={python} />
            </div>
    }

    return (
        <div className="appHeader">
            <div className="headerWrapper">
                <div className="headerModuleLayer">
                    {content}
                </div>
            </div>


            {/* <Link href="/">
                <a>Ana Sayfa</a>
            </Link>
            <div>
                What is Python?
            </div>
            <div className="justify-content-end">
                Signed in as: <a href="#login">Mark Otto</a>
            </div> */}
        </div>
    )
}