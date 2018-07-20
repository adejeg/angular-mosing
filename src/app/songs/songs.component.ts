import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { SongServiceService } from 'src/app/song-service.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public songs =[];
  public modalRef:BsModalRef
  constructor(private modalService: BsModalService, private _dataService: SongServiceService) { }
  
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  
  ngOnInit() {
    this._dataService.getSongs()
      .subscribe(data => this.songs = data);
    
  }
  
  
}
