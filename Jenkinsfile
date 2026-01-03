pipeline {
    agent any

    environment {
        APP_NAME = "devops-app"
        APP_PORT = "3001"
        IMAGE_TAG = "devops-app:${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/kavinayaravi/devops-ci-cd-pipeline.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_TAG% ."
            }
        }

        stage('Stop Old Container') {
            steps {
                bat """
                docker stop %APP_NAME% || echo No container running
                docker rm %APP_NAME% || echo No container to remove
                """
            }
        }

        stage('Run New Container') {
            steps {
                bat "docker run -d --name %APP_NAME% -p %APP_PORT%:3000 %IMAGE_TAG%"
            }
        }
    }

    post {
        success {
            echo "🚀 Deployment successful!"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}