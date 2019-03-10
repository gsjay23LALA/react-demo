import React, {
  Component
} from 'react';
import Swiper from '../../component/swpier/index'
import Cell from '../../component/cell/index'


// import logo from './logo.svg';
// import './App.css';
const slide =[{
  img: "http://img.cjyun.org/a/10008/201902/f0dab76b49b47ed8606fe3832c6f02cf.jpeg",
   href: "http://news.hbtv.com.cn/p/1674721.html",
   description: "爱心暖寒冬 志愿服务让襄阳人的春节更温暖"
}, {
  img: "http://img.cjyun.org/a/10008/201902/0e621db8c8e16f2107468bea90e04419.jpeg",
   href: "http://news.hbtv.com.cn/p/1674720.html",
   description: "武汉青山江滩园林景观工程获鲁班奖"
}, {
  img: "http://img.cjyun.org/a/10008/201902/865e1f05aa7ac5ef4f0a1f579b3ae57c.jpeg",
   href: "http://news.hbtv.com.cn/p/1674718.html",
   description: "2018年度宜昌城乡居民收入增速跑赢GDP"
}]
const list = [{
  id: 1674715,
  title: "情人节武汉2579对新人喜结连理 这个区人最多",
  editor: "张智美子",
  published: "2019-02-15 10:45:17",
  description: "今日是西方情人节。记者从武汉市民政局获悉，今日武汉市各区婚姻登记中心共办理结婚登记2579对，其中黄陂区最多，416对。",
  url: "http://news.hbtv.com.cn/p/1674717.html",
  cover: "http://img.cjyun.org/a/10008/201902/93774cd6f8d29076dfef70e19b06be86.png"
}, {
  id: 1674716,
  title: "襄阳:熊孩子贪玩被卡 消防员“洞中取头”",
  editor: "马张驰",
  published: "2019-02-15 10:41:50",
  description: "2月15日凌晨，湖北襄阳市东风路一汗蒸会所三楼休息包间内，一熊孩子贪玩，将头钻进木质的躺卧沙发洞里被卡住出不来，店内工作人员和孩子父母在尝试多种方法自救无果后报警求助消防",
  url: "http://news.hbtv.com.cn/p/1674716.html",
  cover: "http://img.cjyun.org/a/10008/201902/eb9a7e0b4a7f272042f7894ad3359610.png"
}, {
  id: 1674715,
  title: "大吊车吊小车不慎侧翻 消防员夜救司机",
  editor: "马张驰",
  published: "2019-02-15 10:38:33",
  description: "一台大吊车在准备救援一辆陷于淤泥中的小轿车时，由于操作不当发生侧翻，吊车司机反而被困驾驶室",
  url: "http://news.hbtv.com.cn/p/1674715.html",
  cover: "http://img.cjyun.org/a/10008/201902/e704ee6087674334a02cdb3d8cd8b867.png"
}, {
  id: 1674714,
  title: "你的快递可能已被烧 载17吨快递货车高速上自燃",
  published: "2019-02-15 10:33:29",
  description: "你的快递可能已被烧 载17吨快递货车高速上自燃",
  url: "http://news.hbtv.com.cn/p/1674714.html",
  cover: "http://img.cjyun.org/a/10008/201902/7ac7c270d0b22c662f5868e55c715b0f.jpeg"
}, {
  id: 1674713,
  title: "孝感：充分发挥税收职能  全力支持民营经济发展",
  editor: "马张驰",
  published: "2019-02-15 10:27:00",
  description: "对民营企业因经营困难一时无力缴清税款、滞纳金或无法提供担保等原因，不符合行政复议受理条件的，复议机关在依法处理的同时，要甄别情况，发现主管税务机关税收执法行为确有错误的，应及时督促其依法纠正",
  url: "http://news.hbtv.com.cn/p/1674713.html",
  cover: "http://img.cjyun.org/a/10008/201902/f582b69d13708fa99c6072b3adebd0c6.png"
}, {
  id: 1674712,
  title: "新西兰奥克兰举办盛大元宵灯节",
  editor: "罗晓贤",
  published: "2019-02-15 10:26:24",
  description: "记者卢怀谦）新西兰最大规模文化节庆盛事之一的元宵灯节14日在奥克兰市开幕",
  url: "http://news.hbtv.com.cn/p/1674712.html",
  cover: "http://img.cjyun.org/a/10008/201902/5380b56a8158fa75d78fdc22e9c44314.jpeg"
}, {
  id: 1674711,
  title: "悠扬古乐声　欢喜中国年——中国编钟和京剧在美演出侧记",
  editor: "罗晓贤",
  published: "2019-02-15 10:22:14",
  description: "悠扬古乐声　欢喜中国年——中国编钟和京剧在美演出侧记新华社记者王强　　2月10日，在美国芝加哥，中国国家京剧院的演员表演京剧《闹天宫》片段",
  url: "http://news.hbtv.com.cn/p/1674711.html",
  cover: "http://img.cjyun.org/a/10008/201902/ca20a511fe69bbf1423a0669ded10a1a.jpg"
}]
class App extends Component {

  render() {
    return (
       <div className = "App" >
          <Swiper images={slide}/ >
          <Cell item = {list}/>
       </div>
    );
  }
}

export default App;