"use strict";
(self["webpackChunkjeison_nisperuza"] = self["webpackChunkjeison_nisperuza"] || []).push([["src_app_modules_resume_resume_module_ts"],{

/***/ 6582:
/*!*********************************************************!*\
  !*** ./src/app/modules/resume/resume-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeRoutingModule": () => (/* binding */ ResumeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume/resume.component */ 5989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent
    }];
class ResumeRoutingModule {
}
ResumeRoutingModule.ɵfac = function ResumeRoutingModule_Factory(t) { return new (t || ResumeRoutingModule)(); };
ResumeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ResumeRoutingModule });
ResumeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResumeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8615:
/*!*************************************************!*\
  !*** ./src/app/modules/resume/resume.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeModule": () => (/* binding */ ResumeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume-routing.module */ 6582);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume/resume.component */ 5989);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-ui/material-ui.module */ 6340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ResumeModule {
}
ResumeModule.ɵfac = function ResumeModule_Factory(t) { return new (t || ResumeModule)(); };
ResumeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumeRoutingModule,
            _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__.MaterialUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumeRoutingModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_2__.MaterialUiModule] }); })();


/***/ }),

/***/ 5989:
/*!***********************************************************!*\
  !*** ./src/app/modules/resume/resume/resume.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2544);







function ResumeComponent_ng_container_0_object_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "object", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResumeComponent_ng_container_0_object_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function ResumeComponent_ng_container_0_object_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "object", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResumeComponent_ng_container_0_object_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function ResumeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "aside", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResumeComponent_ng_container_0_object_2_Template, 5, 0, "object", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ResumeComponent_ng_container_0_object_3_Template, 5, 0, "object", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const activeLang_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", activeLang_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "en");
} }
class ResumeComponent {
    constructor(appFacade, router, translate) {
        this.appFacade = appFacade;
        this.router = router;
        this.translate = translate;
    }
    ngOnInit() {
        this.lang = this.translate.currentLang;
        this.appFacade.setItIsHome(false);
        this.getResumeByLanguage();
    }
    open() {
        this.appFacade.sendAnalyticsEvent('open_resume', 'menu', this.lang, 'click');
    }
    getResumeByLanguage() {
        switch (this.lang) {
            case 'es':
                this.resume = 'assets/docs/JeisonNisperuzaES.pdf';
                break;
            case 'en':
                this.resume = 'assets/docs/JeisonNisperuzaEN.pdf';
                break;
            default:
                this.resume = 'assets/docs/JeisonNisperuzaES.pdf';
                break;
        }
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_0__.AppFacade), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "ngSwitch"], ["data", "assets/docs/JeisonNisperuzaES.pdf#&navpanes=0&scrollbar=0&view=fitH", "type", "application/pdf", 4, "ngSwitchCase"], ["data", "assets/docs/JeisonNisperuzaEN.pdf#&navpanes=0&scrollbar=0&view=fitH", "type", "application/pdf", 4, "ngSwitchCase"], ["data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"] `assets/docs/JeisonNisperuzaES.pdf#&navpanes=0&scrollbar=0&view=fitH`, "type", "application/pdf"], ["src", "assets/docs/JeisonNisperuzaES.jpg", "alt", "JeisonNisperuzaES"], ["mat-mini-fab", "", "color", "accent", "aria-label", "download-pdf", "href", "assets/docs/JeisonNisperuzaES.pdf#&navpanes=0&scrollbar=0&view=fitH", "aria-label", "JeisonNisperuzaES", "download", "", 1, "download-pdf", 3, "click"], ["data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"] `assets/docs/JeisonNisperuzaEN.pdf#&navpanes=0&scrollbar=0&view=fitH`, "type", "application/pdf"], ["src", "assets/docs/JeisonNisperuzaEN.jpg", "alt", "JeisonNisperuzaEN"], ["mat-mini-fab", "", "color", "accent", "aria-label", "download-pdf", "href", "assets/docs/JeisonNisperuzaEN.pdf#&navpanes=0&scrollbar=0&view=fitH", "aria-label", "JeisonNisperuzaEN", "download", "", 1, "download-pdf", 3, "click"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ResumeComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.appFacade.activeLang$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["aside[_ngcontent-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  min-height: 30rem;\n  max-width: 1140px;\n  padding-top: 5.5rem;\n  position: relative;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n  }\n}\naside[_ngcontent-%COMP%]   object[_ngcontent-%COMP%] {\n  display: block;\n  outline: none;\n  width: 100%;\n  height: calc(100% - 20px);\n}\naside[_ngcontent-%COMP%]   object[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  object-fit: contain;\n  object-position: 50% 50%;\n}\naside[_ngcontent-%COMP%]   a.download-pdf[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 4.5rem;\n  left: 1rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   a.download-pdf[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9XZWIlMjBQcm9qZWN0cy9qZWlzb24tbmlzcGVydXphL3NyYy9hcHAvbW9kdWxlcy9yZXN1bWUvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJDR1U7RURGVixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FFREY7QUZHRTtFQVhGO0lBWUksaUJBQUE7RUVBRjtBQUNGO0FGRUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRUFKO0FGRUk7RUNJRjsyREFBQTtFQUVBLGNBSlU7RUFLVixXRE44QjtFQ085QixZRFBvQztFQ1FwQyxZRFIwQztFQ1MxQyxtQkRUZ0Q7RUNVaEQsd0JBVlc7QUNPYjtBRkhFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRUtKO0FGSEk7RUFORjtJQU9JLGNBQUE7RUVNSjtBQUNGIiwiZmlsZSI6InJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbmFzaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogMzByZW07XG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgcGFkZGluZy10b3A6IDUuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICB9XG5cbiAgb2JqZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG5cbiAgICBpbWcge1xuICAgICAgQGluY2x1ZGUgaW1hZ2UtcmVzcG9uc2l2ZSgxMDAlLCAxMDAlLCBhdXRvLCBjb250YWluKTtcbiAgICB9XG4gIH1cblxuICBhLmRvd25sb2FkLXBkZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0LjVyZW07XG4gICAgbGVmdDogMXJlbTtcblxuICAgIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzfSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiIsIiRzbWFydHBob25lczogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpXCI7XG4kc21hcnRwaG9uZXNfaDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpXCI7XG4kdGFibGV0czogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweClcIjtcbiR0YWJsZXRzX2g6IFwib25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcIjtcbiRtYWNib29rX3BybzogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KVwiO1xuJGJpZ3NjcmVlbjogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE4MjRweClcIjtcbiR2aWRlb19iZWFtOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KVwiO1xuJGRlc2t0b3BfaGlnaGVyOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgxcHgpXCI7XG4kZGVza3RvcDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KVwiO1xuXG4kbWF4LXdpZHRoOiAxMTQwcHg7XG4kcHJpbWFyeUNvbG9yOiAjMTdiZWQyO1xuJGdyYXlOaWNrZWw6ICNjY2NjY2M7XG4kcGxhaW5XaGl0ZTogI2ZhZmFmYTtcbiRpbXB1dENvbG9yOiAjNTE1NzZjO1xuJHRleHRQcmltYXJ5Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFNlY3VuZGFyeUNvbG9yOiAjYTZhN2FhO1xuJGJvcmRlcldoaXRlOiAjZjBmMGYwO1xuXG5AbWl4aW4gaW1hZ2UtcmVzcG9uc2l2ZShcbiAgJHdpZHRoOiAxMDAlLFxuICAkaGVpZ2h0OiAxMDAlLFxuICAkbWFyZ2luOiAwLFxuICAkZml0OiBjb250YWluLFxuICAkcG9zaXRpb246IDUwJSA1MCUsXG4gICRkaXNwbGF5OiBibG9ja1xuKSB7XG4gIC8qIGZpdCB2YWx1ZXM6IGNvbnRhaW4sIGNvdmVyXG4gICAgICogcG9zaXRpb24gdmFsdWVzOiA1MCUgNTAlLCB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgKi9cbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgbWFyZ2luOiAkbWFyZ2luO1xuICBvYmplY3QtZml0OiAkZml0O1xuICBvYmplY3QtcG9zaXRpb246ICRwb3NpdGlvbjtcbn1cblxuQG1peGluIG5vLXNlbGVjdCgkZXZlbnRzOiBub25lKSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyB7XG4gIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC4zcywgJGVhc2U6IGxpbmVhcikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbn1cblxuQG1peGluIHRydW5jYXRlKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzOiAzKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XG4gIHRleHQtb3ZlcmZsb3c6IC1vLWVsbGlwc2lzLWxhc3RsaW5lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiYXNpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmctdG9wOiA1LjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUge1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICB9XG59XG5hc2lkZSBvYmplY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5hc2lkZSBvYmplY3QgaW1nIHtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG59XG5hc2lkZSBhLmRvd25sb2FkLXBkZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0LjVyZW07XG4gIGxlZnQ6IDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgYS5kb3dubG9hZC1wZGYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_resume_resume_module_ts.js.map