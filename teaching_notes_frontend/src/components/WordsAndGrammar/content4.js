import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content4 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  // const [isActive2, setIsActive2] = useState(false);
  // const [isActive3, setIsActive3] = useState(false);
  const noun = `时态是什么, 时就是时间,  态是动作的状态。。。`;
  const simplePastContent = `1. 表示过去某个时间发生的动作或情况。

例: I bought some fruits yesterday.

2. 表示过去习惯性动作。

例: When I was a boy, I often swam in that river.

3. used to do: 表示过去常常......

He used to visit his mother once a week.

他以前总是每周看望一次他的母亲`

  const simplePresentContent = `1. 表示现在的情况、状态或特征。

例: He is a student.

2. 表示经常性、习惯性动作。

例: He always helps others.

3. 客观事实和普遍真理。

例: The earth moves the sun.

4. 表示一个按规定、计划或安排要发生的动作。

仅限于某些表示“来、去、动 、停、开始、结束、继续”等的动词, 可以与表示未来时间的状语搭配使用 。

常见的用法是: 飞机、火车、轮船、汽车等定期定点运行的交通方式。

例: The next train leaves at 3 o'clock this afternoon.

5. 在时间、条件和让步状语从句中经常用一般现在（有时也用现在完成时）表示将的来事情。（即: 主将从现原则）

例: I will call you as soon as I arrive at the airport.

我一到机场就会给你打电话。

When you have finished the report, I will have waited for about 3 hours.

等你完成这份报告的时候, 我就已经等了将近3个小时了。`
  const simpleFutureContent = `1. will do

a: 表示主语主观意愿的将来。

例: I will send her a glass hand-made craft as her birthday gift.

b: 表示客观将来。

例: Fish will die without water.

c: 表示临时决定。

例: ——Mary has been ill for a week.

——Oh, I didn't know. I will go and see her.

2. am/is/are going to do

a: 表示计划、打算做某事。

例: This is just what I am going to say.

b: 表示根据某种迹象看, 很可能或即将发生的事情, 表推测。

例: Look at the dark clouds in the sky. It's going to rain.

3. am/is/are about to do

表示“即将、正要”时, 可用。强调近期内或马上要做的事。

例: Don't worry, I am about to make a close examination on you.

4. be to do

a: 表示“按计划、安排即将发生某事或打算做某事”。

例: She is to be seen in the lab on Monday.

b: 该做或不该做的事情（语气上接近于should, must, ought to, have to）, 表示一种命令、规劝性语气。

例: You are to go to bed and keep quiet, kids. Our guests are arriving in less than 5 minutes.`
  const pastContinuousContent = `1. 表示在过去具体的时间正在发生的动作。

例: Mary was listening to light music 10 minutes ago.

10分钟前, 玛丽正在听轻音乐。

2. 表示过去某个时间段内一直在发生的事情。

例: I was travelling in London last summer vacation.

去年暑假我在伦敦旅行。

3. 过去进行时可以表示过去将来的含义。

a. 瞬时动词的过去进行时一定表示过去将来的含义。

例: Then she said she was leaving.

然后她说她要离开了。

b. 持续动词的过去进行时只有在有过去将来的时间状语或过去将来的语境下才能表示过去将来。

例: She said that she was travelling the next day.

她说她第二天要去旅行。

4. 过去进行时和频度副词连用可以表示说话者或褒义或贬义的感情色彩。

例: When he lived in country, he was always helping the poor.

住在乡下时, 他总是帮助穷人。
`
  const presentContinuousContent = `1. 表示此时此刻正在发生的事情。

例: He is listning to the music now.

他现在正在听音乐。 吉米秀主持人给小朋友相亲, 谈及谁做家务笑死我了哈哈哈！

2. 表示目前一段时间内一直在做的事情, 但不一定此时此刻正在做。

例: I am studying computer this term.

这个学期我一直在学习计算机。

3. 现在进行时可以表示将来的含义。

瞬时动词的进行一定表将来。

例:  I am leaving.

我要离开了。

持续动词的进行只有有将来的时间状语或有将来语境中才表将来。

例:  I am travelling next month.

下个月我要去旅行。

④现在进行时与频度副词连用, 表示说话者或褒义或贬义的感情色彩。

例:  He is always helping others.

他总是帮助别人。（褒义）`
  const futureContinuousContent = `强调在将来的某个具体时间正在发生的动作或存在的状态。

例: Don't worry, you won't miss her. She will be wearing a red T-shirt and a white skirt at that time.

别担心, 你不会认不出她的。她到时会穿一件红色的T恤衫和一条白色的短裙。`
  const pastPerfectContent = `1. 表示在过去的某个时间或动作以前已经完成的动作或已经存在的状态。就是我们常说的"过去的过去"。

Until then, his family hadn't heard from him for six months.

到那时为止, 他家里已经有六个月没得到他的消息了。

2. 表示从过去的过去开始, 持续到过去的动作或情况, 并且有可能会继续延续下去。此时经常用延续性动词。

By the time I left the school, he had taught the class for 3 years.

到我毕业时,他已经教那个班三年了.`
  const presentPerfectContent = `1. 表示动作到现在为止已经完成或刚刚完成, 强调对现在产生的影响。

例: I bought a new house, but I haven't sold my old one yet, so at the moment I have two houses.

我买了一所新房子, 但是还没有卖掉旧的, 所以现在我又两所房子。

2. 表示从过去某时刻开始, 持续到现在的动作或情况, 并且有可能会继续延续下去。此时经常用延续性动词。

时间状语常用since加一个过去的时间点, 或for加一段时间, 或by加一个现在时间。

例: Great as Newton was, many of his ideas have been challenged today and are being modified by the work of scientists of our time.

虽然牛顿是个伟大的人物, 但他的许多见解直到今天还在受到挑战, 并且被现代科学家的工作所修正。`
  const futurePerfectContent = `1. 表示一个动作到将来某个时间为止已经完成, 强调对将来那个时间产生的影响。

例: Pick me up at 8 o'clock,I will have had breakfast by then.

早上8点钟你来接我,到时我已经吃完早饭了.

2. 表示一个动作延续到将来某个时间, 并且有可能继续延续下去。

例: The conference will have lasted a full week by the time it ends.

会议从开始到结束将持续整整一个星期。`

  return (
    <div className="accordion-item">

      <p className="accordion-title red">{noun}</p>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>时态的表格形式</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
        <div className='tableMargin'>
          <table id="tenses">
            <thead>
              <tr>
                <th></th>
                <th>过去/past</th>
                <th>现在/present</th>
                <th>将来/future</th>
                <th>过去将来</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>一般/simple</th>
                <td className="red " data-bs-toggle="collapse" href="#simplePast" role="button" aria-expanded="false" aria-controls="simplePast">did/was/were</td>
                <td className="red" data-bs-toggle="collapse" href="#simplePresent" role="button" aria-expanded="false" aria-controls="simplePresent">do/am is are</td>
                <td className="red" data-bs-toggle="collapse" href="#simpleFuture" role="button" aria-expanded="false" aria-controls="simpleFuture">will do</td>
                <td>would do</td>
              </tr>

              <tr>
                <th>进行/continuous</th>
                <td className="red" data-bs-toggle="collapse" href="#pastContinuous" role="button" aria-expanded="false" aria-controls="pastContinuous">was/were doing</td>
                <td className="red" data-bs-toggle="collapse" href="#presentContinuous" role="button" aria-expanded="false" aria-controls="presentContinuous">be doing</td>
                <td className="red" data-bs-toggle="collapse" href="#futureContinuous" role="button" aria-expanded="false" aria-controls="futureContinuous">will be doing</td>
                <td>would be doing</td>
              </tr>
              <tr>
                <th>完成/perfect</th>
                <td className="red" data-bs-toggle="collapse" href="#pastPerfect" role="button" aria-expanded="false" aria-controls="pastPerfect">had done</td>
                <td className="red" data-bs-toggle="collapse" href="#presentPerfect" role="button" aria-expanded="false" aria-controls="presentPerfect">have done</td>
                <td className="red" data-bs-toggle="collapse" href="#futurePerfect" role="button" aria-expanded="false" aria-controls="futurePerfect">will have done</td>
                <td>would have done</td>
              </tr>
              <tr>
                <th>完成进行/pc</th>
                <td>had been doing</td>
                <td>have been doing</td>
                <td>will have been doing</td>
                <td>would have been doing</td>
              </tr>
            </tbody>
          </table>
          <div className="collapse" id="simplePast">
            <div className="card card-body">
              {simplePastContent}
            </div>
          </div>
          <div className="collapse" id="simplePresent">
            <div className="card card-body">
              {simplePresentContent}
            </div>
          </div>
          <div className="collapse" id="simpleFuture">
            <div className="card card-body">
              {simpleFutureContent}
            </div>
          </div>
          <div className="collapse" id="pastContinuous">
            <div className="card card-body">
              {pastContinuousContent}
            </div>
          </div>
          <div className="collapse" id="presentContinuous">
            <div className="card card-body">
              {presentContinuousContent}
            </div>
          </div>
          <div className="collapse" id="futureContinuous">
            <div className="card card-body">
              {futureContinuousContent}
            </div>
          </div>
          <div className="collapse" id="pastPerfect">
            <div className="card card-body">
            {pastPerfectContent}
            </div>
          </div>
          <div className="collapse" id="presentPerfect">
            <div className="card card-body">
              {presentPerfectContent}
            </div>
          </div>
          <div className="collapse" id="futurePerfect">
            <div className="card card-body">
              {futurePerfectContent}
            </div>
          </div>
        </div>}
      {/* <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
        <div>名词</div>
        <div>{isActive3 ? '-' : '+'}</div>
      </div>
      {isActive3 &&
        <div>
          <pre className="accordion-content red bold">名词的分类</pre>
          <pre className="accordion-content">{noun}</pre>
        </div>} */}
    </div>
  );
};

export default Content4;