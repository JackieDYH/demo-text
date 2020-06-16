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