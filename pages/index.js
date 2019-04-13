import Link from 'next/link'

import Layout from '../components/Layout'
import JoshRaynaPage from '../components/JoshRaynaPage'
import Sections from '../components/Sections'

export default class index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            tileHoveredOn: ""
        }
        this.Hovered = this.Hovered.bind(this)
    }

    Hovered = (tile) => {
        this.setState({
            tileHoveredOn: tile
        })
    }

    NotHovered = (tile) => {
        if (this.state.tileHoveredOn === tile) {
            this.setState({
                tileHoveredOn: ""
            })
        }
    }

    render() {
        return (
            <Layout>
                <div>
                    <div className="shadow"></div>
                    <JoshRaynaPage />
                    <Sections />
                </div>
            </Layout>
        )
    }
}