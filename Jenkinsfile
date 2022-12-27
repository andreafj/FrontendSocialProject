pipeline {

    agent any

    tools {

    nodejs "nodeAngular"

    }

    parameters {

        string (name:'container_name', defaultValue:'Pagina web', description:'Nombre del contenedor')

        string (name:'image_name', defaultValue:'Pagina img', description:'Nombre de la image contenedor')

        string (name:'container_port', defaultValue: '80', description:'Puerto que se  usa')

    }

    stages

    {
        stage('install')
        {
            steps
            {

                git 'git branch: 'main', url: 'https://github.com/andreafj/FrontendSocialProject.git'

                //sh 'npm install'
                bat 'npm intall'

                dir('/src')

                {

                // some block

                }

            }

        }

    }

}