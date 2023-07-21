"use strict";
(self["webpackChunkjeison_nisperuza"] = self["webpackChunkjeison_nisperuza"] || []).push([["src_app_modules_contact_contact_module_ts"],{

/***/ 5647:
/*!***********************************************************!*\
  !*** ./src/app/modules/contact/contact-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactRoutingModule": () => (/* binding */ ContactRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 5044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
    }
];
class ContactRoutingModule {
}
ContactRoutingModule.ɵfac = function ContactRoutingModule_Factory(t) { return new (t || ContactRoutingModule)(); };
ContactRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactRoutingModule });
ContactRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3033:
/*!***************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngx-translate/ngx-translate.module */ 4576);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-ui/material-ui.module */ 6340);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-routing.module */ 5647);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 5044);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 1358);
/* harmony import */ var _store_contact_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/contact.effects */ 9710);
/* harmony import */ var _store_contact_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/contact.facade */ 6841);
/* harmony import */ var _store_contact_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/contact.reducer */ 2636);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);















class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_4__.AppFacade, _store_contact_facade__WEBPACK_IMPORTED_MODULE_6__.ContactFacade], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forFeature(_store_contact_reducer__WEBPACK_IMPORTED_MODULE_7__.CONTACT_FEATURE_KEY, _store_contact_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.EffectsModule.forFeature([_store_contact_effects__WEBPACK_IMPORTED_MODULE_5__.ContactEffects]),
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule,
            _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContactRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent], imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.EffectsFeatureModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule,
        _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule,
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContactRoutingModule] }); })();


/***/ }),

/***/ 5044:
/*!**************************************************************!*\
  !*** ./src/app/modules/contact/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var src_app_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modal-confirmation/modal-confirmation.component */ 2602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _store_contact_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/contact.facade */ 6841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _store_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/contact.service */ 9357);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 2315);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 6246);















class ContactComponent {
    constructor(dialog, fb, appFacade, contactFacade, translate, contactService) {
        this.dialog = dialog;
        this.fb = fb;
        this.appFacade = appFacade;
        this.contactFacade = contactFacade;
        this.translate = translate;
        this.contactService = contactService;
    }
    ngOnInit() {
        this.initForm();
        this.appFacade.setItIsHome(false);
    }
    send(form) {
        this.contactFacade.sendMail(form);
        this.contactFacade.getFormspreeResponse$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(2)).subscribe(formspreeResponse => {
            if (formspreeResponse) {
                if (formspreeResponse.ok) {
                    this.openModalConfirmation('SUCCESS', this.translate.instant('APP.contact'), this.translate.instant('CONTACT.message_sent_successfully'));
                }
                else {
                    this.openModalConfirmation('ERROR', this.translate.instant('APP.contact'), this.translate.instant('CONTACT.message_error_occurred'));
                }
                this.appFacade.sendAnalyticsEvent('send_mail', 'contact', 'contact', 'click');
            }
        });
    }
    getRemaning() {
        const message = this.contactForm.get('message').value;
        return message ? (message.length / 250) * 100 : 0;
    }
    initForm() {
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, , _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])],
            _replyto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.contactService.emailValidator])],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])]
        });
    }
    openModalConfirmation(type, title, message) {
        const dialogRef = this.dialog.open(src_app_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmationComponent, {
            data: { type, title, message }
        });
        dialogRef.afterClosed().subscribe(() => {
            this.contactForm.reset();
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_1__.AppFacade), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_contact_facade__WEBPACK_IMPORTED_MODULE_2__.ContactFacade), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_contact_service__WEBPACK_IMPORTED_MODULE_3__.ContactService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 46, vars: 27, consts: [[1, "column", "left"], [1, "column", "right"], [1, "row", "col", "s12"], [1, "networks"], ["aria-label", "github", "rel", "noreferrer", "href", "https://github.com/jnisperuza", "target", "_blank", 1, "social", "git"], ["aria-label", "twitter", "rel", "noreferrer", "href", "https://twitter.com/jeisonnisperuza", "target", "_blank", 1, "social", "twitter"], ["aria-label", "linkedin", "rel", "noreferrer", "href", "https://www.linkedin.com/in/jeison-nisperuza/", "target", "_blank", 1, "social", "linkedin"], [1, "wrapper-form"], ["aria-label", "mailto", "href", "mailto:jnisperuza1102@gmail.com?Subject=Get%20in%20touch"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "name", "maxlength", "80", "required", ""], ["type", "email", "matInput", "", "formControlName", "_replyto", "required", ""], ["matInput", "", "formControlName", "message", "maxlength", "250", "required", ""], ["mode", "determinate", 3, "value"], [1, "action"], ["name", "send-message", "mat-raised-button", "", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "aside")(1, "div", 0)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "jnisperuza1102@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "a", 4)(14, "a", 5)(15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7)(17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_25_listener() { return ctx.send(ctx.contactForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-form-field", 10)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 10)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-form-field", 10)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "textarea", 13)(41, "mat-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 15)(43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, "APP.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 13, "CONTACT.you_can_reach_me"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 15, "CONTACT.send_me_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 17, "CONTACT.send_from_mail_client"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 19, "GENERAL.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](34, 21, "GENERAL.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 23, "GENERAL.message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.getRemaning());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 25, "CONTACT.send_message"), " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["aside[_ngcontent-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  min-height: 30rem;\n  max-width: 1140px;\n  padding-top: 5.5rem;\n  position: relative;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\naside[_ngcontent-%COMP%]   div.column[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  height: calc(100vh - 5.5rem);\n  box-sizing: border-box;\n  padding-top: 5rem;\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 6rem;\n    padding: 1rem 2rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Hind, sans-serif;\n  font-size: 2.2rem;\n  line-height: 1;\n  font-weight: 700;\n  color: #51576c;\n  margin: 0 0 0.5rem;\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Hind, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #a6a7aa;\n  margin-bottom: 1.25rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 3rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    padding: 1rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.row[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  font-family: Hind, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #a6a7aa;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding: 0 0.75rem;\n  margin: 1rem 0;\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 3rem;\n  height: 3rem;\n  margin: 0 1rem 0 0;\n  padding: 0;\n  opacity: 0.6;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.git[_ngcontent-%COMP%] {\n  background-image: url('git.svg');\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%] {\n  background-image: url('twitter.svg');\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.skype[_ngcontent-%COMP%] {\n  background-image: url('skype.svg');\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%] {\n  background-image: url('linkedin.svg');\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%] {\n  max-width: 30rem;\n  padding: 0 0.75rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #51576c;\n  margin-bottom: 0.15rem;\n  margin-top: 2rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  font-size: 0.8rem;\n  text-decoration: none;\n  color: #a6a7aa;\n  margin-bottom: 0.5rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #17bed2;\n  text-decoration: underline;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 0.8rem;\n  width: 0.8rem;\n  height: 0.8rem;\n  bottom: 0;\n  top: 0;\n  margin: auto auto auto 0.25rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field-outline {\n  color: #cccccc;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field-label {\n  color: #cccccc;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  margin-bottom: 0.25rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: #51576c;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  max-height: 6rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: -10px;\n  width: calc(100% + 20px);\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  margin-bottom: 2rem;\n  box-sizing: border-box;\n  width: 100%;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 10rem;\n  background-color: #51576c;\n  color: #fafafa;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.wrapper-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .mat-raised-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vV2ViJTIwUHJvamVjdHMvamVpc29uLW5pc3BlcnV6YS9zcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQ0dVO0VERlYsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRURGO0FGR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUVESjtBRkdJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FFRE47QUZHTTtFQU5GO0lBT0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFRUFOO0FBQ0Y7QUZFTTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNDdkJXO0VEd0JYLGtCQUFBO0FFQVI7QUZHTTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQy9CYTtFRGdDYixzQkFBQTtBRURSO0FGS0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUVITjtBRktNO0VBSkY7SUFLSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUVGTjtBQUNGO0FGSU07RUFDRSxxQkFBQTtBRUZSO0FGSVE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDdkRXO0FDcURyQjtBRk1NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUVKUjtBRk1RO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FFSlY7QUZNVTtFQUNFLGdDQUFBO0FFSlo7QUZPVTtFQUNFLG9DQUFBO0FFTFo7QUZRVTtFQUNFLGtDQUFBO0FFTlo7QUZTVTtFQUNFLHFDQUFBO0FFUFo7QUZZTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUVWUjtBRllRO0VBQ0UsaUJBQUE7RUFDQSxjQzNHUztFRDRHVCxzQkFBQTtFQUNBLGdCQUFBO0FFVlY7QUZhUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQ3BIVztFRHFIWCxxQkFBQTtBRVhWO0FGYVU7RUFDRSxjQzdIRztFRDhISCwwQkFBQTtBRVhaO0FGY1U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLDhCQUFBO0FFWlo7QUZnQlE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUVkVjtBRmdCVTtFQUNFLGNDaEpDO0FDa0liO0FGaUJVO0VBQ0UsY0NwSkM7QUNxSWI7QUZrQlU7RUFDRSxzQkFBQTtBRWhCWjtBRm1CVTs7RUFFRSxjQzFKTztBQ3lJbkI7QUZvQlU7RUFDRSxnQkFBQTtBRWxCWjtBRnFCVTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBRW5CWjtBRnNCVTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FFcEJaO0FGc0JZO0VBQ0UsWUFBQTtFQUNBLHlCQ2pMSztFRGtMTCxjQ3BMRDtBQ2dLYjtBRnNCYztFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRXBCaEIiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbmFzaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogMzByZW07XG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgcGFkZGluZy10b3A6IDUuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBkaXYuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNS41cmVtKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuXG4gICAgJi5sZWZ0IHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogJHRleHRQcmltYXJ5Q29sb3I7XG4gICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHRleHRTZWN1bmRhcnlDb2xvcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJpZ2h0IHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG5cbiAgICAgIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzfSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGRpdi5yb3cge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogJHRleHRTZWN1bmRhcnlDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkaXYubmV0d29ya3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgICAgICAmLmdpdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXQuc3ZnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnR3aXR0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci5zdmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc2t5cGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2t5cGUuc3ZnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmxpbmtlZGluIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLnN2Zyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRpdi53cmFwcGVyLWZvcm0ge1xuICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjE1cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dFNlY3VuZGFyeUNvbG9yO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB3aWR0aDogMC44cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjhyZW07XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDAuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblxuICAgICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgICAgICBjb2xvcjogJGdyYXlOaWNrZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJGdyYXlOaWNrZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDZyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hdC1wcm9ncmVzcy1iYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtOHB4O1xuICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogZW5kO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgICAgY29sb3I6ICRwbGFpbldoaXRlO1xuXG4gICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHNtYXJ0cGhvbmVzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweClcIjtcbiRzbWFydHBob25lc19oOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcIjtcbiR0YWJsZXRzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KVwiO1xuJHRhYmxldHNfaDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKVwiO1xuJG1hY2Jvb2tfcHJvOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpXCI7XG4kYmlnc2NyZWVuOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTgyNHB4KVwiO1xuJHZpZGVvX2JlYW06IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpXCI7XG4kZGVza3RvcF9oaWdoZXI6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODFweClcIjtcbiRkZXNrdG9wOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpXCI7XG5cbiRtYXgtd2lkdGg6IDExNDBweDtcbiRwcmltYXJ5Q29sb3I6ICMxN2JlZDI7XG4kZ3JheU5pY2tlbDogI2NjY2NjYztcbiRwbGFpbldoaXRlOiAjZmFmYWZhO1xuJGltcHV0Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFByaW1hcnlDb2xvcjogIzUxNTc2YztcbiR0ZXh0U2VjdW5kYXJ5Q29sb3I6ICNhNmE3YWE7XG4kYm9yZGVyV2hpdGU6ICNmMGYwZjA7XG5cbkBtaXhpbiBpbWFnZS1yZXNwb25zaXZlKFxuICAkd2lkdGg6IDEwMCUsXG4gICRoZWlnaHQ6IDEwMCUsXG4gICRtYXJnaW46IDAsXG4gICRmaXQ6IGNvbnRhaW4sXG4gICRwb3NpdGlvbjogNTAlIDUwJSxcbiAgJGRpc3BsYXk6IGJsb2NrXG4pIHtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBtYXJnaW46ICRtYXJnaW47XG4gIG9iamVjdC1maXQ6ICRmaXQ7XG4gIG9iamVjdC1wb3NpdGlvbjogJHBvc2l0aW9uO1xufVxuXG5AbWl4aW4gbm8tc2VsZWN0KCRldmVudHM6IG5vbmUpIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjNzLCAkZWFzZTogbGluZWFyKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xufVxuXG5AbWl4aW4gdHJ1bmNhdGUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXM6IDMpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcbiAgdGV4dC1vdmVyZmxvdzogLW8tZWxsaXBzaXMtbGFzdGxpbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCJhc2lkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZy10b3A6IDUuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjVyZW0pO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ubGVmdCB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBhc2lkZSBkaXYuY29sdW1uLmxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbn1cbmFzaWRlIGRpdi5jb2x1bW4ubGVmdCBoMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzUxNTc2YztcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5sZWZ0IHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNhNmE3YWE7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi5yb3cgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2E2YTdhYTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2Lm5ldHdvcmtzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAwLjc1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi5uZXR3b3JrcyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICBwYWRkaW5nOiAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYubmV0d29ya3MgYS5naXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXQuc3ZnKTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2Lm5ldHdvcmtzIGEudHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIuc3ZnKTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2Lm5ldHdvcmtzIGEuc2t5cGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9za3lwZS5zdmcpO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYubmV0d29ya3MgYS5saW5rZWRpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLnN2Zyk7XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53cmFwcGVyLWZvcm0ge1xuICBtYXgtd2lkdGg6IDMwcmVtO1xuICBwYWRkaW5nOiAwIDAuNzVyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53cmFwcGVyLWZvcm0gaDUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICM1MTU3NmM7XG4gIG1hcmdpbi1ib3R0b206IDAuMTVyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53cmFwcGVyLWZvcm0gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjYTZhN2FhO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53cmFwcGVyLWZvcm0gYTpob3ZlciB7XG4gIGNvbG9yOiAjMTdiZWQyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBhIC5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAwLjhyZW07XG4gIGhlaWdodDogMC44cmVtO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwLjI1cmVtO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud3JhcHBlci1mb3JtIGZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBmb3JtIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud3JhcHBlci1mb3JtIGZvcm0gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud3JhcHBlci1mb3JtIGZvcm0gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBmb3JtIGlucHV0LFxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud3JhcHBlci1mb3JtIGZvcm0gdGV4dGFyZWEge1xuICBjb2xvcjogIzUxNTc2Yztcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBmb3JtIHRleHRhcmVhIHtcbiAgbWF4LWhlaWdodDogNnJlbTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBmb3JtIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IC0xMHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53cmFwcGVyLWZvcm0gZm9ybSAuYWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBmb3JtIC5hY3Rpb24gLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1NzZjO1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndyYXBwZXItZm9ybSBmb3JtIC5hY3Rpb24gLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"] });


/***/ }),

/***/ 4513:
/*!**********************************************************!*\
  !*** ./src/app/modules/contact/store/contact.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMail": () => (/* binding */ sendMail),
/* harmony export */   "sendMailFail": () => (/* binding */ sendMailFail),
/* harmony export */   "sendMailSuccess": () => (/* binding */ sendMailSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5778);

const sendMail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ContactModule] Send Mail Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const sendMailSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ContactModule] Send Mail Success Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const sendMailFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ContactModule] Send Mail Fail Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 9710:
/*!**********************************************************!*\
  !*** ./src/app/modules/contact/store/contact.effects.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactEffects": () => (/* binding */ ContactEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 1358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 610);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _contact_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.actions */ 4513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.service */ 9357);







class ContactEffects {
    constructor(actions$, contactService) {
        this.actions$ = actions$;
        this.contactService = contactService;
        this.sendAnalyticsEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)(action => this.contactService.sendMail(action.form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(formspreeResponse => (0,_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMailSuccess)({ formspreeResponse })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMailFail)({ error })))))));
    }
}
ContactEffects.ɵfac = function ContactEffects_Factory(t) { return new (t || ContactEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService)); };
ContactEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ContactEffects, factory: ContactEffects.ɵfac });


/***/ }),

/***/ 6841:
/*!*********************************************************!*\
  !*** ./src/app/modules/contact/store/contact.facade.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFacade": () => (/* binding */ ContactFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _contact_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.actions */ 4513);
/* harmony import */ var _contact_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.selectors */ 5668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ContactFacade {
    constructor(store) {
        this.store = store;
        this.getFormspreeResponse$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_contact_selectors__WEBPACK_IMPORTED_MODULE_1__.getFormspreeResponse));
    }
    sendMail(form) {
        this.store.dispatch((0,_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMail)({ form }));
    }
}
ContactFacade.ɵfac = function ContactFacade_Factory(t) { return new (t || ContactFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
ContactFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContactFacade, factory: ContactFacade.ɵfac });


/***/ }),

/***/ 7961:
/*!*********************************************************!*\
  !*** ./src/app/modules/contact/store/contact.models.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialContactState": () => (/* binding */ InitialContactState),
/* harmony export */   "adapter": () => (/* binding */ adapter)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 2524);

const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)();
const InitialContactState = adapter.getInitialState({
    formspreeResponse: null,
    error: null
});


/***/ }),

/***/ 2636:
/*!**********************************************************!*\
  !*** ./src/app/modules/contact/store/contact.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTACT_FEATURE_KEY": () => (/* binding */ CONTACT_FEATURE_KEY),
/* harmony export */   "ContactReducer": () => (/* binding */ ContactReducer),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _contact_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.actions */ 4513);
/* harmony import */ var _contact_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.models */ 7961);



const CONTACT_FEATURE_KEY = 'ContactState';
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_contact_models__WEBPACK_IMPORTED_MODULE_1__.InitialContactState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMail, (state, { form }) => (Object.assign(Object.assign({}, state), { formspreeResponse: null, error: null, form }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMailSuccess, (state, { formspreeResponse }) => (Object.assign(Object.assign({}, state), { formspreeResponse }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_contact_actions__WEBPACK_IMPORTED_MODULE_0__.sendMailFail, (state, { error }) => (Object.assign(Object.assign({}, state), { error }))));
function ContactReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ 5668:
/*!************************************************************!*\
  !*** ./src/app/modules/contact/store/contact.selectors.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormspreeResponse": () => (/* binding */ getFormspreeResponse),
/* harmony export */   "selectContactState": () => (/* binding */ selectContactState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _contact_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.reducer */ 2636);


const selectContactState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_contact_reducer__WEBPACK_IMPORTED_MODULE_0__.CONTACT_FEATURE_KEY);
const getFormspreeResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectContactState, (state) => state.formspreeResponse);


/***/ }),

/***/ 9357:
/*!**********************************************************!*\
  !*** ./src/app/modules/contact/store/contact.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ContactService {
    constructor(http) {
        this.http = http;
    }
    emailValidator(control) {
        if (control &&
            control.value &&
            control.value.match(
            // tslint:disable-next-line: max-line-length
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    }
    sendMail(form) {
        return this.http.post('https://formspree.io/f/mgepyarr', form);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_contact_contact_module_ts.js.map