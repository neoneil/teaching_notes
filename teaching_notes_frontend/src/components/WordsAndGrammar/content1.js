import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content1 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  
  const morphology = `词法(morphology)词法研究的对象是各种词的形式及其用法。
名词和代词的数、格和性的形式变化；
动词的人称、时态、语态、语气等形式变化；
以及形容词和副词比较等级的形式变化。`

  const cixing = `词性 (parts of speech)`
  
  const cixing10 = `英语单词的词性通常分为十大类：
1）名词(noun，缩写为n.) 是人和事物的名称，如car(汽车)，English(英语)，water(水)。
2) 代词(pronoun，缩写为pron.) 是用来代替名词的词，如we(我们)，his(他的)，all(全部)。
3) 形容词(adjective，缩写为adj.) 用来修饰名词，如great(伟大的)，honest(诚实的)，difficult (困难的)
4) 数词(numeral，缩写为num.) 是表示"多少"和"第几"的词，如four(四)，eighteen(十八)，first(第一)，eighth(十八)，hundred(一百)
5) 动词(verb，缩写为v.) 表示动作和状态，如write(写)，walk(行走)，think(想)
6) 副词(adverb，缩写为。adv.) 是修饰动词、形容词和副词的词，如quickly(快)，often(经常)，very(很)
7) 冠词(article，缩写为art.) 说明名词所指的人或物的词，如a，an(一个)，the(这，那)
8) 介词(preposition，缩写为prep.) 表示名词(或代词)与句子里其它词的关系，如from(从)，in (在…内) ，between (在…之间)
9) 连词(conjunction，缩写为conj.) 是连接词、短语、从句和句子的词，如and(和)，because(因为)，if(假如)
10) 感叹词(interjection，缩写为int.) 表示感情，如。oh(噢)，aha(啊哈)，hush(嘘)
[注一]: 属于前六类(名、代、形、数、动、副等词) 的词都有实义，叫做实词 (notional word) 。属于后四类（冠、介、连、感等词）的词没有实义，叫做虚词 (form word) 。
[注二]: 不少词可以属于几个词类，如work(工作；动词和名词) ，fast(快；形容词和副词) ，since(自从；连词和介词) 等。`;
  const mingcifenlei = `英语名词可分为两大类：
1)普通名词 (common noun) 普通名词是某一类人、某一类事物、某种物质或抽象概念的名称。如：
soldier 士兵 water 水
pupil 学生 health 健康
machine 机器 pleasure 快乐
2) 专有名词 (proper noun) 专有名词是个别的人、团体、地方、机构或事物的名称。其中实词的第一个字母必须大写。如：
Donald Trump 唐纳德 川普 
London 伦敦 China 中国
World Trade Organisation 世界卫生组织

普通名词可进一步分为：
1)类名词 (class noun) 类名词表示人或事物属于某一类。如：
tractor 拖拉机 panda 熊猫
factory 工厂 teacher 教员
2)集体名词 (collective noun) 集体名词是一些人或物的总称。如：
array 数组，班 herd 兽群
crowd 人群 army 军队
3)物质名词 (material noun) 物质名词表示物质或不具备确定形状和大小的个体的实物。如：
steel 钢 gram 粮食
fire 火 cotton 棉花
4)抽象名词 (abstract noun) 抽象名词表示动作、状态、品质或其他抽象概念。如：
happiness幸福 life 生活
work 工作 whiteness 白色
[注]名词又可分为可数名词 (countable noun) 与不可数名词 (uncountable noun) 。可数名词有单、复数之分，不可数名词一般不分单数和复数。类名词和集体名词一般是可数的；抽象名词、物质名词和专有名词一般是不可数的。有少数名词既可用作不可数名词，又可用作可数名词，但意义有所不同。如：
    用作不可数名词   用作可数名词
water    水            水域
people   人            民族
glass    玻璃          玻璃杯
paper    纸            报纸，论文
tin      锡            罐头
copper   铜            铜币 
`
  const guanci = `冠词分不定冠词(indefinite article)和定冠词(definite article)两种，一般无句子重音。
1)不定冠词a，an
a) a和an均用在单数名词之前，表示某一类人或事物中的"一个"，相当于汉语的"一"，但不强调数目观念。
b) a用在辅音发音之前，an用在元音发音之前。如：a notebook一个笔记本，a cigarette一支香烟，an old man一位老人，an English class一堂英语课。
字母u读作[ju:]时，由于第一个音[j]是辅音，故前面用a，不用an。如：a useful book一本有用的书，a university一所大学。字母h如不发音，第一个音又是元音，前面用an而不用a，如an hour，an honest person一个诚实的人。
2)定冠词the
a) 表示某一类人或事物中的"某一个"或"某一些" ，相当于汉语的"这"或"那"。
b) 不论单数名词或复数名词，也不论可数名词或不可数名词，前面都可以用the。
c) 在元音前读 [Ti]，辅音前读 [TE] 。

英语中不定冠词a (an)的用法
1)指一个人、动物或一件事物属于某一类。如：
Xiao Xu's father is a miner in Perth. 小徐的父亲是珀斯的一名矿工 。(而不是其他工种)
Give me a ballpen, please. 请给我一支圆珠笔 。(而不是钢笔或其他种类)
2)指任何一个人、动物或一件事物。如：
A steel worker makes steel. 钢铁工人炼钢 。(意即任何一个钢铁工人都炼钢)
A triangle has three angles. 三角形有三个角 。(意即任何一个三角形都有三个角)
3)指某人或某物，但不具体说明何人或何物。如：
He comes from a firm in Sydney.他来自悉尼某一家公司。
A young man wants to see you. 有个青年人要见你 。
A car stopped in front of the gate. 一辆汽车停在大门前 。
4)不定冠词还可指"事物的单位"，如"每日"、"每斤"等。如：
Butter is 4 dollars a kilo. 黄油四澳元一公斤 。
He drove the car at 18 miles an hour. 他行车速度为每小时十八英里 。
The Chinese Export Commodities Fair is held in Guangzhou twice a year. 中国出口商品交易会每年在广州举行两次。
The doctor told him to take the medicine three times a day. 医生叫他一天吃三次药。

定冠词 the 的用法
1)特指某(些)人或某(些)事物。如：
This is the house where Lu Xun once lived. 这是鲁迅曾经住过的房子 。(以别于其他房子)
The book on the desk is an English dictionary. 书桌上的那本书是一本英语词典 。(特指桌上的那本书。注意名词book被 on the desk短语所限定。)
Cairo is the capital of Egypt.开罗是埃及的首都。
We plan to cut the wheat in these fields in three days' time. 我们计划三天后割这些地的小麦 。(特指这些地里的小麦)
2)指说话人与听话人彼此所熟悉的人或事物。如：
Open the door, please. 请开门 。(双方都知道指的是哪一个门)
The Manager is in his office. 经理在他的办公室里 。(双方都知道指的是哪个经理)
Let's meet at the railway station. 我们在火车站碰头吧 。(双方都知道指的是哪一个火车站)
3)复述上文提过的人或事物。如：
Last week I read a story and a play. The story is about the Second World War and the play about the life of university students. 上周我读了一篇故事和一个剧本 。那篇故事是关于第二次世界大战的，剧本是关于大学生生活的。
4)表示在世界上独一无二的事物，如 the sun太阳，the moon月亮，the earth地球，the sky天空，the world世界。
5)定冠词the用于单数可数名词之前，表示某一类人或事物。如：
The Chinese student of English is apt to make such mistakes. 中国学英语的学生容易犯这样的错误 。
The favorite fast food in the Australia is the hamburger. 澳洲最为人所爱吃的快餐是汉堡。
The compass was invented in ancient China.古代中国发明了指南针。
演奏乐器时，乐器的名称前也常用定冠词the。如：
At the Children's Palace, some children learn to play the piano, others learn to play the violin. 在少年宫里 ，有的小孩学弹钢琴，有的学拉小提琴。
[注一]一般你们见过语法书中的the verb(动词)和动植物学书中的the elephant(大象)和the rose(玫瑰)等，都属于这一类。
[注二]"马是有用的动物"有下面三种说法，都可以如：
A horse is a useful animal.
The horse is a useful animal.
Horses are useful animals.

6)表示阶级、党派的名词前必须用"the"。如the Liberal Party 澳洲自由党，the working class工人阶级，the Laboure Party(英国)工党
7)定冠词还可与某些形容词连用，使形容词名词化，代表某一类人或物。如the poor穷人，the rich富人，the wounded伤员，the sick病号，the beautiful美丽的事物。
8)在序数词、形容词最高级和表示方位的名词前，常用定冠词the。如：
Shanghai is the biggest city in China.上海是中国最大的城市。
January is the first month of the year. 元月是一年中的第一个月份 。
The sun rises in the east. 日出东方 。
9)下面一些说法中习惯上须用定冠词the。如：
in the morning在早上或上午
in the afternoon在下午
in the evening在晚上
to go to the theatre(cinema)到剧院(电影院)去看戏(电影)

专有名词前冠词的用法
专有名词前一般不用冠词，如Shanghai上海，Britain英国，Edgar Snow埃德加·斯诺。但在下列几种场合中，却经常要用定冠词。
1)在江河、海洋、山脉、群岛的名称前。如：
the Yellow River黄河，the Baltic (Sea)波罗的海，the Pacific (Ocean)太平洋，the Atlantic (Ocean)大西洋，the Xisha islands西沙群岛，the Tianshan Mountains天山，the Himalayas 喜马拉雅山。
2)在含有普通名词的专有名词前。如：
a) 某些国名前：
the People's Republic of China中华人民共和国，the United States of America美国 (有些国名并不含有普通名词，但也用定冠词，如：the Philippines菲律宾，the Sudan苏丹。)
b) 某些机关团体等组织名称前：
the parliament，国会 the United Nations联合国
c)朝代、时代的名称前：
The Tang dynasty唐朝，the Warring States period战国时代。
3)在某些建筑物的名称前。如：
the National Art Gallery 国家美术馆，the Great Wall长城，the Adelaide Zoo 阿德动物园，the British Museum大英博物馆。
4)在报纸、杂志、旅馆等名称前。如：
The Guardian 《卫报》，the Reader's Digest读者文摘，the Village 一种青年旅馆。
5)在姓名复数形式前，指一家人。如：
The Lius has moved to Tianjin.刘家已经搬到天津去了，
The Greens came to China for a visit last year. 格林一家去年来中国访问过 。
抽象名词和物质名词前冠词的用法
1)抽象名词和物质名词表示一般概念时，前面通常不用冠词，但特指时，则须用定冠词。试比较：
War is the continuation of politics. 战争是政治的继续 。
Our battalion fought north and south during the Anti - Japanese War.
我们这个营在抗日战争时期转战南北。
He is fond of music. 他喜欢音乐 。
Did you like the music of the film? 你喜欢这个影片的音乐吗 ?
Science is making rapid progress in China.中国科学正在飞速发展。
Physics is the science of matter and energy. 物理学是研究物质和能量的科学 。
Australia is rich in oil. 澳洲石油丰富。
The oil produced in Australia is less than that in the middle east. 澳洲油田生产的石油比中东的少 。
2)抽象名词和物质名词如果具体化，表示一个具体情况或动作或某一类物质时，前面可用不定冠词。如：
It is a great joy to live in Australia.生活在澳洲很幸福。
Shiraz is a famous red wine in Adelaide. Shiraz是一种Adelaide的名酒 。
She built a fire. 她生了个火 。

不用冠词的场合
1)专有名词、抽象名词和物质名词前，一般不用冠词。如：
Canada加拿大，Japanese日语，love爱，hatred恨，glass玻璃，water水。
2)名词前已有作定语用的this，that，my，your，whose，some，any，no，each，every等代词时，不用冠词。如：
That is my cap.那是我的帽子。
I enjoyed every minute of it. 我自始至终都玩得痛快 。
I want this book, not that one. 我要这本书 ，不要那本书。
3)季节、月份、星期几等名称前，一般不用冠词。如：
Spring has come. 春天来了 。
Winter is the best time for skating. 冬天是溜冰的最好季节 。
Her little daughter was born in April 1987.她的小女儿于1987年4月出生。
We have mathematics on Monday.我们星期一有数学课。
[注]季节前有时也用冠词。如in the spring在春季。当然也可以说in spring。
4)复数名词表示某一类人或事物时，不用冠词。如：
I don't approve of cousins marrying. 我不赞成表兄妹结婚 。
Books are my best friends. 书是我最好的朋友 。
5)称呼语前面不用冠词，表示头衔和职务(这种职务一般只由一人担任)的名词的前面也常不用冠词。如：
What does this word mean, Father? 这个词是什么意思 ，爸爸?
Mrs. Johnson is director of the office. 约翰逊太太是办公室主任 。
6)在某些固定词组里，名词之前常不用冠词。如：
by air乘飞机，at night夜间，in fact事实上，in danger在危险中，after school放学后，at home在家中，in town在城里，to go to school上学去，to go to bed去睡觉，to go to class去上课，from door to door挨门挨户，from morning till night从早到晚。
7)三餐饭的名称前，常不用冠词。如：
Have you had breakfast? 你吃过早饭了吗 ? 
After lunch we usually have a nap. 午饭后我们一般都睡午觉 。
What did you have for supper? 你晚饭吃什么了?
[注]但指一特定的餐食时则须用定冠词，如Come on, or the dinner will be getting cold. (快来，要不饭就凉了)。
8)球类运动、棋类游戏等名词前不用冠词。如：
My younger brother likes to play table tennis. 我弟弟喜欢打乒乓球 。
Let's go and watch them play chess. 让我们去看他们下棋去 。
9)节日、假日等名称之前不用冠词。如：
New Year's Day 元旦 National Day 国庆节
Australia Day 澳洲日 Children's Day 儿童节
Christmas Day 圣诞节
10)报纸和文章的标题常常省去冠词。如：
Bosses Force Deadlock on Pay Increase Talks老板们使要求增加工资的谈判陷于僵局。 (报纸标题，bosses前省去the，deadlock前省去a, pay increase talks前省去the。)
`
  return (
    <div className="accordion-item">

      <p className="accordion-title red">{morphology}</p>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>词性</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
        <div>
          <pre className="accordion-content red bold">{cixing}</pre>
          <pre className="accordion-content">{cixing10}</pre>
        </div>}
        <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
        <div>名词</div>
        <div>{isActive3 ? '-' : '+'}</div>
      </div>
      {isActive3 &&
        <div>
          <pre className="accordion-content red bold">名词的分类</pre>
          <pre className="accordion-content">{mingcifenlei}</pre>
        </div>}
      <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <div>冠词</div>
        <div>{isActive2 ? '-' : '+'}</div>
      </div>
      {isActive2 &&
        <div>
          <pre className="accordion-content bold">{guanci}</pre>
        </div>}
    </div>
  );
};

export default Content1;