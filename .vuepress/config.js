module.exports = {
  title: 'ѧ������', // ������ҳ����͵�������ǩ
  // base: "/", // ������Ϊǰ׺�Զ��ز��뵽������ / ��ʼ������ѡ��������У�������ֻ��Ҫָ��һ�Ρ�(Ĭ����/, ��д����)
  description: 'web html js javascript dyh', // meta����
  head: [ // ָ���������ǩ����Сͼ��
    ['link', {
      rel: 'icon',
      href: '/logo.png' // ͼƬ��publicĿ¼��
    }]
  ],
  extend: '@vuepress/theme-default', // ���봴��һ���̳��� VuePress Ĭ��������������⣬��ֻ��Ҫ������������������� extend ѡ��
  themeConfig: {
    logo: '/logo_ci.png', // �����Ϻ���ҳ��logo
    lastUpdated: '�ϴθ���ʱ��', // ���һ�θ���ʱ��(Ĭ�ϻ�ȡgit�ύʱ��)
    // ����������
    nav: [
      {
        text: 'Web', // �������� 
        items: [{ // �����б�ѡ��
            text: 'javascript',
            link: '/pages/webFront/javascript/thisָ��.md' // �������javascriptĬ����ת��������ҳ���·��
          },
          { 
            text: 'css',
            link: '/pages/webFront/css/����FC.md'
          },
          { 
            text: 'Vue',
            link: '/pages/webFront/Vue/1���ݰ�_Observe.md'
          },
          { 
            text: 'Vue',
            link: '/pages/webFront/�����/����.md'
          },
          { 
            text: 'Vue',
            link: '/pages/webFront/������/CSS3������.md'
          }
        ]
      },
      {
        text: 'server',         
        ariaLabel: '������', 
        items: [
          { 
            text: '����',
            link: '/pages/server/����/socket.md'
          }
        ]
      },
      {
        text: '�㷨',       
        ariaLabel: '�㷨', 
        link: "/pages/algorithm/ð������.md" 
      },
      {
        text: '���������',       
        ariaLabel: '���������', 
        link: "/pages/computer/��������.md" 
      },
      {
        text: '���ʹ��',     
        ariaLabel: '���ʹ��',
        link: "/pages/software/VSCode���.md"
      },
      {
        text: '����',   
        ariaLabel: '����', 
        link: "/pages/other/index.md" 
      },
    ],

    //��ߵ�����������ݵ�ǰ���ļ�·���Ƿ�ƥ���������ݣ��Զ���ʾ/����
    // ע��: ·����nav��link·��Ҫƥ��
    sidebar: {
      '/pages/webFront/javascript/': [ // javascript�����ķ���
        {
          title: '����ʱ',
          collapsable: true,
          sidebarDepth: 1, 
          children: [ // ÿ������һ������ʵ���(Ԫ��1������·��ƴ�Ӻ���ļ���, Ԫ��2����ർ��������)
            ['thisָ��.md', 'thisָ��'],
            ['��ǳ����.md', '��ǳ����'],
            ['�հ�.md', '�հ�'],
            ['�ص�����.md', '�ص�����'],
            ['�̳�.md', '�̳�'],
            ['0.1+0.2����.md', '0.1+0.2����'],
            ['typeof.md', 'typeof'],
            ['instanceof.md', 'instanceof'],
          ]
        },
        {
          title: '���������',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['Promise.md', 'Promise'],
            ['Attribute��Property.md', 'attribute��property'],
          ]
        },
        {
          title: '����',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['���ݰ�.md', '���ݰ�'],
            ['�¼�ѭ��.md', '�¼�ѭ��'],
          ]
        },
        {
          title: 'ʵ��',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['ǰ�˴���.md', 'ǰ�˴���'],
            // ['�ļ��ϴ�.md', '�ļ��ϴ�'],
            // ['�ļ�����.md', '�ļ�����'],
            ['��������.md', '��������'],
            ['��������.md', '��������'],
          ]
        },
      ],
      '/pages/webFront/css/': [{
        title: '����', 
        collapsable: true, 
        sidebarDepth: 1, 
        children: [
          ['���Բ���.md', '���Բ���'],
          ['��Ԫ�ؾ�������.md', '��Ԫ�ؾ���'],
          ['˫������.md', '˫������'],
          ['ʥ������.md', 'ʥ������'],
        ]
      },
      {
          title: '����', 
          collapsable: true, 
          sidebarDepth: 1, 
          children: [
            ['line-height.md', 'line-height'],
            ['vertical-align.md', 'vertical-align'],
            ['����FC.md', '����FC'],
            ['CSS����������.md', 'CSS����������'],
            ['div��Ӽ�ͷ.md', 'div��Ӽ�ͷ'],
          ]
        }
      ],
      '/pages/webFront/Vue/': [
        {
          title: '��Դ��',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['1���ݰ�_Observe.md', '1���ݰ�_Observe'],
            ['2���ݰ�_������&�۲��߶���.md', '2���ݰ�_������&�۲���'],
            ['3���ݰ�_Vue��ʵ��.md', '3���ݰ�_Vue��ʵ��'],
            ['4���ݰ�_data����.md', '4���ݰ�_Vue����data����'],
            ['5DOM����_Compile_˫������ģ�彲��.md', '5DOM����_Compile����ʽ��Ⱦ'],
            ['6DOM����_v-model����.md', '6DOM����_v-model����'],
            ['7DOM����_v-on�¼��󶨽���.md', '7DOM����_v-on�¼��󶨽���'],
          ]
        },
        {
          title: '�������',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['�������˫���.md', '�������˫���'],
          ]
        },
        {
          title: '��Ŀ��ʹ��',
          collapsable: true,
          sidebarDepth: 1, 
          children: [
            ['vuecliʹ��svg.md', 'vuecliʹ��svg'],
            ['vuecli���ɻ���.md', 'vuecli���ɻ���'],
          ]
        },
      ],
      '/pages/webFront/�����/': [
        {
          title: '�����',
          collapsable: true,
          children: [
            ['����.md', '����']
          ]
        },
      ],
      '/pages/webFront/������/': [
        {
          title: '������',
          collapsable: true,
          children: [
            ['CSS3������.md', 'css3������'],
            ['Vue��ȱ��.md', 'Vue��ȱ��']
          ]
        }
      ],
      '/pages/server/����/': [
        {
          title: '����',
          collapsable: true,
          children: [
            ['socket.md', 'socket']
          ]
        },
      ],
      '/pages/algorithm/': [
        {
          title: '�����㷨',
          collapsable: true,
          children: [
           ["ð������.md", "ð������"],
           ["ѡ������.md", "ѡ������"],
           ["�ϲ�����_����.md", "�ϲ�����_����"],
          ]
        },
        {
          title: '�������',
          path: "/pages/algorithm/�������.md"
        }
      ],
      '/pages/computer/':[
        {
          title: '���������',
          collapsable: true,
          children: [
            ['��������.md', '��������']
          ]
        },
      ],
      '/pages/software/': [
        {
          title: '������',
          collapsable: true,
          children: [
            ['VSCode���.md', 'VSCode���'],
            ['vuepressʹ��.md', 'vuepress����'],
            ['vuepress����Valine.md', 'vuepress����Valine']
          ]
        },
      ],
      '/pages/other/': [
        {
          title: '����',
          collapsable: true,
          children: [
            
          ]
        },
      ],
      //...����Ӷ����ͬ�Ĳ��������ͬҳ������·����ʾ��ͬ�Ĳ����
    },
  },
  markdown: {
    lineNumbers: true, // �Ƿ���ÿ�������������ʾ�к�
  }
}