import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewChild, ViewChildren, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgxDefaultAvatarComponent {
    constructor() {
        this.removeImage = false;
        this.isChangeable = true;
        this.isBold = true;
        this.acceptTypes = 'image/jpeg, image/png, image/jpg, image/svg';
        this.backDropColor = '#00000099';
        this.previewSize = 'cover';
        this.background = 'black';
        this.borderRadius = '30px';
        this.height = '20px';
        this.width = '20px';
        this.onFileSelectedEmitter$ = new EventEmitter();
        this.selectedFileUrl = null;
        this.isContentAvailabe = false;
        this.selectedFile = null;
    }
    ngAfterViewInit() {
        this.calculateLettersSize();
    }
    ngOnChanges() {
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
    selectFile(event) {
        const inputElement = event.target;
        if (inputElement.files && inputElement.files.length > 0) {
            const file = inputElement.files[0];
            this.selectedFile = file;
            const reader = new FileReader();
            reader.onload = () => (this.selectedFileUrl = reader.result);
            reader.readAsDataURL(file);
            this.onFileSelectedEmitter$.emit(file);
            this.fileUpload.nativeElement.value = '';
        }
    }
    getAvatar() {
        return this.avatar.nativeElement;
    }
    getAvatarSize() {
        const computedStyles = window.getComputedStyle(this.getAvatar());
        const size = {
            width: computedStyles.width,
            height: computedStyles.height,
        };
        return size;
    }
    calculateLettersSize() {
        setTimeout(() => {
            const width = this.getAvatarSize().width.replace(/\D/g, '');
            const height = this.getAvatarSize().height.replace(/\D/g, '');
            const fontSize = Math.min(Number(width), Number(height)) / 5;
            const firstLetter = this.letters.first.nativeElement;
            const secondLetter = this.letters.last.nativeElement;
            firstLetter.style.fontSize = `${fontSize * 2}px`;
            secondLetter.style.fontSize = `${fontSize * 2}px`;
        }, 1);
    }
    splitNameToLetters() {
        if (this.fullName) {
            const name = this.fullName.split(' ');
            this.firstLetter = name[0].substring(0, 1);
            this.secondLetter = name[1].substring(0, 1);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NgxDefaultAvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.6", type: NgxDefaultAvatarComponent, selector: "ngx-avatar", inputs: { fullName: "fullName", imageURL: "imageURL", removeImage: "removeImage", isChangeable: "isChangeable", isBold: "isBold", acceptTypes: "acceptTypes", backDropColor: "backDropColor", previewSize: "previewSize", background: "background", borderRadius: "borderRadius", height: "height", width: "width" }, outputs: { onFileSelectedEmitter$: "onFileSelectedEmitter$" }, viewQueries: [{ propertyName: "avatar", first: true, predicate: ["avatar"], descendants: true }, { propertyName: "containerContent", first: true, predicate: ["containerContent"], descendants: true }, { propertyName: "fileUpload", first: true, predicate: ["fileUpload"], descendants: true }, { propertyName: "letters", predicate: ["letter"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div #avatar class=\"avatar\" (click)=\"fileUpload.click()\"\n    [ngClass]=\"{'is_changeable': isChangeable, 'no_event': !isChangeable}\" [ngStyle]=\"{\n        width: width,\n        height: height,\n        'backgroundImage': 'url(' +  selectedFileUrl + ')',\n        'border-radius': borderRadius,\n        'background-size': previewSize,\n        'background-color': background\n    }\">\n\n    <span *ngIf=\"!selectedFileUrl\" #letter class=\"avatar__letters\" [ngClass]=\"{'bold': isBold}\">{{firstLetter}}</span>\n    <span *ngIf=\"!selectedFileUrl\" #letter class=\"avatar__letters\" [ngClass]=\"{'bold': isBold}\">{{secondLetter}}</span>\n    <div *ngIf=\"isChangeable\" class=\"avatar__change\" [ngStyle]=\"{'background': backDropColor}\" #containerContent>\n        <ng-content></ng-content>\n    </div>\n</div>\n\n<input #fileUpload type=\"file\" class=\"file\" [accept]=\"acceptTypes\" (change)=\"selectFile($event)\">", styles: [".avatar{min-width:50px;min-height:50px;display:flex;align-items:center;justify-content:center;position:relative;background-size:inherit;background-position:center;background-repeat:no-repeat}.avatar__letters{font-size:16px;font-weight:500;color:#fff}.avatar__letters.bold{font-weight:600}.avatar__change{transition:all .2s;display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:100%;background-color:#0009;opacity:0}.avatar:hover .avatar__change{opacity:1}.is_changeable{overflow:hidden;cursor:pointer}.file{display:none}.no_event{pointer-events:none}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NgxDefaultAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-avatar', template: "<div #avatar class=\"avatar\" (click)=\"fileUpload.click()\"\n    [ngClass]=\"{'is_changeable': isChangeable, 'no_event': !isChangeable}\" [ngStyle]=\"{\n        width: width,\n        height: height,\n        'backgroundImage': 'url(' +  selectedFileUrl + ')',\n        'border-radius': borderRadius,\n        'background-size': previewSize,\n        'background-color': background\n    }\">\n\n    <span *ngIf=\"!selectedFileUrl\" #letter class=\"avatar__letters\" [ngClass]=\"{'bold': isBold}\">{{firstLetter}}</span>\n    <span *ngIf=\"!selectedFileUrl\" #letter class=\"avatar__letters\" [ngClass]=\"{'bold': isBold}\">{{secondLetter}}</span>\n    <div *ngIf=\"isChangeable\" class=\"avatar__change\" [ngStyle]=\"{'background': backDropColor}\" #containerContent>\n        <ng-content></ng-content>\n    </div>\n</div>\n\n<input #fileUpload type=\"file\" class=\"file\" [accept]=\"acceptTypes\" (change)=\"selectFile($event)\">", styles: [".avatar{min-width:50px;min-height:50px;display:flex;align-items:center;justify-content:center;position:relative;background-size:inherit;background-position:center;background-repeat:no-repeat}.avatar__letters{font-size:16px;font-weight:500;color:#fff}.avatar__letters.bold{font-weight:600}.avatar__change{transition:all .2s;display:flex;align-items:center;justify-content:center;position:absolute;width:100%;height:100%;background-color:#0009;opacity:0}.avatar:hover .avatar__change{opacity:1}.is_changeable{overflow:hidden;cursor:pointer}.file{display:none}.no_event{pointer-events:none}\n"] }]
        }], propDecorators: { avatar: [{
                type: ViewChild,
                args: ['avatar']
            }], containerContent: [{
                type: ViewChild,
                args: ['containerContent']
            }], fileUpload: [{
                type: ViewChild,
                args: ['fileUpload']
            }], letters: [{
                type: ViewChildren,
                args: ['letter']
            }], fullName: [{
                type: Input
            }], imageURL: [{
                type: Input
            }], removeImage: [{
                type: Input
            }], isChangeable: [{
                type: Input
            }], isBold: [{
                type: Input
            }], acceptTypes: [{
                type: Input
            }], backDropColor: [{
                type: Input
            }], previewSize: [{
                type: Input
            }], background: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], height: [{
                type: Input
            }], width: [{
                type: Input
            }], onFileSelectedEmitter$: [{
                type: Output
            }] } });

class NgxDefaultAvatarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NgxDefaultAvatarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.6", ngImport: i0, type: NgxDefaultAvatarModule, declarations: [NgxDefaultAvatarComponent], imports: [CommonModule], exports: [NgxDefaultAvatarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NgxDefaultAvatarModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.6", ngImport: i0, type: NgxDefaultAvatarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxDefaultAvatarComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgxDefaultAvatarComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-default-avatar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDefaultAvatarComponent, NgxDefaultAvatarModule };
//# sourceMappingURL=ngx-default-avatar.mjs.map
