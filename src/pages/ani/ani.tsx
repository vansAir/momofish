import { useState, useEffect } from 'react';
import { request } from 'umi';
import { Config } from '@/pages/index';
import anistyle from './ani.less';


export const Ani: React.FC<{ config?: Config, onUpdate: () => void }> = (props: any) => {
    const Steps = {
        initial: 0, //初始值
        fadeIn: 1,
        fadeOut: 2,
        end: 3
    }
    const [hitokoto, setHitokoto] = useState();
    const [from, setFrom] = useState();
    const [status, setStatus] = useState<number>(Steps.fadeIn);
    const [cls, setCls] = useState("animate__animated animate__fadeIn ");

    const changeCls = function (props: any) {
        if (status == Steps.fadeIn) {
            setStatus(Steps.fadeOut);
            setCls("animate__animated animate__fadeOut ");
        } else if (status == Steps.fadeOut) {
            setStatus(Steps.end);
            props.onUpdate();
        }
    }

    useEffect(() => {
        request("https://v1.hitokoto.cn/").then(async (res) => {
            setHitokoto(res.hitokoto);
            setFrom(res.from);
        });
    }, []);
    if (props.config.canShow) {
        return (
            <div className={cls + anistyle.ft} style={{ animationDuration: "3s" }} onAnimationEnd={() => changeCls(props)}>
                <p>
                    「{hitokoto}」
                </p>
                <p>
                    {from}
                </p>
            </div>
        )
    } else {
        return null;
    }
}