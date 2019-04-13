import Link from 'next/link'

import Layout from '../components/Layout'

export default class index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            tileHoveredOn: ""
        }
    }

    render() {
        return (
            <div id="sections">
                <div id="welcome">
                    <div className="welcomeDetails">
                        <h2 >
                            Austin, TX, USA
                        </h2>

                        <h4 className="ng-binding">
                            Saturday, November 9, 2019
                        </h4>
                    </div>
                </div>
            </div >
        )
    }
}