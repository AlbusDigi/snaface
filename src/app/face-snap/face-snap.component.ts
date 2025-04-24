import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  

  title! : String;
  imhgUrl!: String;
  description!:String;
  createdArt!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title ="Archimed",
    this.imhgUrl = "https://images.pexels.com/photos/31352325/pexels-photo-31352325/free-photo-of-veranda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    this.description= "C'est pour dire bonjour",
    this.createdArt = new Date();
    this.snaps =5;
  }

}
