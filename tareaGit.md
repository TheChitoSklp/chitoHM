# **INTRO GIT**
## git ignore
when you start a new proyect, default files are created, to tell git to ignore them we can use .gitignore next to file or ignore ALL files in any directory

## **Commits**   
### Moving around commits    
- **git init**: is used to determine where you going to work   
- **git add**: to add changes made to files at master branch, you can use git add, or git commit -am
- **git rm**: use to delete a file 
- **git commit**: to save changes in local
- **git config**: to config your username and mail
- **git status**: show a list of changes added and files  that are about to be prepared to commit
- **git checkout**: to move arround commits use git checkout (name of branch)
### **Undo a commits**
- git reset --soft delete all history and register of git but keep the changes of staging, so we can apply the latest updates to a new commit.
- git reset --hard delete ALL you can't come back if use this comand. 
- git reset HEAD This is the command to get files out of the staging area. Not to delete them or anything, just so that the latest changes to these files don't get pushed to the last commit, unless we change our mind and staging them again with git add.

## squash commits
- basically merge commits to make them look better, to do this you have to write squeash on commits and then do a **git rebase**

- **staging** interactive/patch
staigin is a space that is generated in local ram at the time of doing git add , waiting
from git commit

## **Branches**
- **git remote**
to work with a remote repository use these command: [git remote add origin](https://github.com/TheChitoSklp/chitoHM)

- **git push**: finished everything locally, you can send to the server where you have the main branch with this command "git push origin <master>"

- **git clone**: is used when you want to download the whole project in local mode
- **git fetch**: We use it to fetch updates from the remote server and store them in our local repository (if there are any), but without modifying anything in the directory
- **git merge**: It matches the latest changes from the remote server and our working directory.

- **pulling** comit from another branch
basically it is the fetch and merge command

## name conventions 
1. Use category words such as:
WIP - Work in progress and needs your attention.
Bug - A bug or an error that needs fixing promptly.
With the help of the category word, it is effortless to identify the purpose of the Git branch and attend to it.

2. Using unique issue tracker IDs in branch names
Prefixes such as; hotfix, feature, chore, or any other variant to categorize a task, increase the work requiring more decision-making while naming.
With unique issue tracker IDs, you are essentially marking the task's category in the tracker and adding many useful contexts.
Developers mostly work on several issues at a given time, and an issue tracker helps to connect the working branch with relevant tasks. It makes tracking team progress very easy.
Using an external issue tracking ID in the branch name can facilitate tracking the progress from external systems.

3. Using hyphen or slash separators
The preference between a hyphen, slash, or underscore separator is based on you and your team's choice. The idea is to keep it tightly consistent.
Without the separators, the names become more challenging to read, creating confusion for the team.
Using separators such as underscores, you can improve the readability and make the name more comfortable to manage.
Separators are especially more significant if you are dealing with a vast number of branches.

- **delete a branch**
-d --delete, is used to Delete a branch. The branch must be fully merged in its upstream branch, or in HEAD if no upstream was set with --track or --set-upstream-to. -D is a shortcut for --delete --force
You can delete a remote branch using the --delete option to git push. If you want to delete your serverfix branch from the server
 git push origin --delete serverfix

- **diference between local and remote branches** 
 basically a local branch is where you work and changes can be made, and you cannot move the remote branch and it is stored as a new version
 Rebase/merge
 - **solving conflicts**
 when you work on another version you may come across a bug in the main branch, when solving that bug and merging the main, a git merge is done to merge them.

 - **stash**
 git stash: Stash the changes in a dirty working directory away.
 Use stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit.

 # Gitflow
 
Gitflow is an alternative model of branch in git, in this model you use merge branches and more main branches.
to use gitflow need install package of git-flow or ejecute brew install git-flow
the flow that git has is:  
1. create a develop branch from main 
2. create a release branch from develop
3. create a deature branch from develop
4. when finish a feature branch, merge with develop
5. when release branch is ready, merge with develop and main branches
6. if detect any problem in main branch, create a hotfix branch from main
7. when finish hotfix branch, merge with develop and main branches
 
# *MARKDOWN*
__Markdown is a lightweight markup language that many professionals use to create and edit technical documents. With Markdown you write the text in a plain text editor inserting special characters to create headings, bold, bullets, etc. Plain text is just the normal alphabet, with a few familiar symbols like asterisks ( * ) or single quotes ( ``` ).__

_Formatting text using Markdown has a smooth learning curve. It is worth mentioning that Markdown does not do big modifications like changing the font size, color or type. The only thing you can work on is how the text is displayed, for example making text bold, creating headings or organizing lists of items. Here are some basic Markdown introduction formats:_

1. There are six types of headings in decreasing sizes and the hash symbol (**#**) is used to define the size of the heading. If the header is H1, one hash is added, if the header is H2, two hashes are added, and so on until you reach H6.

2. Three basic elements in this text format are: italics, bold and strikethrough. To italicize a word you must put an asterisk (*) at the beginning and end of each word. If you want bold, it will be two asterisks (**) at the beginning and end of the word or phrase. And if it is strikethrough format, then it will be two tildes (~~) at the beginning and end of each word or phrase.
*italic*

**Bold font**

~~Strikethrough~~

3. lists, have two tipes numerics and vignettes for example:
1. a
2. b
3. c
4. d                        

- b
- f
- a
- c


4. Links this type of link is called an online link. To create an inline link you must enclose the link text in square brackets ( [ ] ) and then enclose the link in parentheses ( ( ) ). [trolleito](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


_CHANGE TO PRACTICE SSH_
