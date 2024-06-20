import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from 'src/app/const/interrface';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostserviceService } from 'src/app/services/postservice.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {

  constructor(private _matdialog: MatDialog,
    private postSer: PostserviceService, private _matsnack: SnackbarService
  ) { }
  @Input() postobj!: Ipost

  ngOnInit(): void {
  }

  onedit() {

    let dialog = new MatDialogConfig()
    dialog.width = '500px',
      dialog.data = this.postobj

    let dialogref = this._matdialog.open(PostFormComponent, dialog)
  }


  ondelete() {
    this.postSer.deleteapi(this.postobj.id)
      .subscribe((res) => {
        this.postSer.senddelte(this.postobj.id)
        this._matsnack.matsancopen(`${this.postobj.title} is deleted!!!`)
        console.log(res);
        

      })
  }
}
