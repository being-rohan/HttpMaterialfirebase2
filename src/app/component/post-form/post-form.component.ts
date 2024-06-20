import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ipost } from 'src/app/const/interrface';
import { PostserviceService } from 'src/app/services/postservice.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postform!: FormGroup
  postobj!: Ipost
  iseditmode: boolean = false
  constructor(private _postSer: PostserviceService,
    private _matsanck: SnackbarService,
    private _matdialo: MatDialogRef<PostFormComponent>,
    @Inject(MAT_DIALOG_DATA) getdata: any
    
  ) {
    this.createform()
    this.postobj = getdata
    if (getdata) {
      this.iseditmode = true
      this.postform.patchValue(getdata)

    }
  }

  ngOnInit(): void {
  }

  createform() {
    this.postform = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required]),
    })
  } 
  
  onpostadd() {

    if (this.postform.valid) {

      let obj = { ...this.postform.value }

      this._postSer.ceratepost(obj)
        .subscribe((res) => {
          console.log(res);
          
          this.postobj = res
          this._postSer.sendNext(obj)
          this._matsanck.matsancopen(`${obj.title} is added!`)
          this._matdialo.close()
        })
    }
  }
  update() {
    if (this.postform.valid) {

      let obj = { ...this.postform.value, id: this.postobj.id }

      this._postSer.updatepost(obj)
        .subscribe((res) => {
          this.postobj = res
          this._postSer.sendUpdatepost(obj)
          this._matsanck.matsancopen(`${obj.title}is updated!!!`)
          this._matdialo.close()
        })        

    }
  }
}
