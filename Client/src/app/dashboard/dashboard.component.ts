import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mobile_data:{
    image:String,
    model_name:String,
    price:Number
  }[];
  constructor() { }

  ngOnInit() {
    this.mobile_data=[
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000},
      {image:'../../assets/images/mobile1.jpg',model_name:'sss',price:5000}];
  }

}
