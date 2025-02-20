import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content5 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
    const feiweiyu = `非谓语动词首先是一种动词形式, 其次是这种动词形式不能做谓语, 综合这两点, 我们将其叫做非谓语动词。
非谓语动词包含四种形式, 即不定式、动名词、现在分词和过去分词。其中, 每种形式按照发生时间和主被动又包括不同的子形式`
  const fenlei = `一 不定式
1. 基本形式：to do (表示主动, 并且一般表示将来) 2. 被动式：to be done (表示被动, 并且一般表示将来) 3. 进行式：to be doing  (表示主动和进行) 4. 完成时：to have done (表示主动和完成) 5. 完成被动式：to have been done (表示被动和完成) 6. 完成进行式：to have been doing  (表示主动和完成进行) 
例如：The teacher told us to do morning exercises . 老师让我们做早操。
The car to be bought is for his sister.要买的这辆车是给他的姐姐的。
She pretended to be reading when the teacher came into the classroom.老师进来时, 她假装正在读书。
The thief is said to have escaped.据说小偷已经逃跑了。
The thief is said to have been arrested.据说小偷已经被抓住了。
She is said to have been working in the factory over the last 20 years.据说在过去的20年里, 她一直在这家工厂工作。
二 动名词
1. 基本形式：doing  (表示主动) 2. 被动式：being done (表示被动) 3. 完成式：having done (表示主动和完成) 4. 完成被动式：having been done (表示被动和完成) 
例如：Travelling in space by ordinary people will be common in the future.在未来, 普通人在太空旅行将会是普遍的事情。
Freddy and his band could go nowhere without being followed by their fans.Freddy和他的乐队到哪里都被他们的粉丝跟着。
I have no idea of his having done such a thing against you.我不知道他做过这样一件违背你的事情。
Many customers complain of having been given short weight at that shop.很多顾客抱怨在那家商店被缺斤少两过。
三 现在分词
1. 基本形式：doing  (表示主动和进行) 2. 被动式：being done (表示被动和进行) 3. 完成式：having done (表示主动和完成) 4. 完成被动式：having been done (表示被动和完成) 
He sat there, reading a newspaper.他坐在那里, 读着一张报纸。
The area being studied may be rich in coal.这个正在被研究的地方可能富含煤。
Having finished my homework, I began to watch TV.完成作业后, 我开始看电视。
Having been told many times, she still can't remember it.已经被告诉了很多次, 她仍然记不住。
四 过去分词：done
及物动词的过去分词表示被动或完成；不及物动词的过去分词表示主动或完成。polluted river 被污染的河流
fallen leaves 落叶
注意：非谓语动词本身不能表示现在和过去。非谓语动词表示进行、将来和完成时是相对于谓语动作来说的：和谓语动作同时发生表示进行；发生在谓语动作之后表示将来；发生在谓语动作之前表示完成。

非谓语动词的作用

非谓语动词除去不能做谓语之外, 其它所有成分都可以做。具体如下。
1. 不定式：做主语、宾语、表语、定语、状语和补语。
To learn a foreign language is difficult . (作主语) 
学会一门外语是很难的。
It's easy to see their aunt. (作真正主语, it做形式主语) 很容易见到他们的姑姑。
Tom wanted to have a cup of beer. (作宾语) 汤姆想要喝杯啤酒。
His wish is to be a driver. (作表语) 他的愿望是当一名司机。
I have nothing to say. (作定语) 我没有什么可说的。
The teacher told us to do morning exercises .  (作宾语补足语) 
老师让我们做早操。
They went to see their aunt.  (目的状语) 他们去见他们的姑姑。
2. 动名词：做主语、宾语、表语、定语和补语。
Learning English is very difficult . (作主语) 学英语非常困难。
I enjoy dancing. (作动词宾语) 我喜欢跳舞。
I have got used to living in the country. (作介词宾语) 我已经习惯了住农村。
His job is driving a bus. (作表语) 他的工作是开车。
3. 现在分词：做表语、定语、状语和补语。
The story is interesting.这个故事有趣。
He sat there, reading a newspaper. (作状语) 他坐在那里, 读着一张报纸。
The area being studied may be rich in coal. (作定语) 这个正在被研究的地方可能富含煤。
He saw the thief stealing some money from the bank. (作宾补) 他看到小偷正在从银行偷钱。
4. 过去分词：做表语、定语、状语和补语。
He is interested in the news. (作表语) 他对这则消息很感兴趣。
polluted river (做定语)  被污染的河流
Given more time,I can do my work better. (做状语) 如果再被多给些时间, 我会把工作做得更好。
I found my watch stolen. (做宾补) 
我发现我的手表被偷了。`
  const dapei = `1. 须用省去to 的不定式 (do) 作宾补的11个动词。

五看 (see、watch、notice、observe、look at) 

两听 (hear、listen to) 

三使 (make、let、have) 

一感觉 (feel) 

根据谐音记忆法, 我们可以记做“吾看两厅三室一感觉”。

例如：

I saw a big bird fly over the roof of the house yesterday.

昨天, 我看到一只大鸟飞过了屋顶。

注意：以上11个动词, 也可以接现在分词和过去分词作宾补, 但在时间和语态上会有变化, 我们以see为例来区分一下。

see sb. do sth. 看到某人做了某事

see sb. doing sth. 看到某人正在做某事

see sb./sth. done 看到某人/某物被......

I see him make the phone call.

我看到他打了电话。 (他打电话的整个动作我都看见了) 

I see him making a phone call.我看到他正在打电话。 (强调看到他正在打电话,并没有看见全过程.) 

We often see him surrounded by much work.

我们常常看见他被大量的工作包围着.

2.只接不定式 (不能接动名词) 作宾语的25个常用动词

want、would like、wish、help、hope、learn、manage、offer、plan、afford、agree、arrange、ask、beg、care、choose、decide、demand、determine、expect、fear、prepare、pretend、promise、refuse

3. 只接动名词 (不能接不定式) 作宾语的28个常用动词

practice、consider、enjoy、finish、give up、imagine、keep、put off、risk、suggest、admit、advise、allow、appreciate、avoid、delay、deny、discuss、dislike、escape、excuse、fancy、forbid、mention、 mind、miss、permit、prohibit

4. 既可接不定式也可接动名词, 但含义完全不同的8个动词

remember to do sth. 记住要做某事 (未做) 

remember doing sth. 记得做过某事 (已做) 

forget to do sth. 忘记去做某事 (未做) 

forget doing sth. 忘记做过某事 (已做) 

regret to do sth. 遗憾要做某事 (未做) 

regret doing sth. 后悔/抱歉做过某事 (已做) 

try to do sth. 努力做某事

try doing sth. 尝试做某事

mean to do sth. 计划做某事

mean doing sth. 意味着做某事

can't help to do sth. 不能帮助做某事

can't help doing sth. 情不自禁做某事

go on to do sth. 继续做另一件事

go on doing sth. 继续做同一件事

stop to do sth. 停下来去做另一件事

stop doing sth. 停下正在做的事情

5. 所有非谓语动词的完成形式都不能做定语, 如to have done、to have been done、to have been doing、having done 和 having been done。

五. 非谓语动词的解题步骤

1. 判断非谓语动作的逻辑主语, 以此来确定它表示主动含义还是被动含义。

a: 非谓动词做定语时, 其逻辑主语是它所修饰的名词或代词。

b: 非谓语动作做状语时, 其逻辑主语是句子主语。

c: 非谓语动作做宾补时, 其逻辑主语是它前面的宾语。

2. 判断非谓语动作与谓语动作的先后关系。

和谓语动作同时发生表示进行, 应用以上提到的进行式 (to be doing和doing) ；发生在谓语动作之后表示将来, 应用 (to do和to be done) ；发生在谓语动作之前表示完成,应用 (to have done、to have been done、to have been doing、having done、having been done和done) 。`
  return (
    <div className="accordion-item">
      <p className="accordion-title red">{feiweiyu}</p>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>非谓语动词分类</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <pre className="accordion-content">{fenlei}</pre>}
      <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
      <div>非谓语动词搭配</div>
      <div>{isActive2 ? '-' : '+'}</div>
    </div>
    {isActive2 &&
      <div>
        <pre className="accordion-content bold">{dapei}</pre>
      </div>}
    </div>
  );
};

export default Content5;