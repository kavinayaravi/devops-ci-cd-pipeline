pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/kavinayaravi/devops-ci-cd-pipeline.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t devops-app:latest .'
      }
    }

    stage('Stop Old Container') {
      steps {
        sh '''
        docker rm -f devops-app || true
        '''
      }
    }

    stage('Run New Container') {
      steps {
        sh '''
        docker run -d --name devops-app -p 3001:3000 devops-app:1.0

        '''
      }
    }
  }
}
