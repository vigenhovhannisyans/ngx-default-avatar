import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

type SizeType = {
  width: string;
  height: string;
};

type PreviewSize =
  | 'auto'
  | 'contain'
  | 'cover'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | '100% 100%';

@Component({
  selector: 'ngx-avatar',
  templateUrl: './ngx-default-avatar.component.html',
  styleUrls: ['./ngx-default-avatar.component.scss'],
})
export class NgxDefaultAvatarComponent implements AfterViewInit, OnChanges {
  @ViewChild('avatar')
  public avatar!: ElementRef;

  @ViewChild('containerContent')
  public containerContent!: ElementRef;

  @ViewChild('fileUpload')
  public fileUpload!: ElementRef;

  @ViewChildren('letter')
  public letters!: QueryList<ElementRef>;

  @Input()
  public fullName?: string;

  @Input()
  public imageURL!: string;

  @Input()
  public removeImage: boolean = false;

  @Input()
  public isChangeable: boolean = true;

  @Input()
  public isBold: boolean = true;

  @Input()
  public acceptTypes: string = 'image/jpeg, image/png, image/jpg, image/svg';

  @Input()
  public backDropColor: string = '#00000099';

  @Input()
  public previewSize: PreviewSize = 'cover';

  @Input()
  public background: string = 'black';

  @Input()
  public borderRadius: string = '30px';

  @Input()
  public height: string = '20px';

  @Input()
  public width: string = '20px';

  @Output()
  public onFileSelectedEmitter$: EventEmitter<File | null> =
    new EventEmitter<File | null>();

  public selectedFileUrl: string | ArrayBuffer | null = null;
  public isContentAvailabe: boolean = false;
  public selectedFile: File | null = null;
  public secondLetter?: string;
  public firstLetter?: string;

  public ngAfterViewInit(): void {
    this.calculateLettersSize();
  }

  ngOnChanges(): void {
    this.splitNameToLetters();
    if (this.imageURL) {
      this.selectedFileUrl = this.imageURL;
    }

    if (this.removeImage) {
      this.selectedFileUrl = null;
      this.calculateLettersSize();
      this.onFileSelectedEmitter$.emit(null);
      this.fileUpload.nativeElement.value = '';
    }
  }

  public selectFile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => (this.selectedFileUrl = reader.result);
      reader.readAsDataURL(file);
      this.onFileSelectedEmitter$.emit(file);
      this.fileUpload.nativeElement.value = ''
    }
  }

  private getAvatar(): HTMLElement {
    return this.avatar.nativeElement;
  }

  private getAvatarSize(): SizeType {
    const computedStyles = window.getComputedStyle(this.getAvatar());
    const size: SizeType = {
      width: computedStyles.width,
      height: computedStyles.height,
    };
    return size;
  }

  private calculateLettersSize(): void {
    setTimeout(() => {
      const width = this.getAvatarSize().width.replace(/\D/g, '');
      const height = this.getAvatarSize().height.replace(/\D/g, '');
      const fontSize = Math.min(Number(width), Number(height)) / 5;
      const firstLetter = this.letters.first.nativeElement as HTMLElement;
      const secondLetter = this.letters.last.nativeElement as HTMLElement;
      firstLetter.style.fontSize = `${fontSize * 2}px`;
      secondLetter.style.fontSize = `${fontSize * 2}px`;
    }, 1);
  }

  private splitNameToLetters(): void {
    if (this.fullName) {
      const name: string[] = this.fullName.split(' ');
      this.firstLetter = name[0].substring(0, 1);
      this.secondLetter = name[1].substring(0, 1);
    }
  }
}
