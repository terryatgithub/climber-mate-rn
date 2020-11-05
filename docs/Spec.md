# Architecture Design
> 需求： You are asked to come up with the mobile architecture for a Super App(I.e. an app like Alipay/Wechat that provides many different services from 3rd parties, and updates regularly), how would you architect it?
What are the technologies/framework you will use? Why do you select those technologies? How do you provide the updated version quickly to the customer?

>> 需求分析：
3. a Super App 意味着优秀的性能和用户体验，包括加载速度，操作响应等 good performance
1. can provide many different services from 3rd parties; 良好的扩展性
2. can updates regularly; 及时的热更新服务
4. 框架的流行程度：稳定性/生态丰富性
5. 开发成本：跨平台，以及对前端开发团队的技术栈要求

对比 
类型 | 框架 | 跨平台 |性能 |用户体验 |  扩展性 | 热更新及时性 | 开发成本 | 优点 | 缺点
:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:
原生开发 | Android/iOS | No | 优秀 | 加载快，操作流畅 | 优秀 | 需审核 | 高 | 1. 性能好，用户体验好 | 1. 开发门槛高 2. 不支持跨平台，开发效率低 3. 热更新需审核，时效性差
混合开发 |Cordova | Android/iOS | 差 | 差 | 一般 | 优秀 | 低 | 1. 开发成本低 2. 天然跨平台 3.无审核，秒级热更新 4. 可扩展，通过原生桥接的方式 | 1. 性能差，网页加载慢，交互卡顿
 |React Native | Android/iOS | 相比原生略慢 | 优秀 | 优秀 | 优秀 | 较低 | 1. 开发成本低 2. 性能和用户体验好，接近原生 3. 第三方插件丰富 | 1. 运行时需要桥接，对性能有一定影响
 | Flutter | Android/iOS/Web | 几乎媲美原生 | 优秀 | 一般 | 一般，官方不支持ios热更新 | 一般，需要学习dart语言 | 1. 性能和用户体验好，几乎媲美原生 | 1. 官方不支持ios热更新 2. 国内流行程度暂时不如RN

从框架的优缺点 
发展趋势 rn 国内大厂都在广泛用 旅游的同城 途牛 去哪儿 京东金融 手机qq 手机百度 都在用 
Flutter只有美团 腾讯大厂在做 还不是很流行 
都可以做比较

综合考虑以上条件和选择，我将会优先考虑使用React Native框架开发，
因为它有以下特点：
1. 性能接近原生，用户体验好
2. 扩展性好，第三方插件丰富
3. 支持及时的热更新，快速提供更新特性
4. RN框架由Facebook开发，已经过业界广泛验证，稳定性好，生态丰富
5. 跨平台，开发效率高，开发成本低 

在服务器端架设微软开源的code-push框架，发布每次迭代的最新版本即可。
用户手机在App启动时会向服务器查询和下载更新的jsbundle，以此完成及时的新版本推送。


> Programming: 
You are working on an app for mountain climbers. You are given the following animated Login screen to implement. The UI designer created this interactive login screen with clickable demo, spec, as well as downloadable assets.
You could build it using native iOS/Android framework, or other frameworks that helps you develop it.
React native or flutter framework to implement it is preferred, but not mandatory.
Please provide the following:
1) Design document to explain the technology choice, and your assumptions. For example, did you use any external library to help, and why?

choose React Native

assumptions: 
>> requirements analyse:
1. 网络条件较差： 因为登山者登山时所处的环境可能多为偏远户外，一般是弱网环境
2. 需要良好的性能和用户体验：方便登山者及时查看个人/天气等相关信息
3. 热更新及时性：
external library used:
* `@react-native-community/blur` 背景图片高斯模糊
# `react-native-circular-progress` 唤醒进度条


2) Source code in the GIT repository. You could use bitbucket, github or other similar service.

3) Automated Test cases, if possible.

4) If it is a mobile app, please provide a way to download and install the app for review.
Alternatively, you could capture a movie of your mobile simulator if you cannot provide a downloadable app.

5) Note:
    a. You could use the programming language that you are most familiar.
    b. Please implement the animation as much as possible.
    c. Keep it simple and make it looks good 😊

