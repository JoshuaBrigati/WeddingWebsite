import CountDown from './Countdown'


export default class Sections extends React.Component {
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
                        <CountDown />
                        <div className="rsvp-button">
                            <div className="one-inside">
                                <span>RSVP Here</span>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}