import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-profile',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './update-profile.component.html',
  standalone: true,
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit{
  user: any;

  constructor(private readonly httpClient: HttpClient, private router: Router) {

  }

  ngOnInit() {
    let userId = localStorage.getItem('user')!;
    this.httpClient.get("http://localhost:8080/users/" + userId).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('Failed to fetch user data', error);
      }
    );
  }

onUpdate() {
  let userId = localStorage.getItem('user')!;
  this.httpClient.put("http://localhost:8080/users/modifier/" + userId, this.user, { responseType: 'text' }).subscribe(
    (response: any) => {
      this.router.navigate(['../profile'], { state: { user: response } });
    },
    (error) => {
      console.error('Failed to update user', error);
    }
  );
}}
