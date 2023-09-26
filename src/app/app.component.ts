import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isRemoveImage!: boolean;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public onFileSelectedEmitter(event: File | null): void {
    console.log('onFilePreviewEmitter', event)
    this.isRemoveImage = false
    this.cdr.detectChanges()
  }

  public removeImage(): void {
    this.isRemoveImage = true
  }
}
