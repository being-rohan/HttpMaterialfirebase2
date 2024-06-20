import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from 'src/app/const/interrface';
import { PostserviceService } from 'src/app/services/postservice.service';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postarr!: Ipost[]
  constructor(
    private _posser: PostserviceService,
    private _matdialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._posser.fetchproducts()
      .subscribe((res => {
        this.postarr = res
        console.log(this.postarr);

      }))

    this._posser.postsubobj$
      .subscribe((res) => {
        this.postarr.push(res)
      })



    this._posser.updateobjobj$
      .subscribe((res) => {
        let getindex = this.postarr.findIndex(post => post.id === res.id)
        this.postarr[getindex] = res
      })


      this._posser.deletedobj$
      .subscribe((res)=>{
        let getindex=this.postarr.findIndex(post=>post.id===res)
        this.postarr.splice(getindex,1)
      })
  }

  addpost() {
    let dialog = new MatDialogConfig()
    dialog.width = '500px'


    let dialogref = this._matdialog.open(PostFormComponent, dialog)

  }
}
