import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content6 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const cixing = `句法(syntax)句法研究的对象是句子各个组成部分及其安排的规律。 `
  const cixing10 = `在句子里，一定的句子成分由一定的词类来担任。
现将哪些句子成分通常由哪些词类来担任列述如下：
主语：名词和代词
Beijing is the capital of our country. 北京是我国的首都 。(名词Beijing作主语)
She is fond of sports. 她爱好运动 。(代词She作主语)

谓语动词：动词
My brother rides his bicycle to work. 我哥哥骑自行车上班 。(动词rides作谓语动词)

表语：名词、代词和形容词
His father is a doctor. 他父亲是个医生 。(名词doctor作表语)
The lesson is easy and Short. 这课书又容易又短 。(形容词easy和short作表语)
That classroom is ours. 那个教室是我们的。(代词ours作表语)

宾语：名词和代词
I love music. 我热爱音乐 。(名词music作宾语)
The medicine is good for her. 这药对她有效 。(代词her作宾语)

定语：形容词
Li Hong is an excellent teacher. 李红是一位好老师 。(形容词excellent作定语)

状语：副词
Our monitor does well in English. 我们班长英语学得好。(副词well作状语)

短语(phrase)是具有一定意义，但不构成从句或句子的一组词。短语在句子里可以单独作为一个句子的成分。短语的种类很多，但此处只介绍几个重要的短语名称：
a) 不定式短语 (infinitive phrase) 如He likes to read newspapers after lunch (他喜欢在午饭后读报)中的to read newspapers after lunch。
b) 动名词短语 (gerundial phrase) 如：
Staying indoors all day is unhealthy (整天呆在家里不利于健康)中的staying indoors all day。
c)分词短语 (participial phrase) 如：
I saw many people walking along the lake (我看见许多人在湖边散步)中的walking along the lake。
d)介词短语 (prepositional phrase) 如：
He came by bus (他乘公共汽车来) 中的by bus。
`;
  const fenlei = `句子 (sentence) 内含主语部分和谓语部分，有完整意义，叫做句子。

从句子结构本身来看，句子可分为：

a)简单句 (simple sentence) 只有一个主语部分和一个谓语部分，如：
The people's Republic of China was founded in 1949.中华人民共和国于一九四九年成立。
b)并列句 (compound sentence) 包括两个或两个以上的简单句，中间常由连词连接（FANBOYS），如：Tom's father worked from morning till night, but he got very little money. 汤姆的父亲从早干到晚，但挣得的钱很少。
c)复合句（从句） (complex sentence) 内含一个或一个以上的从句，如：
It's a long time since I saw you last. 好久没有看见你了 。

从句(clause)，它也是内含主语和谓语的一个语法结构 ，表达一定的概念，但不能成为一个独立的句子，叫做从句，为什么叫从句呢，因为它只能依附在另一个句子（主句）身上。从句在句子里可以作为一个句子成分，一般由连词、关系代词或关系副词所引导。

从句在句中可用作主语、表语、宾语、定语、状语等句子成分；
a) 主语从句 (subject clause) 如What I want to say is this(我要说的是这么一点)中的what I want to say。
b) 表语从句 (predicative clause) 如This is what I want to say(这是我要说的)中的what I want to say。
c) 宾语从句 (object clause) 如I have said what I want to say(我说完了我要说的话)中的what I want to say。

上面的三种从句又叫做名词性从句

d) 定语从句 (attributive clause) 如This is the thing I want to say(这就是我要说的)中的I want to say。
e) 状语从句 (adverbial clause) 如If you want to say something，say it clearly(假如你要说什么，就应说清楚) 中的if you want to say something。

这两种从句又叫做修饰语从句


从说话人说话的目的来看，句子又可分为：

a)陈述句 (declarative sentence) 用来叙述一件事，如：
I saw him yesterday. 昨天我看见他了 。
b)疑问句 (interrogative sentence) 用来提出疑问，如：
Did you see him yesterday? 你昨天见到他了吗 ?
c)祈使句 (imperative sentence) 表示请求、命令等，如：
Please come in.请进来。
d)感叹句 (exclamatory sentence)表示喜怒等各种情感，如：
What a beautiful voice she has! 她嗓子多好啊 !

我们只需掌握第一种陈述句即可`
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>句子成分概说</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
        <div>
          <pre className="accordion-content red bold">{cixing}</pre>
          <pre className="accordion-content">{cixing10}</pre>
        </div>}

        <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <div>句子分类</div>
        <div>{isActive2 ? '-' : '+'}</div>
      </div>
      {isActive2 &&
        <div>
          <pre className="accordion-content bold">{fenlei}</pre>
        </div>}
    </div>
  );
};

export default Content6;