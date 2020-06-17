# 版本控制软件-git  --- JackieHao

svn、git

git主要学习一些命令

## 1.下载安装

官网：https://git-scm.com/

下载地址：https://git-scm.com/download/win

安装：

如果没有什么特殊要求，直接下一步下一步就可以完成

## 2.配置基础信息

(1)查看配置列表

```
git config --list
```

(2)设置用户名和邮箱地址

```
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱地址"
```

## 3.基础命令

(1)初始化本地仓库

进入到指定的目录后，把某一个文件夹初始化为仓库

```
git init
```

mkdir 目录名 		创建一个目录

touch 文件名		创建一个文件

(2)查看仓库状态

```
git status
```

(3)文件添加到暂存区

```
git add <文件名>
git add *.html 把指定的文件类型一次性全部提交
git add * 添加所有文件到暂存区
git add . 添加所有文件到暂存区
```

(4)提交文件创建版本

```
git commit -m "备注信息"
```

(5)查看日志

```
git log		//查看日志
git reflog //查看版本号
```

(6)版本切换

切换到上一个版本

```
git reset --hard HEAD^ 
```

切换到上两个版本

```
git reset --hard HEAD^^
```

切换到上100个版本

```
git reset --hard HEAD~100
```

切换到指定的版本号

```
git reset --hard 版本号
```

(7)分支

master		主分支		可以对外发布和访问的程序

develop	 开发分支	 在主分支的基础上继续开发新的功能

debug	  调试bug

release	预发布分支

fixed		修复分支

...

①查看分支

```
git branch
```

②创建分支

```
git branch 分支名称
```

③切换分支

```
git checkout 分支名称
```

④合并分支

```
git merge 要合并的分支名称
```

⑤删除分支

```
git branch -D 要删除的分支名称
```

## 4.结合github共享仓库资源

(1)注册账号

(2)创建仓库

(3)在本地仓库中，添加远程仓库

```
git remote add origin https://github.com/用户名/远程仓库名.git
```

(4)推送资源到远程仓库

```
git push -u origin master
```

(5)获取远程仓库资源

①克隆远程仓库到本地

```
git clone https://github.com/用户名/远程仓库名.git
```

一般只执行一次

②获取远程仓库资源

```
git pull
```

远程仓库资源和本地的不一致（远程仓库的新）

#Git配置SSH Key
```
1.检查本机是否有ssh key设置,切换到.ssh目录
$ cd ~/.ssh 或cd .ssh
2.配置git用户名和邮箱，配置多个用户时添加 --add 参数
$ git config --global --add user.name "username"
$ git config --global --add user.email "email"
$ git config --global --unset user.name "username"　　　　　　　　　　　　#移除用户
$ git config --global --unset user.email "email"　　　　　　　　　　　　　　 #移除邮箱
3.查看用户名和邮箱
$ git config --list
(如果没有安装TortoiseGit则跳过)因为TortoiseGit和Git的冲突需要把TortoiseGit设置改正如下：
1.在右键选择?TortoiseGit? ->? Settings? ->? Network??
2.将SSH client指向? ~Git\usr\bin\ssh.exe??(Git安装路径下的\usr\bin\ssh.exe)
4.生成成对的私钥公钥
$?ssh-keygen -t rsa -C?"test@qq.com"
注：生成id_rsa私钥公钥时需要命不同文件名，密码可设可不设。
5.添加ssh key到对应的GitHub或GitLab上面
登录GitHub系统；点击右上角账号头像的“▼”→Settings→SSH kyes→Add SSH key。
复制id_rsa.pub的公钥内容到Key填写框内。
6.测试公钥配置是否成功
$ssh -T git@github.com
FQA
1.Git克隆代码需要输入密码？Git提交代码需要输入账号、密码的。
tips: 　　 　　1.Access denied.?
? 2.Authentication failed.
? 3.Permission denied (publickey).
说明：问题根源是TortoiseGit采用的是自己的ssh.exe生成密钥，与git的密钥生成方式不一致，导致密钥无效。
解决：　　1.重新配置用户名和邮箱，重新生成密钥，把密钥放入远程仓库中。
2.检查TortoiseGit右键的TortoiseGit -> Settings -> Network设置，
将SSH client指向 ~Git\usr\bin\ssh.exe
2.Git采用?http?方式(而不是ssh)clone/pull/push代码时，需要输入用户名密码,解决每次输入账号密码
解决：执行存储密码命令
$git config --global credential.helper store
命令会在项目本地生成一个文本，记录账号和密码。使用上述的命令配置好之后，再操作一次git pull，然后它会提示输入账号和密码，这一次之后就不需要再次输入账号和密码了。
?
常用命令
$git clone url ? ? 　　#克隆远程仓库
$git --version 　　　　　　　　　　　　　　?? 　　#查看git的版本信息
$git branch 　　　　　　　　　　　　　　　? ?　　#查看本地所有分支
$git branch -a 　　　　　　　　　　　　　　? 　　#查看所有的分支
$git branch -r 　　　　　　　　　　　　　　?? 　　#查看远程所有分支
$git branch dev #创建分支
$git branch -D master develop 　　　　　　　　　?#删除本地库develop
$git checkout dev ? ? #切换到本地dev分支
$git checkout -b dev #创建分支并切换分支
$git checkout --track origin/dev 　　　　　　　　　?#切换到远程dev分支
$git commit 　　　　　　　　　　　　　　　　　　#提交?
$git commit -am "test" 　　　　　　　　　　　　　? #提交并且加注释?
$git commit -m [message] ? ?#提交暂存区到仓库区
$git commit -v ?? ?#提交时显示所有diff信息
$git status 　　　　　　　　　　　　　　　　　　? ?#查看当前状态?
$git remote show 　　　　　　　　　　　　　　　　#查看远程库
$git remote add origin url  #添加远程库
$git remote show origin 　　　　　　　　　　　　?? ?#显示远程库origin里的资源
$git pull 　　　　　　　　　　　　　　　　　　　　#本地与服务器端同步
$git push origin master 　　　　　　　　　　　　　?#将文件给推到服务器上?
$git push origin master:develop ??#将本地库develop与服务器上的库进行关联
$git push origin master:my-dev 　　　　　　　　　? ?#将本地库与服务器上的库进行关联
$git merge origin/dev 　　　　　　　　　　　　　　#将分支dev与当前分支进行合并
$git add read.txt  #将文件加入git
$git rm read.txt ? #从git中删除指定文件
```
