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
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devops-app:${BUILD_NUMBER} .'
            }
        }
        stage('Run App') {
            steps {
                bat 'docker run -d -p 3000:3000 devops-app:${BUILD_NUMBER}'
            }
        }
    }
}
