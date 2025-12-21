pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kavinayaravi/devops-ci-cd-pipeline.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run App') {
            steps {
                bat 'node app.js'
            }
        }
    }
}
