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