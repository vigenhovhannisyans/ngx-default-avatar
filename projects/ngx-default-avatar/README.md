# NgxDefaultAvatar

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0. You can use the library if your ng version is above 14.0.0.

# About The Library
The ```ngx-default-avatar``` is a library that allows you to easily create user avatars with customizable options. It provides a simple way to generate default avatars based on a user's full name or display an already uploaded image. This README file will guide you through the library's features and customization options.

# Installation
``npm i ngx-default-avatar`` or ```yarn add ngx-default-avatar```

# How to use
# Import in your Module
```
import { NgxDefaultAvatarModule } from 'ngx-default-avatar';

@NgModule({
  imports: [NgxDefaultAvatarModule],
  // ...
})
export class YourAppModule { }
```
# Usage in HTML
```
<ngx-avatar
  [fullName]="'John Doe'"
  [removeImage]="false"
  [isChangeable]="true"
  [isBold]="false"
  [acceptTypes]="'image/jpeg, image/png, image/jpg, image/svg'"
  [backDropColor]="'#00000099'"
  [previewSize]="'cover'"
  [background]="'#000000'"
  [borderRadius]="'30px'"
  [height]="'150px'"
  [width]="'150px'"
  (onFileSelectedEmitter$)="onFileSelectedEmitter($event)"
  >
<img class="camera" src="../assets/camera.png" alt=""> // ng-content
</ngx-avatar>
<button (click)="removeImage()">Remove</button>
```
inside the selectors put that content which will be shown on hover it can be a text or a camera icon. In case of empty content there will not be shown anything. All the paremeters have a default value except ```fullName``` please be attentive to pass the value.

``fullName``: Accepts a string representing the user's full name. The first letters will be used to generate the default avatar.

``imageURL``: Accepts a string representing the URL of an already uploaded image to display instead of the default avatar.

``removeImage``: A boolean variable. If set to true, the preview image or uploaded image will be deleted.

``isChangeable``: A boolean variable. If set to true, users can change the image and choose another one. Default is true.

``isBold``: A boolean variable. If set to true, the letters of the default image become bold.

``acceptTypes``: A string variable specifying the file types the component should accept, e.g., ``'image/jpeg, image/png, image/jpg, image/svg'``.

``backDropColor``: A string variable representing the color of the backdrop when hovering over the avatar. Default is ``#00000099``.

``previewSize``: Specifies the image size. Accepts values such as ``'auto', 'contain', 'cover', inherit, initial, revert, unset, 100% 100%``.

``background``: A string input defining the background color of the default avatar. Default is black.

``borderRadius``: Defines the radius of the avatar. Use the format '30px' to specify radius from each corner, similar to CSS border-radius property.

``height``: Specifies the height of the avatar. Default is '20px'. ``Format should be '20px' or '20%'``.

``width``: Specifies the width of the avatar. Default is '20px'. ``Format should be '20px' or '20%'``

``(onFileSelectedEmitter$)`` is the file emitter which was sellected from user the event type is ``File`` or ``null``
# Usage in TypeScript
```
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
```




