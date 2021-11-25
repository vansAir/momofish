import { Statistic, Row, Col } from 'antd';
import { Config } from '@/pages/index';
import timestyle from './time.less';


export const Time: React.FC<{ config?: Config }> = (props: any) => {

    const { Countdown } = Statistic;
    const newYear = Date.parse("01 Jan 2022 00:00:00 UTC+8"); // Moment is also OK
    const springFestival = Date.parse("01 Feb 2022 00:00:00 UTC+8"); // Moment is also OK
    const brightnessFestival = Date.parse("05 Apr 2022 00:00:00 UTC+8"); // Moment is also OK
    const nationalDay = Date.parse("01 Oct 2022 00:00:00 UTC+8"); // Moment is also OK
    const fontst = { fontSize: 40, fontFamily: "ft" }
    if (props.config.canShow) {
        return (
            <Row style={{ animationDuration: "2s" }} className={"animate__animated animate__fadeIn " + timestyle.ft}>
                <Col>
                    <Countdown valueStyle={fontst} title="元旦节" value={newYear} format="D 天 H 时 m 分 s 秒" />
                    <Countdown valueStyle={fontst} title="春节" value={springFestival} format="D 天 H 时 m 分 s 秒" />
                    <Countdown valueStyle={fontst} title="清明节" value={brightnessFestival} format="D 天 H 时 m 分 s 秒" />
                    <Countdown valueStyle={fontst} title="国庆节" value={nationalDay} format="D 天 H 时 m 分 s 秒" />
                </Col>
            </Row>
        )
    } else {
        return null;
    }
}
