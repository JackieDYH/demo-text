module.exports = {
  title: '学海无涯', // 博客首页标题和导航左侧标签
  // base: "/", // 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。(默认是/, 不写即可)
  description: 'web html js javascript dyh', // meta描述
  head: [ // 指定浏览器标签栏上小图标
    ['link', {
      rel: 'icon',
      href: '/logo.png' // 图片在public目录下
    }]
  ],
  extend: '@vuepress/theme-default', // 你想创建一个继承自 VuePress 默认主题的派生主题，你只需要在你的主题配置中配置 extend 选项
  themeConfig: {
    logo: '/logo_ci.png', // 导航上和首页的logo
    lastUpdated: '上次更新时间', // 最后一次更新时间(默认获取git提交时间)
    // 顶部导航栏
    nav: [
      {
        text: 'Web', // 导航名字 
        items: [{ // 下拉列表选项
            text: 'javascript',
            link: '/pages/webFront/javascript/this指向.md' // 点击导航javascript默认跳转到的详情页面的路径
          },
          { 
            text: 'css',
            link: '/pages/webFront/css/各种FC.md'
          },
          { 
            text: 'Vue',
            link: '/pages/webFront/Vue/1数据绑定_Observe.md'
          },
          { 
            text: 'Vue',
            link: '/pages/webFront/浏览器/兼容.md'
          },
          { 
            text: 'Vue',
            link: '/pages/webFront/面试题/CSS3新特性.md'
          }
        ]
      },
      {
        text: 'server',         
        ariaLabel: '服务器', 
        items: [
          { 
            text: '概念',
            link: '/pages/server/概念/socket.md'
          }
        ]
      },
      {
        text: '算法',       
        ariaLabel: '算法', 
        link: "/pages/algorithm/冒泡排序.md" 
      },
      {
        text: '计算机基础',       
        ariaLabel: '计算机基础', 
        link: "/pages/computer/语言类型.md" 
      },
      {
        text: '软件使用',     
        ariaLabel: '软件使用',
        link: "/pages/software/VSCode相关.md"
      },
      {
        text: '其他',   
        ariaLabel: '其他', 
        link: "/pages/other/index.md" 
      },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    // 注意: 路径跟nav的link路径要匹配
    sidebar: {
      '/pages/webFront/javascript/': [ // javascript下属的分类
        {
          title: '运行时',
          collapsable: true,
          sidebarDepth: 1, 
          children: [ // 每个都是一个侧边朗导航(元素1是上面路径拼接后的文件名, 元素2是左侧导航的名字)
            ['this指向.md', 'this指向'],
            ['深浅拷贝.md', '深浅拷贝'],
            ['闭包.md', '闭包'],
            ['回调函数.md', '回调函数'],
            ['继承.md', '继承'],
            ['0.1+0.2问题.md', '0.1+0.2问题'],
            ['typeof.md', 'typeof'],
            ['instanceof.md', 'instanceof'],
          ]
        },
        {
          title: '对象和属性',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['Promise.md', 'Promise'],
            ['Attribute和Property.md', 'attribute和property'],
          ]
        },
        {
          title: '概念',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['数据绑定.md', '数据绑定'],
            ['事件循环.md', '事件循环'],
          ]
        },
        {
          title: '实用',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['前端传参.md', '前端传参'],
            // ['文件上传.md', '文件上传'],
            // ['文件下载.md', '文件下载'],
            ['防抖函数.md', '防抖函数'],
            ['节流函数.md', '节流函数'],
          ]
        },
      ],
      '/pages/webFront/css/': [{
        title: '布局', 
        collapsable: true, 
        sidebarDepth: 1, 
        children: [
          ['弹性布局.md', '弹性布局'],
          ['子元素居中问题.md', '子元素居中'],
          ['双飞翼布局.md', '双飞翼布局'],
          ['圣杯布局.md', '圣杯布局'],
        ]
      },
      {
          title: '概念', 
          collapsable: true, 
          sidebarDepth: 1, 
          children: [
            ['line-height.md', 'line-height'],
            ['vertical-align.md', 'vertical-align'],
            ['各种FC.md', '各种FC'],
            ['CSS绘制三角形.md', 'CSS绘制三角形'],
            ['div添加箭头.md', 'div添加箭头'],
          ]
        }
      ],
      '/pages/webFront/Vue/': [
        {
          title: '仿源码',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['1数据绑定_Observe.md', '1数据绑定_Observe'],
            ['2数据绑定_订阅者&观察者定义.md', '2数据绑定_订阅者&观察者'],
            ['3数据绑定_Vue类实现.md', '3数据绑定_Vue类实现'],
            ['4数据绑定_data更改.md', '4数据绑定_Vue访问data更改'],
            ['5DOM编译_Compile_双大括号模板讲解.md', '5DOM编译_Compile声明式渲染'],
            ['6DOM编译_v-model讲解.md', '6DOM编译_v-model讲解'],
            ['7DOM编译_v-on事件绑定讲解.md', '7DOM编译_v-on事件绑定讲解'],
          ]
        },
        {
          title: '定义组件',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['父子组件双向绑定.md', '父子组件双向绑定'],
          ]
        },
        {
          title: '项目中使用',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['vuecli使用svg.md', 'vuecli使用svg'],
            ['vuecli集成环信.md', 'vuecli集成环信'],
          ]
        },
      ],
      '/pages/webFront/浏览器/': [
        {
          title: '浏览器',
          collapsable: true,
          children: [
            ['兼容.md', '兼容']
          ]
        },
      ],
      '/pages/webFront/面试题/': [
        {
          title: '面试题',
          collapsable: true,
          children: [
            ['CSS3新特性.md', 'css3新特性'],
            ['Vue优缺点.md', 'Vue优缺点']
          ]
        }
      ],
      '/pages/server/概念/': [
        {
          title: '概念',
          collapsable: true,
          children: [
            ['socket.md', 'socket']
          ]
        },
      ],
      '/pages/algorithm/': [
        {
          title: '排序算法',
          collapsable: true,
          children: [
           ["冒泡排序.md", "冒泡排序"],
           ["选择排序.md", "选择排序"],
           ["合并对象_排序.md", "合并对象_排序"],
          ]
        },
        {
          title: '杨辉三角',
          path: "/pages/algorithm/杨辉三角.md"
        }
      ],
      '/pages/computer/':[
        {
          title: '计算机基础',
          collapsable: true,
          children: [
            ['语言类型.md', '语言类型']
          ]
        },
      ],
      '/pages/software/': [
        {
          title: '软件相关',
          collapsable: true,
          children: [
            ['VSCode相关.md', 'VSCode相关'],
            ['vuepress使用.md', 'vuepress集成'],
            ['vuepress集成Valine.md', 'vuepress集成Valine']
          ]
        },
      ],
      '/pages/other/': [
        {
          title: '其他',
          collapsable: true,
          children: [
            
          ]
        },
      ],
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    },
  },
  markdown: {
    lineNumbers: true, // 是否在每个代码块的左侧显示行号
  }
}