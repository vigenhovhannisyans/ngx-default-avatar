import { Component, EventEmitter, Input, Output, ViewChild, ViewChildren, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export { NgxDefaultAvatarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlZmF1bHQtYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kZWZhdWx0LWF2YXRhci9zcmMvbGliL2NvbXBvbmVudC9uZ3gtZGVmYXVsdC1hdmF0YXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRlZmF1bHQtYXZhdGFyL3NyYy9saWIvY29tcG9uZW50L25neC1kZWZhdWx0LWF2YXRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7OztBQWlCdkIsTUFLYSx5QkFBeUI7SUFMdEM7UUF5QlMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHN0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsV0FBTSxHQUFZLElBQUksQ0FBQztRQUd2QixnQkFBVyxHQUFXLDZDQUE2QyxDQUFDO1FBR3BFLGtCQUFhLEdBQVcsV0FBVyxDQUFDO1FBR3BDLGdCQUFXLEdBQWdCLE9BQU8sQ0FBQztRQUduQyxlQUFVLEdBQVcsT0FBTyxDQUFDO1FBRzdCLGlCQUFZLEdBQVcsTUFBTSxDQUFDO1FBRzlCLFdBQU0sR0FBVyxNQUFNLENBQUM7UUFHeEIsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQUd2QiwyQkFBc0IsR0FDM0IsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQixvQkFBZSxHQUFnQyxJQUFJLENBQUM7UUFDcEQsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLGlCQUFZLEdBQWdCLElBQUksQ0FBQztLQW1FekM7SUEvRFEsZUFBZTtRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0Is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QUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs4R0F6SFUseUJBQXlCO2tHQUF6Qix5QkFBeUIsdXlCQ2pDdEMsczZCQWlCaUc7O1NEZ0JwRix5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxZQUFZOzhCQU1mLE1BQU07c0JBRFosU0FBUzt1QkFBQyxRQUFRO2dCQUlaLGdCQUFnQjtzQkFEdEIsU0FBUzt1QkFBQyxrQkFBa0I7Z0JBSXRCLFVBQVU7c0JBRGhCLFNBQVM7dUJBQUMsWUFBWTtnQkFJaEIsT0FBTztzQkFEYixZQUFZO3VCQUFDLFFBQVE7Z0JBSWYsUUFBUTtzQkFEZCxLQUFLO2dCQUlDLFFBQVE7c0JBRGQsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLFlBQVk7c0JBRGxCLEtBQUs7Z0JBSUMsTUFBTTtzQkFEWixLQUFLO2dCQUlDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsWUFBWTtzQkFEbEIsS0FBSztnQkFJQyxNQUFNO3NCQURaLEtBQUs7Z0JBSUMsS0FBSztzQkFEWCxLQUFLO2dCQUlDLHNCQUFzQjtzQkFENUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG50eXBlIFNpemVUeXBlID0ge1xuICB3aWR0aDogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbn07XG5cbnR5cGUgUHJldmlld1NpemUgPVxuICB8ICdhdXRvJ1xuICB8ICdjb250YWluJ1xuICB8ICdjb3ZlcidcbiAgfCAnaW5oZXJpdCdcbiAgfCAnaW5pdGlhbCdcbiAgfCAncmV2ZXJ0J1xuICB8ICd1bnNldCdcbiAgfCAnMTAwJSAxMDAlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWF2YXRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZGVmYXVsdC1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZGVmYXVsdC1hdmF0YXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RGVmYXVsdEF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2F2YXRhcicpXG4gIHB1YmxpYyBhdmF0YXIhOiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lckNvbnRlbnQnKVxuICBwdWJsaWMgY29udGFpbmVyQ29udGVudCE6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZCgnZmlsZVVwbG9hZCcpXG4gIHB1YmxpYyBmaWxlVXBsb2FkITogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKCdsZXR0ZXInKVxuICBwdWJsaWMgbGV0dGVycyE6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZnVsbE5hbWU/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGltYWdlVVJMITogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZW1vdmVJbWFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc0NoYW5nZWFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc0JvbGQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhY2NlcHRUeXBlczogc3RyaW5nID0gJ2ltYWdlL2pwZWcsIGltYWdlL3BuZywgaW1hZ2UvanBnLCBpbWFnZS9zdmcnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBiYWNrRHJvcENvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMDk5JztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcHJldmlld1NpemU6IFByZXZpZXdTaXplID0gJ2NvdmVyJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nID0gJ2JsYWNrJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmcgPSAnMzBweCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGhlaWdodDogc3RyaW5nID0gJzIwcHgnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gJzIwcHgnO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25GaWxlU2VsZWN0ZWRFbWl0dGVyJDogRXZlbnRFbWl0dGVyPEZpbGUgfCBudWxsPiA9XG4gICAgbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgbnVsbD4oKTtcblxuICBwdWJsaWMgc2VsZWN0ZWRGaWxlVXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgaXNDb250ZW50QXZhaWxhYmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkRmlsZTogRmlsZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgc2Vjb25kTGV0dGVyPzogc3RyaW5nO1xuICBwdWJsaWMgZmlyc3RMZXR0ZXI/OiBzdHJpbmc7XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGN1bGF0ZUxldHRlcnNTaXplKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNwbGl0TmFtZVRvTGV0dGVycygpO1xuICAgIGlmICh0aGlzLmltYWdlVVJMKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZVVybCA9IHRoaXMuaW1hZ2VVUkw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVtb3ZlSW1hZ2UpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlVXJsID0gbnVsbDtcbiAgICAgIHRoaXMuY2FsY3VsYXRlTGV0dGVyc1NpemUoKTtcbiAgICAgIHRoaXMub25GaWxlU2VsZWN0ZWRFbWl0dGVyJC5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5maWxlVXBsb2FkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0RmlsZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoaW5wdXRFbGVtZW50LmZpbGVzICYmIGlucHV0RWxlbWVudC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWxlOiBGaWxlID0gaW5wdXRFbGVtZW50LmZpbGVzWzBdO1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiAodGhpcy5zZWxlY3RlZEZpbGVVcmwgPSByZWFkZXIucmVzdWx0KTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgdGhpcy5vbkZpbGVTZWxlY3RlZEVtaXR0ZXIkLmVtaXQoZmlsZSk7XG4gICAgICB0aGlzLmZpbGVVcGxvYWQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmF2YXRhci5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXJTaXplKCk6IFNpemVUeXBlIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0QXZhdGFyKCkpO1xuICAgIGNvbnN0IHNpemU6IFNpemVUeXBlID0ge1xuICAgICAgd2lkdGg6IGNvbXB1dGVkU3R5bGVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb21wdXRlZFN0eWxlcy5oZWlnaHQsXG4gICAgfTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTGV0dGVyc1NpemUoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0QXZhdGFyU2l6ZSgpLndpZHRoLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEF2YXRhclNpemUoKS5oZWlnaHQucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5taW4oTnVtYmVyKHdpZHRoKSwgTnVtYmVyKGhlaWdodCkpIC8gNTtcbiAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gdGhpcy5sZXR0ZXJzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBzZWNvbmRMZXR0ZXIgPSB0aGlzLmxldHRlcnMubGFzdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgZmlyc3RMZXR0ZXIuc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZSAqIDJ9cHhgO1xuICAgICAgc2Vjb25kTGV0dGVyLnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemUgKiAyfXB4YDtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgc3BsaXROYW1lVG9MZXR0ZXJzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZ1bGxOYW1lKSB7XG4gICAgICBjb25zdCBuYW1lOiBzdHJpbmdbXSA9IHRoaXMuZnVsbE5hbWUuc3BsaXQoJyAnKTtcbiAgICAgIHRoaXMuZmlyc3RMZXR0ZXIgPSBuYW1lWzBdLnN1YnN0cmluZygwLCAxKTtcbiAgICAgIHRoaXMuc2Vjb25kTGV0dGVyID0gbmFtZVsxXS5zdWJzdHJpbmcoMCwgMSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2ICNhdmF0YXIgY2xhc3M9XCJhdmF0YXJcIiAoY2xpY2spPVwiZmlsZVVwbG9hZC5jbGljaygpXCJcbiAgICBbbmdDbGFzc109XCJ7J2lzX2NoYW5nZWFibGUnOiBpc0NoYW5nZWFibGUsICdub19ldmVudCc6ICFpc0NoYW5nZWFibGV9XCIgW25nU3R5bGVdPVwie1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAnYmFja2dyb3VuZEltYWdlJzogJ3VybCgnICsgIHNlbGVjdGVkRmlsZVVybCArICcpJyxcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiBwcmV2aWV3U2l6ZSxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBiYWNrZ3JvdW5kXG4gICAgfVwiPlxuXG4gICAgPHNwYW4gKm5nSWY9XCIhc2VsZWN0ZWRGaWxlVXJsXCIgI2xldHRlciBjbGFzcz1cImF2YXRhcl9fbGV0dGVyc1wiIFtuZ0NsYXNzXT1cInsnYm9sZCc6IGlzQm9sZH1cIj57e2ZpcnN0TGV0dGVyfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCIhc2VsZWN0ZWRGaWxlVXJsXCIgI2xldHRlciBjbGFzcz1cImF2YXRhcl9fbGV0dGVyc1wiIFtuZ0NsYXNzXT1cInsnYm9sZCc6IGlzQm9sZH1cIj57e3NlY29uZExldHRlcn19PC9zcGFuPlxuICAgIDxkaXYgKm5nSWY9XCJpc0NoYW5nZWFibGVcIiBjbGFzcz1cImF2YXRhcl9fY2hhbmdlXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kJzogYmFja0Ryb3BDb2xvcn1cIiAjY29udGFpbmVyQ29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxpbnB1dCAjZmlsZVVwbG9hZCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZmlsZVwiIFthY2NlcHRdPVwiYWNjZXB0VHlwZXNcIiAoY2hhbmdlKT1cInNlbGVjdEZpbGUoJGV2ZW50KVwiPiJdfQ==