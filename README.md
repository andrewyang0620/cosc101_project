# cosc101_project
**1. Repo download:**   

Open your Git Bash and choose a folder you want.  
Type the command below: 
```  
git clone https://github.com/andrewyang0620/cosc101_project.git   
``` 

Now, you have your repo downloaded locally.  

Type ```ls``` to check if you are in the folder of repo.  
If you are, then type the command below:  
```  
cd cosc101_project.git   
``` 
then you are in the repo.

if you are not, you may type ```pwd``` to see where you are at.   
You can always type ```cd ..``` to go back to the previous branch.  
 Once you type ```ls``` to find your downloaded repo then type the command below:  
```  
cd cosc101_project.git   
``` 
then you are in the repo.

Once you are in the repo, type ```ls``` to see what you have in the repo. There should be a ```README.md``` and a folder named ```web```.

Type the command below:  
```
code web 
```
then you'll have your repo opened on the VSCode (or your default editor)   
Open a terminal and make sure you go to the folder ```web```. The correct path is  
```
./cosc101_project.git/web/
```
Add the command below after ```./cosc101_project.git/web/```:  
```
npm start  
```
You may encounter a problem that React is not installed, then follow the second step below.
  
**2. Set up for React framework:**  

Type the command below:
```
npm install  
```
This command should have all your React setup.  
Once the installation is complete, then type the command below after ```./cosc101_project.git/web/```:  
```
npm start  
```
If everything goes well, you can now access our application. If you encounter any difficulties, please contact 719941703@qq.com for help.
