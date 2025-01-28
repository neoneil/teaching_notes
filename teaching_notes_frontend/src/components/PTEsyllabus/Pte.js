import React from 'react';
import Accordion from './Accordion';
import './Pte.scss'
const Pte = () => {
    const accordionData = [
        {
            title: 'PTE 一对一课程概要',
            content: `
PTE 一对一课程概要(雅思课程概要基本相同)

以下一对一课程收费标准一致:每小时收费70刀(网课,面授价格一致)一次课两个小时；
注:网课app 为 zoom, 由于学生较多,上课后我会发给学生当次的截屏录像链接 
(此录像仅供复习使用,请不要外传),请在24小时内下载到您的个人PC上,而后云端自动删除。

报名之前我需要评估学生目前的英文水平,因人而异给出相对备考建议,
通过zoom(网课)一小时左右了解情况(免费)。然后学生可以考虑报名与否,
由于学生较多,上课前请提前2-3天时间预定课程,不便之处请谅解。

根据评估水平由低到高分三种时长的课程,基础由弱到强分别为(A, B, C)
注:一对一实际上课程设置比较灵活,
以下只是根据大陆,香港,台湾学生听、说、读、写、水平默认的平均框架设置,
具体课程安排情况以学生实际情况为准。


A : 10 + 30小时PTE 一对一 精讲课程大纲:(测试结果相当于雅思4-4.5分)

每次课程两个小时(前10小时 围绕 基础知识,语法,单词。后30小时 围绕四项目标)
o 听、说、读、写 四项综合高强度练习。
o 系统性口语改音、最新高频机经练习,精准定位每个学员的问题并提供解决方案。
o 所有真题均为当月最新高频机经,提供最准考前预测。
o 个性化制定所有技巧模版,并针对不算智能的人工智能评分体系给予解题策略。

课程内容:
• 口语部分: 全题型高强度密集练习,全面讲解所有题型技巧。
            一对一口语分析,改音建议及练习方案制定
• 听力部分: 真题音频精讲精练, “细节定位+精听”、“主旨认知+定位词+信号词”技巧训练
• 阅读部分: 真题精练 + 技巧训练 + 语法分析 
• 写作部分: 100%覆盖精讲大作文全部话题及按话题归类的写作必备词汇搭配(ppt)
• 机经部分:高强度密集练习+背诵,针对当月最新最高频机经

前5次课为基础知识课程:
1 英语语法(阅读短句句子分析)(写作短句构成)
2 英语语法(从句,复合结构在阅读,写作中的应用)
3 PTE-A学术类词汇(阅读猜词技巧,尾缀判断词性)
4 PTE-A学术类词汇(听力WFD ,口语 RS 必备词汇)
5 PTE-A学术类词汇(口语 DI,ASQ 必备词汇)

口语  (五次共10小时)
第一次:PTE口语题型分析及人工智能评分解析,Read Aloud 讲解, 高分示范
第二次:Describe Image 线图,饼图讲解, 模版分析, 解题技巧
第三次:Describe Image 柱图,表格,地图讲解, 模版分析, 解题技巧
第四次:流程图, 非数据图片题型讲解, 模版分析, 解题技巧
第五次:Repeat Sentence讲解, 解题技巧  
      Retell Lecture 讲解, 模版分析, 解题技巧,高分示范 

听力 (四次共8小时)
第一次:Summarise Spoken Text 讲解, 解题技巧,高分示范,机经全覆盖
第二次:单选多选题型解题技巧 + 训练
第三次:填空题解题技巧 + 训练
第四次:Write From Dictation 解题技巧 + 训练

阅读(三次共6小时)
第一次:完形填空(draggable) Fill In Blanks 题型解析+技巧, 随堂练习
第二次:完形填空(droppable) Fill In Blanks 题型解析+技巧, 随堂练习
第三次:Re-Order 题型解析+技巧 & 单选多选题型解析+技巧, 随堂练习

写作 (三次共6小时)
第一次:Summarise Written Text 讲解, 解题技巧,高分示范,机经全覆盖
第二次:大作文解题策略 和 真题分析 机经全覆盖
第三次:语法打磨,常用句型用法, 汉语思维下句子常犯错误分析 & 高分模板运用

B : 30小时纯PTE 一对一 精讲课程大纲:(测试结果相当于雅思5分)

口语  (五次共10小时)
第一次:PTE口语题型分析及人工智能评分解析,Read Aloud 讲解, 高分示范
第二次:Describe Image 线图,饼图讲解, 模版分析, 解题技巧
第三次:Describe Image 柱图,表格,地图讲解, 模版分析, 解题技巧
第四次:流程图, 非数据图片题型讲解, 模版分析, 解题技巧
第五次:Repeat Sentence讲解, 解题技巧 
    Retell Lecture 讲解, 模版分析, 解题技巧,高分示范 

听力 (四次共8小时)
第一次:Summarise Spoken Text 讲解, 解题技巧,高分示范,机经全覆盖
第二次:单选多选题型解题技巧 + 训练
第三次:填空题解题技巧 + 训练
第四次:Write From Dictation 解题技巧 + 训练

阅读(三次共6小时)
第一次:完形填空(draggable) Fill In Blanks 题型解析+技巧, 随堂练习
第二次:完形填空(droppable) Fill In Blanks 题型解析+技巧, 随堂练习
第三次:Re-Order 题型解析+技巧 & 单选多选题型解析+技巧, 随堂练习

写作 (三次共6小时)
第一次:Summarise Written Text 讲解, 解题技巧,高分示范,机经全覆盖
第二次:大作文解题策略 和 真题分析 机经全覆盖
第三次:语法打磨,常用句型用法, 汉语思维下句子常犯错误分析 & 高分模板运用

C : 20小时纯PTE技巧 一对一 精讲课程大纲: (测试结果相当于雅思6分及以上)

口语  (四次共8小时)
第一次:PTE口语题型分析及人工智能评分解析,Read Aloud 讲解, 高分示范
第二次:Describe Image 线图,饼图讲解, 模版分析, 解题技巧
第三次:Describe Image 柱图,表格,地图讲解,流程图, 非数据图片题型讲解 模版分析
第四次:Repeat Sentence讲解, 解题技巧 
      Retell Lecture 讲解, 模版分析, 解题技巧,高分示范 

听力 (两次共4小时)
第一次:Summarise Spoken Text 讲解, 解题技巧,高分示范,
机经全覆盖 & 单选多选题型解题技巧 + 训练(命中率100%)
第二次:填空题解题技巧 + 训练 & 
Write From Dictation 解题技巧 + 训练(命中率100%)

阅读(两次共4小时)
第一次:完形填空(draggable) Fill In Blanks 题型解析+技巧 & 
完形填空(droppable) Fill In Blanks 题型解析+技巧
第二次:Re-Order 题型解析+技巧 & 单选多选题型解析+技巧, 随堂练习

写作 (两次共4小时)
第一次:Summarise Written Text 讲解, 解题技巧,高分示范,机经全覆盖(命中率100%)
第二次:大作文解题策略 和 真题分析 机经全覆盖(命中率100%)

就免费测试:
Pte考试 / 雅思考试 
免费测试+诊断
无论新手或久经考验者
测试后结合考试评分体系做到知己知彼
了解自己的薄弱之处并明确未来的准备方法
一对一分析,事半功倍`
        },
        {
            title: '雅思 一对一课程概要',
            content: `以下一对一课程收费标准一致: 每小时收费70刀(网课,面授价格一致)一次课两个小时；
注: 网课app 为 zoom, 由于学生较多,上课后我会发学生当次的截屏录像链接 
(此录像仅供复习使用,请不要外传),请在24小时内下载到您的个人PC上,而后云端自动删除。
如面授, 地点在 阿德莱德大学主校区(North Terrace)的 hub central 的教室上课。

报名之前我需要评估学生目前的英文水平,因人而异给出相对备考建议,
然后学生可以考虑报名与否,由于学生较多,上课前请提前3天时间预定课程,不便之处请谅解。

雅思(20次课,40小时)基础 + 6.5 分(目标)课程

课次	内容
1	英语语法(阅读短句句子分析)(写作短句构成)
2	英语语法(从句,复合结构在阅读,写作中的应用)
3	雅思词汇(阅读猜词技巧,尾缀判断词性)
4	雅思词汇(应用在听力里面的生活话题场景词汇)
5	雅思口语词汇(人物,事件,物品) 雅思考试题型技巧部分
6	雅思写作大作文1(审题,列提纲,开头段写法)
7	雅思听力生活场景(accommodation, travelling 等)
8	雅思阅读技巧1 (true, false, not given)
9	雅思口语第一部分
10	雅思写作大作文2(分论点,论据,结尾写法)
11	雅思听力生活场景(membership, bank 等)
12	雅思阅读技巧2(summary, sentence completion等)
13	雅思口语第二部分(人物类,事件)
14	雅思写作大作文3(写作作文面批)
15	雅思听力学术场景(course delivery, assignment 等)
16	雅思阅读技巧3(multiple choices, matching)
17	雅思口语第二,三部分 (物品)
18	雅思写作大作文4(写作作文面批)
19	雅思听力学术场景(library, facilities 等)
20	雅思阅读技巧4 (list of heading 等)
21	雅思模拟考试,讲解

(说明1: 目标6.5分是为了留出一些margin,这样6分才有保证)
(说明2: 一旦上课作业必须完成,只要努力就好,我会以你的个人水平定量)
(说明3: 一对一或小班时间比较灵活,如有事可以调时间,
只要班中其他人同意即可,但不能因为作业没完成随便缺课。)
(说明4: 上课我会统一recording,还包括其他资料,只供自己复习使用,不能外传)
`
        },
        {
            title: '基础语法词汇 课程概要 - 工欲善其事，必先利其器',
            content: `
1 英语语法 (阅读短句句子分析)(写作短句构成)
2 英语语法 (从句,复合结构在阅读,写作中的应用)
3 PTE-A/IELTS 学术类词汇 (阅读猜词技巧,尾缀判断词性)
4 PTE-A/IELTS 学术类词汇 (听力, 口语必备词汇)
5 PTE-A/IELTS 学术类词汇 (阅读, 写作必备词汇)`
        }
    ];

    return (
        <div className='row'>
            <div className='col-md-6'>
                <div>
                    <h3>PTE 雅思 课程设置</h3>
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

export default Pte;