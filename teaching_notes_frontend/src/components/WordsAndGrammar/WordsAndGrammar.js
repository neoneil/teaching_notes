import React from 'react';
import Accordion from './Accordion';
import './WordsAndGrammar.scss'
import Content1 from "./content1"
import Content2 from "./content2"
import Content3 from "./content3"
import Content4 from "./content4"
import Content5 from "./content5"
import Content6 from "./content6"
import Content7 from "./content7"
import Content8 from "./content8"
import Content9 from "./content9"
import Content10 from "./content10"
const WordsAndGrammar = () => {
  
    const accordionData = [
        {
            title: '1. 名词与冠词',
            content: <div><Content1 /></div>
        },
        {
            title: '2. 形容词与副词',
            content: <div><Content2 /></div>
        },
        {
            title: '3. 动词概说',
            content: <div><Content3 /></div>
        },
        {
            title: '4. 动词的十六大时态',
            content: <div><Content4 /></div>
        },
        {
            title: '5. 非限定（谓语）动词',
            content: <div><Content5 /></div>
        },
        {
            title: '6. 英语中的基本句子结构',
            content: <div><Content6 /></div>
        },
        {
            title: '7. 名词性从句（主语 宾语 表语 同位语）',
            content: <div><Content7 /></div>
        },
        {
            title: '8. 修饰语从句（定语从句 状语从句）',
            content: <div><Content8 /></div>
        },
        {
            title: '9. 被动语态 与英语中的语气',
            content: <div><Content9 /></div>
        },
        {
            title: '10. 英语构词法（前缀 中缀 后缀）',
            content: <div><Content10 /></div>
        }
    ];
    

    return (
        <div className='row'>
            <div className='col-md-10'>
                <div>
                    <h3 className='h3style'>知晓词汇与语法是通过考试的必经之路</h3>
                    <div className="accordion">
                        {accordionData.map(({ title, content }) => (
                            <Accordion key={title} title={title} content={content} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordsAndGrammar;