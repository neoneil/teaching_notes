import React from 'react';
import './Aboutme.scss'
import '../../App.scss'
const Aboutme = () => {
  // const [isActive, setIsActive] = useState(false);
  const name = `  Thomas老师是原北京知名英语培训学校的主讲教师, 
  拥有出国培训考试17年教学经验 
  现任澳洲英语培训中心主讲教师
  Thomas老师本科学习英文专业 
  后在澳洲大学攻读人工智能硕士研究生
  同时在墨尔本人工智能私企任职
  熟知PTE的Intelligent Essay Assessor™(IEA)机器阅卷规则。

      Thomas 老师的第一次试听课是免费的，
      所以可以先让老师望闻问切一番，
      在专业的建议下才能不走弯路 
      事半功倍，然后再决定是否报名`;
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-6"> <pre className="wechatQRcode changeFont">{name}</pre></div>
        <div className="col-md-4"><img src={require('./wechat.jpg')} alt="" /></div>
      </div>
      <div className="personalCard"><img src={require('./businessCard.png')} alt="" /></div>

    </div>
  );
};

export default Aboutme;