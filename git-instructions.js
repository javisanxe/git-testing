//LOCAL REPOSITORIES: Version control with Git en Hyper (Command line)
  //Configuración usuario git
  git config --global user.email "emailname@gmail.com"
  git config --global user.name "Name Surname"


  git init //Inicia git en la carpeta cd

  ls -a //Muestra todos los archivos en cd, incluidos los OCULTOS (.git)



  //Staging area: En esta se incluyen los files que queremos guardar posteriormente en el repository
  git status //Ver los archivos trackeados (staging area). Aparecen en rojo los que no

  git add chapter1.txt git-instructions.js //Añade files al staging area

  git commit -m "Commit inicial / Complete Chapter 1"  //Guardar version (safe point) en el local repository con un mensaje que explique los nuevos cambios

  git log //Ver los commits que se han realizado, con su información y su propio hash



  //After adding new files or changes
  //git status
  //git add newFile.txt newFile2.txt .... one by one, or:
  git add . //Add all the files inside the cd in the staging area

  git reset chapter1.txt //Unstage a file from the staging area

  git diff chapter1.txt //Diference entre la versión actual del archivo y ultima versión commiteada  en el repository

  git checkout chapter1.txt //Restore el archivo a la última versión commiteada en el repository


//Uploading repository to Github
  git remote add origin https://github.com/redpill9/Story.git
  //You get the url when you create a new repository on Github

  git push -u origin master //Push local repository to master branch


//Gitignore: Archivo donde se recogen los archivos que no queremos pasar nunca al stagin carpeta
   touch .gitignore

  //Dentro de .gitignore, escribimos linea por linea los archivos que no queremos que se tengan en cuenta
  //En https://github.com/github/gitignore hay una colecccion de templates .gitignore
  start .gitignore
  //Despues, cuando haces git add ., los archivos incluidos en .gitignore no se incluyen



//Clonar github repositories en local repository en el cd
  git clone https://github.com/.... (URL Repository)


//Branching and merging
//BRACHES son las diferentes ramas de desarrollo en paralelo. Por ejemplo, una vez estamos en la version 2, podemos crear una rama con una version 3a principal (master/main) y otra version 3b para probar cosas nuevas temporales o testing.
//Si el testing es satisfactorio en la rama de pruebas y queremos incorporarla al projecto principal, podemos hacerlo mediante un MERGE
