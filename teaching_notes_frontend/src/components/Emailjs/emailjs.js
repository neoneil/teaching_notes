import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './emailjs.scss'
export const Emailjs = () => {
    const responseString = "您的信息已经发送,请查看您刚刚填写的邮件地址,课程设置信息已发送至您的邮箱,我会及时联系您，谢谢！";
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(true)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible)
        emailjs
            .sendForm('service_4r7u697', 'template_ucahfql', form.current, {
                publicKey: 'ypTRObdhFUgVLx3Fw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsVisible2(!isVisible2)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="container-fluid">
            <div className='row'>
            <div className='col-md-6'>
                {!isVisible2 && <div className="responseStyle">{responseString}</div>}
                {isVisible2 && <div className='col'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3 form-floating">
                            <input type="text" id="floatingInputName" className="form-control" name="from_name" placeholder='Name' required />
                            <label className="form-label" htmlFor="floatingInputName">怎么称呼您, 中英名字都可以</label>
                        </div>
                        <div className="mb-3 form-floating">
                            <input className="form-control" id="floatingInputEmail" type="email" name="from_email" placeholder='最好是gmail' required />
                            <label className="form-label" htmlFor="floatingInputEmail">请填写您的Email, 系统会自动发送我的课程收费以及设置等信息 </label>
                        </div>
                        <div className="mb-3 form-floating">
                            <input type="text" id="floatingInputPhone" className="form-control" name="from_phone" placeholder='请告知手机号码' required />
                            <label className="form-label" htmlFor="floatingInputPhone">请告知手机号码，方便沟通</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">考过PTE吗?</label>
                            <select className="form-select" name="did_exam" aria-label="考过PTE吗?">
                                <option value="没有考过">没有考过</option>
                                <option value="考过1次">考过1次</option>
                                <option value="考过2次">考过2次</option>
                                <option value="考过3次或以上">考过3次或以上</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">如果考过,请选择最好成绩</label>
                            <select className="form-select" name="did_score" aria-label="最好成绩">
                                <option value="没考过，没有分数">没考过，没有分数</option>
                                <option value="雅思5分-5.5分/PTE 36-42 分">雅思5分-5.5分 / PTE 36-42 分</option>
                                <option value="雅思5.5分-6分/PTE 42-50 分">雅思5.5分-6分 / PTE 42-50 分</option>
                                <option value="雅思6分-6.5分/PTE 50-58 分">雅思6分-6.5分 / PTE 50-58 分</option>
                                <option value="雅思6.5分-7分/PTE 58-65 分">雅思6.5分-7分 / PTE 58-65 分</option>
                                <option value="雅思7分以上/PTE65分以上">雅思7分以上 / PTE65分以上</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">目标分数是什么呢？</label>
                            <select className="form-select" name="exam_aim" aria-label="考过PTE吗?">
                                <option value="485工签">485工签 - 总分6.5 / 并且 43 for listening/48 for reading/42 for speaking/51 for writing</option>
                                <option value="4科7分">递交永居签证 4科7分</option>
                                <option value="4科8分">递交永居签证 4科8分</option>
                                <option value="申请大学,6.5分 或以下">申请大学,6.5分 或以下</option>
                                <option value="申请大学,7分 或以上">申请大学,7分 或以上</option>
                            </select>
                            <div id="aimHelp" className="form-text">如果是雅思考试 485工签的要求是总分6.5分, 单科不低于5.5分</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">请在右边选择考试的大致日期... </label>
                            <input className="form-control" type="date" name="exam_date" />
                        </div>

                        <input className="buttonStyle" type="submit" value="提交" disabled={isVisible} />

                    </form>
                </div>}
                </div>
            </div>
        </div>

    );
};

export default Emailjs;