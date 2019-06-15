import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from './datepicker.component';
import { FormsModule } from '@angular/forms';
var AngularDateTimePickerModule = /** @class */ (function () {
    function AngularDateTimePickerModule() {
    }
    AngularDateTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [DatePicker],
                    exports: [DatePicker, FormsModule]
                },] },
    ];
    /** @nocollapse */
    AngularDateTimePickerModule.ctorParameters = function () { return []; };
    return AngularDateTimePickerModule;
}());
export { AngularDateTimePickerModule };
//# sourceMappingURL=datepicker.module.js.map