import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  params: any;

  constructor(
    private route:ActivatedRoute,
    private _authService:OauthService
  ) {
  }
  
  ngOnInit(): void {
    
    this.params = this.route.snapshot.paramMap.get('id');
    this.verifyEmail();
  }

  verifyEmail(){
    this._authService.activateEmail(this.params).subscribe(
      (res:any) =>{
        alert('sucess')
      }
      // next:(res) => {
      //   alert("Activated")
      // },
      // error:(err) => console.log(err),
      // complete:() => {
      //   console.log('Completed');        
      // } 
  )
  }

}
