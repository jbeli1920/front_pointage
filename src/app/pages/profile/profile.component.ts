import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule]
})
export class ProfileComponent implements OnInit {
  user: any;
  workDetails: any = [];

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('user')!;
    this.httpClient.get("http://localhost:8080/users/" + userId).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('Failed to fetch user data', error);
      }
    );

    this.httpClient.get("http://localhost:8080/rapports/user/1").subscribe(
      (response) => {
        this.workDetails = response;
        console.log(this.workDetails);
      },
      (error) => {
        console.error('Failed to fetch work details', error);
      }
    );  
  }

  getDayName(dayNumber: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayNumber - 1];
  }
}
