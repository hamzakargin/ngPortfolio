import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OnInit } from '@angular/core';
import { StopTrainingComponent } from './stop-training-components';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-current-training',
  imports: [MatProgressSpinnerModule, MatButtonModule, MatDialogModule],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css',
})
export class CurrentTrainingComponent implements OnInit {
  @Output() gymExit = new EventEmitter<void>();
  progress: number = 0;
  timer: any;
  constructor(private Dialog: MatDialog) {}
  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.Dialog.open(StopTrainingComponent, {
      data: { progress: this.progress },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gymExit.emit();
      }
    });
  }
}
