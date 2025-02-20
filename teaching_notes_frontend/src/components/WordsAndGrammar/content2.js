import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content2 = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const adjadv = `形容词 (adjective) 与副词（adverb）都是起修饰作用的词，形容词常放在它所修饰的名词之前，副词位置更灵活。`
    const adjinfo = `a lovely baby一个可爱的婴儿
the beautiful picture那幅美丽的图画
modern history现代历史

形容词的用法
形容词在句中可用作：
1)定语
He is a good boy. 他是个好孩子。

2)表语
The film is both moving and instructive. 这部电影很感动人，而且富有教育意义。
I am very glad to see you. 见到你很高兴。
3)宾语补足语 和宾语一起构成复合宾语。如：
Have you got everything ready for the journey? 你行装都准备好了吗?
We keep our rooms clean and tidy. 我们经常保持房间的整洁。
4)相当于名词 某些形容词前用定冠词the，变成名词化的形容词，可在句中作主语、宾语等。如：
The young are active.青年人积极好动。(the young作主语)
The blind can learn to read with their fingertips. 盲人能够用指尖学习阅读书籍。(the blind作主语)
He has a keen sense of the new. 他对新鲜事物有敏锐的感觉。(the new作宾语)
[注]在The sun rose red(旭日升起)中的形容词red和Don't marry young(不要早婚)中的形容词young都是主语补足语。`;
  const advinfo = `副词(adverb)修饰动词、形容词和其他副词等，说明时间、地点、程度、方式等概念。如：often往往，here这里，very很，quickly很快地。
副词的构成
1)本身就是副词，如now现在，there那里，rather颇。
2)由形容词加词尾-1y变来，如firmly坚决地，happi1y幸福地。
3)与形容词同形
early adj. 早的 early adv. 早
high adj. 高的 high adv. 高高地
long adj. 长的，长久的long adv. 长久地
副词的种类
副词可分为下列几种：
1)普通副词 (ordinary adverb) 如：together一起，well好，seriously认真地，slowly慢，carefully小心地。
2)疑问副词 (interrogative adverb) 如：when何时，where何地，how如何，why为何。
3)关系副词 (relative adverb) 如：where，when。
4)连接副词 (conjunctive adverb) 如：therefore所以，however然而，hence所以，thus这样，nevertheless然而，otherwise否则，still可是，仍然。

副词的用法

副词在句中可用作：
1)状语(这是副词在句子中的主要功用)
It is raining hard. 雨下得很大 。(副词hard作状语，修饰动词is raining。)
Don't drive too fast. 车子不要开得太快 。(fast是副词，作状语，修饰动词drive，副词too又修饰副词fast。)
He speaks English quite well. 他英语讲得相当好 。(well修饰动词speaks，quite又修饰副词well。)
This is a fairly useful tool，这是一件相当有用的工具。(fairly修饰形容词useful)
He has always helped his sister with her homework. 他一向帮助他妹妹做家庭作业 。(always修饰动词has helped)
She often went there. 她常到那儿去 。(often和there均是副词，修饰动词went。)
Perhaps he will telephone later. 也许他以后会打电话来的 。(perhaps是副词，用以修饰全句。)
2)表语
Is he up? 他起床了没有 ?
She is out. 她出去了 。
3)定语
Life here is full of joy. 这儿的生活充满了欢乐。(here修饰名词life)

副词的位置

1)修饰动词时，有三种位置。
2)修饰形容词和副词时，须放在被修饰词之前。如：
It is a rather difficult job，这是一件颇为困难的工作。(rather修饰形容词difficult)
He runs very fast. 他跑得很快。(very修饰副词fast)
3)副词作定语时，一般放在被修饰的名词之后。如：
The workers there are busy digging a canal now. 那里的工人现在正忙于修水渠。
On my way home, I met groups of protesters.在回家的路上我遇见成群的示威者。`
  const bijiaozuigao = `形容词的比较等级及其形式
英语形容词比较等级(degrees of comparison)一般有两个：即比较级(comparative degree)和最高级 (superlative degree)。不用比较等级的形容词通常称为原级(positive degree)。形容词的比较级形式是："形容词 + 后缀 -er " 或 "more + 形容词"。它的最高级形式是："形容词 + 后缀 -est "或"the most + 形容词。
[注] 有些形容词一般没有比较等级。如：
right, wrong，woolen，wooden.

形容词比较级的用法
比较级用于二者的比较，其结构是：含有形容词比较级的主句+从属连词 than 引导的从句（从句中常省去意义上和主句相同的部分）。如：
Li is older than Zhou. 李比周年纪大。(从句中省去了is old)
There are more children in this nursey than in that one. 这个托儿所的孩子比那个托儿所多。(从句中省去了 there are children)
After two years' physical training，she is healthier and stronger.
经过两年的体力锻炼，她(比以前)健康强壮多了。(注意这里省去了从句than she was)
We are much better off than ever before. 我们的生活比过去任何时候都要好得多。(than后省去了we were)
Paul weighs less than harry. 保尔的体重比哈利轻。
Mary is less clever than Jane.玛丽不如简那么聪明。
[注一] 汉语可以说"昆明的气候比兰州好"。英语必须加that，译为：
The climate of Kunming is better than that of Lanzhou.
[注二]英语比较级常译作"较…"、"…一些"等，但不等于汉语的"更…"。汉语的"更…"须用"still"或"even"来表示如：
This book is even more difficult than that one. 这本书比那本书更难。
[注三]有些情况下，汉语不用"较"等字眼，英语则须用比较级，如：
Will the younger people give their seats to old people? 请年轻人把座位让给老年人好不好?

形容词最高级的用法
形容词最高级用于二者以上的比较，其结构一般是：定冠词the+形容词最高级+名词+表示范围的短语或从句。如：
Peter is the oldest boy of them all. 彼得是这群男孩中年纪最大的。(介语短语of them all表示范围)
London is the biggest city in Britain，伦敦是英国最大的城市。(介词短语in Britain表示范围)
Mt. Everest is the World's highest peak。珠穆朗玛峰是世界最高峰。 (注意这里表示范围的是名词所有格 the world's)
This is the best film (that) I have ever seen. 这是我所看过的最好的电影。(that在口语中一般省略，that从句表示范围)
[注一]形容词最高级后的名词如果在前面已提过，可省去。如：
This novel is the best (that) I have ever read. 这是我所看过的小说中最好的一本。
[注二]在口语中，形容词最高级也可以用于二者的比较。如：
This is the shortest of the two roads. 这是两条路中最近的一条路。
[注三] 形容词最高级用作表语表品质时，其前不用定冠词the。如：He is happiest when he is working. 他工作时最愉快。
-------------------------------------------------------------------

副词的比较等级

和形容词同形的副词的形式变化与形容词完全相同。但以词尾-ly结尾的副词(注意early一词的-ly不是副词的词尾)须用more和most。另外，须注意下面例词中well，badly的不规则变化。如：

副词比较等级的用法

1)副词比较级的用法与形容词比较级相似。如：
David drives faster than anyone I know. 大卫开车比我所知道的任何人都要快。
She plays table tennis better than I.她乒乓球打得比我好。(从句中省略了play table tennis)
Mr. Martin usually gets to the office earlier than others. 马丁先生到办公室通常比别人早。
They speak less fluently but more correctly than we do. 他们讲得不如我们流利，但比我们正确。
2)副词最高级用法，除副词前可以不用the外(用the也可以)，其余与形容词最高级相同。如：
I work fastest when I'm under pressure. 我在有压力时工作得最快。
He swims the best in Class One.一班他游泳最好。

比较等级的一些特殊用法

两种不同形式 
有几个形容词和副词的比较级和最高级有两种的比较等级不同形式，而且意义也不同。
举例说明：
1)Rome is one of the oldest cities in the world. 罗马是世界上最古老的城市之一。
Her eldest daughter is a school teacher. 她大女儿是个老师。
My elder brother is in college. He is two years older than I. 我哥哥在上大学，他比我大两岁。
[注]older，oldest说明人的年纪或事物的年代的久远，但在美国英语里也表示长幼。
2)They reached the place later than we.他们到达那儿比我们晚。
Twenty years later he returned to his home village. 二十年后，他回到自己的家乡。
3)Who spoke last?是谁最后发言的?
What is the latest news about the sports meet?关于运动会最近有什么消息?
as...as；not so. . .as或not as...as
1)表示"相等"用as...as。
2)表示"不相等"用not so...as或not as...as。如：
1)This knife is as sharp as that one. 这把刀跟那把一样快。
Bill is as tall as I. 比尔和我一般高。
Is this bag of soyabeans as heavy as that one? 这袋大豆跟那袋一样重吗?
You know as well as I do. 你和我一样明白。
[注]注意as后面的形容词如作定语，而被定语修饰的名词有不定冠词a时，冠词a须放在形容词之后，如German is as difficult a language as English. (德语和英语一样难学。)。这样的词序也适用于so，如I have never seen so beautiful a place as Guilin before.(我过去从未见过像桂林这样美丽的地方。)
2)Sydney Opera House was not so big as it is now. 悉尼歌剧院过去没有现在这样大。
The Atlantic Ocean is not as big as the Pacific Ocean. 大西洋没有太平洋大。
表示"几倍于"
用twice (两倍)，three times(三倍)等加as...as..
如：
New York is ten times as big as my hometown. 纽约有我的家乡十个大。
The output of the paper mill is now three times as high as it was in 1966.这家纸厂的生产比一九六六年增加两倍。
This river is twice as long as that one. 这条河比那条河长一倍。
Asia is four times as large as Europe.亚洲比欧洲大三倍。
[注]表示"几倍于"也可以用下面的说法，如：
Three times three is nine. 三乘三得九。
He is twice my age. 他的年龄比我大一倍。
This lake is four times the size of that one. 这个湖有那个湖四个大。
The irrigated area in this province is four times bigger than in l978.这个省的灌溉面积比1978年增加三倍。(four times bigger than = four times as big as)
Our county's agricultural output this year is 5 per cent higher than that of last year. 我们县今年农业产量比去年增长百分之五。

表示程度
可用much，far，still，even，a little，no，any，a great deal等状语来修饰形容词和副词的比较级。如：
The Yellow River is long, but the Changjiang River is even longer.黄河长，长江更长。
We are much better off now. 我们的生活比过去好得多。
She sings far better than the others. 她唱得比别人好得多。
Wang is taller than Zhang. Li is still than Wang. 王比张高，李比王还高。

[注一]注意下面的一些说法。如：
I couldn't move a step further，我连一步也走不动了。
The meeting lasted two hours longer than usual. 会议比平常多开了两个钟头。
He is a head taller than I.他比我高一个头。 (也可以说He is taller than me by a head.)
They got there earlier than we by twenty minutes. 他们比我们早二十分钟到达那里。
The students at the university have increased by 100 percent since 1978。这个大学的学生自一九七八年以来增加了一倍。
Do you want any more? -Yes，give me two more.
你还要吗?一是的，再给我两个。
Have you got any more tickets? -Sorry, I have no more.
你还有票吗? －对不起，没有了。

[注二]可用形容词最高级 + possible或imaginable等词来强调语气。如：
I think he is the best possible man for the job. 我认为他做这工作最合适。(也可以说the best man possible)
Swimming in winter is the best form of exercise imaginable. 冬泳是最好的运动方式。(也可以说the best imaginable form)

"比较级 + and + 比较级"
(后面不可接than从句) 可用来表示"越来越"。如：
The days are getting longer and longer. 白天越来越长了。
He is becoming more and more interested in sports. 他对运动越来越有兴趣了。
The more the more 的用法
意思是"越…，就越…"。如：
The harder you work, the more you will learn. 你越努力，就越学得多。
The greater the mass of a body is, the greater its inertia will be. 物体的质量越大，它的惯性就越大。
The more you eat, the fatter you get.你吃得越多，长得越胖。
The more，the better. 越多越好。
more than和less than
这两个固定词组分别表示"多于""少于"。如：
There are more than three hundred households in this village. 这个村子有三百多户人家。
The finished the Work in less than a year. 他们不到一年就完成这项工作。
Australia has established diplomatic relations with more than three hundred countries. 澳洲已经和三百多个国家建立了外交关系。
no more than和not more than
no more than的意思是"只不过"，not more than的意思是"不多于"。试比较：
There are no more than ten tickles left. 剩下不到十张票。 (有"票少"的含义)
The experiment was done by not more than 5 persons. 做这个试验的人不到五个。(没有"多"或"少"的含义，只是客观地说明数目)
This room is no bigger than that. 这个房间并不比那个大。 (有"两个房间都不大"的含义)
This room is not bigger than that one. 这个房间不比那个大。 (没有"两个房间都不大或都不小"的含义)
[注]注意not …. Any more than或no more...than在下面句子中的用法。如：
They cannot do the impossible any more than we can. 他们和我们同样不能做不可能的事情。
He is no more diligent than I am.他和我同样不勤奋
no less than和not less than
no less than的意思是"不亚于"，not less than的意思是"不少于"。试比较：
There were no less than a thousand people at the meeting.
到会的有一千人之多。(有"到会人多"的含义)
There were not less than one thousand people at the meeting.
到会的至少有一千人。(没有"到会人多或人少"的含义)
This song is no less popular than that one. 这首歌之受欢迎不亚于那首歌。(有"两首歌都受欢迎"的含义)
This song is not less popular than that one. 这首歌受欢迎的程度不比那首差。(纯粹比较。不一定有"两首歌都受欢迎"的含义)
All the better和so much the better
这一类的说法都有"因此而更…"的含义。如：
If that is so, it’s all the better. 果真如此，那就更好。
If he comes, so much the better. 如果他愿意来，那更好。

`
    return (
      <div className="accordion-item">
  
        <p className="accordion-title red">{adjadv}</p>
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>形容词</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive &&
          <div>
            <pre className="accordion-content">{adjinfo}</pre>
          </div>}
          <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
          <div>副词</div>
          <div>{isActive3 ? '-' : '+'}</div>
        </div>
        {isActive3 &&
          <div>
            <pre className="accordion-content">{advinfo}</pre>
          </div>}
        <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
          <div>形容词/副词 比较级 最高级</div>
          <div>{isActive2 ? '-' : '+'}</div>
        </div>
        {isActive2 &&
          <div>
            <pre className="accordion-content bold">{bijiaozuigao}</pre>
          </div>}
      </div>
    );
  };
export default Content2;