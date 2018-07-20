import { Component, OnInit } from '@angular/core';
import { SongDDetails } from '../song-data'
import { SongServiceService } from '../song-service.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  // songList: SongDDetails[] = []
  
  constructor(private songService: SongServiceService) { }

  addSong(song){
    var songObj: SongDDetails[] = [];
    songObj.push(song.value);
    // this.songList.push(songObj);
    
    this.songService.addSong(songObj);

    console.log(songObj);
  }

  ngOnInit() {
  }
}
