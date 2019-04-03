import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

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
                    <Banner />
                </div>
            </Layout>
        )
    }

}