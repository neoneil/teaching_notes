import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content7 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
    const noun = `一句话记忆：4种成分（主，宾，表，同位）由3种句子（陈述句，一般疑问句，特殊疑问句)充当，注意2组词（whether/if和what/that）的辨析和1个省略(that引导宾从时省略)

三种句子是如何转化为名词性从句的呢？

首先了解两个英语语法的基本规则：1）所有的从句都是陈述语序。2）两个句子之间必须有连接词。遵循这两条规则，转化方法如下：

1.任何陈述句加前加that

① That English is important is known to all.（主）

英语很重要这事我们都知道。

注：避免头重脚轻→It’s known to all that……（It作形式主语）

② We all know （that）English is important.（宾）

我们都知道英语很重要。

③ What we all know is that English is important. （表）

我们都知道的事是英语很重要。

④ What is known to all is the fact that English is important.（同位）

我们都知道的是以下事实：英语很重要。

思考1：为什么必须加that？

以第一句为例，① That English is important is known to all.（主）没有that的话， English is important is known to all. 犯了英语最严重的错误：一个主语（English）对应两个谓语动词（两个is）。

2. 一般疑问句变陈述语序加whether/if（因为只能用是或否来回答，一般疑问句又叫是否问句）

一般疑问句：Will he work hard? 看作整体放到另一个句子中：

① Whether he will work hard is a question. （主）

他是否会努力学习是一个问题。

② I don’t know whether he will work hard. （宾）

我不知道他是否会努力学习。

③ The question is whether he will work hard.（表）

问题是他是否会努力学习。

④ I have no idea whether he will work hard. （同位）

我不知道他是否会努力学习。

思考2：为什么必须加whether/if？

一般疑问句变陈述语序后，失去了是否的疑问义，所以要加上whether/if（是否）

3.特殊疑问句的陈述语序就是名词性从句

特殊疑问句：Who is he? 看作整体放到另一个句子中：

Who he is is not mentioned in the letter. （主）

他是谁这个问题在信中没有提及。

I don’t know who he is. （宾）

我不知道他是谁。

The question is who he is. （表）

问题是他是谁。

I have no idea who he is.（同位）

我不知道他是谁。

思考3：为什么不需要再加连接词？

在由特殊疑问句到名词性从句的转化中，疑问代词改名换姓叫连接代词，疑问副词换了马甲叫连接副词。

两组辨析

1：Whether/if。在表语从句中，只能用 “whether”不能用“if”。 。跟 or not搭配只用whether.

2：what /that 。what引导名词性从句时在从句中充当句子成分,如主语,宾语,表语,而that则不然,它在句子中只起连接作用。

what you said yesterday is right. what 作said的宾语。

That she is still alive is a puzzle. She is still alive不缺任何成分。

1个省略：通常只有引导宾语从句的that可以省略

但是在以下情况中也不能省略：当that 从句与另一名词性从句并列作宾语时，第二个that不能省；

I hope (that) I can get a good mark and that I can go to collage.`;
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>名词性从句</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <pre className="accordion-content">{noun}</pre>}
    </div>
  );
};

export default Content7;