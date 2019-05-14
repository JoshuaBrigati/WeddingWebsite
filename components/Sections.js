import CountDown from './Countdown'
import Link from 'next/link'

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
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSechAauZnBEsuOBQYOcu6jzUe9F5WmSYTAA2ohcPzaavE7yFw/viewform?usp=sf_link"><a style={{ borderBottom: "none" }}><span>RSVP Here</span></a></Link>
                            </div>
                        </div>
                    </div >
                </div>
                <div id="story" className="joy-content-card joy-content-info story-card ng-scope">
                    <h2 className="title ng-binding">Story</h2>
                    <div className="story-txt ng-binding" ><p>The first time I saw him, we were sitting at the gate for our flight to San Diego. I remember glancing over at him and thinking, Oh, wow, he’s cute. When I got to my seat, I saw that the seat beside me was empty and thought, How awesome would it be if he ended up next to me?</p><p>He asked for my number and we went our separate ways. I was certain I would never hear from him again. I thought about him often, but eventually he faded into the ‘missed connections’ category. A few months later, out of the blue, he sent me [a message that said] ‘Happy New Year.’ We hit it off like nothing ever changed.</p></div>
                </div>
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
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSechAauZnBEsuOBQYOcu6jzUe9F5WmSYTAA2ohcPzaavE7yFw/viewform?usp=sf_link"><a style={{ borderBottom: "none" }}><span>RSVP Here</span></a></Link>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}