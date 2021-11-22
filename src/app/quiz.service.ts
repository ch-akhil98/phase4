import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[]=[
    {
      question : 'Which of the following statement is correct for AngularJS? ',
      answer:[
        {option: 'AngularJS is an HTML framework ' , correct : false},
        {option: 'AngularJS is a Java framework ' , correct : false},
        {option: 'AngularJS is a JavaScript framework ' , correct : true},
        {option: 'AngularJS is a SQL framework ' , correct :false }
      ]
    },
{
    question : 'On which of the Architectural pattern AngularJS is based? ',
    answer:[
      {option: 'Observer Pattern ' , correct : false},
      {option: 'Decorator pattern ' , correct : false},
      {option: 'MVC Architecture pattern ' , correct : false},
      {option: 'MVVM Architectural pattern ' , correct :true }
    ]
  },
{
  question : 'AngularJS is perfect for? ',
  answer:[
    {option: 'SPAs ' , correct : true},
    {option: 'MPAs ' , correct : false},
    {option: 'DPAs ' , correct : false},
    {option: 'CPAs ' , correct :false }
  ]
},
{
question : 'Which of the following directive is used to bind the application data to the HTML view in AngularJS? ',
answer:[
  {option: 'ng-app directive ' , correct : false},
  {option: 'ng-model directive ' , correct : false},
  {option: 'ng-bind directive ' , correct : true},
  {option: 'ng-init directive ' , correct :false }

]
},
{
question : 'Which of the following is an advantage of AngularJS? ',
answer:[
  {option: 'AngularJS code is unit testable. ' , correct : false },
  {option: 'AngularJS provides reusable components. ' , correct : false},
  {option: 'AngularJS uses dependency injection and makes use of separation of concerns ' , correct : false},
  {option: 'All of the above ' , correct :true }

]
},
{
question : ' Which of the following is used to share data between controller and view in AngularJS? ',
answer:[
  {option: 'using Model ' , correct : false},
  {option: 'using services ' , correct : true},
  {option: 'using factory ' , correct : false},
  {option: 'using $scope ' , correct :false }

]
},
{
question : 'Which of the following is not a valid AngularJS filter? ',
answer:[
  {option: 'lowercase ' , correct : false},
  {option: 'orderby ' , correct : false},
  {option: 'email ' , correct : true},
  {option: 'currency ' , correct :false }

]
},
{
question : 'Which of the following directive is used to bind the value of HTML controls to application data? ',
answer:[
  {option: 'ng-app ' , correct : false},
  {option: 'ng-init ' , correct : false},
  {option: 'ng-model ' , correct : true},
  {option: 'ng-hide ' , correct :false }

]
},
{
question : 'A module created by using the AngularJS function is called? ',
answer:[
  {option: 'module ' , correct : false},
  {option: 'module() ' , correct : true},
  {option: 'mod() ' , correct : false},
  {option: 'angular module() ' , correct :false }

]
},
]
  
  constructor() { }
  getQuizzes()
  {
    return this.quizzes;
  }

}
