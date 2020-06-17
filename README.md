# �汾�������-git  --- JackieHao

svn��git

git��ҪѧϰһЩ����

## 1.���ذ�װ

������https://git-scm.com/

���ص�ַ��https://git-scm.com/download/win

��װ��

���û��ʲô����Ҫ��ֱ����һ����һ���Ϳ������

## 2.���û�����Ϣ

(1)�鿴�����б�

```
git config --list
```

(2)�����û����������ַ

```
git config --global user.name "����û���"
git config --global user.email "��������ַ"
```

## 3.��������

(1)��ʼ�����زֿ�

���뵽ָ����Ŀ¼�󣬰�ĳһ���ļ��г�ʼ��Ϊ�ֿ�

```
git init
```

mkdir Ŀ¼�� 		����һ��Ŀ¼

touch �ļ���		����һ���ļ�

(2)�鿴�ֿ�״̬

```
git status
```

(3)�ļ���ӵ��ݴ���

```
git add <�ļ���>
git add *.html ��ָ�����ļ�����һ����ȫ���ύ
git add * ��������ļ����ݴ���
git add . ��������ļ����ݴ���
```

(4)�ύ�ļ������汾

```
git commit -m "��ע��Ϣ"
```

(5)�鿴��־

```
git log		//�鿴��־
git reflog //�鿴�汾��
```

(6)�汾�л�

�л�����һ���汾

```
git reset --hard HEAD^ 
```

�л����������汾

```
git reset --hard HEAD^^
```

�л�����100���汾

```
git reset --hard HEAD~100
```

�л���ָ���İ汾��

```
git reset --hard �汾��
```

(7)��֧

master		����֧		���Զ��ⷢ���ͷ��ʵĳ���

develop	 ������֧	 ������֧�Ļ����ϼ��������µĹ���

debug	  ����bug

release	Ԥ������֧

fixed		�޸���֧

...

�ٲ鿴��֧

```
git branch
```

�ڴ�����֧

```
git branch ��֧����
```

���л���֧

```
git checkout ��֧����
```

�ܺϲ���֧

```
git merge Ҫ�ϲ��ķ�֧����
```

��ɾ����֧

```
git branch -D Ҫɾ���ķ�֧����
```

## 4.���github����ֿ���Դ

(1)ע���˺�

(2)�����ֿ�

(3)�ڱ��زֿ��У����Զ�ֿ̲�

```
git remote add origin https://github.com/�û���/Զ�ֿ̲���.git
```

(4)������Դ��Զ�ֿ̲�

```
git push -u origin master
```

(5)��ȡԶ�ֿ̲���Դ

�ٿ�¡Զ�ֿ̲⵽����

```
git clone https://github.com/�û���/Զ�ֿ̲���.git
```

һ��ִֻ��һ��

�ڻ�ȡԶ�ֿ̲���Դ

```
git pull
```

Զ�ֿ̲���Դ�ͱ��صĲ�һ�£�Զ�ֿ̲���£�

#Git����SSH Key
```
1.��鱾���Ƿ���ssh key����,�л���.sshĿ¼
$ cd ~/.ssh ��cd .ssh
2.����git�û��������䣬���ö���û�ʱ��� --add ����
$ git config --global --add user.name "username"
$ git config --global --add user.email "email"
$ git config --global --unset user.name "username"������������������������#�Ƴ��û�
$ git config --global --unset user.email "email"���������������������������� #�Ƴ�����
3.�鿴�û���������
$ git config --list
(���û�а�װTortoiseGit������)��ΪTortoiseGit��Git�ĳ�ͻ��Ҫ��TortoiseGit���ø������£�
1.���Ҽ�ѡ��?TortoiseGit? ->? Settings? ->? Network??
2.��SSH clientָ��? ~Git\usr\bin\ssh.exe??(Git��װ·���µ�\usr\bin\ssh.exe)
4.���ɳɶԵ�˽Կ��Կ
$?ssh-keygen -t rsa -C?"test@qq.com"
ע������id_rsa˽Կ��Կʱ��Ҫ����ͬ�ļ������������ɲ��衣
5.���ssh key����Ӧ��GitHub��GitLab����
��¼GitHubϵͳ��������Ͻ��˺�ͷ��ġ�������Settings��SSH kyes��Add SSH key��
����id_rsa.pub�Ĺ�Կ���ݵ�Key��д���ڡ�
6.���Թ�Կ�����Ƿ�ɹ�
$ssh -T git@github.com
FQA
1.Git��¡������Ҫ�������룿Git�ύ������Ҫ�����˺š�����ġ�
tips: ���� ����1.Access denied.?
? 2.Authentication failed.
? 3.Permission denied (publickey).
˵���������Դ��TortoiseGit���õ����Լ���ssh.exe������Կ����git����Կ���ɷ�ʽ��һ�£�������Կ��Ч��
���������1.���������û��������䣬����������Կ������Կ����Զ�ֿ̲��С�
2.���TortoiseGit�Ҽ���TortoiseGit -> Settings -> Network���ã�
��SSH clientָ�� ~Git\usr\bin\ssh.exe
2.Git����?http?��ʽ(������ssh)clone/pull/push����ʱ����Ҫ�����û�������,���ÿ�������˺�����
�����ִ�д洢��������
$git config --global credential.helper store
���������Ŀ��������һ���ı�����¼�˺ź����롣ʹ���������������ú�֮���ٲ���һ��git pull��Ȼ��������ʾ�����˺ź����룬��һ��֮��Ͳ���Ҫ�ٴ������˺ź������ˡ�
?
��������
$git clone url ? ? ����#��¡Զ�ֿ̲�
$git --version ����������������������������?? ����#�鿴git�İ汾��Ϣ
$git branch ������������������������������? ?����#�鿴�������з�֧
$git branch -a ����������������������������? ����#�鿴���еķ�֧
$git branch -r ����������������������������?? ����#�鿴Զ�����з�֧
$git branch dev #������֧
$git branch -D master develop ������������������?#ɾ�����ؿ�develop
$git checkout dev ? ? #�л�������dev��֧
$git checkout -b dev #������֧���л���֧
$git checkout --track origin/dev ������������������?#�л���Զ��dev��֧
$git commit ������������������������������������#�ύ?
$git commit -am "test" ��������������������������? #�ύ���Ҽ�ע��?
$git commit -m [message] ? ?#�ύ�ݴ������ֿ���
$git commit -v ?? ?#�ύʱ��ʾ����diff��Ϣ
$git status ������������������������������������? ?#�鿴��ǰ״̬?
$git remote show ��������������������������������#�鿴Զ�̿�
$git remote add origin url  #���Զ�̿�
$git remote show origin ������������������������?? ?#��ʾԶ�̿�origin�����Դ
$git pull ����������������������������������������#�������������ͬ��
$git push origin master ��������������������������?#���ļ����Ƶ���������?
$git push origin master:develop ??#�����ؿ�develop��������ϵĿ���й���
$git push origin master:my-dev ������������������? ?#�����ؿ���������ϵĿ���й���
$git merge origin/dev ����������������������������#����֧dev�뵱ǰ��֧���кϲ�
$git add read.txt  #���ļ�����git
$git rm read.txt ? #��git��ɾ��ָ���ļ�
```
