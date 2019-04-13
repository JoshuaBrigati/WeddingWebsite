export default class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countDownDate: new Date("November 9, 2019 12:00:00").getTime(),
            now: new Date().getTime(),
        }

        this.countDown = this.countDown.bind(this)

        setInterval(() => {
            this.countDown()
        }, 60)
    }

    countDown = () => {
        this.setState({
            now: new Date().getTime()
        })
    }

    render() {
        let { countDownDate, now } = this.state;
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return (
            <div id="Countdown">
                <div id="demo">
                    <div className="holder">
                        <div className="Days">
                            <p className="day-numbers">{days}</p>
                            <p className="day-letters">Days</p>
                        </div>
                        <div className="Hours">
                            <p className="hours-numbers">{hours}</p>
                            <p className="hours-letters">Hrs</p>
                        </div>
                        <div className="Mins">
                            <p className="minutes-numbers">{minutes}</p>
                            <p className="minutes-letters">Mins</p>
                        </div>
                        <div className="Seconds">
                            <p className="seconds-numbers">{seconds}</p>
                            <p className="seconds-letters">Secs</p>
                        </div>
                    </div>
                    {/* {days + "Days " + hours + "Hrs " + minutes + "Mins " + seconds + "Secs "} */}
                </div>
            </div >
        )
    }
}