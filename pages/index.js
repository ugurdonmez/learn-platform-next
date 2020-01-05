import Router from 'next/router'
import Layout from '../components/Layout'
import { Card, Row } from 'react-bootstrap'
import ModuleCircle from '../components/ModuleCircle'
import '../styles.scss'

import temelIcon from '../assets/icons/1220.png'
import kontrolIcon from '../assets/icons/1221.png'
import fonksiyonIcon from '../assets/icons/1222.png'
import fileIcon from '../assets/icons/1239.png'

const Index = props => (
    <Layout>
        <Card className="moduleCard">
            <Card.Body>
                <Row>
                    <ModuleCircle
                        logo={temelIcon}
                        text="Temel Bilgiler"
                        click={() => Router.push({
                            pathname: '/module',
                            query: { data: 'basicConcepts'}
                        })}></ModuleCircle>
                </Row>

                <Row>
                    <ModuleCircle
                        logo={kontrolIcon}
                        text="Kontrol Yapilari"
                        click={() => console.log('click in module')}></ModuleCircle>

                    <ModuleCircle
                        logo={fonksiyonIcon}
                        text="Fonksiyonlar & Moduller"></ModuleCircle>
                </Row>

                <Row>
                    <ModuleCircle
                        logo={fileIcon}
                        text="Hata Yakalama & Dosya Islemler"></ModuleCircle>
                </Row>
            </Card.Body>
        </Card>
    </Layout>
)

export default Index