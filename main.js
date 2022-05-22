"use strict";
(self["webpackChunkjeison_nisperuza"] = self["webpackChunkjeison_nisperuza"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then((module) => module.HomeModule)
    }, {
        path: 'about',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about/about.module */ 5702)).then((module) => module.AboutModule)
    }, {
        path: 'portfolio',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/portfolio/portfolio.module */ 1921)).then((module) => module.PortfolioModule)
    }, {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contact/contact.module */ 3033)).then((module) => module.ContactModule)
    }, {
        path: 'resume',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_resume_resume_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/resume/resume.module */ 8615)).then((module) => module.ResumeModule)
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-confirmation/modal-confirmation.component */ 2602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_app_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/app.facade */ 6377);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 3351);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation/translation.component */ 9594);












const _c0 = function (a0) { return { white: a0 }; };
const _c1 = function (a0) { return { "is-active": a0 }; };
const _c2 = function () { return ["/home"]; };
const _c3 = function () { return ["active"]; };
const _c4 = function () { return { exact: true }; };
const _c5 = function () { return ["/about"]; };
const _c6 = function () { return ["/portfolio"]; };
const _c7 = function () { return ["/contact"]; };
const _c8 = function () { return ["/resume"]; };
class AppComponent {
    constructor(appFacade, router, ref, dialog, swUpdate, translate) {
        this.appFacade = appFacade;
        this.router = router;
        this.ref = ref;
        this.dialog = dialog;
        this.swUpdate = swUpdate;
        this.translate = translate;
        this.title = 'Jeison Nisperuza';
        this.itIsHome = false;
        this.isMenuOpened = false;
        this.currentYear = new Date().getFullYear();
    }
    clickOutside() {
        this.isMenuOpened = false;
    }
    ngOnInit() {
        // Google analytics
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterEvent)).subscribe((e) => {
            gtag('config', 'UA-186099970-1', {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                page_path: e.url
            });
        });
        // Verify update
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                this.showUpdateMessage();
            });
        }
    }
    /**
     * @description To ignore ExpressionChangedAfterItHasBeenCheckedError
     */
    ngAfterContentChecked() {
        this.ref.detectChanges();
    }
    toggleMenu(event) {
        event.stopPropagation();
        this.isMenuOpened = !this.isMenuOpened;
    }
    showUpdateMessage() {
        const dialogRef = this.dialog.open(_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmationComponent, {
            data: {
                type: 'SUCCESS',
                title: this.translate.instant('GENERAL.update'),
                message: this.translate.instant('APP.message_update_software')
            }
        });
        dialogRef.afterClosed().subscribe(() => {
            window.location.reload();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_store_app_facade__WEBPACK_IMPORTED_MODULE_1__.AppFacade), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler() { return ctx.clickOutside(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    } }, decls: 32, vars: 69, consts: [[3, "ngClass"], ["name", "hamburger", "type", "button", 1, "hamburger", "hamburger--squeeze", 3, "ngClass", "click"], [1, "hamburger-box"], [1, "hamburger-inner"], [3, "darkVersion", "close", "itsOpen"], ["name", "home", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["name", "about", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["name", "portfolio", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["name", "contact", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["name", "resume", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["src", "assets/images/logo.svg", "alt", "logo", 1, "logo"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "aside")(1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener($event) { return ctx.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-toolbar-row", 0)(7, "app-translation", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("itsOpen", function AppComponent_Template_app_translation_itsOpen_7_listener() { return ctx.isMenuOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](46, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 28, ctx.appFacade.itIsHome$) === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](48, _c1, ctx.isMenuOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](50, _c1, ctx.isMenuOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("darkVersion", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 30, ctx.appFacade.itIsHome$))("close", ctx.isMenuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](52, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](53, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](54, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 32, "APP.home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](55, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](56, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](57, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 34, "APP.about_me"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](58, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](59, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](60, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 36, "APP.experience"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](61, _c7))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](62, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](63, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 38, "APP.contact"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](64, _c8))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](65, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](66, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 40, "APP.resume"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](67, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 42, ctx.appFacade.itIsHome$) === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" \u00A9 ", ctx.currentYear, " Jeison Nisperuza, ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 44, "APP.all_rights_reserved"), ". ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarRow, _translation_translation_component__WEBPACK_IMPORTED_MODULE_2__.TranslationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".hamburger[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n.hamburger[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], .hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  background-color: #000;\n}\n.hamburger-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n}\n.hamburger-inner[_ngcontent-%COMP%] {\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n}\n.hamburger-inner[_ngcontent-%COMP%], .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger-inner[_ngcontent-%COMP%]::after {\n  width: 40px;\n  height: 4px;\n  background-color: #000;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n.hamburger-inner[_ngcontent-%COMP%]::before, .hamburger-inner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n}\n.hamburger-inner[_ngcontent-%COMP%]::before {\n  top: -10px;\n}\n.hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: -10px;\n}\n\n.hamburger--3dx[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  perspective: 80px;\n}\n.hamburger--3dx[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--3dx[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  transform: rotateY(180deg);\n}\n.hamburger--3dx.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--3dx.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n}\n\n.hamburger--3dx-r[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  perspective: 80px;\n}\n.hamburger--3dx-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--3dx-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dx-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  transform: rotateY(-180deg);\n}\n.hamburger--3dx-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--3dx-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n}\n\n.hamburger--3dy[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  perspective: 80px;\n}\n.hamburger--3dy[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--3dy[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  transform: rotateX(-180deg);\n}\n.hamburger--3dy.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--3dy.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n}\n\n.hamburger--3dy-r[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  perspective: 80px;\n}\n.hamburger--3dy-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--3dy-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dy-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  transform: rotateX(180deg);\n}\n.hamburger--3dy-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--3dy-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n}\n\n.hamburger--3dxy[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  perspective: 80px;\n}\n.hamburger--3dxy[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--3dxy[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg);\n}\n.hamburger--3dxy.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--3dxy.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n}\n\n.hamburger--3dxy-r[_ngcontent-%COMP%]   .hamburger-box[_ngcontent-%COMP%] {\n  perspective: 80px;\n}\n.hamburger--3dxy-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--3dxy-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.hamburger--3dxy-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);\n}\n.hamburger--3dxy-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--3dxy-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n}\n\n.hamburger--arrow.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n.hamburger--arrow.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n\n.hamburger--arrow-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n.hamburger--arrow-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n\n.hamburger--arrowalt[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n.hamburger--arrowalt.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n\n.hamburger--arrowalt-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.hamburger--arrowalt-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n.hamburger--arrowalt-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n\n.hamburger--arrowturn.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.hamburger--arrowturn.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n.hamburger--arrowturn.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n\n.hamburger--arrowturn-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.hamburger--arrowturn-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n}\n.hamburger--arrowturn-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n}\n\n.hamburger--boring[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], .hamburger--boring[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--boring[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-property: none;\n}\n.hamburger--boring.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.hamburger--boring.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n}\n.hamburger--boring.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n}\n\n.hamburger--collapse[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n}\n.hamburger--collapse[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--collapse.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n}\n.hamburger--collapse.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--collapse-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n}\n.hamburger--collapse-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--collapse-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, -10px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--collapse-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n}\n.hamburger--collapse-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--elastic[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 10px;\n  transition: opacity 0.125s 0.275s ease;\n}\n.hamburger--elastic[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 20px;\n  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, 10px, 0) rotate(135deg);\n  transition-delay: 0.075s;\n}\n.hamburger--elastic.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition-delay: 0s;\n  opacity: 0;\n}\n.hamburger--elastic.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -20px, 0) rotate(-270deg);\n  transition-delay: 0.075s;\n}\n\n.hamburger--elastic-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 10px;\n  transition: opacity 0.125s 0.275s ease;\n}\n.hamburger--elastic-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 20px;\n  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.hamburger--elastic-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, 10px, 0) rotate(-135deg);\n  transition-delay: 0.075s;\n}\n.hamburger--elastic-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition-delay: 0s;\n  opacity: 0;\n}\n.hamburger--elastic-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -20px, 0) rotate(270deg);\n  transition-delay: 0.075s;\n}\n\n.hamburger--emphatic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.hamburger--emphatic[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: background-color 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important;\n}\n.hamburger--emphatic.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  left: -80px;\n  top: -80px;\n  transform: translate3d(80px, 80px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.hamburger--emphatic.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  right: -80px;\n  top: -80px;\n  transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.hamburger--emphatic-r[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.hamburger--emphatic-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: background-color 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n}\n.hamburger--emphatic-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important;\n}\n.hamburger--emphatic-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  left: -80px;\n  top: 80px;\n  transform: translate3d(80px, -80px, 0) rotate(-45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.hamburger--emphatic-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  right: -80px;\n  top: 80px;\n  transform: translate3d(-80px, -80px, 0) rotate(45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.hamburger--minus[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--minus[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;\n}\n.hamburger--minus.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--minus.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;\n}\n.hamburger--minus.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n.hamburger--minus.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n\n.hamburger--slider[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.hamburger--slider[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 10px;\n  transition-property: transform, opacity;\n  transition-timing-function: ease;\n  transition-duration: 0.15s;\n}\n.hamburger--slider[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 20px;\n}\n.hamburger--slider.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--slider.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg) translate3d(-5.7142857143px, -6px, 0);\n  opacity: 0;\n}\n.hamburger--slider.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -20px, 0) rotate(-90deg);\n}\n\n.hamburger--slider-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.hamburger--slider-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 10px;\n  transition-property: transform, opacity;\n  transition-timing-function: ease;\n  transition-duration: 0.15s;\n}\n.hamburger--slider-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 20px;\n}\n.hamburger--slider-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, 10px, 0) rotate(-45deg);\n}\n.hamburger--slider-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg) translate3d(5.7142857143px, -6px, 0);\n  opacity: 0;\n}\n.hamburger--slider-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, -20px, 0) rotate(90deg);\n}\n\n.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\n.hamburger--spin[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spin.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n.hamburger--spin.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--spin-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n}\n.hamburger--spin-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spin-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spin-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n.hamburger--spin-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--spring[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: 2px;\n  transition: background-color 0s 0.13s linear;\n}\n.hamburger--spring[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 10px;\n  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-delay: 0.22s;\n  background-color: transparent !important;\n}\n.hamburger--spring.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n}\n.hamburger--spring.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 10px, 0) rotate(-45deg);\n}\n\n.hamburger--spring-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;\n}\n.hamburger--spring-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--spring-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--spring-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;\n}\n.hamburger--spring-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--stand[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n}\n.hamburger--stand[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n}\n.hamburger--stand.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--stand.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--stand-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n}\n.hamburger--stand-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--stand-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n}\n.hamburger--stand-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--stand-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--squeeze[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--squeeze[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition: top 0.075s 0.12s ease, opacity 0.075s ease;\n}\n.hamburger--squeeze[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--squeeze.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.hamburger--squeeze.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.075s ease, opacity 0.075s 0.12s ease;\n}\n.hamburger--squeeze.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.hamburger--vortex[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--vortex[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n}\n.hamburger--vortex[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition-property: top, opacity;\n}\n.hamburger--vortex[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-property: bottom, transform;\n}\n.hamburger--vortex.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--vortex.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-delay: 0s;\n}\n.hamburger--vortex.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n}\n.hamburger--vortex.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(90deg);\n}\n\n.hamburger--vortex-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--vortex-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n}\n.hamburger--vortex-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  transition-property: top, opacity;\n}\n.hamburger--vortex-r[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-property: bottom, transform;\n}\n.hamburger--vortex-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.hamburger--vortex-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger--vortex-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  transition-delay: 0s;\n}\n.hamburger--vortex-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  opacity: 0;\n}\n.hamburger--vortex-r.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n}\naside[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n}\naside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 5.5rem;\n  float: left;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  transition-duration: 0.3s;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);\n  z-index: 999;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n    height: 2.5rem;\n    background-color: #fafafa;\n  }\n}\n@media screen and (max-width: 1230px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n    padding-right: 4rem;\n  }\n}\naside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%] {\n    display: block;\n    height: 3.5rem;\n    cursor: pointer;\n    outline: none;\n    padding: 1rem;\n  }\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%]   span.hamburger-box[_ngcontent-%COMP%] {\n    width: 2rem;\n    color: #51576c;\n  }\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%]   span.hamburger-box[_ngcontent-%COMP%]   span.hamburger-inner[_ngcontent-%COMP%] {\n    width: 2rem;\n    background-color: #51576c;\n  }\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%]   span.hamburger-box[_ngcontent-%COMP%]   span.hamburger-inner[_ngcontent-%COMP%]::after {\n    width: 2rem;\n    background-color: #51576c;\n  }\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%]   span.hamburger-box[_ngcontent-%COMP%]   span.hamburger-inner[_ngcontent-%COMP%]::before {\n    width: 2rem;\n    background-color: #51576c;\n  }\n}\naside[_ngcontent-%COMP%]   .mat-toolbar.white[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-bottom-color: #f0f0f0;\n}\naside[_ngcontent-%COMP%]   .mat-toolbar.white[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #51576c;\n}\naside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  justify-content: flex-end;\n  padding-right: 4rem;\n  max-width: 1140px;\n  position: relative;\n  margin: 0 auto;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  transition: all 0.3s ease-out;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    background-color: #fafafa;\n    height: 0;\n    padding: 0;\n    padding-right: 0 !important;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  }\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row.is-active[_ngcontent-%COMP%] {\n    height: 10rem;\n    top: 3.5rem;\n  }\n}\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%] {\n    padding-right: 8rem;\n  }\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   app-translation[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 1.3rem;\n    right: 3rem;\n  }\n}\naside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  padding: 20px;\n  background-color: transparent;\n  margin: 0 0.75rem 0 0;\n  text-transform: uppercase;\n  font-family: \"Hind\", sans-serif;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: #fafafa;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 2rem;\n    padding: 0.2rem 1rem;\n    color: #51576c;\n    font-size: 0.7rem;\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    color: #fafafa;\n    background-color: #17bed2;\n  }\n}\naside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::before, aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0.8rem;\n  height: 0.2rem;\n  background-color: #17bed2;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::before, aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::before {\n    display: none;\n  }\n}\naside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);\n  \n  display: block;\n  width: 3rem;\n  height: 3rem;\n  margin: auto;\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0.7rem;\n    right: 0.7rem;\n    \n    display: block;\n    width: 2rem;\n    height: 2rem;\n    margin: inherit;\n    object-fit: cover;\n    object-position: 50% 50%;\n  }\n}\naside[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n}\naside[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  cursor: default;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  padding: 0.25rem;\n  box-sizing: border-box;\n  background-color: rgba(255, 255, 255, 0.2);\n  z-index: 1500;\n}\naside[_ngcontent-%COMP%]   footer.white[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.85);\n}\naside[_ngcontent-%COMP%]   footer.white[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(81, 87, 108, 0.8);\n}\naside[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvaGFtYnVyZ2Vycy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy9fYmFzZS5zY3NzIiwiLi4vLi4vLi4vLi4vV2ViJTIwUHJvamVjdHMvamVpc29uLW5pc3BlcnV6YS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvXzNkeC5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fM2R4LXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvXzNkeS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fM2R5LXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvXzNkeHkuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvXzNkeHktci5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fYXJyb3cuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvX2Fycm93LXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvX2Fycm93YWx0LnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19hcnJvd2FsdC1yLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19hcnJvd3R1cm4uc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvX2Fycm93dHVybi1yLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19ib3Jpbmcuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvX2NvbGxhcHNlLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19jb2xsYXBzZS1yLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19lbGFzdGljLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19lbGFzdGljLXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvX2VtcGhhdGljLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19lbXBoYXRpYy1yLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19taW51cy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fc2xpZGVyLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19zbGlkZXItci5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fc3Bpbi5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fc3Bpbi1yLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19zcHJpbmcuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9oYW1idXJnZXJzL19zYXNzL2hhbWJ1cmdlcnMvdHlwZXMvX3NwcmluZy1yLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL19zdGFuZC5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fc3RhbmQtci5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fc3F1ZWV6ZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2hhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy90eXBlcy9fdm9ydGV4LnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGFtYnVyZ2Vycy9fc2Fzcy9oYW1idXJnZXJzL3R5cGVzL192b3J0ZXgtci5zY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7O0VBQUE7QUNDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBR0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEREU7RUFLSSxZRFAyQjtBRU1qQztBRE1JO0VBS0ksWURqQnlCO0FFU2pDO0FEWUk7OztFQUdFLHNCRDFCMkI7QUVnQmpDO0FEZUE7RUFDRSxXRG5DK0I7RUNvQy9CLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDWkY7QURlQTtFQUNFLGNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNaRjtBRGNFO0VBR0UsV0RqRDZCO0VDa0Q3QixXRGpENkI7RUNrRDdCLHNCRGhENkI7RUNpRDdCLGtCRGhENkI7RUNpRDdCLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDZEo7QURpQkU7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQ2hCSjtBRG1CRTtFQUNFLFVBQUE7QUNqQko7QURvQkU7RUFDRSxhQUFBO0FDbEJKO0FDaEVFOztFQUFBO0FBSUU7RUFDRSxpQkFBQTtBRGtFTjtBQy9ESTtFQUNFLCtIQUFBO0FEaUVOO0FDOURNO0VBRUUsa0VBQUE7QUQrRFI7QUMxRE07RUFDRSx3Q0FBQTtFQUNBLDBCQUFBO0FENERSO0FDMURRO0VBQ0UsZ0RBQUE7QUQ0RFY7QUN6RFE7RUFDRSxrREFBQTtBRDJEVjtBRXZGRTs7RUFBQTtBQUlFO0VBQ0UsaUJBQUE7QUZ5Rk47QUV0Rkk7RUFDRSwrSEFBQTtBRndGTjtBRXJGTTtFQUVFLGtFQUFBO0FGc0ZSO0FFakZNO0VBQ0Usd0NBQUE7RUFDQSwyQkFBQTtBRm1GUjtBRWpGUTtFQUNFLGdEQUFBO0FGbUZWO0FFaEZRO0VBQ0Usa0RBQUE7QUZrRlY7QUc5R0U7O0VBQUE7QUFJRTtFQUNFLGlCQUFBO0FIZ0hOO0FHN0dJO0VBQ0UsK0hBQUE7QUgrR047QUc1R007RUFFRSxrRUFBQTtBSDZHUjtBR3hHTTtFQUNFLHdDQUFBO0VBQ0EsMkJBQUE7QUgwR1I7QUd4R1E7RUFDRSxnREFBQTtBSDBHVjtBR3ZHUTtFQUNFLGtEQUFBO0FIeUdWO0FJcklFOztFQUFBO0FBSUU7RUFDRSxpQkFBQTtBSnVJTjtBSXBJSTtFQUNFLCtIQUFBO0FKc0lOO0FJbklNO0VBRUUsa0VBQUE7QUpvSVI7QUkvSE07RUFDRSx3Q0FBQTtFQUNBLDBCQUFBO0FKaUlSO0FJL0hRO0VBQ0UsZ0RBQUE7QUppSVY7QUk5SFE7RUFDRSxrREFBQTtBSmdJVjtBSzVKRTs7RUFBQTtBQUlFO0VBQ0UsaUJBQUE7QUw4Sk47QUszSkk7RUFDRSwrSEFBQTtBTDZKTjtBSzFKTTtFQUVFLGtFQUFBO0FMMkpSO0FLdEpNO0VBQ0Usd0NBQUE7RUFDQSwwQ0FBQTtBTHdKUjtBS3RKUTtFQUNFLGdEQUFBO0FMd0pWO0FLckpRO0VBQ0Usa0RBQUE7QUx1SlY7QU1uTEU7O0VBQUE7QUFJRTtFQUNFLGlCQUFBO0FOcUxOO0FNbExJO0VBQ0UsK0hBQUE7QU5vTE47QU1qTE07RUFFRSxrRUFBQTtBTmtMUjtBTTdLTTtFQUNFLHdDQUFBO0VBQ0EsMkRBQUE7QU4rS1I7QU03S1E7RUFDRSxnREFBQTtBTitLVjtBTTVLUTtFQUNFLGtEQUFBO0FOOEtWO0FPMU1FOztFQUFBO0FBS0k7RUFDRSwrREFBQTtBUDJNUjtBT3hNTTtFQUNFLDhEQUFBO0FQME1SO0FRcE5FOztFQUFBO0FBS0k7RUFDRSw2REFBQTtBUnFOUjtBUWxOTTtFQUNFLDhEQUFBO0FSb05SO0FTOU5FOztFQUFBO0FBS0k7RUFDRSxpRkFBQTtBVCtOUjtBUzNOTTtFQUNFLG9GQUFBO0FUNk5SO0FTdE5RO0VBQ0UsTUFBQTtFQUNBLG1FQUFBO0VBQ0EscUZBQUE7QVR3TlY7QVNwTlE7RUFDRSxTQUFBO0VBQ0EsaUVBQUE7RUFDQSx3RkFBQTtBVHNOVjtBVWxQRTs7RUFBQTtBQUtJO0VBQ0UsaUZBQUE7QVZtUFI7QVUvT007RUFDRSxvRkFBQTtBVmlQUjtBVTFPUTtFQUNFLE1BQUE7RUFDQSxpRUFBQTtFQUNBLHFGQUFBO0FWNE9WO0FVeE9RO0VBQ0UsU0FBQTtFQUNBLGlFQUFBO0VBQ0Esd0ZBQUE7QVYwT1Y7QVd0UUU7O0VBQUE7QUFJRTtFQUNFLDBCQUFBO0FYd1FOO0FXdFFNO0VBQ0UsNkRBQUE7QVh3UVI7QVdyUU07RUFDRSw4REFBQTtBWHVRUjtBWW5SRTs7RUFBQTtBQUlFO0VBQ0UsMEJBQUE7QVpxUk47QVluUk07RUFDRSwrREFBQTtBWnFSUjtBWWxSTTtFQUNFLDhEQUFBO0Fab1JSO0FhaFNFOztFQUFBO0FBS0k7RUFHRSx5QkFBQTtBYitSUjtBYTFSTTtFQUNFLHdCQUFBO0FiNFJSO0FhMVJRO0VBQ0UsTUFBQTtFQUNBLFVBQUE7QWI0UlY7QWF6UlE7RUFDRSxTQUFBO0VBQ0EseUJBQUE7QWIyUlY7QWNsVEU7O0VBQUE7QUFJRTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtFQUFBO0Fkb1ROO0FjbFRNO0VBQ0UsVUFBQTtFQUNBLHlGQUFBO0Fkb1RSO0FjaFRNO0VBQ0UsNkhBQUE7QWRrVFI7QWM1U007RUFDRSxrREFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7QWQ4U1I7QWM1U1E7RUFDRSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBGQUFBO0FkOFNWO0FjMVNRO0VBQ0UsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0lBQUE7QWQ0U1Y7QWVuVkU7O0VBQUE7QUFJRTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtFQUFBO0FmcVZOO0FlblZNO0VBQ0UsVUFBQTtFQUNBLHlGQUFBO0FmcVZSO0FlalZNO0VBQ0UsNkhBQUE7QWZtVlI7QWU3VU07RUFDRSxpREFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7QWYrVVI7QWU3VVE7RUFDRSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBGQUFBO0FmK1VWO0FlM1VRO0VBQ0UsTUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0lBQUE7QWY2VVY7QWdCcFhFOztFQUFBO0FBSUU7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrRUFBQTtBaEJzWE47QWdCcFhNO0VBQ0UsU0FBQTtFQUNBLHNDQUFBO0FoQnNYUjtBZ0JuWE07RUFDRSxTQUFBO0VBQ0EsbUVBQUE7QWhCcVhSO0FnQmhYTTtFQUdFLGlEQUFBO0VBQ0Esd0JBQUE7QWhCZ1hSO0FnQjlXUTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtBaEJnWFY7QWdCN1dRO0VBQ0UsbURBQUE7RUFDQSx3QkFBQTtBaEIrV1Y7QWlCalpFOztFQUFBO0FBSUU7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrRUFBQTtBakJtWk47QWlCalpNO0VBQ0UsU0FBQTtFQUNBLHNDQUFBO0FqQm1aUjtBaUJoWk07RUFDRSxTQUFBO0VBQ0EsbUVBQUE7QWpCa1pSO0FpQjdZTTtFQUdFLGtEQUFBO0VBQ0Esd0JBQUE7QWpCNllSO0FpQjNZUTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtBakI2WVY7QWlCMVlRO0VBQ0Usa0RBQUE7RUFDQSx3QkFBQTtBakI0WVY7QWtCOWFFOztFQUFBO0FBR0E7RUFDRSxnQkFBQTtBbEJpYko7QWtCL2FJO0VBQ0Usa0RBQUE7QWxCaWJOO0FrQi9hTTtFQUNFLE9BQUE7RUFDQSxzSEFBQTtBbEJpYlI7QWtCNWFNO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSx1SEFBQTtBbEI4YVI7QWtCdmFNO0VBQ0Usb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0FsQnlhUjtBa0J2YVE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0hBQUE7QWxCeWFWO0FrQnBhUTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EscURBQUE7RUFDQSx1SEFBQTtBbEJzYVY7QW1CbGRFOztFQUFBO0FBR0E7RUFDRSxnQkFBQTtBbkJxZEo7QW1CbmRJO0VBQ0Usa0RBQUE7QW5CcWROO0FtQm5kTTtFQUNFLE9BQUE7RUFDQSxzSEFBQTtBbkJxZFI7QW1CaGRNO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSx1SEFBQTtBbkJrZFI7QW1CM2NNO0VBQ0Usb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0FuQjZjUjtBbUIzY1E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFEQUFBO0VBQ0Esc0hBQUE7QW5CNmNWO0FtQnhjUTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EscURBQUE7RUFDQSx1SEFBQTtBbkIwY1Y7QW9CdGZFOztFQUFBO0FBS0k7RUFFRSw4RUFBQTtBcEJzZlI7QW9COWVRO0VBRUUsVUFBQTtFQUNBLDhFQUFBO0FwQitlVjtBb0IzZVE7RUFDRSxNQUFBO0FwQjZlVjtBb0IxZVE7RUFDRSxTQUFBO0FwQjRlVjtBcUJ2Z0JFOztFQUFBO0FBSUU7RUFDRSxRQUFBO0FyQnlnQk47QXFCdmdCTTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QXJCeWdCUjtBcUJ0Z0JNO0VBQ0UsU0FBQTtBckJ3Z0JSO0FxQm5nQk07RUFHRSxnREFBQTtBckJtZ0JSO0FxQmpnQlE7RUFDRSwrREFBQTtFQUNBLFVBQUE7QXJCbWdCVjtBcUJoZ0JRO0VBQ0Usa0RBQUE7QXJCa2dCVjtBc0JqaUJFOztFQUFBO0FBSUU7RUFDRSxRQUFBO0F0Qm1pQk47QXNCamlCTTtFQUNFLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QXRCbWlCUjtBc0JoaUJNO0VBQ0UsU0FBQTtBdEJraUJSO0FzQjdoQk07RUFHRSxpREFBQTtBdEI2aEJSO0FzQjNoQlE7RUFDRSw2REFBQTtFQUNBLFVBQUE7QXRCNmhCVjtBc0IxaEJRO0VBQ0UsaURBQUE7QXRCNGhCVjtBdUIzakJFOztFQUFBO0FBSUU7RUFDRSwwQkFBQTtFQUNBLGtFQUFBO0F2QjZqQk47QXVCM2pCTTtFQUNFLHdEQUFBO0F2QjZqQlI7QXVCempCTTtFQUNFLDZGQUFBO0F2QjJqQlI7QXVCcmpCTTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrREFBQTtBdkJ1akJSO0F1QnJqQlE7RUFDRSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBEQUFBO0F2QnVqQlY7QXVCbmpCUTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDJGQUFBO0F2QnFqQlY7QXdCeGxCRTs7RUFBQTtBQUlFO0VBQ0UsMEJBQUE7RUFDQSxrRUFBQTtBeEIwbEJOO0F3QnhsQk07RUFDRSx3REFBQTtBeEIwbEJSO0F3QnRsQk07RUFDRSw2RkFBQTtBeEJ3bEJSO0F3QmxsQk07RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7QXhCb2xCUjtBd0JsbEJRO0VBQ0UsTUFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtBeEJvbEJWO0F3QmhsQlE7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSwyRkFBQTtBeEJrbEJWO0F5QnJuQkU7O0VBQUE7QUFJRTtFQUNFLFFBQUE7RUFDQSw0Q0FBQTtBekJ1bkJOO0F5QnJuQk07RUFDRSxTQUFBO0VBQ0EsNEhBQUE7QXpCdW5CUjtBeUJubkJNO0VBQ0UsU0FBQTtFQUNBLDRIQUFBO0F6QnFuQlI7QXlCL21CTTtFQUNFLHVCQUFBO0VBQ0Esd0NBQUE7QXpCaW5CUjtBeUIvbUJRO0VBQ0UsTUFBQTtFQUNBLGdJQUFBO0VBRUEsZ0RBQUE7QXpCZ25CVjtBeUI3bUJRO0VBQ0UsTUFBQTtFQUNBLDBIQUFBO0VBRUEsaURBQUE7QXpCOG1CVjtBMEJucEJFOztFQUFBO0FBSUU7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrRUFBQTtBMUJxcEJOO0EwQm5wQk07RUFDRSxVQUFBO0VBQ0EsdUZBQUE7QTFCcXBCUjtBMEJqcEJNO0VBQ0UsNEhBQUE7QTFCbXBCUjtBMEI3b0JNO0VBQ0Usa0RBQUE7RUFDQSx1QkFBQTtFQUNBLCtEQUFBO0ExQitvQlI7QTBCN29CUTtFQUNFLE1BQUE7RUFDQSxVQUFBO0VBQ0Esd0ZBQUE7QTFCK29CVjtBMEIzb0JRO0VBQ0UsTUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0lBQUE7QTFCNm9CVjtBMkJwckJFOztFQUFBO0FBSUU7RUFDRSw0R0FBQTtBM0JzckJOO0EyQm5yQk07RUFDRSxpR0FBQTtBM0JxckJSO0EyQmpyQk07RUFDRSxvR0FBQTtBM0JtckJSO0EyQjdxQk07RUFDRSx3QkFBQTtFQUNBLHdDQUFBO0VBRUEscUdBQUE7QTNCOHFCUjtBMkIzcUJRO0VBQ0UsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0dBQUE7QTNCNnFCVjtBMkJ6cUJRO0VBQ0UsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUdBQUE7QTNCMnFCVjtBNEJodEJFOztFQUFBO0FBSUU7RUFDRSw0R0FBQTtBNUJrdEJOO0E0Qi9zQk07RUFDRSxpR0FBQTtBNUJpdEJSO0E0QjdzQk07RUFDRSxvR0FBQTtBNUIrc0JSO0E0QnpzQk07RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0VBRUEscUdBQUE7QTVCMHNCUjtBNEJ2c0JRO0VBQ0UsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0dBQUE7QTVCeXNCVjtBNEJyc0JRO0VBQ0UsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUdBQUE7QTVCdXNCVjtBNkI1dUJFOztFQUFBO0FBSUU7RUFDRSwyQkFBQTtFQUNBLGtFQUFBO0E3Qjh1Qk47QTZCNXVCTTtFQUNFLHNEQUFBO0E3Qjh1QlI7QTZCMXVCTTtFQUNFLDZGQUFBO0E3QjR1QlI7QTZCdHVCTTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrREFBQTtBN0J3dUJSO0E2QnR1QlE7RUFDRSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNEQUFBO0E3Qnd1QlY7QTZCcHVCUTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDBGQUFBO0E3QnN1QlY7QThCendCRTs7RUFBQTtBQUlFO0VBQ0UseUJBQUE7RUFDQSwwREFBQTtBOUIyd0JOO0E4Qnp3Qk07RUFFRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QTlCMHdCUjtBOEJ2d0JNO0VBQ0UsaUNBQUE7QTlCeXdCUjtBOEJ0d0JNO0VBQ0Usc0NBQUE7QTlCd3dCUjtBOEJud0JNO0VBQ0UseUJBQUE7RUFDQSwwREFBQTtBOUJxd0JSO0E4Qm53QlE7RUFFRSxvQkFBQTtBOUJvd0JWO0E4Qmp3QlE7RUFDRSxNQUFBO0VBQ0EsVUFBQTtBOUJtd0JWO0E4Qmh3QlE7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7QTlCa3dCVjtBK0IzeUJFOztFQUFBO0FBSUU7RUFDRSx5QkFBQTtFQUNBLDBEQUFBO0EvQjZ5Qk47QStCM3lCTTtFQUVFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBL0I0eUJSO0ErQnp5Qk07RUFDRSxpQ0FBQTtBL0IyeUJSO0ErQnh5Qk07RUFDRSxzQ0FBQTtBL0IweUJSO0ErQnJ5Qk07RUFDRSwwQkFBQTtFQUNBLDBEQUFBO0EvQnV5QlI7QStCcnlCUTtFQUVFLG9CQUFBO0EvQnN5QlY7QStCbnlCUTtFQUNFLE1BQUE7RUFDQSxVQUFBO0EvQnF5QlY7QStCbHlCUTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtBL0JveUJWO0FnQzMwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FoQzgwQkY7QWdDNTBCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7QWhDODBCSjtBZ0M1MEJJO0VBYkY7SUFjSSxjQUFBO0lBQ0EseUJDWk87RWpDMjFCWDtBQUNGO0FnQzcwQkk7RUFsQkY7SUFtQkksbUJBQUE7RWhDZzFCSjtBQUNGO0FnQzkwQkk7RUFDRSxhQUFBO0FoQ2cxQk47QWdDOTBCTTtFQUhGO0lBSUksY0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7RWhDaTFCTjtFZ0MvMEJNO0lBQ0UsV0FBQTtJQUNBLGNDN0JTO0VqQzgyQmpCO0VnQy8wQlE7SUFDRSxXQUFBO0lBQ0EseUJDakNPO0VqQ2szQmpCO0VnQy8wQlU7SUFDRSxXQUFBO0lBQ0EseUJDckNLO0VqQ3MzQmpCO0VnQzkwQlU7SUFDRSxXQUFBO0lBQ0EseUJDMUNLO0VqQzAzQmpCO0FBQ0Y7QWdDMTBCSTtFQUNFLDJDQUFBO0VBQ0EsNEJDakRRO0FqQzYzQmQ7QWdDejBCUTtFQUNFLGNDdkRTO0FqQ2s0Qm5CO0FnQ3QwQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQ3ZFTTtFRHdFTixrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VDdkJKLDZCQUFBO0FqQ20yQkY7QWdDejBCTTtFQWZGO0lBZ0JJLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkNsRks7SURtRkwsU0FBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtJQ3pDTiw2RUFBQTtFakN3M0JBO0VnQzUwQk07SUFDRSxhQUFBO0lBQ0EsV0FBQTtFaEM4MEJSO0FBQ0Y7QWdDMzBCTTtFQWhDRjtJQWlDSSxtQkFBQTtFaEM4MEJOO0FBQ0Y7QWdDMzBCUTtFQURGO0lBRUksZUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VoQzgwQlI7QUFDRjtBZ0MzMEJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3hISztFRHlITCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FoQzYwQlI7QWdDMzBCUTtFQXBCRjtJQXFCSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLGNDaElTO0lEaUlULGlCQUFBO0lBQ0EsU0FBQTtFaEM4MEJSO0FBQ0Y7QWdDMTBCVTtFQUZGO0lBR0ksY0MxSUM7SUQySUQseUJDN0lHO0VqQzA5QmI7QUFDRjtBZ0MzMEJVO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJDdEpHO0VEdUpILE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QWhDNjBCWjtBZ0MzMEJZO0VBWkY7SUFhSSxhQUFBO0VoQzgwQlo7QUFDRjtBZ0N4MEJJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3REFBQTtFQ3pKSjsyREFBQTtFQUVBLGNBSlU7RUFLVixXRHVKOEI7RUN0SjlCLFlEc0pvQztFQ3JKcEMsWURxSjBDO0VDcEoxQyxpQkRvSmdEO0VDbkpoRCx3QkFWVztBakM4K0JiO0FnQy8wQk07RUFSRjtJQVNJLGVBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQy9KTjs2REFBQTtJQUVBLGNBSlU7SUFLVixXRDZKZ0M7SUM1SmhDLFlENEpzQztJQzNKdEMsZUQySjRDO0lDMUo1QyxpQkQwSnFEO0lDekpyRCx3QkFWVztFakM0L0JYO0FBQ0Y7QWdDcjFCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FoQ3UxQko7QWdDcDFCRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QWhDczFCSjtBZ0NwMUJJO0VBQ0UsMkNBQUE7QWhDczFCTjtBZ0NwMUJNO0VBQ0UsNkJBQUE7QWhDczFCUjtBZ0NsMUJJO0VBQ0UsaUJBQUE7RUFDQSxjQ2xOTztBakNzaUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIVxuICogSGFtYnVyZ2Vyc1xuICogQGRlc2NyaXB0aW9uIFRhc3R5IENTUy1hbmltYXRlZCBoYW1idXJnZXJzXG4gKiBAYXV0aG9yIEpvbmF0aGFuIFN1aCBAam9uc3VoXG4gKiBAc2l0ZSBodHRwczovL2pvbnN1aC5jb20vaGFtYnVyZ2Vyc1xuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2pvbnN1aC9oYW1idXJnZXJzXG4gKi9cblxuLy8gU2V0dGluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4kaGFtYnVyZ2VyLXBhZGRpbmcteCAgICAgICAgICAgOiAxNXB4ICFkZWZhdWx0O1xuJGhhbWJ1cmdlci1wYWRkaW5nLXkgICAgICAgICAgIDogMTVweCAhZGVmYXVsdDtcbiRoYW1idXJnZXItbGF5ZXItd2lkdGggICAgICAgICA6IDQwcHggIWRlZmF1bHQ7XG4kaGFtYnVyZ2VyLWxheWVyLWhlaWdodCAgICAgICAgOiA0cHggIWRlZmF1bHQ7XG4kaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgICAgICAgOiA2cHggIWRlZmF1bHQ7XG4kaGFtYnVyZ2VyLWxheWVyLWNvbG9yICAgICAgICAgOiAjMDAwICFkZWZhdWx0O1xuJGhhbWJ1cmdlci1sYXllci1ib3JkZXItcmFkaXVzIDogNHB4ICFkZWZhdWx0O1xuJGhhbWJ1cmdlci1ob3Zlci1vcGFjaXR5ICAgICAgIDogMC43ICFkZWZhdWx0O1xuJGhhbWJ1cmdlci1hY3RpdmUtbGF5ZXItY29sb3IgIDogJGhhbWJ1cmdlci1sYXllci1jb2xvciAhZGVmYXVsdDtcbiRoYW1idXJnZXItYWN0aXZlLWhvdmVyLW9wYWNpdHk6ICRoYW1idXJnZXItaG92ZXItb3BhY2l0eSAhZGVmYXVsdDtcblxuLy8gVG8gdXNlIENTUyBmaWx0ZXJzIGFzIHRoZSBob3ZlciBlZmZlY3QgaW5zdGVhZCBvZiBvcGFjaXR5LFxuLy8gc2V0ICRoYW1idXJnZXItaG92ZXItdXNlLWZpbHRlciBhcyB0cnVlIGFuZFxuLy8gY2hhbmdlIHRoZSB2YWx1ZSBvZiAkaGFtYnVyZ2VyLWhvdmVyLWZpbHRlciBhY2NvcmRpbmdseS5cbiRoYW1idXJnZXItaG92ZXItdXNlLWZpbHRlciAgIDogZmFsc2UgIWRlZmF1bHQ7XG4kaGFtYnVyZ2VyLWhvdmVyLWZpbHRlciAgICAgICA6IG9wYWNpdHkoNTAlKSAhZGVmYXVsdDtcbiRoYW1idXJnZXItYWN0aXZlLWhvdmVyLWZpbHRlcjogJGhhbWJ1cmdlci1ob3Zlci1maWx0ZXIgIWRlZmF1bHQ7XG5cbi8vIFR5cGVzIChSZW1vdmUgb3IgY29tbWVudCBvdXQgd2hhdCB5b3UgZG9u4oCZdCBuZWVkKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiRoYW1idXJnZXItdHlwZXM6IChcbiAgM2R4LFxuICAzZHgtcixcbiAgM2R5LFxuICAzZHktcixcbiAgM2R4eSxcbiAgM2R4eS1yLFxuICBhcnJvdyxcbiAgYXJyb3ctcixcbiAgYXJyb3dhbHQsXG4gIGFycm93YWx0LXIsXG4gIGFycm93dHVybixcbiAgYXJyb3d0dXJuLXIsXG4gIGJvcmluZyxcbiAgY29sbGFwc2UsXG4gIGNvbGxhcHNlLXIsXG4gIGVsYXN0aWMsXG4gIGVsYXN0aWMtcixcbiAgZW1waGF0aWMsXG4gIGVtcGhhdGljLXIsXG4gIG1pbnVzLFxuICBzbGlkZXIsXG4gIHNsaWRlci1yLFxuICBzcGluLFxuICBzcGluLXIsXG4gIHNwcmluZyxcbiAgc3ByaW5nLXIsXG4gIHN0YW5kLFxuICBzdGFuZC1yLFxuICBzcXVlZXplLFxuICB2b3J0ZXgsXG4gIHZvcnRleC1yXG4pICFkZWZhdWx0O1xuXG4vLyBCYXNlIEhhbWJ1cmdlciAoV2UgbmVlZCB0aGlzKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBpbXBvcnQgXCJiYXNlXCI7XG5cbi8vIEhhbWJ1cmdlciB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBpbXBvcnQgXCJ0eXBlcy8zZHhcIjtcbkBpbXBvcnQgXCJ0eXBlcy8zZHgtclwiO1xuQGltcG9ydCBcInR5cGVzLzNkeVwiO1xuQGltcG9ydCBcInR5cGVzLzNkeS1yXCI7XG5AaW1wb3J0IFwidHlwZXMvM2R4eVwiO1xuQGltcG9ydCBcInR5cGVzLzNkeHktclwiO1xuQGltcG9ydCBcInR5cGVzL2Fycm93XCI7XG5AaW1wb3J0IFwidHlwZXMvYXJyb3ctclwiO1xuQGltcG9ydCBcInR5cGVzL2Fycm93YWx0XCI7XG5AaW1wb3J0IFwidHlwZXMvYXJyb3dhbHQtclwiO1xuQGltcG9ydCBcInR5cGVzL2Fycm93dHVyblwiO1xuQGltcG9ydCBcInR5cGVzL2Fycm93dHVybi1yXCI7XG5AaW1wb3J0IFwidHlwZXMvYm9yaW5nXCI7XG5AaW1wb3J0IFwidHlwZXMvY29sbGFwc2VcIjtcbkBpbXBvcnQgXCJ0eXBlcy9jb2xsYXBzZS1yXCI7XG5AaW1wb3J0IFwidHlwZXMvZWxhc3RpY1wiO1xuQGltcG9ydCBcInR5cGVzL2VsYXN0aWMtclwiO1xuQGltcG9ydCBcInR5cGVzL2VtcGhhdGljXCI7XG5AaW1wb3J0IFwidHlwZXMvZW1waGF0aWMtclwiO1xuQGltcG9ydCBcInR5cGVzL21pbnVzXCI7XG5AaW1wb3J0IFwidHlwZXMvc2xpZGVyXCI7XG5AaW1wb3J0IFwidHlwZXMvc2xpZGVyLXJcIjtcbkBpbXBvcnQgXCJ0eXBlcy9zcGluXCI7XG5AaW1wb3J0IFwidHlwZXMvc3Bpbi1yXCI7XG5AaW1wb3J0IFwidHlwZXMvc3ByaW5nXCI7XG5AaW1wb3J0IFwidHlwZXMvc3ByaW5nLXJcIjtcbkBpbXBvcnQgXCJ0eXBlcy9zdGFuZFwiO1xuQGltcG9ydCBcInR5cGVzL3N0YW5kLXJcIjtcbkBpbXBvcnQgXCJ0eXBlcy9zcXVlZXplXCI7XG5AaW1wb3J0IFwidHlwZXMvdm9ydGV4XCI7XG5AaW1wb3J0IFwidHlwZXMvdm9ydGV4LXJcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvb2tpbmcgdXAgYWRkaXRpb25hbCB0eXBlczpcbi8vXG4vLyBUaGUgU2FzcyBmb3IgZWFjaCBoYW1idXJnZXIgdHlwZSBzaG91bGQgYmUgbmVzdGVkXG4vLyBpbnNpZGUgYW4gQGlmIGRpcmVjdGl2ZSB0byBjaGVjayB3aGV0aGVyIG9yIG5vdFxuLy8gaXQgZXhpc3RzIGluICRoYW1idXJnZXItdHlwZXMgc28gb25seSB0aGUgQ1NTIGZvclxuLy8gaW5jbHVkZWQgdHlwZXMgYXJlIGdlbmVyYXRlZC5cbi8vXG4vLyBlLmcuIGhhbWJ1cmdlcnMvdHlwZXMvX25ldy10eXBlLnNjc3Ncbi8vXG4vLyBAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgbmV3LXR5cGUpIHtcbi8vICAgLmhhbWJ1cmdlci0tbmV3LXR5cGUge1xuLy8gICAgIC4uLlxuLy8gICB9XG4vLyB9XG4iLCIvLyBIYW1idXJnZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uaGFtYnVyZ2VyIHtcbiAgcGFkZGluZzogJGhhbWJ1cmdlci1wYWRkaW5nLXkgJGhhbWJ1cmdlci1wYWRkaW5nLXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cbiAgLy8gTm9ybWFsaXplICg8YnV0dG9uPilcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICY6aG92ZXIge1xuICAgIEBpZiAkaGFtYnVyZ2VyLWhvdmVyLXVzZS1maWx0ZXIgPT0gdHJ1ZSB7XG4gICAgICBmaWx0ZXI6ICRoYW1idXJnZXItaG92ZXItZmlsdGVyO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBvcGFjaXR5OiAkaGFtYnVyZ2VyLWhvdmVyLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgJi5pcy1hY3RpdmUge1xuICAgICY6aG92ZXIge1xuICAgICAgQGlmICRoYW1idXJnZXItaG92ZXItdXNlLWZpbHRlciA9PSB0cnVlIHtcbiAgICAgICAgZmlsdGVyOiAkaGFtYnVyZ2VyLWFjdGl2ZS1ob3Zlci1maWx0ZXI7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIG9wYWNpdHk6ICRoYW1idXJnZXItYWN0aXZlLWhvdmVyLW9wYWNpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1pbm5lcixcbiAgICAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXG4gICAgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhhbWJ1cmdlci1hY3RpdmUtbGF5ZXItY29sb3I7XG4gICAgfVxuICB9XG59XG5cbi5oYW1idXJnZXItYm94IHtcbiAgd2lkdGg6ICRoYW1idXJnZXItbGF5ZXItd2lkdGg7XG4gIGhlaWdodDogJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKiAzICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogMjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oYW1idXJnZXItaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6ICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0IC8gLTI7XG5cbiAgJixcbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgd2lkdGg6ICRoYW1idXJnZXItbGF5ZXItd2lkdGg7XG4gICAgaGVpZ2h0OiAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGFtYnVyZ2VyLWxheWVyLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6ICRoYW1idXJnZXItbGF5ZXItYm9yZGVyLXJhZGl1cztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB9XG5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICsgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQpICogLTE7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgYm90dG9tOiAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICsgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQpICogLTE7XG4gIH1cbn1cbiIsIi8qIVxuICogSGFtYnVyZ2Vyc1xuICogQGRlc2NyaXB0aW9uIFRhc3R5IENTUy1hbmltYXRlZCBoYW1idXJnZXJzXG4gKiBAYXV0aG9yIEpvbmF0aGFuIFN1aCBAam9uc3VoXG4gKiBAc2l0ZSBodHRwczovL2pvbnN1aC5jb20vaGFtYnVyZ2Vyc1xuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2pvbnN1aC9oYW1idXJnZXJzXG4gKi9cbi5oYW1idXJnZXIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBmaWx0ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uaGFtYnVyZ2VyOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuLmhhbWJ1cmdlci5pcy1hY3RpdmU6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyLFxuLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLFxuLmhhbWJ1cmdlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uaGFtYnVyZ2VyLWJveCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGFtYnVyZ2VyLWlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmhhbWJ1cmdlci1pbm5lciwgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdG9wOiAtMTBweDtcbn1cbi5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAtMTBweDtcbn1cblxuLypcbiAqIDNEWFxuICovXG4uaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1ib3gge1xuICBwZXJzcGVjdGl2ZTogODBweDtcbn1cbi5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmhhbWJ1cmdlci0tM2R4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG59XG4uaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi8qXG4gKiAzRFggUmV2ZXJzZVxuICovXG4uaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWJveCB7XG4gIHBlcnNwZWN0aXZlOiA4MHB4O1xufVxuLmhhbWJ1cmdlci0tM2R4LXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS0zZHgtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeC1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xufVxuLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG4uaGFtYnVyZ2VyLS0zZHgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpO1xufVxuLmhhbWJ1cmdlci0tM2R4LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi8qXG4gKiAzRFlcbiAqL1xuLmhhbWJ1cmdlci0tM2R5IC5oYW1idXJnZXItYm94IHtcbiAgcGVyc3BlY3RpdmU6IDgwcHg7XG59XG4uaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS0zZHkgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG59XG4uaGFtYnVyZ2VyLS0zZHkuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5oYW1idXJnZXItLTNkeS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLypcbiAqIDNEWSBSZXZlcnNlXG4gKi9cbi5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItYm94IHtcbiAgcGVyc3BlY3RpdmU6IDgwcHg7XG59XG4uaGFtYnVyZ2VyLS0zZHktciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLTNkeS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tM2R5LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS0zZHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLmhhbWJ1cmdlci0tM2R5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5oYW1idXJnZXItLTNkeS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4vKlxuICogM0RYWVxuICovXG4uaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItYm94IHtcbiAgcGVyc3BlY3RpdmU6IDgwcHg7XG59XG4uaGFtYnVyZ2VyLS0zZHh5IC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xufVxuLmhhbWJ1cmdlci0tM2R4eSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeHkgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS0zZHh5LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlWSgxODBkZWcpO1xufVxuLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoNDVkZWcpO1xufVxuLmhhbWJ1cmdlci0tM2R4eS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLypcbiAqIDNEWFkgUmV2ZXJzZVxuICovXG4uaGFtYnVyZ2VyLS0zZHh5LXIgLmhhbWJ1cmdlci1ib3gge1xuICBwZXJzcGVjdGl2ZTogODBweDtcbn1cbi5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLTNkeHktciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLTNkeHktci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC0xODBkZWcpO1xufVxuLmhhbWJ1cmdlci0tM2R4eS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG59XG4uaGFtYnVyZ2VyLS0zZHh5LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi8qXG4gKiBBcnJvd1xuICovXG4uaGFtYnVyZ2VyLS1hcnJvdy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xufVxuLmhhbWJ1cmdlci0tYXJyb3cuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG59XG5cbi8qXG4gKiBBcnJvdyBSaWdodFxuICovXG4uaGFtYnVyZ2VyLS1hcnJvdy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xufVxuLmhhbWJ1cmdlci0tYXJyb3ctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcbn1cblxuLypcbiAqIEFycm93IEFsdFxuICovXG4uaGFtYnVyZ2VyLS1hcnJvd2FsdCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG59XG4uaGFtYnVyZ2VyLS1hcnJvd2FsdCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbn1cbi5oYW1idXJnZXItLWFycm93YWx0LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XG59XG4uaGFtYnVyZ2VyLS1hcnJvd2FsdC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xufVxuXG4vKlxuICogQXJyb3cgQWx0IFJpZ2h0XG4gKi9cbi5oYW1idXJnZXItLWFycm93YWx0LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xufVxuLmhhbWJ1cmdlci0tYXJyb3dhbHQtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbn1cbi5oYW1idXJnZXItLWFycm93YWx0LXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIC0xMHB4LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XG59XG4uaGFtYnVyZ2VyLS1hcnJvd2FsdC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XG59XG5cbi8qXG4gKiBBcnJvdyBUdXJuXG4gKi9cbi5oYW1idXJnZXItLWFycm93dHVybi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDhweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xufVxuLmhhbWJ1cmdlci0tYXJyb3d0dXJuLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xufVxuXG4vKlxuICogQXJyb3cgVHVybiBSaWdodFxuICovXG4uaGFtYnVyZ2VyLS1hcnJvd3R1cm4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcbn1cbi5oYW1idXJnZXItLWFycm93dHVybi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLThweCwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xufVxuXG4vKlxuICogQm9yaW5nXG4gKi9cbi5oYW1idXJnZXItLWJvcmluZyAuaGFtYnVyZ2VyLWlubmVyLCAuaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS1ib3JpbmcgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xufVxuLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmhhbWJ1cmdlci0tYm9yaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4uaGFtYnVyZ2VyLS1ib3JpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4vKlxuICogQ29sbGFwc2VcbiAqL1xuLmhhbWJ1cmdlci0tY29sbGFwc2UgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjEzcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbn1cbi5oYW1idXJnZXItLWNvbGxhcHNlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdG9wOiAtMjBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMC4xcyBsaW5lYXI7XG59XG4uaGFtYnVyZ2VyLS1jb2xsYXBzZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbn1cbi5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgb3BhY2l0eSAwLjFzIDAuMjJzIGxpbmVhcjtcbn1cbi5oYW1idXJnZXItLWNvbGxhcHNlLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuXG4vKlxuICogQ29sbGFwc2UgUmV2ZXJzZVxuICovXG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdG9wOiAtMjBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIG9wYWNpdHkgMC4xcyBsaW5lYXI7XG59XG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSwgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS1jb2xsYXBzZS1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLCBvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tY29sbGFwc2Utci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTZzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuXG4vKlxuICogRWxhc3RpY1xuICovXG4uaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXIge1xuICB0b3A6IDJweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNzVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG59XG4uaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEyNXMgMC4yNzVzIGVhc2U7XG59XG4uaGFtYnVyZ2VyLS1lbGFzdGljIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xufVxuLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDEzNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcbn1cbi5oYW1idXJnZXItLWVsYXN0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICBvcGFjaXR5OiAwO1xufVxuLmhhbWJ1cmdlci0tZWxhc3RpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTI3MGRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcbn1cblxuLypcbiAqIEVsYXN0aWMgUmV2ZXJzZVxuICovXG4uaGFtYnVyZ2VyLS1lbGFzdGljLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogMnB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI3NXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbn1cbi5oYW1idXJnZXItLWVsYXN0aWMtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDEwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMjVzIDAuMjc1cyBlYXNlO1xufVxuLmhhbWJ1cmdlci0tZWxhc3RpYy1yIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNzVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xufVxuLmhhbWJ1cmdlci0tZWxhc3RpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTEzNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcbn1cbi5oYW1idXJnZXItLWVsYXN0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIG9wYWNpdHk6IDA7XG59XG4uaGFtYnVyZ2VyLS1lbGFzdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcbn1cblxuLypcbiAqIEVtcGhhdGljXG4gKi9cbi5oYW1idXJnZXItLWVtcGhhdGljIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oYW1idXJnZXItLWVtcGhhdGljIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcbn1cbi5oYW1idXJnZXItLWVtcGhhdGljIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgbGVmdCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47XG59XG4uaGFtYnVyZ2VyLS1lbXBoYXRpYyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluO1xufVxuLmhhbWJ1cmdlci0tZW1waGF0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmhhbWJ1cmdlci0tZW1waGF0aWMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIGxlZnQ6IC04MHB4O1xuICB0b3A6IC04MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDgwcHgsIDgwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IGxlZnQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS1lbXBoYXRpYy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICByaWdodDogLTgwcHg7XG4gIHRvcDogLTgwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTgwcHgsIDgwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cblxuLypcbiAqIEVtcGhhdGljIFJldmVyc2VcbiAqL1xuLmhhbWJ1cmdlci0tZW1waGF0aWMtciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcbn1cbi5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLCBsZWZ0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcbn1cbi5oYW1idXJnZXItLWVtcGhhdGljLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSwgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcbn1cbi5oYW1idXJnZXItLWVtcGhhdGljLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmhhbWJ1cmdlci0tZW1waGF0aWMtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgbGVmdDogLTgwcHg7XG4gIHRvcDogODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4MHB4LCAtODBweCwgMCkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb246IGxlZnQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS1lbXBoYXRpYy1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHJpZ2h0OiAtODBweDtcbiAgdG9wOiA4MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04MHB4LCAtODBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC4xMjVzIGVhc2Utb3V0LCB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhciwgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG5cbi8qXG4gKiBNaW51c1xuICovXG4uaGFtYnVyZ2VyLS1taW51cyAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLW1pbnVzIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDhzIDBzIGVhc2Utb3V0LCB0b3AgMC4wOHMgMHMgZWFzZS1vdXQsIG9wYWNpdHkgMHMgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwgLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDhzIGVhc2Utb3V0LCB0b3AgMC4wOHMgZWFzZS1vdXQsIG9wYWNpdHkgMHMgMC4wOHMgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tbWludXMuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbn1cbi5oYW1idXJnZXItLW1pbnVzLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbn1cblxuLypcbiAqIFNsaWRlclxuICovXG4uaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRvcDogMnB4O1xufVxuLmhhbWJ1cmdlci0tc2xpZGVyIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG59XG4uaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0b3A6IDIwcHg7XG59XG4uaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG59XG4uaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlM2QoLTUuNzE0Mjg1NzE0M3B4LCAtNnB4LCAwKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5oYW1idXJnZXItLXNsaWRlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSByb3RhdGUoLTkwZGVnKTtcbn1cblxuLypcbiAqIFNsaWRlciBSZXZlcnNlXG4gKi9cbi5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0b3A6IDJweDtcbn1cbi5oYW1idXJnZXItLXNsaWRlci1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG59XG4uaGFtYnVyZ2VyLS1zbGlkZXItciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRvcDogMjBweDtcbn1cbi5oYW1idXJnZXItLXNsaWRlci1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5oYW1idXJnZXItLXNsaWRlci1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlM2QoNS43MTQyODU3MTQzcHgsIC02cHgsIDApO1xuICBvcGFjaXR5OiAwO1xufVxuLmhhbWJ1cmdlci0tc2xpZGVyLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgcm90YXRlKDkwZGVnKTtcbn1cblxuLypcbiAqIFNwaW5cbiAqL1xuLmhhbWJ1cmdlci0tc3BpbiAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbn1cbi5oYW1idXJnZXItLXNwaW4gLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4yNXMgZWFzZS1pbiwgb3BhY2l0eSAwLjFzIGVhc2UtaW47XG59XG4uaGFtYnVyZ2VyLS1zcGluIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgMC4yNXMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuLmhhbWJ1cmdlci0tc3Bpbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG59XG4uaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7XG59XG4uaGFtYnVyZ2VyLS1zcGluLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cblxuLypcbiAqIFNwaW4gUmV2ZXJzZVxuICovXG4uaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4yNXMgZWFzZS1pbiwgb3BhY2l0eSAwLjFzIGVhc2UtaW47XG59XG4uaGFtYnVyZ2VyLS1zcGluLXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zcGluLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xMnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLXNwaW4tci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0O1xufVxuLmhhbWJ1cmdlci0tc3Bpbi1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuXG4vKlxuICogU3ByaW5nXG4gKi9cbi5oYW1idXJnZXItLXNwcmluZyAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdG9wOiAycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMgMC4xM3MgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tc3ByaW5nIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbn1cbi5oYW1idXJnZXItLXNwcmluZyAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRvcDogMjBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbn1cbi5oYW1idXJnZXItLXNwcmluZy5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmhhbWJ1cmdlci0tc3ByaW5nLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMTVzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSwgdHJhbnNmb3JtIDAuMTNzIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHJvdGF0ZSg0NWRlZyk7XG59XG4uaGFtYnVyZ2VyLS1zcHJpbmcuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLypcbiAqIFNwcmluZyBSZXZlcnNlXG4gKi9cbi5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xM3M7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zcHJpbmctciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRvcDogLTIwcHg7XG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCBvcGFjaXR5IDBzIGxpbmVhcjtcbn1cbi5oYW1idXJnZXItLXNwcmluZy1yIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLCB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zcHJpbmctci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIG9wYWNpdHkgMHMgMC4yMnMgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tc3ByaW5nLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE1cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cblxuLypcbiAqIFN0YW5kXG4gKi9cbi5oYW1idXJnZXItLXN0YW5kIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMDc1cyBsaW5lYXI7XG59XG4uaGFtYnVyZ2VyLS1zdGFuZCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuLmhhbWJ1cmdlci0tc3RhbmQgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSksIGJhY2tncm91bmQtY29sb3IgMHMgMC4xNXMgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuLmhhbWJ1cmdlci0tc3RhbmQuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cblxuLypcbiAqIFN0YW5kIFJldmVyc2VcbiAqL1xuLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMDc1cyBlYXNlLWluLCB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xufVxuLmhhbWJ1cmdlci0tc3RhbmQtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7XG59XG4uaGFtYnVyZ2VyLS1zdGFuZC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cbi5oYW1idXJnZXItLXN0YW5kLXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbn1cblxuLypcbiAqIFNxdWVlemVcbiAqL1xuLmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wNzVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zcXVlZXplIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4xMnMgZWFzZSwgb3BhY2l0eSAwLjA3NXMgZWFzZTtcbn1cbi5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMTJzIGVhc2UsIHRyYW5zZm9ybSAwLjA3NXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG4uaGFtYnVyZ2VyLS1zcXVlZXplLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuLmhhbWJ1cmdlci0tc3F1ZWV6ZS5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7XG59XG4uaGFtYnVyZ2VyLS1zcXVlZXplLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xufVxuXG4vKlxuICogVm9ydGV4XG4gKi9cbi5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbn1cbi5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsIC5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tdm9ydGV4IC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgb3BhY2l0eTtcbn1cbi5oYW1idXJnZXItLXZvcnRleCAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtO1xufVxuLmhhbWJ1cmdlci0tdm9ydGV4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzY1ZGVnKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbn1cbi5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG4uaGFtYnVyZ2VyLS12b3J0ZXguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5oYW1idXJnZXItLXZvcnRleC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLypcbiAqIFZvcnRleCBSZXZlcnNlXG4gKi9cbi5oYW1idXJnZXItLXZvcnRleC1yIC5oYW1idXJnZXItaW5uZXIge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xufVxuLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXgtciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5O1xufVxuLmhhbWJ1cmdlci0tdm9ydGV4LXIgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTtcbn1cbi5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTc2NWRlZyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG59XG4uaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLCAuaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cbi5oYW1idXJnZXItLXZvcnRleC1yLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4uaGFtYnVyZ2VyLS12b3J0ZXgtci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbmFzaWRlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYXNpZGUgLm1hdC10b29sYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUuNXJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNywgMSwgMC43LCAxKTtcbiAgei1pbmRleDogOTk5O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIGFzaWRlIC5tYXQtdG9vbGJhciB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzMHB4KSB7XG4gIGFzaWRlIC5tYXQtdG9vbGJhciB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbiAgfVxufVxuYXNpZGUgLm1hdC10b29sYmFyIGJ1dHRvbi5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIGFzaWRlIC5tYXQtdG9vbGJhciBidXR0b24uaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIGFzaWRlIC5tYXQtdG9vbGJhciBidXR0b24uaGFtYnVyZ2VyIHNwYW4uaGFtYnVyZ2VyLWJveCB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgY29sb3I6ICM1MTU3NmM7XG4gIH1cbiAgYXNpZGUgLm1hdC10b29sYmFyIGJ1dHRvbi5oYW1idXJnZXIgc3Bhbi5oYW1idXJnZXItYm94IHNwYW4uaGFtYnVyZ2VyLWlubmVyIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1NzZjO1xuICB9XG4gIGFzaWRlIC5tYXQtdG9vbGJhciBidXR0b24uaGFtYnVyZ2VyIHNwYW4uaGFtYnVyZ2VyLWJveCBzcGFuLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTU3NmM7XG4gIH1cbiAgYXNpZGUgLm1hdC10b29sYmFyIGJ1dHRvbi5oYW1idXJnZXIgc3Bhbi5oYW1idXJnZXItYm94IHNwYW4uaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTU3NmM7XG4gIH1cbn1cbmFzaWRlIC5tYXQtdG9vbGJhci53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmMGYwZjA7XG59XG5hc2lkZSAubWF0LXRvb2xiYXIud2hpdGUgLm1hdC10b29sYmFyLXJvdyBidXR0b24ge1xuICBjb2xvcjogIzUxNTc2Yztcbn1cbmFzaWRlIC5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogNHJlbTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBhc2lkZSAubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICBhc2lkZSAubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdy5pcy1hY3RpdmUge1xuICAgIGhlaWdodDogMTByZW07XG4gICAgdG9wOiAzLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSB7XG4gIGFzaWRlIC5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgYXBwLXRyYW5zbGF0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxLjNyZW07XG4gICAgcmlnaHQ6IDNyZW07XG4gIH1cbn1cbmFzaWRlIC5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IGJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDAgMC43NXJlbSAwIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBhc2lkZSAubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gICAgY29sb3I6ICM1MTU3NmM7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgYnV0dG9uLmFjdGl2ZSwgYXNpZGUgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdiZWQyO1xuICB9XG59XG5hc2lkZSAubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyBidXR0b24uYWN0aXZlOjpiZWZvcmUsIGFzaWRlIC5tYXQtdG9vbGJhciAubWF0LXRvb2xiYXItcm93IGJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAuOHJlbTtcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2JlZDI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3cgYnV0dG9uLmFjdGl2ZTo6YmVmb3JlLCBhc2lkZSAubWF0LXRvb2xiYXIgLm1hdC10b29sYmFyLXJvdyBidXR0b246aG92ZXI6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuYXNpZGUgLm1hdC10b29sYmFyIGltZy5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43LCAxLCAwLjcsIDEpO1xuICAvKiBmaXQgdmFsdWVzOiBjb250YWluLCBjb3ZlclxuICAgICAqIHBvc2l0aW9uIHZhbHVlczogNTAlIDUwJSwgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW46IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgLm1hdC10b29sYmFyIGltZy5sb2dvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwLjdyZW07XG4gICAgcmlnaHQ6IDAuN3JlbTtcbiAgICAvKiBmaXQgdmFsdWVzOiBjb250YWluLCBjb3ZlclxuICAgICAgICogcG9zaXRpb24gdmFsdWVzOiA1MCUgNTAlLCB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luOiBpbmhlcml0O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgfVxufVxuYXNpZGUgZGl2LmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5hc2lkZSBmb290ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHotaW5kZXg6IDE1MDA7XG59XG5hc2lkZSBmb290ZXIud2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xufVxuYXNpZGUgZm9vdGVyLndoaXRlIHNwYW4ge1xuICBjb2xvcjogcmdiYSg4MSwgODcsIDEwOCwgMC44KTtcbn1cbmFzaWRlIGZvb3RlciBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGNvbG9yOiAjZmFmYWZhO1xufSIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCAzZHgpIHtcbiAgLypcbiAgICogM0RYXG4gICAqL1xuICAuaGFtYnVyZ2VyLS0zZHgge1xuICAgIC5oYW1idXJnZXItYm94IHtcbiAgICAgIHBlcnNwZWN0aXZlOiAkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogMjtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgKCRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nKSAqIC0xLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIDNkeC1yKSB7XG4gIC8qXG4gICAqIDNEWCBSZXZlcnNlXG4gICAqL1xuICAuaGFtYnVyZ2VyLS0zZHgtciB7XG4gICAgLmhhbWJ1cmdlci1ib3gge1xuICAgICAgcGVyc3BlY3RpdmU6ICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAyO1xuICAgIH1cblxuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgKCRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nKSAqIC0xLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIDNkeSkge1xuICAvKlxuICAgKiAzRFlcbiAgICovXG4gIC5oYW1idXJnZXItLTNkeSB7XG4gICAgLmhhbWJ1cmdlci1ib3gge1xuICAgICAgcGVyc3BlY3RpdmU6ICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAyO1xuICAgIH1cblxuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgKCRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICsgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nKSAqIC0xLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIDNkeS1yKSB7XG4gIC8qXG4gICAqIDNEWSBSZXZlcnNlXG4gICAqL1xuICAuaGFtYnVyZ2VyLS0zZHktciB7XG4gICAgLmhhbWJ1cmdlci1ib3gge1xuICAgICAgcGVyc3BlY3RpdmU6ICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAyO1xuICAgIH1cblxuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIDAuMXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAoJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcpICogLTEsIDApIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgM2R4eSkge1xuICAvKlxuICAgKiAzRFhZXG4gICAqL1xuICAuaGFtYnVyZ2VyLS0zZHh5IHtcbiAgICAuaGFtYnVyZ2VyLWJveCB7XG4gICAgICBwZXJzcGVjdGl2ZTogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDI7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKTtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAoJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcpICogLTEsIDApIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgM2R4eS1yKSB7XG4gIC8qXG4gICAqIDNEWFkgUmV2ZXJzZVxuICAgKi9cbiAgLmhhbWJ1cmdlci0tM2R4eS1yIHtcbiAgICAuaGFtYnVyZ2VyLWJveCB7XG4gICAgICBwZXJzcGVjdGl2ZTogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDI7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVaKC0xODBkZWcpO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCArICRoYW1idXJnZXItbGF5ZXItc3BhY2luZywgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICgkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCArICRoYW1idXJnZXItbGF5ZXItc3BhY2luZykgKiAtMSwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCBhcnJvdykge1xuICAvKlxuICAgKiBBcnJvd1xuICAgKi9cbiAgLmhhbWJ1cmdlci0tYXJyb3cuaXMtYWN0aXZlIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0wLjIsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogLTAuMiwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIGFycm93LXIpIHtcbiAgLypcbiAgICogQXJyb3cgUmlnaHRcbiAgICovXG4gIC5oYW1idXJnZXItLWFycm93LXIuaXMtYWN0aXZlIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDAuMiwgMCwgMCkgcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjcsIDEpO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDAuMiwgMCwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCBhcnJvd2FsdCkge1xuICAvKlxuICAgKiBBcnJvdyBBbHRcbiAgICovXG4gIC5oYW1idXJnZXItLWFycm93YWx0IHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjFzIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0wLjIsICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAtMC4yNSwgMCkgcm90YXRlKC00NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0wLjIsICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAwLjI1LCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgYXJyb3dhbHQtcikge1xuICAvKlxuICAgKiBBcnJvdyBBbHQgUmlnaHRcbiAgICovXG4gIC5oYW1idXJnZXItLWFycm93YWx0LXIge1xuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIDAuMXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogMC4yLCAkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogLTAuMjUsIDApIHJvdGF0ZSg0NWRlZykgc2NhbGUoMC43LCAxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjFzIDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDAuMiwgJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDAuMjUsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4xcyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgYXJyb3d0dXJuKSB7XG4gIC8qXG4gICAqIEFycm93IFR1cm5cbiAgICovXG4gIC5oYW1idXJnZXItLWFycm93dHVybi5pcy1hY3RpdmUge1xuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgYXJyb3d0dXJuLXIpIHtcbiAgLypcbiAgICogQXJyb3cgVHVybiBSaWdodFxuICAgKi9cbiAgLmhhbWJ1cmdlci0tYXJyb3d0dXJuLXIuaXMtYWN0aXZlIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04cHgsIDAsIDApIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtOHB4LCAwLCAwKSByb3RhdGUoNDVkZWcpIHNjYWxlKDAuNywgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgYm9yaW5nKSB7XG4gIC8qXG4gICAqIEJvcmluZ1xuICAgKi9cbiAgLmhhbWJ1cmdlci0tYm9yaW5nIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICYsXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgY29sbGFwc2UpIHtcbiAgLypcbiAgICogQ29sbGFwc2VcbiAgICovXG4gIC5oYW1idXJnZXItLWNvbGxhcHNlIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogMiArICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICogMikgKiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICgkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKyAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCkgKiAtMSwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDAuMXMgMC4yMnMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE2cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTNzIDAuMjVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgY29sbGFwc2Utcikge1xuICAvKlxuICAgKiBDb2xsYXBzZSBSZXZlcnNlXG4gICAqL1xuICAuaGFtYnVyZ2VyLS1jb2xsYXBzZS1yIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xM3M7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogMiArICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICogMikgKiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjEycyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICgkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKyAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCkgKiAtMSwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4xcyAwLjIycyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjEzcyAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIGVsYXN0aWMpIHtcbiAgLypcbiAgICogRWxhc3RpY1xuICAgKi9cbiAgLmhhbWJ1cmdlci0tZWxhc3RpYyB7XG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0b3A6ICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0IC8gMjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCArICRoYW1idXJnZXItbGF5ZXItc3BhY2luZztcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEyNXMgMC4yNzVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKiAyKSArICgkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKiAyKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjc1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgJHktb2Zmc2V0OiAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKyAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodDtcblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR5LW9mZnNldCwgMCkgcm90YXRlKDEzNWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAkeS1vZmZzZXQgKiAtMiwgMCkgcm90YXRlKC0yNzBkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIGVsYXN0aWMtcikge1xuICAvKlxuICAgKiBFbGFzdGljIFJldmVyc2VcbiAgICovXG4gIC5oYW1idXJnZXItLWVsYXN0aWMtciB7XG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0b3A6ICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0IC8gMjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjc1cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCArICRoYW1idXJnZXItbGF5ZXItc3BhY2luZztcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEyNXMgMC4yNzVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKiAyKSArICgkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKiAyKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjc1cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgJHktb2Zmc2V0OiAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKyAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodDtcblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR5LW9mZnNldCwgMCkgcm90YXRlKC0xMzVkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA3NXM7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJHktb2Zmc2V0ICogLTIsIDApIHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDc1cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIGVtcGhhdGljKSB7XG4gIC8qXG4gICAqIEVtcGhhdGljXG4gICAqL1xuICAuaGFtYnVyZ2VyLS1lbXBoYXRpYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEyNXMgMC4xNzVzIGVhc2UtaW47XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLFxuICAgICAgICAgICAgICAgICAgICB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgbGVmdCAwLjEyNXMgMC4xNzVzIGVhc2UtaW47XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1oZWlnaHQpICsgKCRoYW1idXJnZXItbGF5ZXItc3BhY2luZyk7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xMjVzIGN1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzM1KSxcbiAgICAgICAgICAgICAgICAgICAgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGxlZnQ6ICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAtMjtcbiAgICAgICAgICB0b3A6ICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAtMjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAyLCAkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogMiwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMTI1cyBlYXNlLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICByaWdodDogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0yO1xuICAgICAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0yO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0yLCAkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogMiwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC4xMjVzIGVhc2Utb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjEyNXMgMC4xNzVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgZW1waGF0aWMtcikge1xuICAvKlxuICAgKiBFbXBoYXRpYyBSZXZlcnNlXG4gICAqL1xuICAuaGFtYnVyZ2VyLS1lbXBoYXRpYy1yIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTI1cyBjdWJpYy1iZXppZXIoMC42LCAwLjA0LCAwLjk4LCAwLjMzNSksXG4gICAgICAgICAgICAgICAgICAgIHRvcCAwLjA1cyAwLjEyNXMgbGluZWFyLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0IDAuMTI1cyAwLjE3NXMgZWFzZS1pbjtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0b3A6ICgkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCkgKyAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nKTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjEyNXMgY3ViaWMtYmV6aWVyKDAuNiwgMC4wNCwgMC45OCwgMC4zMzUpLFxuICAgICAgICAgICAgICAgICAgICB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgMC4xMjVzIDAuMTc1cyBlYXNlLWluO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0yO1xuICAgICAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogMiwgJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0yLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMTI1cyBlYXNlLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICB0b3AgMC4wNXMgMC4xMjVzIGxpbmVhcixcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4xMjVzIDAuMTc1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICByaWdodDogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIC0yO1xuICAgICAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci13aWR0aCAqIDI7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkaGFtYnVyZ2VyLWxheWVyLXdpZHRoICogLTIsICRoYW1idXJnZXItbGF5ZXItd2lkdGggKiAtMiwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjEyNXMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wIDAuMDVzIDAuMTI1cyBsaW5lYXIsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTI1cyAwLjE3NXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCBtaW51cykge1xuICAvKlxuICAgKiBNaW51c1xuICAgKi9cbiAgLmhhbWJ1cmdlci0tbWludXMge1xuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wOHMgMHMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgIHRvcCAwLjA4cyAwcyBlYXNlLW91dCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAwcyBsaW5lYXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDhzIGVhc2Utb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcCAwLjA4cyBlYXNlLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDBzIDAuMDhzIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCBzbGlkZXIpIHtcbiAgLypcbiAgICogU2xpZGVyXG4gICAqL1xuICAuaGFtYnVyZ2VyLS1zbGlkZXIge1xuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdG9wOiAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCAvIDI7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmc7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRvcDogKCRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICogMikgKyAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgICR5LW9mZnNldDogJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICsgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQ7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAkeS1vZmZzZXQsIDApIHJvdGF0ZSg0NWRlZyk7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZTNkKCRoYW1idXJnZXItbGF5ZXItd2lkdGggLyAtNywgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogLTEsIDApO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAkeS1vZmZzZXQgKiAtMiwgMCkgcm90YXRlKC05MGRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCBzbGlkZXItcikge1xuICAvKlxuICAgKiBTbGlkZXIgUmV2ZXJzZVxuICAgKi9cbiAgLmhhbWJ1cmdlci0tc2xpZGVyLXIge1xuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdG9wOiAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCAvIDI7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmc7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRvcDogKCRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICogMikgKyAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgICR5LW9mZnNldDogJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICsgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQ7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAkeS1vZmZzZXQsIDApIHJvdGF0ZSgtNDVkZWcpO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZTNkKCRoYW1idXJnZXItbGF5ZXItd2lkdGggLyA3LCAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKiAtMSwgMCk7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICR5LW9mZnNldCAqIC0yLCAwKSByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgc3Bpbikge1xuICAvKlxuICAgKiBTcGluXG4gICAqL1xuICAuaGFtYnVyZ2VyLS1zcGluIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDAuMXMgZWFzZS1pbjtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDAuMXMgMC4xMnMgZWFzZS1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgc3Bpbi1yKSB7XG4gIC8qXG4gICAqIFNwaW4gUmV2ZXJzZVxuICAgKi9cbiAgLmhhbWJ1cmdlci0tc3Bpbi1yIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjI1cyBlYXNlLWluLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDAuMXMgZWFzZS1pbjtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyAwLjI1cyBlYXNlLWluLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAwLjFzIDAuMTJzIGVhc2Utb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMjJzIDAuMTJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgc3ByaW5nKSB7XG4gIC8qXG4gICAqIFNwcmluZ1xuICAgKi9cbiAgLmhhbWJ1cmdlci0tc3ByaW5nIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgLyAyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyAwLjEzcyBsaW5lYXI7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKyAkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmc7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIDAuMnMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAuNjY2NjcsIDAuNjY2NjcsIDEpLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4xM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1oZWlnaHQgKiAyKSArICgkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKiAyKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjEzcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMnM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzMzMzMsIDAsIDAuNjY2NjcsIDAuMzMzMzMpLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjEzcyAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICRoYW1idXJnZXItbGF5ZXItc3BhY2luZyArICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0LCAwKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTNzIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICsgJGhhbWJ1cmdlci1sYXllci1oZWlnaHQsIDApIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgc3ByaW5nLXIpIHtcbiAgLypcbiAgICogU3ByaW5nIFJldmVyc2VcbiAgICovXG4gIC5oYW1idXJnZXItLXNwcmluZy1yIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTNzO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdG9wOiAoJGhhbWJ1cmdlci1sYXllci1zcGFjaW5nICogMiArICRoYW1idXJnZXItbGF5ZXItaGVpZ2h0ICogMikgKiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnMgMC4ycyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMC42NjY2NywgMC42NjY2NywgMSksXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMHMgbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLjY2NjY3LCAwLjY2NjY3LCAxKSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTNzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICgkaGFtYnVyZ2VyLWxheWVyLXNwYWNpbmcgKyAkaGFtYnVyZ2VyLWxheWVyLWhlaWdodCkgKiAtMSwgMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjJzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGN1YmljLWJlemllcigwLjMzMzMzLCAwLCAwLjY2NjY3LCAwLjMzMzMzKSxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDBzIDAuMjJzIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyAwLjE1cyBjdWJpYy1iZXppZXIoMC4zMzMzMywgMCwgMC42NjY2NywgMC4zMzMzMyksXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMTNzIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgc3RhbmQpIHtcbiAgLypcbiAgICogU3RhbmRcbiAgICovXG4gIC5oYW1idXJnZXItLXN0YW5kIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSksXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDBzIDAuMDc1cyBsaW5lYXI7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjA3NXMgZWFzZS1pbixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMHMgMC4xNXMgbGluZWFyO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjFzIGVhc2Utb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjA3NXMgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4wNzVzIDAuMXMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIHN0YW5kLXIpIHtcbiAgLypcbiAgICogU3RhbmQgUmV2ZXJzZVxuICAgKi9cbiAgLmhhbWJ1cmdlci0tc3RhbmQtciB7XG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwcyAwLjA3NXMgbGluZWFyO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMDc1cyBlYXNlLWluLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4wNzVzIDBzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4wNzVzIGVhc2UtaW4sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjA3NXMgMHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDc1cyAwcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwcyAwLjE1cyBsaW5lYXI7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMXMgZWFzZS1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMDc1cyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xcyBlYXNlLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4wNzVzIDAuMTVzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaWYgaW5kZXgoJGhhbWJ1cmdlci10eXBlcywgc3F1ZWV6ZSkge1xuICAvKlxuICAgKiBTcXVlZXplXG4gICAqL1xuICAuaGFtYnVyZ2VyLS1zcXVlZXplIHtcbiAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDc1cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyAwLjEycyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDAuMDc1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgMC4xMnMgZWFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDAuMDc1cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEycztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMDc1cyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjA3NXMgMC4xMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpZiBpbmRleCgkaGFtYnVyZ2VyLXR5cGVzLCB2b3J0ZXgpIHtcbiAgLypcbiAgICogVm9ydGV4XG4gICAqL1xuICAuaGFtYnVyZ2VyLS12b3J0ZXgge1xuICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgb3BhY2l0eTtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3R0b20sIHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzY1ZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcblxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGlmIGluZGV4KCRoYW1idXJnZXItdHlwZXMsIHZvcnRleC1yKSB7XG4gIC8qXG4gICAqIFZvcnRleCBSZXZlcnNlXG4gICAqL1xuICAuaGFtYnVyZ2VyLS12b3J0ZXgtciB7XG4gICAgLmhhbWJ1cmdlci1pbm5lciB7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBvcGFjaXR5O1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvdHRvbSwgdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIC5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzY1ZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcblxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvbWl4aW5zXCI7XG5AaW1wb3J0IFwifmhhbWJ1cmdlcnMvX3Nhc3MvaGFtYnVyZ2Vycy9oYW1idXJnZXJzLnNjc3NcIjtcblxuYXNpZGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNS41cmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43LCAxLCAwLjcsIDEpO1xuICAgIHotaW5kZXg6IDk5OTtcblxuICAgIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzfSB7XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwbGFpbldoaXRlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzBweCkge1xuICAgICAgcGFkZGluZy1yaWdodDogNHJlbTtcbiAgICB9XG5cbiAgICBidXR0b24uaGFtYnVyZ2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzfSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAgIHNwYW4uaGFtYnVyZ2VyLWJveCB7XG4gICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuXG4gICAgICAgICAgc3Bhbi5oYW1idXJnZXItaW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRQcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLndoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyV2hpdGU7XG5cbiAgICAgIC5tYXQtdG9vbGJhci1yb3cge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtdG9vbGJhci1yb3cge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gICAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZS1vdXQpO1xuXG4gICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwbGFpbldoaXRlO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygpO1xuXG4gICAgICAgICYuaXMtYWN0aXZlIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgIHRvcDogMy41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAjeyR0YWJsZXRzX2h9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHJlbTtcbiAgICAgIH1cblxuICAgICAgYXBwLXRyYW5zbGF0aW9uIHtcbiAgICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAxLjNyZW07XG4gICAgICAgICAgcmlnaHQ6IDNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMCAwLjc1cmVtIDAgMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGluZFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAkcGxhaW5XaGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gICAgICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICAgICAgY29sb3I6ICRwbGFpbldoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDAuOHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC4ycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgICAgIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzfSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nLmxvZ28ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNywgMSwgMC43LCAxKTtcbiAgICAgIEBpbmNsdWRlIGltYWdlLXJlc3BvbnNpdmUoM3JlbSwgM3JlbSwgYXV0bywgY292ZXIpO1xuXG4gICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMC43cmVtO1xuICAgICAgICByaWdodDogMC43cmVtO1xuICAgICAgICBAaW5jbHVkZSBpbWFnZS1yZXNwb25zaXZlKDJyZW0sIDJyZW0sIGluaGVyaXQsIGNvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXYuY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBmb290ZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB6LWluZGV4OiAxNTAwO1xuXG4gICAgJi53aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJHRleHRQcmltYXJ5Q29sb3IsIDAuOCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgIGNvbG9yOiAkcGxhaW5XaGl0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIiRzbWFydHBob25lczogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpXCI7XG4kc21hcnRwaG9uZXNfaDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpXCI7XG4kdGFibGV0czogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweClcIjtcbiR0YWJsZXRzX2g6IFwib25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcIjtcbiRtYWNib29rX3BybzogXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweClcIjtcbiRiaWdzY3JlZW46IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxODI0cHgpXCI7XG4kdmlkZW9fYmVhbTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweClcIjtcblxuJG1heC13aWR0aDogMTE0MHB4O1xuJHByaW1hcnlDb2xvcjogIzE3YmVkMjtcbiRncmF5Tmlja2VsOiAjY2NjY2NjO1xuJHBsYWluV2hpdGU6ICNmYWZhZmE7XG4kaW1wdXRDb2xvcjogIzUxNTc2YztcbiR0ZXh0UHJpbWFyeUNvbG9yOiAjNTE1NzZjO1xuJHRleHRTZWN1bmRhcnlDb2xvcjogI2E2YTdhYTtcbiRib3JkZXJXaGl0ZTogI2YwZjBmMDtcblxuQG1peGluIGltYWdlLXJlc3BvbnNpdmUoXG4gICR3aWR0aDogMTAwJSxcbiAgJGhlaWdodDogMTAwJSxcbiAgJG1hcmdpbjogMCxcbiAgJGZpdDogY29udGFpbixcbiAgJHBvc2l0aW9uOiA1MCUgNTAlLFxuICAkZGlzcGxheTogYmxvY2tcbikge1xuICAvKiBmaXQgdmFsdWVzOiBjb250YWluLCBjb3ZlclxuICAgICAqIHBvc2l0aW9uIHZhbHVlczogNTAlIDUwJSwgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0ICovXG4gIGRpc3BsYXk6ICRkaXNwbGF5O1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIG1hcmdpbjogJG1hcmdpbjtcbiAgb2JqZWN0LWZpdDogJGZpdDtcbiAgb2JqZWN0LXBvc2l0aW9uOiAkcG9zaXRpb247XG59XG5cbkBtaXhpbiBuby1zZWxlY3QoJGV2ZW50czogbm9uZSkge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuM3MsICRlYXNlOiBsaW5lYXIpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG59XG5cbkBtaXhpbiB0cnVuY2F0ZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lczogMykge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xuICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store-devtools */ 9222);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! swiper/angular */ 8746);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/app.reducer */ 5754);
/* harmony import */ var _build_specifics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-specifics */ 8627);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swiper/swiper.component */ 9279);
/* harmony import */ var _modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-confirmation/modal-confirmation.component */ 2602);
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translation/translation.component */ 9594);
/* harmony import */ var _modules_material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/material-ui/material-ui.module */ 6340);
/* harmony import */ var _store_app_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/app.facade */ 6377);
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/home.module */ 4882);
/* harmony import */ var _modules_about_about_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/about/about.module */ 5702);
/* harmony import */ var _modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/portfolio/portfolio.module */ 1921);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 1358);
/* harmony import */ var _store_app_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/app.effects */ 1593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _store_app_facade__WEBPACK_IMPORTED_MODULE_9__.AppFacade
    ], imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(http),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient]
                }
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forFeature(_store_app_reducer__WEBPACK_IMPORTED_MODULE_3__.APP_FEATURE_KEY, _store_app_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forFeature([_store_app_effects__WEBPACK_IMPORTED_MODULE_13__.AppEffects]),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _build_specifics__WEBPACK_IMPORTED_MODULE_4__.extModules,
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
            _modules_material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_8__.MaterialUiModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_26__.SwiperModule,
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__.HomeModule,
            _modules_about_about_module__WEBPACK_IMPORTED_MODULE_11__.AboutModule,
            _modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__.PortfolioModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_5__.SwiperComponent,
        _modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_6__.ModalConfirmationComponent,
        _translation_translation_component__WEBPACK_IMPORTED_MODULE_7__.TranslationComponent], imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsFeatureModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule, // NgRx
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__.StoreDevtoolsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _modules_material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_8__.MaterialUiModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_26__.SwiperModule,
        _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__.HomeModule,
        _modules_about_about_module__WEBPACK_IMPORTED_MODULE_11__.AboutModule,
        _modules_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__.PortfolioModule] }); })();


/***/ }),

/***/ 8627:
/*!******************************************!*\
  !*** ./src/app/build-specifics/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extModules": () => (/* binding */ extModules)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 1358);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ 9222);



const extModules = [
    _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forRoot({}, {
        metaReducers: []
    }),
    _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forRoot([]),
    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__.StoreDevtoolsModule.instrument({
        maxAge: 100
    })
];


/***/ }),

/***/ 2602:
/*!********************************************************************!*\
  !*** ./src/app/modal-confirmation/modal-confirmation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalConfirmationComponent": () => (/* binding */ ModalConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






class ModalConfirmationComponent {
    constructor(matDialogRef, data) {
        this.matDialogRef = matDialogRef;
        this.data = data;
    }
    ngOnInit() { }
    close() {
        this.matDialogRef.close();
    }
    accept() {
        this.close();
        if (this.data.callback instanceof Function) {
            this.data.callback();
        }
    }
}
ModalConfirmationComponent.ɵfac = function ModalConfirmationComponent_Factory(t) { return new (t || ModalConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ModalConfirmationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalConfirmationComponent, selectors: [["app-modal-confirmation"]], decls: 13, vars: 6, consts: [[1, "modal-confirmation"], [1, "close-button", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["name", "accept-sent-mail", "mat-flat-button", "", 3, "color", "click"]], template: function ModalConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmationComponent_Template_button_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmationComponent_Template_button_click_10_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.type === "SUCCESS" ? "primary" : "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, "GENERAL.accept"), " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["div.modal-confirmation {\n  position: relative;\n  max-width: 20rem;\n}\ndiv.modal-confirmation .close-button {\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  right: -15px;\n  top: -15px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n}\ndiv.modal-confirmation .close-button .mat-icon {\n  color: #a6a7aa;\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\ndiv.modal-confirmation .mat-dialog-title {\n  color: #51576c;\n  margin-bottom: 1rem;\n}\ndiv.modal-confirmation .mat-dialog-content {\n  margin-bottom: 1rem;\n}\ndiv.modal-confirmation .mat-dialog-content p {\n  color: #a6a7aa;\n}\ndiv.modal-confirmation .mat-dialog-actions {\n  display: grid;\n  align-items: center;\n  justify-items: end;\n  margin-bottom: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL1dlYiUyMFByb2plY3RzL2plaXNvbi1uaXNwZXJ1emEvc3JjL2FwcC9tb2RhbC1jb25maXJtYXRpb24vbW9kYWwtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDREo7QURHSTtFQUNFLGNFTGU7RUZNZixlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNETjtBREtFO0VBQ0UsY0VkZTtFRmVmLG1CQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0FDSko7QURNSTtFQUNFLGNFckJlO0FEaUJyQjtBRFFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ05KIiwiZmlsZSI6Im1vZGFsLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbmRpdi5tb2RhbC1jb25maXJtYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMjByZW07XG5cbiAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICByaWdodDogLTE1cHg7XG4gICAgdG9wOiAtMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBjb2xvcjogJHRleHRTZWN1bmRhcnlDb2xvcjtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBjb2xvcjogJHRleHRQcmltYXJ5Q29sb3I7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAkdGV4dFNlY3VuZGFyeUNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG4gIH1cbn1cbiIsImRpdi5tb2RhbC1jb25maXJtYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMjByZW07XG59XG5kaXYubW9kYWwtY29uZmlybWF0aW9uIC5jbG9zZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgcmlnaHQ6IC0xNXB4O1xuICB0b3A6IC0xNXB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuZGl2Lm1vZGFsLWNvbmZpcm1hdGlvbiAuY2xvc2UtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjYTZhN2FhO1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG59XG5kaXYubW9kYWwtY29uZmlybWF0aW9uIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgY29sb3I6ICM1MTU3NmM7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5kaXYubW9kYWwtY29uZmlybWF0aW9uIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuZGl2Lm1vZGFsLWNvbmZpcm1hdGlvbiAubWF0LWRpYWxvZy1jb250ZW50IHAge1xuICBjb2xvcjogI2E2YTdhYTtcbn1cbmRpdi5tb2RhbC1jb25maXJtYXRpb24gLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG59IiwiJHNtYXJ0cGhvbmVzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweClcIjtcbiRzbWFydHBob25lc19oOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcIjtcbiR0YWJsZXRzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KVwiO1xuJHRhYmxldHNfaDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKVwiO1xuJG1hY2Jvb2tfcHJvOiBcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KVwiO1xuJGJpZ3NjcmVlbjogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE4MjRweClcIjtcbiR2aWRlb19iZWFtOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KVwiO1xuXG4kbWF4LXdpZHRoOiAxMTQwcHg7XG4kcHJpbWFyeUNvbG9yOiAjMTdiZWQyO1xuJGdyYXlOaWNrZWw6ICNjY2NjY2M7XG4kcGxhaW5XaGl0ZTogI2ZhZmFmYTtcbiRpbXB1dENvbG9yOiAjNTE1NzZjO1xuJHRleHRQcmltYXJ5Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFNlY3VuZGFyeUNvbG9yOiAjYTZhN2FhO1xuJGJvcmRlcldoaXRlOiAjZjBmMGYwO1xuXG5AbWl4aW4gaW1hZ2UtcmVzcG9uc2l2ZShcbiAgJHdpZHRoOiAxMDAlLFxuICAkaGVpZ2h0OiAxMDAlLFxuICAkbWFyZ2luOiAwLFxuICAkZml0OiBjb250YWluLFxuICAkcG9zaXRpb246IDUwJSA1MCUsXG4gICRkaXNwbGF5OiBibG9ja1xuKSB7XG4gIC8qIGZpdCB2YWx1ZXM6IGNvbnRhaW4sIGNvdmVyXG4gICAgICogcG9zaXRpb24gdmFsdWVzOiA1MCUgNTAlLCB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgKi9cbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgbWFyZ2luOiAkbWFyZ2luO1xuICBvYmplY3QtZml0OiAkZml0O1xuICBvYmplY3QtcG9zaXRpb246ICRwb3NpdGlvbjtcbn1cblxuQG1peGluIG5vLXNlbGVjdCgkZXZlbnRzOiBub25lKSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyB7XG4gIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC4zcywgJGVhc2U6IGxpbmVhcikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbn1cblxuQG1peGluIHRydW5jYXRlKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzOiAzKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XG4gIHRleHQtb3ZlcmZsb3c6IC1vLWVsbGlwc2lzLWxhc3RsaW5lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 5440:
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 2447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5702:
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngx-translate/ngx-translate.module */ 4576);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-ui/material-ui.module */ 6340);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ 5440);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 2447);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_4__.AppFacade], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule, _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule, _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutRoutingModule] }); })();


/***/ }),

/***/ 2447:
/*!********************************************************!*\
  !*** ./src/app/modules/about/about/about.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _about_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.constant */ 4552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 8491);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 2315);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);












function AboutComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function AboutComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r4.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", skill_r4.percent);
} }
class AboutComponent {
    constructor(fb, appFacade) {
        this.fb = fb;
        this.appFacade = appFacade;
        this.skills = _about_constant__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SKILLS.slice(0, 6);
    }
    ngOnInit() {
        this.initForm();
        this.appFacade.setItIsHome(false);
        this.viewMode = localStorage.getItem('viewMode') || 'grid';
    }
    filter(searchText) {
        if (searchText) {
            this.skills = _about_constant__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SKILLS.filter((skill) => skill.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
            this.appFacade.sendAnalyticsEvent('search_skill', 'about', searchText, 'click');
        }
        else {
            this.viewAll(this.myToggle);
        }
    }
    clearSearch() {
        this.searchForm.reset();
        this.viewAll(this.myToggle);
    }
    viewAll(status) {
        this.myToggle = status;
        if (this.myToggle) {
            this.skills = _about_constant__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SKILLS;
            this.appFacade.sendAnalyticsEvent('view_all_skills', 'about', 'skills', 'click');
        }
        else {
            this.skills = _about_constant__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SKILLS.slice(0, 6);
            this.appFacade.sendAnalyticsEvent('view_less_skills', 'about', 'skills', 'click');
        }
    }
    setViewMode(mode) {
        this.viewMode = mode;
        localStorage.setItem('viewMode', mode);
    }
    initForm() {
        this.searchForm = this.fb.group({
            searchText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])]
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_1__.AppFacade)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 32, vars: 24, consts: [[1, "column", "left"], [1, "column", "right"], [1, "row", "col", "s12"], [3, "innerHTML"], [3, "formGroup", "ngSubmit"], [3, "checked", "click"], [1, "wrapper"], ["name", "clear-search", "type", "button", 3, "click", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "searchText", 3, "keyup.enter"], ["name", "search-skill", "mat-stroked-button", "", "color", "primary"], [1, "skills", 3, "ngClass"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "action"], [3, "checked", "change"], ["name", "clear-search", "type", "button", 3, "click"], [1, "item"], [1, "legends"], ["mode", "determinate", 3, "value"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "aside")(1, "div", 0)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1)(9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AboutComponent_Template_form_ngSubmit_12_listener() { return ctx.filter(ctx.searchForm.value.searchText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_Template_mat_button_toggle_click_13_listener() { return ctx.setViewMode("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutComponent_Template_mat_button_toggle_click_16_listener() { return ctx.setViewMode("grid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AboutComponent_button_20_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function AboutComponent_Template_input_keyup_enter_21_listener() { return ctx.filter(ctx.searchForm.value.searchText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AboutComponent_div_26_Template, 7, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12)(28, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AboutComponent_Template_mat_button_toggle_change_28_listener($event) { return ctx.viewAll($event.source.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 12, "APP.about_me"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 14, "ABOUT.who_i_am"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 16, "ABOUT.intro"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.viewMode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.viewMode === "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchForm.value.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 18, "GENERAL.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.myToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.myToggle ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 20, "GENERAL.see_less") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 22, "GENERAL.see_all"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["aside[_ngcontent-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  min-height: 30rem;\n  max-width: 1140px;\n  padding-top: 5.5rem;\n  position: relative;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\naside[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  color: red;\n}\naside[_ngcontent-%COMP%]   div.column[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  box-sizing: border-box;\n  padding-top: 5rem;\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 6rem;\n    padding: 1rem 2rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Hind, sans-serif;\n  font-size: 2.2rem;\n  line-height: 1;\n  font-weight: 700;\n  color: #51576c;\n  margin: 0 0 0.5rem;\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Hind, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #a6a7aa;\n  margin-bottom: 1.25rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 3rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    padding: 1rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  font-family: Hind, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #a6a7aa;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 0 10px;\n  margin-top: 10px;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] {\n  color: #a6a7aa;\n  margin-right: 10px;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-button-toggle.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  color: #51576c;\n}\n@media only screen and (max-width: 579px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  top: 0;\n  bottom: 0;\n  right: 5px;\n  margin: auto;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n  color: #cccccc;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  border-radius: 3px;\n  padding: 0 10px;\n  border: 1px solid #cccccc;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  gap: 20px;\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin: 2rem 0;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 579px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills.grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, calc(33.333333% - 14px));\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills.list[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.legends[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.legends[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Hind, sans-serif;\n  font-size: 0.85rem;\n  font-weight: bold;\n  color: #51576c;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.legends[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-left: 0.75rem;\n  font-weight: 400;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  margin-bottom: 2rem;\n  padding: 0 10px;\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL1dlYiUyMFByb2plY3RzL2plaXNvbi1uaXNwZXJ1emEvc3JjL2FwcC9tb2R1bGVzL2Fib3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkNDVTtFREFWLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUVERjtBRkdFO0VBQ0UsVUFBQTtBRURKO0FGSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FFRko7QUZJSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBRUZOO0FGSU07RUFORjtJQU9JLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUVETjtBQUNGO0FGR007RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzVCVztFRDZCWCxrQkFBQTtBRURSO0FGSU07RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NwQ2E7RURxQ2Isc0JBQUE7QUVGUjtBRk1JO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FFSk47QUZNTTtFQUpGO0lBS0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VFSE47QUFDRjtBRktNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3pEYTtBQ3NEckI7QUZLUTtFQVJGO0lBU0ksbUJBQUE7RUVGUjtBQUNGO0FGS007RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FFSFI7QUZLUTtFQUNFLGNDekVXO0VEMEVYLGtCQUFBO0FFSFY7QUZLVTtFQUNFLGNDOUVPO0FDMkVuQjtBRk1VO0VBUkY7SUFTSSxhQUFBO0VFSFY7QUFDRjtBRk1RO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FFSlY7QUZNVTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FFSlo7QUZNWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQ2xIRDtBQzhHYjtBRk1jO0VBQ0UsVUFBQTtBRUpoQjtBRlNVO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FFUFo7QUZXUTtFQUNFLGlCQUFBO0FFVFY7QUZhTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FFWFI7QUZhUTtFQVZGO0lBV0kscUNBQUE7RUVWUjtBQUNGO0FGWVE7RUFDRSxpRUFBQTtBRVZWO0FGYVE7RUFDRSwwQkFBQTtBRVhWO0FGY1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FFWlY7QUZjVTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDcEtPO0FDd0puQjtBRmNZO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBRVpkO0FGa0JNO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FFaEJSIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnNcIjtcblxuYXNpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICBwYWRkaW5nLXRvcDogNS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5ib2xkIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgZGl2LmNvbHVtbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG5cbiAgICAmLmxlZnQge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAkdGV4dFNlY3VuZGFyeUNvbG9yO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICYucmlnaHQge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcblxuICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHRleHRTZWN1bmRhcnlDb2xvcjtcblxuICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICAgICAgY29sb3I6ICR0ZXh0U2VjdW5kYXJ5Q29sb3I7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGl2LndyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogJGdyYXlOaWNrZWw7XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheU5pY2tlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRpdi5za2lsbHMge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5ncmlkIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIGNhbGMoMzMuMzMzMzMzJSAtIDE0cHgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubGlzdCB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYubGVnZW5kcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuXG4gICAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkc21hcnRwaG9uZXM6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KVwiO1xuJHNtYXJ0cGhvbmVzX2g6IFwib25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKVwiO1xuJHRhYmxldHM6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpXCI7XG4kdGFibGV0c19oOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpXCI7XG4kbWFjYm9va19wcm86IFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpXCI7XG4kYmlnc2NyZWVuOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTgyNHB4KVwiO1xuJHZpZGVvX2JlYW06IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpXCI7XG5cbiRtYXgtd2lkdGg6IDExNDBweDtcbiRwcmltYXJ5Q29sb3I6ICMxN2JlZDI7XG4kZ3JheU5pY2tlbDogI2NjY2NjYztcbiRwbGFpbldoaXRlOiAjZmFmYWZhO1xuJGltcHV0Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFByaW1hcnlDb2xvcjogIzUxNTc2YztcbiR0ZXh0U2VjdW5kYXJ5Q29sb3I6ICNhNmE3YWE7XG4kYm9yZGVyV2hpdGU6ICNmMGYwZjA7XG5cbkBtaXhpbiBpbWFnZS1yZXNwb25zaXZlKFxuICAkd2lkdGg6IDEwMCUsXG4gICRoZWlnaHQ6IDEwMCUsXG4gICRtYXJnaW46IDAsXG4gICRmaXQ6IGNvbnRhaW4sXG4gICRwb3NpdGlvbjogNTAlIDUwJSxcbiAgJGRpc3BsYXk6IGJsb2NrXG4pIHtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBtYXJnaW46ICRtYXJnaW47XG4gIG9iamVjdC1maXQ6ICRmaXQ7XG4gIG9iamVjdC1wb3NpdGlvbjogJHBvc2l0aW9uO1xufVxuXG5AbWl4aW4gbm8tc2VsZWN0KCRldmVudHM6IG5vbmUpIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjNzLCAkZWFzZTogbGluZWFyKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xufVxuXG5AbWl4aW4gdHJ1bmNhdGUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXM6IDMpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcbiAgdGV4dC1vdmVyZmxvdzogLW8tZWxsaXBzaXMtbGFzdGxpbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCJhc2lkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZy10b3A6IDUuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmFzaWRlIC5ib2xkIHtcbiAgY29sb3I6IHJlZDtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ubGVmdCB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBhc2lkZSBkaXYuY29sdW1uLmxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbn1cbmFzaWRlIGRpdi5jb2x1bW4ubGVmdCBoMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzUxNTc2YztcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5sZWZ0IHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNhNmE3YWE7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNhNmE3YWE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBwIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZm9ybSAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogI2E2YTdhYTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBmb3JtIC5tYXQtYnV0dG9uLXRvZ2dsZS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgY29sb3I6ICM1MTU3NmM7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZm9ybSAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZm9ybSBkaXYud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZm9ybSBkaXYud3JhcHBlciBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGZvcm0gZGl2LndyYXBwZXIgYnV0dG9uIC5tYXQtaWNvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZm9ybSBkaXYud3JhcHBlciBidXR0b24gLm1hdC1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZm9ybSBkaXYud3JhcHBlciBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYuc2tpbGxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMnJlbSAwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LnNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYuc2tpbGxzLmdyaWQge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIGNhbGMoMzMuMzMzMzMzJSAtIDE0cHgpKTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LnNraWxscy5saXN0IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi5za2lsbHMgZGl2LmxlZ2VuZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LnNraWxscyBkaXYubGVnZW5kcyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzUxNTc2Yztcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LnNraWxscyBkaXYubGVnZW5kcyBsYWJlbDpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCAuYWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 4552:
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about/about.constant.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS)
/* harmony export */ });
class CONSTANTS {
}
// eslint-disable-next-line @typescript-eslint/naming-convention
CONSTANTS.SKILLS = [{
        text: 'Vtex IO',
        percent: 92
    }, {
        text: 'Vtex CMS',
        percent: 77
    }, {
        text: 'ReactJS',
        percent: 97
    }, {
        text: 'NextJS React Framework',
        percent: 93
    }, {
        text: 'Angular',
        percent: 98
    }, {
        text: 'Angular State Machine',
        percent: 88
    }, {
        text: 'Redux (NgRx, React Redux, Vuex)',
        percent: 95
    }, {
        text: 'TypeScript',
        percent: 95
    }, {
        text: 'VueJS',
        percent: 95
    }, {
        text: 'NodeJS',
        percent: 85
    }, {
        text: 'Jest',
        percent: 85
    }, {
        text: 'HTML5',
        percent: 98
    }, {
        text: 'JavaScript',
        percent: 98
    }, {
        text: 'Lodash',
        percent: 95
    }, {
        text: 'Highcharts',
        percent: 98
    }, {
        text: 'Underscore',
        percent: 87
    }, {
        text: 'Angular Material',
        percent: 97
    }, {
        text: 'Material UI',
        percent: 97
    }, {
        text: 'Kendo UI Telerik',
        percent: 89
    }, {
        text: 'Bootstrap',
        percent: 80
    }, {
        text: 'SASS',
        percent: 98
    }, {
        text: 'LESS',
        percent: 98
    }, {
        text: 'PHP',
        percent: 89
    }, {
        text: 'Laravel',
        percent: 47
    }, {
        text: 'Java',
        percent: 63
    }, {
        text: 'Android',
        percent: 63
    }, {
        text: 'C++',
        percent: 45
    }, {
        text: 'MySQL',
        percent: 70
    }, {
        text: 'PostgreSQL',
        percent: 68
    }, {
        text: 'Spring Framework',
        percent: 46
    }, {
        text: 'GitHub',
        percent: 86
    }, {
        text: 'Gerrit',
        percent: 76
    }, {
        text: 'Photoshop',
        percent: 35
    }, {
        text: 'Illustrator',
        percent: 38
    }, {
        text: 'Inkscape',
        percent: 44
    }, {
        text: 'Gimp',
        percent: 66
    }];


/***/ }),

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 1067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngx-translate/ngx-translate.module */ 4576);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 4601);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 1067);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_3__.AppFacade], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule,
            _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule,
        _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule] }); })();


/***/ }),

/***/ 1067:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home/home.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class HomeComponent {
    constructor(appFacade) {
        this.appFacade = appFacade;
        this.angularVersion = 'Angular 13.3.9';
    }
    ngOnInit() {
        this.appFacade.setItIsHome(true);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_0__.AppFacade)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 4, consts: [["src", "assets/images/background.png", "alt", "background"], [1, "wrapper"], [1, "name-block"], ["src", "assets/images/FrontendEngineer.svg", "alt", "Frontend engineer", 1, "web"], [1, "networks"], ["aria-label", "github", "rel", "noreferrer", "href", "https://github.com/jnisperuza", "target", "_blank", 1, "social", "git"], ["aria-label", "twitter", "rel", "noreferrer", "href", "https://twitter.com/jeisonnisperuza", "target", "_blank", 1, "social", "twitter"], ["aria-label", "linkedin", "rel", "noreferrer", "href", "https://www.linkedin.com/in/jeison-nisperuza/", "target", "_blank", 1, "social", "linkedin"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Jeison ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nisperuza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "a", 5)(11, "a", 6)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 2, "HOME.built_with"), " ", ctx.angularVersion, " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["aside[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  min-height: 30rem;\n  position: relative;\n  margin: 0 auto;\n}\naside[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  min-height: 30rem;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 10;\n}\naside[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  object-fit: cover;\n  object-position: 50% 50%;\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 1140px;\n  margin: 0 auto;\n  transition: all 0.3s linear;\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  display: block;\n  width: 25rem;\n  height: 20rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  z-index: 20;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 1rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], aside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], aside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  text-align: left;\n  text-transform: capitalize;\n  font-family: \"Hind\", sans-serif;\n  color: #fafafa;\n  line-height: 1;\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  font-weight: bold;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  \n  display: block;\n  width: auto;\n  height: 3rem;\n  margin: 1.5rem 0 0 0;\n  object-fit: contain;\n  object-position: 50% 50%;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.name-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  position: absolute;\n  right: 1rem;\n  bottom: 10%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  z-index: 20;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 3rem;\n  height: 3rem;\n  margin: 0 0 0 1rem;\n  padding: 0;\n  opacity: 0.6;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.git[_ngcontent-%COMP%] {\n  background-image: url('git-white.svg');\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%] {\n  background-image: url('twitter-white.svg');\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.skype[_ngcontent-%COMP%] {\n  background-image: url('skype-white.svg');\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%] {\n  background-image: url('linkedin-white.svg');\n}\naside[_ngcontent-%COMP%]   div.wrapper[_ngcontent-%COMP%]   div.networks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  color: #fafafa;\n  opacity: 0.5;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9XZWIlMjBQcm9qZWN0cy9qZWlzb24tbmlzcGVydXphL3NyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7QUNESjtBRElFO0VFQUE7MkRBQUE7RUFFQSxjQUpVO0VBS1YsV0ZGNEI7RUVHNUIsWUZIa0M7RUVJbEMsWUZKd0M7RUVLeEMsaUJGTDhDO0VFTTlDLHdCQVZXO0FEU2I7QURGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkU5QlE7RUYrQlIsY0FBQTtFRXVCRiwyQkFBQTtBRGZGO0FETEk7RUFDRSxpQkVuQ007RUZvQ04sY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFRWhCSiw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtFQUNBLGFBQUE7QUR3QkY7QURaTTtFQWJGO0lBY0ksV0FBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQ2VOO0FBQ0Y7QURiTTs7O0VBR0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0UxREs7RUYyREwsY0FBQTtBQ2VSO0FEWk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNjUjtBRFpRO0VBSkY7SUFLSSxlQUFBO0VDZVI7QUFDRjtBRFpNO0VBQ0Usa0JBQUE7RUUxRE47MkRBQUE7RUFFQSxjQUpVO0VBS1YsV0Z3RGdDO0VFdkRoQyxZRnVEc0M7RUV0RHRDLG9CRnNENEM7RUVyRDVDLG1CQVZNO0VBV04sd0JBVlc7QURtRmI7QURuQlE7RUFKRjtJQUtJLGdCQUFBO0VDc0JSO0FBQ0Y7QURsQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUVqRUosNkNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7RUFDQSxhQUFBO0FEc0ZGO0FEekJNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDMkJSO0FEekJRO0VBQ0UsVUFBQTtBQzJCVjtBRHhCUTtFQUNFLHNDQUFBO0FDMEJWO0FEdkJRO0VBQ0UsMENBQUE7QUN5QlY7QUR0QlE7RUFDRSx3Q0FBQTtBQ3dCVjtBRHJCUTtFQUNFLDJDQUFBO0FDdUJWO0FEbkJNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0VqSUs7RUZrSUwsWUFBQTtFQUNBLGVBQUE7QUNxQlIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbmFzaWRlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMzByZW07XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgaW1nIHtcbiAgICBAaW5jbHVkZSBpbWFnZS1yZXNwb25zaXZlKDEwMCUsIDEwMCUsIGF1dG8sIGNvdmVyKTtcbiAgfVxuXG4gIGRpdi53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG5cbiAgICBkaXYubmFtZS1ibG9jayB7XG4gICAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgIGhlaWdodDogMjByZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgei1pbmRleDogMjA7XG4gICAgICBAaW5jbHVkZSBuby1zZWxlY3QoKTtcblxuICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIH1cblxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LWZhbWlseTogXCJIaW5kXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGNvbG9yOiAkcGxhaW5XaGl0ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBpbmNsdWRlIGltYWdlLXJlc3BvbnNpdmUoYXV0bywgM3JlbSwgMS41cmVtIDAgMCAwKTtcblxuICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYubmV0d29ya3Mge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMXJlbTtcbiAgICAgIGJvdHRvbTogMTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgQGluY2x1ZGUgbm8tc2VsZWN0KGFsbCk7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBtYXJnaW46IDAgMCAwIDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZ2l0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXQtd2hpdGUuc3ZnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYudHdpdHRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci13aGl0ZS5zdmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5za3lwZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2t5cGUtd2hpdGUuc3ZnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubGlua2VkaW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLXdoaXRlLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgY29sb3I6ICRwbGFpbldoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImFzaWRlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmFzaWRlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogMzByZW07XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICB6LWluZGV4OiAxMDtcbn1cbmFzaWRlIGltZyB7XG4gIC8qIGZpdCB2YWx1ZXM6IGNvbnRhaW4sIGNvdmVyXG4gICAgICogcG9zaXRpb24gdmFsdWVzOiA1MCUgNTAlLCB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uYW1lLWJsb2NrIHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjVyZW07XG4gIGhlaWdodDogMjByZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogMjA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgYXNpZGUgZGl2LndyYXBwZXIgZGl2Lm5hbWUtYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG5hc2lkZSBkaXYud3JhcHBlciBkaXYubmFtZS1ibG9jayBoMSxcbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uYW1lLWJsb2NrIGgyLFxuYXNpZGUgZGl2LndyYXBwZXIgZGl2Lm5hbWUtYmxvY2sgaDMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBcIkhpbmRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuYXNpZGUgZGl2LndyYXBwZXIgZGl2Lm5hbWUtYmxvY2sgaDEge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIGFzaWRlIGRpdi53cmFwcGVyIGRpdi5uYW1lLWJsb2NrIGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uYW1lLWJsb2NrIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luOiAxLjVyZW0gMCAwIDA7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBhc2lkZSBkaXYud3JhcHBlciBkaXYubmFtZS1ibG9jayBpbWcge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gIH1cbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uZXR3b3JrcyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG4gIGJvdHRvbTogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgei1pbmRleDogMjA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5hc2lkZSBkaXYud3JhcHBlciBkaXYubmV0d29ya3MgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgcGFkZGluZzogMDtcbiAgb3BhY2l0eTogMC42O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uZXR3b3JrcyBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uZXR3b3JrcyBhLmdpdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dpdC13aGl0ZS5zdmcpO1xufVxuYXNpZGUgZGl2LndyYXBwZXIgZGl2Lm5ldHdvcmtzIGEudHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXItd2hpdGUuc3ZnKTtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uZXR3b3JrcyBhLnNreXBlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2t5cGUtd2hpdGUuc3ZnKTtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uZXR3b3JrcyBhLmxpbmtlZGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGlua2VkaW4td2hpdGUuc3ZnKTtcbn1cbmFzaWRlIGRpdi53cmFwcGVyIGRpdi5uZXR3b3JrcyBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0yMHB4O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDEwcHg7XG59IiwiJHNtYXJ0cGhvbmVzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweClcIjtcbiRzbWFydHBob25lc19oOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcIjtcbiR0YWJsZXRzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KVwiO1xuJHRhYmxldHNfaDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKVwiO1xuJG1hY2Jvb2tfcHJvOiBcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KVwiO1xuJGJpZ3NjcmVlbjogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE4MjRweClcIjtcbiR2aWRlb19iZWFtOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KVwiO1xuXG4kbWF4LXdpZHRoOiAxMTQwcHg7XG4kcHJpbWFyeUNvbG9yOiAjMTdiZWQyO1xuJGdyYXlOaWNrZWw6ICNjY2NjY2M7XG4kcGxhaW5XaGl0ZTogI2ZhZmFmYTtcbiRpbXB1dENvbG9yOiAjNTE1NzZjO1xuJHRleHRQcmltYXJ5Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFNlY3VuZGFyeUNvbG9yOiAjYTZhN2FhO1xuJGJvcmRlcldoaXRlOiAjZjBmMGYwO1xuXG5AbWl4aW4gaW1hZ2UtcmVzcG9uc2l2ZShcbiAgJHdpZHRoOiAxMDAlLFxuICAkaGVpZ2h0OiAxMDAlLFxuICAkbWFyZ2luOiAwLFxuICAkZml0OiBjb250YWluLFxuICAkcG9zaXRpb246IDUwJSA1MCUsXG4gICRkaXNwbGF5OiBibG9ja1xuKSB7XG4gIC8qIGZpdCB2YWx1ZXM6IGNvbnRhaW4sIGNvdmVyXG4gICAgICogcG9zaXRpb24gdmFsdWVzOiA1MCUgNTAlLCB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgKi9cbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgbWFyZ2luOiAkbWFyZ2luO1xuICBvYmplY3QtZml0OiAkZml0O1xuICBvYmplY3QtcG9zaXRpb246ICRwb3NpdGlvbjtcbn1cblxuQG1peGluIG5vLXNlbGVjdCgkZXZlbnRzOiBub25lKSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyB7XG4gIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC4zcywgJGVhc2U6IGxpbmVhcikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbn1cblxuQG1peGluIHRydW5jYXRlKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzOiAzKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XG4gIHRleHQtb3ZlcmZsb3c6IC1vLWVsbGlwc2lzLWxhc3RsaW5lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 6340:
/*!***********************************************************!*\
  !*** ./src/app/modules/material-ui/material-ui.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialUiModule": () => (/* binding */ MaterialUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 9129);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 6287);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ 6984);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9765);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 9421);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 4202);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 3351);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 6052);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 6238);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 5812);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 2261);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 3177);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ 2580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ 8491);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 8123);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 1840);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 8824);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 2315);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 739);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 9272);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 3186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class MaterialUiModule {
}
MaterialUiModule.ɵfac = function MaterialUiModule_Factory(t) { return new (t || MaterialUiModule)(); };
MaterialUiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialUiModule });
MaterialUiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialUiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule] }); })();


/***/ }),

/***/ 5133:
/*!********************************************************!*\
  !*** ./src/app/modules/ngx-translate/app.load.lang.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpLoaderFactory": () => (/* binding */ httpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);

// AoT requires an exported function for factories
const httpLoaderFactory = (httpClient) => (new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(httpClient, '../../../assets/i18n/', '.json'));


/***/ }),

/***/ 4576:
/*!***************************************************************!*\
  !*** ./src/app/modules/ngx-translate/ngx-translate.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxTranslateModule": () => (/* binding */ NgxTranslateModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var ngx_translate_cut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-translate-cut */ 3715);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_load_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.load.lang */ 5133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class NgxTranslateModule {
}
NgxTranslateModule.ɵfac = function NgxTranslateModule_Factory(t) { return new (t || NgxTranslateModule)(); };
NgxTranslateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxTranslateModule });
NgxTranslateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            ngx_translate_cut__WEBPACK_IMPORTED_MODULE_2__.NgxTranslateCutModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateLoader,
                    useFactory: _app_load_lang__WEBPACK_IMPORTED_MODULE_0__.httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
                }
            })
        ], ngx_translate_cut__WEBPACK_IMPORTED_MODULE_2__.NgxTranslateCutModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxTranslateModule, { imports: [ngx_translate_cut__WEBPACK_IMPORTED_MODULE_2__.NgxTranslateCutModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule], exports: [ngx_translate_cut__WEBPACK_IMPORTED_MODULE_2__.NgxTranslateCutModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule] }); })();


/***/ }),

/***/ 221:
/*!***************************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioRoutingModule": () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 3873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_0__.PortfolioComponent
    }
];
class PortfolioRoutingModule {
}
PortfolioRoutingModule.ɵfac = function PortfolioRoutingModule_Factory(t) { return new (t || PortfolioRoutingModule)(); };
PortfolioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PortfolioRoutingModule });
PortfolioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PortfolioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1921:
/*!*******************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioModule": () => (/* binding */ PortfolioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngx-translate/ngx-translate.module */ 4576);
/* harmony import */ var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-ui/material-ui.module */ 6340);
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio-routing.module */ 221);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 3873);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class PortfolioModule {
}
PortfolioModule.ɵfac = function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); };
PortfolioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_4__.AppFacade], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule,
            _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule,
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_2__.PortfolioRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_1__.MaterialUiModule,
        _ngx_translate_ngx_translate_module__WEBPACK_IMPORTED_MODULE_0__.NgxTranslateModule,
        _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_2__.PortfolioRoutingModule] }); })();


/***/ }),

/***/ 3873:
/*!********************************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio/portfolio.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../swiper/swiper.component */ 9279);
/* harmony import */ var _portfolio_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.constants */ 3602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/app.facade */ 6377);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 8491);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);











function PortfolioComponent_mat_card_10_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function PortfolioComponent_mat_card_10_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function PortfolioComponent_mat_card_10_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PortfolioComponent_mat_card_10_ng_container_6_ng_container_2_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PortfolioComponent_mat_card_10_ng_container_6_ng_container_3_Template, 2, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const technical_r3 = ctx.$implicit;
    const isLast_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", technical_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLast_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", isLast_r4);
} }
function PortfolioComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7)(3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PortfolioComponent_mat_card_10_ng_container_6_Template, 4, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PortfolioComponent_mat_card_10_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const project_r1 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.openDialog(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/images/projects/", project_r1.cover, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", project_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", project_r1.technical);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 5, "GENERAL.see_more"), " ");
} }
class PortfolioComponent {
    constructor(dialog, appFacade) {
        this.dialog = dialog;
        this.appFacade = appFacade;
        this.myToggle = false;
        this.projects = _portfolio_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.projects.slice(0, 6);
    }
    ngAfterViewInit() {
        this.appFacade.setItIsHome(false);
    }
    openDialog(project) {
        const dialogRef = this.dialog.open(_swiper_swiper_component__WEBPACK_IMPORTED_MODULE_0__.SwiperComponent, {
            width: '95%',
            height: 'calc(95% - 35px)',
            data: project,
            disableClose: true,
            panelClass: 'swiper-dialog-container'
        });
        dialogRef.afterOpened().subscribe(() => {
            this.appFacade.sendAnalyticsEvent('view_detail', 'portfolio', project.name, 'click');
        });
    }
    viewAll(status) {
        this.myToggle = status;
        if (this.myToggle) {
            this.projects = _portfolio_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.projects;
            this.appFacade.sendAnalyticsEvent('view_all', 'portfolio', 'portfolio', 'click');
        }
        else {
            this.projects = _portfolio_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.projects.slice(0, 6);
            this.appFacade.sendAnalyticsEvent('view_less', 'portfolio', 'portfolio', 'click');
        }
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_store_app_facade__WEBPACK_IMPORTED_MODULE_2__.AppFacade)); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 16, vars: 13, consts: [[1, "column", "left"], [1, "column", "right"], [1, "works"], [4, "ngFor", "ngForOf"], [1, "action"], [3, "checked", "change"], ["alt", "cover", 3, "src"], [1, "detail"], [3, "matTooltip"], [2, "-webkit-box-orient", "vertical"], ["name", "see-more-projects", "mat-button", "", 3, "click"], [4, "ngIf"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "aside")(1, "div", 0)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PortfolioComponent_mat_card_10_Template, 10, 7, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4)(12, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function PortfolioComponent_Template_mat_button_toggle_change_12_listener($event) { return ctx.viewAll($event.source.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, "APP.experience"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, "PORTFOLIO.some_projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.myToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.myToggle ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, "GENERAL.see_less") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 11, "GENERAL.see_all"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["aside[_ngcontent-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  min-height: 30rem;\n  max-width: 1140px;\n  padding-top: 5.5rem;\n  position: relative;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\naside[_ngcontent-%COMP%]   div.column[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  box-sizing: border-box;\n  padding-top: 5rem;\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 6rem;\n    padding: 1rem 2rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Hind, sans-serif;\n  font-size: 2.2rem;\n  line-height: 1;\n  font-weight: 700;\n  color: #51576c;\n  margin: 0 0 0.5rem;\n}\naside[_ngcontent-%COMP%]   div.column.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: Hind, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #a6a7aa;\n  margin-bottom: 1.25rem;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 3rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    padding: 1rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  font-family: Hind, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #a6a7aa;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 20px;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, calc(33.333333% - 14px));\n  margin: 2rem 0;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, 100%);\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 959px), only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, calc(50% - 14px));\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-width: 255px;\n  height: 175px;\n  display: flex;\n  justify-content: flex-start;\n  box-sizing: border-box;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:nth-child(3n) {\n  margin-right: 0;\n}\n@media only screen and (max-width: 579px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    height: 15rem;\n  }\n}\n@media only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    height: 20rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 959px), only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    height: 15rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:hover {\n  overflow: hidden;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:hover   div.detail[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media only screen and (max-width: 579px) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:hover   div.detail[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:hover   div.detail[_ngcontent-%COMP%] {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   div.detail[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: absolute;\n  padding: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 0;\n  background-color: rgba(0, 0, 0, 0.66);\n  transition: height 0.3s ease-in-out;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   div.detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  cursor: default;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 1rem 1rem 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   div.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: default;\n  color: white;\n  font-size: 0.85rem;\n  font-weight: 400;\n  margin: 0.2rem 1rem;\n  position: relative;\n  box-sizing: border-box;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  overflow: hidden;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   div.detail[_ngcontent-%COMP%]   button.mat-button[_ngcontent-%COMP%] {\n  margin: 0.5rem 0.8rem;\n  background-color: #17bed2;\n  color: white;\n}\n@media only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape) {\n  aside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   div.detail[_ngcontent-%COMP%]   button.mat-button[_ngcontent-%COMP%] {\n    width: 3rem;\n  }\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   div.works[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  transition: all 0.5s ease-out;\n  \n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  object-fit: contain;\n  object-position: center;\n}\naside[_ngcontent-%COMP%]   div.column.right[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  margin-bottom: 2rem;\n  padding: 0 10px;\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9XZWIlMjBQcm9qZWN0cy9qZWlzb24tbmlzcGVydXphL3NyYy9hcHAvbW9kdWxlcy9wb3J0Zm9saW8vcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJDQ1U7RURBVixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FFREY7QUZHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUVESjtBRkdJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FFRE47QUZHTTtFQU5GO0lBT0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFRUFOO0FBQ0Y7QUZFTTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRUFSO0FGR007RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NoQ2E7RURpQ2Isc0JBQUE7QUVEUjtBRktJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FFSE47QUZLTTtFQUpGO0lBS0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VFRk47QUFDRjtBRklNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3JEYTtBQ21EckI7QUZLTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGlFQUFBO0VBQ0EsY0FBQTtBRUhSO0FGS1E7RUFORjtJQU9JLDhDQUFBO0VFRlI7QUFDRjtBRklRO0VBVkY7SUFXSSwwREFBQTtFRURSO0FBQ0Y7QUZHUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FFRFY7QUZHVTtFQUNFLGVBQUE7QUVEWjtBRklVO0VBYkY7SUFjSSxhQUFBO0VFRFY7QUFDRjtBRkdVO0VBakJGO0lBa0JJLGFBQUE7RUVBVjtBQUNGO0FGRVU7RUFyQkY7SUFzQkksYUFBQTtFRUNWO0FBQ0Y7QUZDVTtFQUNFLGdCQUFBO0FFQ1o7QUZDWTtFQUNFLFlBQUE7QUVDZDtBRkNjO0VBSEY7SUFJSSxhQUFBO0VFRWQ7QUFDRjtBRkFjO0VBUEY7SUFRSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUVHZDtBQUNGO0FGQ1U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUM3RVYsbUNBQUE7QUNrRkY7QUZGWTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VDakZaLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3NGRjtBRkhZO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUNwRlosa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkRpRmdDO0VDaEZoQyxtQ0FBQTtFQUNBLGdCQUFBO0FDMEZGO0FGUlk7RUFDRSxxQkFBQTtFQUNBLHlCQ3pKQztFRDBKRCxZQUFBO0FFVWQ7QUZSYztFQUxGO0lBTUksV0FBQTtFRVdkO0FBQ0Y7QUZQVTtFQUNFLHNCQUFBO0VDOUdWLDZCQUFBO0VBckNBOzJEQUFBO0VBRUEsY0FKVTtFQUtWLFdEa0pvQztFQ2pKcEMsWURpSjBDO0VDaEoxQyxZRGdKZ0Q7RUMvSWhELG1CRCtJc0Q7RUM5SXRELHVCRDhJK0Q7QUVtQmpFO0FGZE07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUVnQlIiLCJmaWxlIjoicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnNcIjtcblxuYXNpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICBwYWRkaW5nLXRvcDogNS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGRpdi5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuXG4gICAgJi5sZWZ0IHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzUxNTc2YztcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIaW5kLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAkdGV4dFNlY3VuZGFyeUNvbG9yO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICYucmlnaHQge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcblxuICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogJHRleHRTZWN1bmRhcnlDb2xvcjtcbiAgICAgIH1cblxuICAgICAgZGl2LndvcmtzIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIGNhbGMoMzMuMzMzMzMzJSAtIDE0cHgpKTtcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XG5cbiAgICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0ge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMTAwJSk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgI3skdGFibGV0c30sICN7JHRhYmxldHNfaH0ge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgY2FsYyg1MCUgLSAxNHB4KSk7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNhcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtaW4td2lkdGg6IDI1NXB4O1xuICAgICAgICAgIGhlaWdodDogMTc1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICY6bnRoLWNoaWxkKDNuKSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAjeyRzbWFydHBob25lc19ofSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAjeyR0YWJsZXRzfSwgI3skdGFibGV0c19ofSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICAgZGl2LmRldGFpbCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzX2h9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42Nik7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGhlaWdodCwgMC4zcywgZWFzZS1pbi1vdXQpO1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDA7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIHRydW5jYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAxcmVtO1xuICAgICAgICAgICAgICBAaW5jbHVkZSBsaW5lLWNsYW1wKDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ubWF0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAuOHJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAgIEBtZWRpYSAjeyRzbWFydHBob25lc19ofSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjVzLCBlYXNlLW91dCk7XG4gICAgICAgICAgICBAaW5jbHVkZSBpbWFnZS1yZXNwb25zaXZlKDEwMCUsIDEwMCUsIGF1dG8sIGNvbnRhaW4sIGNlbnRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkc21hcnRwaG9uZXM6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KVwiO1xuJHNtYXJ0cGhvbmVzX2g6IFwib25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKVwiO1xuJHRhYmxldHM6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpXCI7XG4kdGFibGV0c19oOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpXCI7XG4kbWFjYm9va19wcm86IFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpXCI7XG4kYmlnc2NyZWVuOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTgyNHB4KVwiO1xuJHZpZGVvX2JlYW06IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpXCI7XG5cbiRtYXgtd2lkdGg6IDExNDBweDtcbiRwcmltYXJ5Q29sb3I6ICMxN2JlZDI7XG4kZ3JheU5pY2tlbDogI2NjY2NjYztcbiRwbGFpbldoaXRlOiAjZmFmYWZhO1xuJGltcHV0Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFByaW1hcnlDb2xvcjogIzUxNTc2YztcbiR0ZXh0U2VjdW5kYXJ5Q29sb3I6ICNhNmE3YWE7XG4kYm9yZGVyV2hpdGU6ICNmMGYwZjA7XG5cbkBtaXhpbiBpbWFnZS1yZXNwb25zaXZlKFxuICAkd2lkdGg6IDEwMCUsXG4gICRoZWlnaHQ6IDEwMCUsXG4gICRtYXJnaW46IDAsXG4gICRmaXQ6IGNvbnRhaW4sXG4gICRwb3NpdGlvbjogNTAlIDUwJSxcbiAgJGRpc3BsYXk6IGJsb2NrXG4pIHtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBtYXJnaW46ICRtYXJnaW47XG4gIG9iamVjdC1maXQ6ICRmaXQ7XG4gIG9iamVjdC1wb3NpdGlvbjogJHBvc2l0aW9uO1xufVxuXG5AbWl4aW4gbm8tc2VsZWN0KCRldmVudHM6IG5vbmUpIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjNzLCAkZWFzZTogbGluZWFyKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xufVxuXG5AbWl4aW4gdHJ1bmNhdGUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXM6IDMpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcbiAgdGV4dC1vdmVyZmxvdzogLW8tZWxsaXBzaXMtbGFzdGxpbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCJhc2lkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZy10b3A6IDUuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ubGVmdCB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBhc2lkZSBkaXYuY29sdW1uLmxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbn1cbmFzaWRlIGRpdi5jb2x1bW4ubGVmdCBoMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzUxNTc2YztcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5sZWZ0IHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNhNmE3YWE7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSksIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNhNmE3YWE7XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53b3JrcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBjYWxjKDMzLjMzMzMzMyUgLSAxNHB4KSk7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkge1xuICBhc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53b3JrcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMDAlKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkge1xuICBhc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53b3JrcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBjYWxjKDUwJSAtIDE0cHgpKTtcbiAgfVxufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTVweDtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkOm50aC1jaGlsZCgzbikge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndvcmtzIC5tYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkge1xuICBhc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53b3JrcyAubWF0LWNhcmQge1xuICAgIGhlaWdodDogMjByZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIHtcbiAgYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkIHtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICB9XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53b3JrcyAubWF0LWNhcmQ6aG92ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkOmhvdmVyIGRpdi5kZXRhaWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndvcmtzIC5tYXQtY2FyZDpob3ZlciBkaXYuZGV0YWlsIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndvcmtzIC5tYXQtY2FyZDpob3ZlciBkaXYuZGV0YWlsIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkIGRpdi5kZXRhaWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjYpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5hc2lkZSBkaXYuY29sdW1uLnJpZ2h0IGRpdi53b3JrcyAubWF0LWNhcmQgZGl2LmRldGFpbCBoMSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMXJlbSAxcmVtIDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkIGRpdi5kZXRhaWwgcCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMC4ycmVtIDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndvcmtzIC5tYXQtY2FyZCBkaXYuZGV0YWlsIGJ1dHRvbi5tYXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjVyZW0gMC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdiZWQyO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSB7XG4gIGFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgZGl2LndvcmtzIC5tYXQtY2FyZCBkaXYuZGV0YWlsIGJ1dHRvbi5tYXQtYnV0dG9uIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxufVxuYXNpZGUgZGl2LmNvbHVtbi5yaWdodCBkaXYud29ya3MgLm1hdC1jYXJkIGltZyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cbmFzaWRlIGRpdi5jb2x1bW4ucmlnaHQgLmFjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 3602:
/*!********************************************************************!*\
  !*** ./src/app/modules/portfolio/portfolio/portfolio.constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS)
/* harmony export */ });
class CONSTANTS {
}
CONSTANTS.projects = [
    {
        name: 'Tu360Movilidad (Vtex)',
        description: 'PORTFOLIO.tu360movilidad',
        technical: [
            'Vtex',
            'Preact',
            'SASS',
            'Icomoon',
            'UnderscoreJS',
            'Slick',
            'LazyLoad',
        ],
        cover: 'movilidad.png',
        images: [
            'movilidad.png',
            'movilidad1.png',
            'movilidad2.png',
            'movilidad3.png',
            'movilidad4.png',
            'movilidad5.png',
            'movilidad6.png',
            'movilidad7.png',
            'movilidad8.png',
            'movilidad9.png',
            'movilidad10.png',
            'movilidad11.png',
            'movilidad12.png',
        ]
    },
    {
        name: 'Kitkaton (The Creator Partnership Platform for Modern Brands)',
        description: 'PORTFOLIO.kitkaton',
        technical: [
            'NextJS (React Framework)',
            'React Query',
            'Redux',
            'Material UI',
            'NodeJS',
            'SASS',
            'Shopify API',
            'Firebase API',
            'Amazon Web Services',
        ],
        cover: 'kitkaton27.png',
        images: [
            'kitkaton27.png',
            'kitkaton28.png',
            'kitkaton29.png',
            'kitkaton30.png',
            'kitkaton1.png',
            'kitkaton2.png',
            'kitkaton3.png',
            'kitkaton9.png',
            'kitkaton10.png',
            'kitkaton4.png',
            'kitkaton5.png',
            'kitkaton6.png',
            'kitkaton7.png',
            'kitkaton8.png',
            'kitkaton19.png',
            'kitkaton20.jpeg',
            'kitkaton21.jpeg',
            'kitkaton22.jpeg',
            'kitkaton23.jpeg',
            'kitkaton24.png',
            'kitkaton25.png',
            'kitkaton26.png',
            'kitkaton11.png',
            'kitkaton12.png',
            'kitkaton13.png',
            'kitkaton14.png',
            'kitkaton15.png',
            'kitkaton16.png',
            'kitkaton17.png',
            'kitkaton18.png',
        ]
    },
    {
        name: 'GeoAgro (Arcgis Experience Builder)',
        description: 'PORTFOLIO.geoagro',
        technical: ['Arcgis Experience Builder', 'React', 'Redux', 'Highcharts', 'SASS'],
        cover: 'geoagro.png',
        images: [
            'geoagro.png',
            'geoagro1.png',
            'geoagro2.png',
            'geoagro3.png',
            'geoagro4.png',
            'geoagro5.png',
            'geoagro6.png',
            'geoagro7.png',
            'geoagro8.png',
            'geoagro9.png',
            'geoagro10.png',
            'geoagro11.png',
            'geoagro12.png',
        ]
    },
    {
        name: 'Lopido (Vtex)',
        description: 'PORTFOLIO.lopido',
        technical: ['Vtex', 'React', 'Redux', 'TypeScript', 'Underscore', 'Modernizr', 'CSS3', 'Apollo Client (GraphQL)', 'Ramda'],
        cover: 'lopido.png',
        images: [
            'lopido.png',
            'lopido1.png',
            'lopido2.png',
            'lopido3.png',
            'lopido4.png',
            'lopido5.png',
            'lopido6.png',
        ]
    },
    {
        name: 'The movie DB',
        description: 'PORTFOLIO.the_movie_db',
        technical: ['HTML5', 'SASS', 'VueJS', 'Vuex', 'Axios', 'Jest Framework', 'API themoviedb'],
        cover: 'themoviedb.png',
        images: [
            'themoviedb.png',
            'themoviedb1.png',
            'themoviedb2.png',
            'themoviedb3.png',
            'themoviedb-mobile1.png',
            'themoviedb-mobile2.png',
            'themoviedb-mobile3.png',
            'themoviedb-mobile4.png',
        ]
    },
    {
        name: 'Nested Choice Lib',
        description: 'PORTFOLIO.nested_choice',
        technical: ['HTML5', 'SASS', 'Angular', 'Angular Material', 'NPM Library'],
        cover: 'nested-choice.png',
        images: [
            'nested-choice.png',
            'nested-choice1.png',
            'nested-choice2.png',
            'nested-choice3.png',
            'nested-choice4.png'
        ]
    },
    {
        name: 'Test reCaptcha V3',
        description: 'PORTFOLIO.test_recaptcha_v3',
        technical: ['HTML5', 'CSS3', 'Javascript', 'PHP8', 'Google API V3'],
        cover: 'test-recaptcha-v3.png',
        images: ['test-recaptcha-v3.png']
    },
    {
        name: 'Taxi Latino',
        description: 'PORTFOLIO.taxi_latino',
        technical: [
            'HTML5',
            'CSS3',
            'ReactJS',
            'Material UI',
            'React Redux',
            'Lodash',
            'Firebase',
            'Expo Notifications',
            'Google Maps API V3'
        ],
        cover: 'taxilatino1.jpg',
        images: [
            'taxilatino1.jpg',
            'taxilatino2.png',
            'taxilatino3.png',
            'taxilatino4.png',
            'taxilatino5.png',
            'taxilatino6.png',
            'taxilatino7.png'
        ]
    },
    {
        name: 'Greensill Platform',
        description: 'PORTFOLIO.greensill_platform',
        technical: ['HTML5', 'SASS', 'Angular', 'Angular Material', 'NgRx', 'Ngx translate', 'Facade Pattern'],
        cover: 'greensill.png',
        images: [
            'greensill.png',
            'greensill1.png',
            'greensill2.png',
            'greensill3.png',
            'greensill4.png',
            'greensill5.png',
            'greensill6.png',
            'greensill7.png',
            'greensill8.png',
            'greensill9.png',
            'greensill10.png',
            'greensill11.png',
            'greensill12.png',
            'greensill13.png',
            'greensill14.png',
            'greensill15.png',
            'greensill16.png',
            'greensill17.png',
            'greensill18.png',
            'greensill19.png',
            'greensill20.png',
            'greensill21.png',
            'greensill22.png',
            'greensill23.png'
        ]
    },
    {
        name: 'Aranda Service Desk',
        description: 'PORTFOLIO.aranda_service_desk',
        technical: ['HTML5', 'SASS', 'AngularJS', 'Kendo UI Telerik', 'Highcharts', 'Lodash'],
        cover: 'asms1.jpg',
        images: [
            'asms1.jpg',
            'asms2.png',
            'asms3.png',
            'asms4.png',
            'asms5.png',
            'asms6.png',
            'asms7.png',
            'asms8.png',
            'asms9.png',
            'asms10.png'
        ]
    },
    {
        name: 'Comefrexco',
        description: 'PORTFOLIO.comefrexco',
        technical: [
            'HTML5',
            'SASS',
            'ReactJS',
            'Material Ui',
            'Highcharts',
            'React-Day-Picker',
            'SweetAlert',
            'Lodash',
            'Moment',
            'Axios',
            'React Redux'
        ],
        cover: 'comefrexco.png',
        images: [
            'comefrexco.png',
            'comefrexco1.png',
            'comefrexco2.png',
            'comefrexco3.png',
            'comefrexco4.png',
            'comefrexco5.png',
            'comefrexco6.png',
            'comefrexco7.png',
            'comefrexco8.png',
            'comefrexco9.png',
            'comefrexco10.png',
            'comefrexco11.png',
            'comefrexco12.png',
            'comefrexco13.png',
            'comefrexco14.png',
            'comefrexco15.png',
            'comefrexco16.png',
            'comefrexco17.png',
            'comefrexco18.png',
            'comefrexco19.png'
        ]
    },
    {
        name: 'Agrodata AI',
        description: 'PORTFOLIO.agrodata_ai',
        technical: [
            'HTML5',
            'CSS3',
            'Angular 8',
            'Ng Bootstrap',
            'Ng Select',
            'Highcharts',
            'Google Maps API V3',
            'SweetAlert',
            'Lodash',
            'Moment'
        ],
        cover: 'agrodatai.png',
        images: [
            'agrodatai.png',
            'agrodataai.png',
            'agrodataai1.png',
            'agrodataai2.png',
            'agrodataai3.png',
            'agrodataai4.png'
        ]
    },
    {
        name: 'Weather Map',
        description: 'PORTFOLIO.weather_map',
        technical: [
            'HTML5',
            'SASS',
            'VueJS',
            'Vue Material',
            'Ng Select',
            'Highcharts',
            'Google Maps API',
            'SweetAlert',
            'Lodash',
            'Moment',
            'Axios',
            'Vue Loading'
        ],
        cover: 'weathermap.png',
        images: [
            'weathermap.png',
            'weathermap1.png',
            'weathermap2.png',
            'weathermap3.png',
            'weathermap4.png',
            'weathermap5.png',
            'weathermap6.png',
            'weathermap7.png',
            'weathermap8.png',
            'weathermap9.png',
            'weathermap10.png',
            'weathermap11.png',
            'weathermap12.png',
            'weathermap13.png',
            'weathermap14.png',
            'weathermap-mobile.png',
            'weathermap-mobile1.png',
            'weathermap-mobile2.png',
            'weathermap-mobile3.png',
            'weathermap-mobile4.png',
            'weathermap-mobile5.png',
            'weathermap-mobile6.png',
            'weathermap-mobile7.png',
            'weathermap-mobile8.png',
            'weathermap-mobile9.png',
            'weathermap-mobile10.png',
            'weathermap-mobile11.png',
            'weathermap-mobile12.png',
            'weathermap-mobile13.png',
            'weathermap-mobile14.png',
            'weathermap-mobile15.png',
            'weathermap-mobile16.png',
            'weathermap-mobile17.png'
        ]
    },
    {
        name: 'Adoptapp',
        description: 'PORTFOLIO.adoptapp',
        technical: ['Android', 'Java'],
        cover: 'adoptapp-cover.jpeg',
        images: [
            'adoptapp.jpeg',
            'adoptapp1.jpeg',
            'adoptapp2.jpeg',
            'adoptapp3.jpeg',
            'adoptapp4.jpeg',
            'adoptapp5.jpeg',
            'adoptapp6.jpeg',
            'adoptapp7.jpeg',
            'adoptapp8.jpeg',
            'adoptapp9.jpeg',
            'adoptapp10.jpeg',
            'adoptapp11.jpeg',
            'adoptapp12.jpeg',
            'adoptapp13.jpeg',
            'adoptapp14.jpeg'
        ]
    },
    {
        name: 'Emcali',
        description: 'PORTFOLIO.emcali',
        technical: ['HTML5', 'CSS3', 'GulpJS', 'AngularJS', 'Firebase', 'Highcharts', 'Lodash'],
        cover: 'emcali.png',
        images: ['emcali.png', 'emcali1.png']
    },
    {
        name: 'Resolve Intelligence',
        description: 'PORTFOLIO.resolve_intelligence',
        technical: [
            'HTML5',
            'CSS3',
            'JQuery',
            'GruntJS',
            'AngularJS v1.3',
            'Highcharts',
            'Swiper',
            'Highcharts',
            'Select2',
            'MaterializeCSS'
        ],
        cover: 'intelligence.jpg',
        images: [
            'intelligence.jpg',
            'intelligence1.png',
            'intelligence2.png',
            'intelligence3.png',
            'intelligence4.jpg',
            'intelligence5.jpg',
            'intelligence6.jpg',
            'intelligence7.jpg',
            'intelligence8.jpg'
        ]
    },
    {
        name: 'Coinbay',
        description: 'PORTFOLIO.coinbay',
        technical: ['HTML5', 'CSS3', 'JQuery', 'GruntJS', 'Highcharts', 'Swiper', 'SweetAlert', 'Select2', 'HammerJS'],
        cover: 'coinbay.png',
        images: [
            'coinbay.png',
            'coinbay1.png',
            'coinbay2.png',
            'coinbay3.png',
            'coinbay4.png',
            'coinbay5.png',
            'coinbay6.png',
            'coinbay7.png',
            'coinbay8.png',
            'coinbay9.png',
            'coinbay10.png',
            'coinbay11.png',
            'coinbay12.png',
            'coinbay-mobile.png',
            'coinbay-mobile1.png',
            'coinbay-mobile2.png',
            'coinbay-mobile3.png',
            'coinbay-mobile4.png',
            'coinbay-mobile5.png',
            'coinbay-mobile6.png',
            'coinbay-mobile7.png',
            'coinbay-mobile8.png',
            'coinbay-mobile9.png'
        ]
    },
    {
        name: 'Bavaria planes',
        description: 'PORTFOLIO.bavaria_plans',
        technical: ['HTML5', 'CSS3', 'Underscore', 'Template underscore', 'Jquery', 'PHP', 'MySQL'],
        cover: 'bavaria.png',
        images: ['bavaria.png', 'bavaria1.png', 'bavaria2.png', 'bavaria3.png', 'bavaria4.jpg', 'bavaria-mobile.png']
    },
    {
        name: 'Lg 20 años',
        description: 'PORTFOLIO.lg_20_years',
        technical: ['HTML5', 'CSS3', 'JQuery', 'GruntJS', 'SweetAlert', 'HammerJS', 'FancyBox'],
        cover: 'lg20.jpg',
        images: [
            'lg20.jpg',
            'lg20.png',
            'lg201.png',
            'lg202.png',
            'lg20-mobile.png',
            'lg20-mobile1.png',
            'lg20-mobile2.png'
        ]
    },
    {
        name: 'Edupol',
        description: 'PORTFOLIO.edupol',
        technical: ['HTML5', 'CSS3', 'JQuery'],
        cover: 'edupol.png',
        images: ['edupol.png', 'edupol1.png', 'edupol2.png', 'edupol3.png', 'edupol-mobile.png', 'edupol-mobile1.png']
    },
    {
        name: 'EQP Windows',
        description: 'PORTFOLIO.eqp_windows',
        technical: ['HTML5', 'CSS3', 'JQuery', 'HammerJS', 'FancyBox', 'UnderscoreJS'],
        cover: 'eqpwindows.png',
        images: [
            'eqpwindows.png',
            'eqpwindows1.png',
            'eqpwindows2.png',
            'eqpwindows3.png',
            'eqpwindows4.png',
            'eqpwindows5.png',
            'eqpwindows6.png',
            'eqpwindows7.png',
            'eqpwindows-mobile.png',
            'eqpwindows-mobile1.png',
            'eqpwindows-mobile2.png'
        ]
    },
    {
        name: 'Pyrex',
        description: 'PORTFOLIO.pyrex',
        technical: ['HTML5', 'CSS3', 'JQuery', 'Modernizr', 'SweetAlert', 'UnderscoreJS', 'Font Awesome'],
        cover: 'pyrex.png',
        images: [
            'pyrex.png',
            'pyrex1.png',
            'pyrex2.png',
            'pyrex3.png',
            'pyrex4.png',
            'pyrex5.png',
            'pyrex6.png',
            'pyrex7.png',
            'pyrex8.png',
            'pyrex-mobile.png',
            'pyrex-mobile1.png',
            'pyrex-mobile2.png',
            'pyrex-mobile3.png',
            'pyrex-mobile4.png',
            'pyrex-mobile5.png',
            'pyrex-mobile6.png',
            'pyrex-mobile7.png'
        ]
    },
    {
        name: 'Menos Azucar',
        description: 'PORTFOLIO.menos_azucar',
        technical: ['HTML5', 'CSS3', 'JQuery', 'Modernizr', 'SweetAlert', 'UnderscoreJS', 'Font Awesome'],
        cover: 'sugar.png',
        images: [
            'sugar.png',
            'sugar1.png',
            'sugar2.png',
            'sugar3.png',
            'sugar4.png',
            'sugar-mobile.png',
            'sugar-mobile1.png',
            'sugar-mobile2.png',
            'sugar-mobile3.png'
        ]
    },
    {
        name: 'Papeles Nacionales',
        description: 'PORTFOLIO.papeles_nacionales',
        technical: ['HTML5', 'CSS3', 'JQuery', 'Modernizr', 'SweetAlert', 'UnderscoreJS', 'Font Awesome'],
        cover: 'panasa1.png',
        images: [
            'panasa1.png',
            'panasa2.png',
            'panasa3.png',
            'panasa4.png',
            'panasa5.png',
            'panasa6.png',
            'panasa7.png',
            'panasa8.png',
            'panasa9.png',
            'panasa10.png'
        ]
    },
    {
        name: 'New Colony',
        description: 'PORTFOLIO.new_colony',
        technical: [
            'HTML5',
            'CSS3',
            'JQuery',
            'Modernizr',
            'Swiper',
            'UnderscoreJS',
            'MomentJS',
            'PictureFill',
            'MaterializeCSS',
            'Font Awesome'
        ],
        cover: 'newcolony.png',
        images: [
            'newcolony1.gif',
            'newcolony.png',
            'newcolony2.png',
            'newcolony3.png',
            'newcolony4.png',
            'newcolony5.png',
            'newcolony6.png',
            'newcolony1-mobile.png',
            'newcolony2-mobile.png',
            'newcolony3-mobile.png',
            'newcolony4-mobile.png',
            'newcolony5-mobile.png',
            'newcolony6-mobile.png',
            'newcolony7-mobile.png',
            'newcolony8-mobile.png'
        ]
    },
    {
        name: 'Pedidos Postobón',
        description: 'PORTFOLIO.pedidos_postobon',
        technical: ['HTML5', 'CSS3', 'JQuery', 'Modernizr', 'SweetAlert', 'UnderscoreJS', 'Font Awesome'],
        cover: 'postobon1.png',
        images: [
            'postobon1.png',
            'postobon2.png',
            'postobon3.png',
            'postobon4.png',
            'postobon5.png',
            'postobon6.png',
            'postobon7.png',
            'postobon8.png',
            'postobon9.png',
            'postobon10.png',
            'postobon11.png',
            'postobon12.png',
            'postobon13.png'
        ]
    },
    {
        name: 'Torre Kova',
        description: 'PORTFOLIO.torre_kova',
        technical: ['HTML5', 'CSS3', 'JQuery', 'HammerJS', 'FancyBox', 'UnderscoreJS', 'Modernizr', 'SweetAlert'],
        cover: 'kova.png',
        images: [
            'kova.png',
            'kova1.png',
            'kova2.png',
            'kova3.png',
            'kova4.png',
            'kova-mobile.png',
            'kova-mobile1.png',
            'kova-mobile2.png',
            'kova-mobile3.png'
        ]
    },
    {
        name: 'Megaland Bon Yurt',
        description: 'PORTFOLIO.megaland_bon_yurt',
        technical: ['HTML5', 'LESS', 'JQuery', 'AngularJS v1.3', 'UnderscoreJS', 'MaterializeCSS'],
        cover: 'megaland.jpg',
        images: ['megaland.jpg']
    },
    {
        name: 'Saving the Amazon',
        description: 'PORTFOLIO.saving_the_amazon',
        technical: [
            'HTML5',
            'CSS3',
            'JQuery',
            'AngularJS v1.0',
            'FancyBox',
            'UnderscoreJS',
            'AlertifyJS',
            'CarouselJS',
            'Google Maps API v3'
        ],
        cover: 'savingtheamazon.png',
        images: ['savingtheamazon.png', 'savingtheamazon1.png', 'savingtheamazon2.png', 'savingtheamazon3.png']
    },
    {
        name: 'Suapp "Soacha Segura"',
        description: 'PORTFOLIO.suapp',
        technical: ['HTML5', 'CSS3', 'JQuery', 'FancyBox', 'Google Maps API v3', 'OWL Carousel'],
        cover: 'suapp.png',
        images: [
            'suapp.png',
            'suapp1.jpeg',
            'suapp2.jpg',
            'suapp3.jpg',
            'suapp4.jpg',
            'suapp5.jpg',
            'suapp6.jpg',
            'suapp7.jpeg'
        ]
    }
];


/***/ }),

/***/ 5294:
/*!**************************************!*\
  !*** ./src/app/store/app.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendAnalyticsEvent": () => (/* binding */ sendAnalyticsEvent),
/* harmony export */   "setActiveLang": () => (/* binding */ setActiveLang),
/* harmony export */   "setItIsHome": () => (/* binding */ setItIsHome),
/* harmony export */   "setItIsHomeFail": () => (/* binding */ setItIsHomeFail),
/* harmony export */   "setItIsHomeSuccess": () => (/* binding */ setItIsHomeSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5778);

const setItIsHome = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AppModule] Set itIsHome Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setItIsHomeSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AppModule] Set itIsHome Success Action');
const setItIsHomeFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AppModule] Set itIsHome Fail Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const sendAnalyticsEvent = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AppModule] Send Analytics Event', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setActiveLang = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AppModule] Set Active Lang Action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 1593:
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppEffects": () => (/* binding */ AppEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 1358);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 5294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ 8008);






class AppEffects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.sendAnalyticsEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.sendAnalyticsEvent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.appService.sendAnalyticsEvent(action.eventName, action.eventCategory, action.eventLabel, action.eventAction, action.eventValue))), { dispatch: false });
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
AppEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });


/***/ }),

/***/ 6377:
/*!*************************************!*\
  !*** ./src/app/store/app.facade.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFacade": () => (/* binding */ AppFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 5294);
/* harmony import */ var _app_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.selectors */ 1055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class AppFacade {
    constructor(store) {
        this.store = store;
        this.itIsHome$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_app_selectors__WEBPACK_IMPORTED_MODULE_1__.getItIsHome));
        this.activeLang$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_app_selectors__WEBPACK_IMPORTED_MODULE_1__.getActiveLang));
    }
    setItIsHome(itIsHome) {
        this.store.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setItIsHome)({ itIsHome }));
    }
    sendAnalyticsEvent(eventName, eventCategory, eventLabel, eventAction = null, eventValue = null) {
        this.store.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.sendAnalyticsEvent)({ eventName, eventCategory, eventLabel, eventAction, eventValue }));
    }
    setActiveLang(activeLang) {
        this.store.dispatch((0,_app_actions__WEBPACK_IMPORTED_MODULE_0__.setActiveLang)({ activeLang }));
    }
}
AppFacade.ɵfac = function AppFacade_Factory(t) { return new (t || AppFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
AppFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppFacade, factory: AppFacade.ɵfac });


/***/ }),

/***/ 6062:
/*!*************************************!*\
  !*** ./src/app/store/app.models.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialAppState": () => (/* binding */ InitialAppState),
/* harmony export */   "adapter": () => (/* binding */ adapter)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 2524);

const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)();
const InitialAppState = adapter.getInitialState({
    itIsHome: false,
    activeLang: 'es',
    error: null
});


/***/ }),

/***/ 5754:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_FEATURE_KEY": () => (/* binding */ APP_FEATURE_KEY),
/* harmony export */   "AppReducer": () => (/* binding */ AppReducer),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ 5294);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.models */ 6062);



const APP_FEATURE_KEY = 'AppState';
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_app_models__WEBPACK_IMPORTED_MODULE_1__.InitialAppState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setItIsHome, (state, { itIsHome }) => (Object.assign(Object.assign({}, state), { itIsHome }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setItIsHomeSuccess, (state) => (Object.assign(Object.assign({}, state), { error: null }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setItIsHomeFail, (state, { error }) => (Object.assign(Object.assign({}, state), { error }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_app_actions__WEBPACK_IMPORTED_MODULE_0__.setActiveLang, (state, { activeLang }) => (Object.assign(Object.assign({}, state), { activeLang }))));
function AppReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ 1055:
/*!****************************************!*\
  !*** ./src/app/store/app.selectors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveLang": () => (/* binding */ getActiveLang),
/* harmony export */   "getItIsHome": () => (/* binding */ getItIsHome),
/* harmony export */   "selectAppState": () => (/* binding */ selectAppState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5778);
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.reducer */ 5754);


const selectAppState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_app_reducer__WEBPACK_IMPORTED_MODULE_0__.APP_FEATURE_KEY);
const getItIsHome = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAppState, (state) => state.itIsHome);
const getActiveLang = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAppState, (state) => state.activeLang);


/***/ }),

/***/ 8008:
/*!**************************************!*\
  !*** ./src/app/store/app.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class AppService {
    sendAnalyticsEvent(eventName, eventCategory, eventLabel, eventAction, eventValue) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            observer.next(gtag('event', eventName, {
                eventCategory: eventCategory,
                eventLabel: eventLabel,
                eventAction: eventAction,
                eventValue: eventValue
            }));
            observer.complete();
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9279:
/*!********************************************!*\
  !*** ./src/app/swiper/swiper.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperComponent": () => (/* binding */ SwiperComponent)
/* harmony export */ });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ 8587);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ 5016);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ 9616);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/core */ 6671);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/core */ 7730);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/core */ 257);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/core */ 18);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function SwiperComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/projects/", image_r2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "Project image ", image_r2, "");
} }
function SwiperComponent_li_17_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SwiperComponent_li_17_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SwiperComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SwiperComponent_li_17_ng_container_2_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SwiperComponent_li_17_ng_container_3_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technical_r3 = ctx.$implicit;
    const isLast_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", technical_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r4);
} }
class SwiperComponent {
    constructor(elementRef, dialogRef, data) {
        this.elementRef = elementRef;
        this.dialogRef = dialogRef;
        this.data = data;
        swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"], swiper_core__WEBPACK_IMPORTED_MODULE_3__["default"], swiper_core__WEBPACK_IMPORTED_MODULE_4__["default"], swiper_core__WEBPACK_IMPORTED_MODULE_5__["default"], swiper_core__WEBPACK_IMPORTED_MODULE_6__["default"], swiper_core__WEBPACK_IMPORTED_MODULE_7__["default"]]);
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.swiper = undefined;
    }
    ngAfterViewInit() {
        const swiperParams = {
            loop: true,
            autoplay: { delay: 15000 },
            zoom: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.swiper = new swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"](this.elementRef.nativeElement.querySelector('.swiper-container'), swiperParams);
        this.mouseEnterListener();
        this.mouseLeaveListener();
    }
    close() {
        this.dialogRef.close();
    }
    mouseEnterListener() {
        var _a;
        const swiper = this.swiper;
        if ((_a = swiper === null || swiper === void 0 ? void 0 : swiper.$el) === null || _a === void 0 ? void 0 : _a.length) {
            const $el = swiper.$el[0];
            $el.addEventListener('mouseenter', () => {
                swiper.autoplay.stop();
            }, false);
        }
    }
    mouseLeaveListener() {
        var _a;
        const swiper = this.swiper;
        if ((_a = swiper === null || swiper === void 0 ? void 0 : swiper.$el) === null || _a === void 0 ? void 0 : _a.length) {
            const $el = swiper.$el[0];
            $el.addEventListener('mouseleave', () => {
                swiper.autoplay.start();
            }, false);
        }
    }
}
SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
SwiperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwiperComponent, selectors: [["app-swiper"]], decls: 23, vars: 12, consts: [["name", "close-modal-detail", 1, "close-dialog", 3, "click"], [1, "wrapper-gallery"], [1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "title"], [1, "details"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "swiper-slide"], [1, "swiper-zoom-container"], [3, "src", "alt"], [4, "ngIf"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwiperComponent_Template_button_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SwiperComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SwiperComponent_li_17_Template, 4, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, "GENERAL.technology"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.technical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 8, "GENERAL.description"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, ctx.data.description), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.swiper-container-autoheight[_ngcontent-%COMP%], .swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-container-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-navigation-size: 44px;\n  \n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - var(--swiper-navigation-size) / 2);\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%], .swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-button-next[_ngcontent-%COMP%]:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-feature-settings: ;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after {\n  content: \"prev\";\n}\n.swiper-button-next[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n  content: \"next\";\n}\n.swiper-button-prev.swiper-button-white[_ngcontent-%COMP%], .swiper-button-next.swiper-button-white[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black[_ngcontent-%COMP%], .swiper-button-next.swiper-button-black[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.swiper-pagination-fraction[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl[_ngcontent-%COMP%]    > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms right;\n}\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  transform-origin: right top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.swiper-scrollbar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.swiper-scrollbar-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n.swiper-zoom-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > canvas[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-lazy-preloader[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-lazy-preloader-white[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.swiper-container[_ngcontent-%COMP%]   .swiper-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-cube[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-prev[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%]    + .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-container-flip[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\nbutton.close-dialog[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 34px;\n  right: 0;\n  top: 5px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 5px;\n  position: absolute;\n  z-index: 10;\n}\nbutton.close-dialog[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #a6a7aa;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 75%;\n  min-height: 320px;\n  position: relative;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   div.swiper-container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   div.swiper-container[_ngcontent-%COMP%]   div.swiper-slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 20px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   div.swiper-container[_ngcontent-%COMP%]   div.swiper-slide[_ngcontent-%COMP%]   div.swiper-zoom-container[_ngcontent-%COMP%] {\n  cursor: url('zoom.png'), auto;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   div.swiper-container[_ngcontent-%COMP%]   div.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  height: calc(100% - 10px);\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   .swiper-pagination-fraction[_ngcontent-%COMP%] {\n  cursor: default;\n  width: 50px;\n  height: 18px;\n  border-radius: 10px;\n  background-color: #17bed2;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  color: #fafafa;\n  font-size: 10px;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], div.wrapper-gallery[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  color: #17bed2;\n  outline: none;\n  width: 20px;\n  height: 20px;\n  background-size: 15px;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  right: 0;\n}\ndiv.wrapper-gallery[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  left: 0;\n}\nh1.title[_ngcontent-%COMP%] {\n  color: #17bed2;\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 0 0 0.5rem;\n}\ndiv.details[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(25% - 2.5rem);\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 0.5rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  div.details[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\ndiv.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #51576c;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0;\n  line-height: 1.2rem;\n}\ndiv.details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape) {\n  div.details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\ndiv.details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0.2rem;\n  color: #51576c;\n  font-size: 0.8rem;\n}\ndiv.details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(1) {\n  margin-right: 0;\n}\ndiv.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #51576c;\n  margin-bottom: 0.6rem;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape) {\n  div.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5jc3MiLCIuLi8uLi8uLi8uLi8uLi9XZWIlMjBQcm9qZWN0cy9qZWlzb24tbmlzcGVydXphL3NyYy9hcHAvc3dpcGVyL3N3aXBlci5jb21wb25lbnQuc2NzcyIsInN3aXBlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQ0UsMkJBQUE7RUFDQSw0c0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLDZCQUFBO0FDQUY7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDQ0Y7QURDQTtFQUNFLHNCQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNHRjtBRERBOztFQUVFLGlDQUFBO0FDSUY7QURGQTtFQUNFLGVBQUE7QUNLRjtBREhBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDTUY7QURKQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQ09GO0FETEE7RUFDRSxtQkFBQTtBQ1FGO0FETkE7RUFDRSxtQkFBQTtBQ1NGO0FEUEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDVUY7QURSQTtFQUNFLGtCQUFBO0FDV0Y7QURUQSxnQkFBQTtBQUNBOztFQUVFLFlBQUE7QUNZRjtBRFZBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBQ2FGO0FEWEEsZUFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNjRjtBRFpBOzs7Ozs7O0VBT0UsNEJBQUE7QUNlRjtBRGJBOzs7O0VBSUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDZ0JGO0FEZEE7RUFDRSxnRkFBQTtBQ2lCRjtBRGZBO0VBQ0UsaUZBQUE7QUNrQkY7QURoQkE7RUFDRSwrRUFBQTtBQ21CRjtBRGpCQTtFQUNFLGtGQUFBO0FDb0JGO0FEbEJBLGFBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtBQ3FCRjtBRG5CQTtFQUNFLGFBQUE7QUNzQkY7QURwQkE7RUFDRSw4QkFBQTtBQ3VCRjtBRHJCQTtFQUNFLDZCQUFBO0FDd0JGO0FEdEJBO0VBQ0UsNkJBQUE7QUN5QkY7QUR2QkE7RUFDRSw4QkFBQTtFQUNBOztHQUFBO0FDNEJGO0FEeEJBOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9EQUFBO0VBQ0EscUNBQUE7RUFDQSx5REFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnRUFBQTtBQzJCRjtBRHpCQTs7RUFFRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDNEJGO0FEMUJBOztFQUVFLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUFBLHFCQUFBO0VBQ0EsY0FBQTtBQzZCRjtBRDNCQTs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtBQzhCRjtBRDVCQTs7RUFFRSxlQUFBO0FDK0JGO0FEN0JBOztFQUVFLFdBQUE7RUFDQSxVQUFBO0FDZ0NGO0FEOUJBOztFQUVFLGVBQUE7QUNpQ0Y7QUQvQkE7O0VBRUUsa0NBQUE7QUNrQ0Y7QURoQ0E7O0VBRUUsa0NBQUE7QUNtQ0Y7QURqQ0E7RUFDRSxhQUFBO0FDb0NGO0FEbENBO0VBQ0U7O0dBQUE7QUN1Q0Y7QURuQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUNzQ0Y7QURwQ0E7RUFDRSxVQUFBO0FDdUNGO0FEckNBLGtCQUFBO0FBQ0E7OztFQUdFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ3dDRjtBRHRDQSxZQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUN5Q0Y7QUR2Q0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FDMENGO0FEeENBO0VBQ0UsbUJBQUE7QUMyQ0Y7QUR6Q0E7RUFDRSxtQkFBQTtBQzRDRjtBRDFDQTtFQUNFLHNCQUFBO0FDNkNGO0FEM0NBO0VBQ0Usc0JBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxzQkFBQTtBQytDRjtBRDdDQTtFQUNFLHNCQUFBO0FDZ0RGO0FEOUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDaURGO0FEL0NBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNRLGdCQUFBO0FDa0RWO0FEaERBO0VBQ0UsZUFBQTtBQ21ERjtBRGpEQTtFQUNFLFVBQUE7RUFDQSxxRUFBQTtBQ29ERjtBRGxEQTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUNxREY7QURuREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ3NERjtBRHBEQTtFQUNFLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUN1REY7QURyREE7RUFDRSxxQkFBQTtFQUNBLHNDQUFBO0FDd0RGO0FEdERBO0VBQ0UsYUFBQTtBQ3lERjtBRHZEQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDMERGO0FEeERBO0VBQ0UsdUNBQUE7QUMyREY7QUR6REE7RUFDRSx3Q0FBQTtBQzRERjtBRDFEQSxhQUFBO0FBQ0E7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FDNkRGO0FEM0RBO0VBQ0UscUVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDOERGO0FENURBO0VBQ0UsMkJBQUE7QUMrREY7QUQ3REE7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ2dFRjtBRDlEQTs7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDaUVGO0FEL0RBO0VBQ0Usa0NBQUE7QUNrRUY7QURoRUE7RUFDRSxrQ0FBQTtBQ21FRjtBRGpFQTtFQUNFLGFBQUE7QUNvRUY7QURsRUEsY0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNxRUY7QURuRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDc0VGO0FEcEVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3VFRjtBRHJFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUN3RUY7QUR0RUE7RUFDRSxZQUFBO0FDeUVGO0FEdkVBO0VBQ0UsYUFBQTtBQzBFRjtBRHhFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzJFRjtBRHpFQTs7O0VBR0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM0RUY7QUQxRUE7RUFDRSxZQUFBO0FDNkVGO0FEM0VBLGNBQUE7QUFDQTtFQUNFOztHQUFBO0FDZ0ZGO0FENUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSwwRUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUMrRUY7QUQ3RUE7RUFDRSw4QkFBQTtBQ2dGRjtBRDlFQTtFQUNFLDhCQUFBO0FDaUZGO0FEL0VBO0VBQ0U7SUFDRSx5QkFBQTtFQ2tGRjtBQUNGO0FEaEZBLFNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDa0ZGO0FEaEZBO0VBQ0Usb0NBQUE7QUNtRkY7QURqRkE7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0FDb0ZGO0FEbEZBO0VBQ0Usb0JBQUE7QUNxRkY7QURuRkE7O0VBRUUsb0JBQUE7QUNzRkY7QURwRkE7RUFDRSxpQkFBQTtBQ3VGRjtBRHJGQTtFQUNFLG9CQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtFQUNSLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN3RkY7QUR0RkE7RUFDRSxvQkFBQTtBQ3lGRjtBRHZGQTtFQUNFLHdCQUFBO0FDMEZGO0FEeEZBOztFQUVFLG9CQUFBO0FDMkZGO0FEekZBOzs7O0VBSUUsb0JBQUE7RUFDQSxtQkFBQTtBQzRGRjtBRDFGQTs7OztFQUlFLFVBQUE7RUFDQSxtQ0FBQTtFQUNRLDJCQUFBO0FDNkZWO0FEM0ZBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUM4RkY7QUQ1RkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQytGRjtBRDdGQTtFQUNFLGlCQUFBO0FDZ0dGO0FEOUZBO0VBQ0Usb0JBQUE7RUFDQSxtQ0FBQTtFQUNRLDJCQUFBO0VBQ1IsVUFBQTtBQ2lHRjtBRC9GQTtFQUNFLG9CQUFBO0FDa0dGO0FEaEdBOztFQUVFLG9CQUFBO0FDbUdGO0FEakdBOzs7O0VBSUUsVUFBQTtFQUNBLG1DQUFBO0VBQ1EsMkJBQUE7QUNvR1Y7QUMvbkJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEa29CRjtBQ2hvQkU7RUFDRSxjQ0ZpQjtBRm9vQnJCO0FDOW5CQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURpb0JGO0FDL25CRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRGlvQko7QUMvbkJJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBSUEsYUFBQTtFQUlBLHVCQUFBO0VBSUEsbUJBQUE7QURpb0JOO0FDL25CTTtFQUNFLDZCQUFBO0FEaW9CUjtBQzluQk07RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRGdvQlI7QUMzbkJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkMxRFc7RUQyRFgsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDbEVTO0VEbUVULGVBQUE7QUQ2bkJKO0FDMW5CRTs7RUFFRSxjQzFFVztFRDJFWCxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRDRuQko7QUN6bkJFO0VBQ0UsUUFBQTtBRDJuQko7QUN4bkJFO0VBQ0UsT0FBQTtBRDBuQko7QUN0bkJBO0VBQ0UsY0MzRmE7RUQ0RmIsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEeW5CRjtBQ25uQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QURxbkJGO0FDbm5CRTtFQVJGO0lBU0ksWUFBQTtFRHNuQkY7QUFDRjtBQ3BuQkU7RUFDRSxjQzdHZTtFRDhHZixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRHNuQko7QUNubkJFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FEcW5CSjtBQ25uQkk7RUFKRjtJQUtJLGVBQUE7RURzbkJKO0FBQ0Y7QUNwbkJJO0VBQ0Usb0JBQUE7RUFDQSxjQzlIYTtFRCtIYixpQkFBQTtBRHNuQk47QUNwbkJNO0VBQ0UsZUFBQTtBRHNuQlI7QUNqbkJFO0VBQ0UsaUJBQUE7RUFDQSxjQ3pJZTtFRDBJZixxQkFBQTtBRG1uQko7QUNqbkJJO0VBTEY7SUFNSSxtQkFBQTtFRG9uQko7QUFDRiIsImZpbGUiOiJzd2lwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN3aXBlciA2LjUuOVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBBcHJpbCAzMCwgMjAyMVxuICovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCB7XG4gIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiAjMDA3YWZmO1xufVxuLnN3aXBlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEZpeCBvZiBXZWJraXQgZmxpY2tlcmluZyAqL1xuICB6LWluZGV4OiAxO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3cgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdy1jb2x1bW4gPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHMge1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xufVxuLnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XG59XG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuLnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4vKiBBdXRvIEhlaWdodCAqL1xuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCxcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xufVxuLyogM0QgRWZmZWN0cyAqL1xuLnN3aXBlci1jb250YWluZXItM2Qge1xuICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4vKiBDU1MgTW9kZSAqL1xuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGb3IgRmlyZWZveCAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xufVxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydCBzdGFydDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuOnJvb3Qge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemU6IDQ0cHg7XG4gIC8qXG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBjYWxjKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gNDQgKiAyNyk7XG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMHB4IC0gKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gMikpO1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIGN1cnNvcjogYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyLFxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBzd2lwZXItaWNvbnM7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC12YXJpYW50OiBpbml0aWFsO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuLnN3aXBlci1idXR0b24tcHJldjphZnRlcixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgY29udGVudDogJ3ByZXYnO1xufVxuLnN3aXBlci1idXR0b24tbmV4dCxcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xuICBjb250ZW50OiAnbmV4dCc7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrIHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogIzAwMDAwMDtcbn1cbi5zd2lwZXItYnV0dG9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuOnJvb3Qge1xuICAvKlxuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHotaW5kZXg6IDEwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG4vKiBDb21tb24gU3R5bGVzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIEJ1bGxldHMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXYge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbmJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogNnB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogOHB4O1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyB0b3A7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIGxlZnQ7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItcnRsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyByaWdodDtcbn1cbi8qIFByb2dyZXNzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIHtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogI2ZmZmZmZjtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICMwMDAwMDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKiBTY3JvbGxiYXIgKi9cbi5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1zY3JvbGxiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDElO1xuICBib3R0b206IDNweDtcbiAgei1pbmRleDogNTA7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogOTglO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgdG9wOiAxJTtcbiAgei1pbmRleDogNTA7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogOTglO1xufVxuLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZyB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5zd2lwZXItc2Nyb2xsYmFyLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXBlci16b29tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gaW1nLFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IHN2Zyxcbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBjYW52YXMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc3dpcGVyLXNsaWRlLXpvb21lZCB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi8qIFByZWxvYWRlciAqL1xuOnJvb3Qge1xuICAvKlxuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICBhbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXN3aXBlci1wcmVsb2FkZXItY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZSB7XG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItYmxhY2sge1xuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6ICMwMDA7XG59XG5Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qIGExMXkgKi9cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTAwMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXYsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCArIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC42O1xuICB6LWluZGV4OiAwO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iLCIvKipcbiAqIFN3aXBlciA2LjUuOVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBBcHJpbCAzMCwgMjAyMVxuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic3dpcGVyLWljb25zXCI7XG4gIHNyYzogdXJsKFwiZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUFcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuOnJvb3Qge1xuICAtLXN3aXBlci10aGVtZS1jb2xvcjogIzAwN2FmZjtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEZpeCBvZiBXZWJraXQgZmxpY2tlcmluZyAqL1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3ctY29sdW1uID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci1jb250YWluZXItdmVydGljYWwge1xuICB0b3VjaC1hY3Rpb246IHBhbi14O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogQXV0byBIZWlnaHQgKi9cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xufVxuXG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItd3JhcHBlcixcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLyogQ1NTIE1vZGUgKi9cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRm9yIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cbn1cblxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuXG46cm9vdCB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTogNDRweDtcbiAgLypcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cblxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogY2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDQ0ICogMjcpO1xuICBoZWlnaHQ6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDBweCAtIHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gMik7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM1O1xuICBjdXJzb3I6IGF1dG87XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyLFxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBzd2lwZXItaWNvbnM7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC12YXJpYW50OiBpbml0aWFsO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwicHJldlwiO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICByaWdodDogMTBweDtcbiAgbGVmdDogYXV0bztcbn1cblxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlcixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyIHtcbiAgY29udGVudDogXCJuZXh0XCI7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi13aGl0ZSB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjayxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zd2lwZXItYnV0dG9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qIENvbW1vbiBTdHlsZXMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBCdWxsZXRzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDZweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogOHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHRvcDtcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBtYXJnaW46IDAgNHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgbGVmdDtcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLXJ0bCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgcmlnaHQ7XG59XG5cbi8qIFByb2dyZXNzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2Nyb2xsYmFyICovXG4uc3dpcGVyLXNjcm9sbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1zY3JvbGxiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDElO1xuICBib3R0b206IDNweDtcbiAgei1pbmRleDogNTA7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogOTglO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xuICB0b3A6IDElO1xuICB6LWluZGV4OiA1MDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5OCU7XG59XG5cbi5zd2lwZXItc2Nyb2xsYmFyLWRyYWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZyB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLnN3aXBlci1zY3JvbGxiYXItbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zd2lwZXItem9vbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gaW1nLFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IHN2Zyxcbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBjYW52YXMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zd2lwZXItc2xpZGUtem9vbWVkIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4vKiBQcmVsb2FkZXIgKi9cbjpyb290IHtcbiAgLypcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICBhbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXN3aXBlci1wcmVsb2FkZXItY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRlIHtcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4uc3dpcGVyLWxhenktcHJlbG9hZGVyLWJsYWNrIHtcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiAjMDAwO1xufVxuXG5Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qIGExMXkgKi9cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTAwMDtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXYsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCArIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjY7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmJ1dHRvbi5jbG9zZS1kaWFsb2cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzRweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG59XG5idXR0b24uY2xvc2UtZGlhbG9nIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjYTZhN2FhO1xufVxuXG5kaXYud3JhcHBlci1nYWxsZXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgbWluLWhlaWdodDogMzIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmRpdi53cmFwcGVyLWdhbGxlcnkgZGl2LnN3aXBlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdi53cmFwcGVyLWdhbGxlcnkgZGl2LnN3aXBlci1jb250YWluZXIgZGl2LnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYud3JhcHBlci1nYWxsZXJ5IGRpdi5zd2lwZXItY29udGFpbmVyIGRpdi5zd2lwZXItc2xpZGUgZGl2LnN3aXBlci16b29tLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvem9vbS5wbmcpLCBhdXRvO1xufVxuZGl2LndyYXBwZXItZ2FsbGVyeSBkaXYuc3dpcGVyLWNvbnRhaW5lciBkaXYuc3dpcGVyLXNsaWRlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuZGl2LndyYXBwZXItZ2FsbGVyeSAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2JlZDI7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5kaXYud3JhcHBlci1nYWxsZXJ5IC5zd2lwZXItYnV0dG9uLW5leHQsXG5kaXYud3JhcHBlci1nYWxsZXJ5IC5zd2lwZXItYnV0dG9uLXByZXYge1xuICBjb2xvcjogIzE3YmVkMjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xufVxuZGl2LndyYXBwZXItZ2FsbGVyeSAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG5kaXYud3JhcHBlci1nYWxsZXJ5IC5zd2lwZXItYnV0dG9uLXByZXYge1xuICBsZWZ0OiAwO1xufVxuXG5oMS50aXRsZSB7XG4gIGNvbG9yOiAjMTdiZWQyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xufVxuZGl2LmRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMjUlIC0gMi41cmVtKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSB7XG4gIGRpdi5kZXRhaWxzIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbmRpdi5kZXRhaWxzIGgyIHtcbiAgY29sb3I6ICM1MTU3NmM7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4ycmVtO1xufVxuZGl2LmRldGFpbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSB7XG4gIGRpdi5kZXRhaWxzIHVsIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbmRpdi5kZXRhaWxzIHVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gIGNvbG9yOiAjNTE1NzZjO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmRpdi5kZXRhaWxzIHVsIGxpOm50aC1sYXN0LWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuZGl2LmRldGFpbHMgcCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzUxNTc2YztcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCksIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkge1xuICBkaXYuZGV0YWlscyBwIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3dpcGVyL3N3aXBlci1idW5kbGVcIjtcblxuYnV0dG9uLmNsb3NlLWRpYWxvZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzNHB4O1xuICByaWdodDogMDtcbiAgdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcblxuICAubWF0LWljb24ge1xuICAgIGNvbG9yOiAkdGV4dFNlY3VuZGFyeUNvbG9yO1xuICB9XG59XG5cbmRpdi53cmFwcGVyLWdhbGxlcnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzUlO1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpdi5zd2lwZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXYuc3dpcGVyLXNsaWRlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBkaXYuc3dpcGVyLXpvb20tY29udGFpbmVyIHtcbiAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy96b29tLnBuZyksIGF1dG87XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICRwbGFpbldoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsXG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5oMS50aXRsZSB7XG4gIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xuXG4gIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzX2h9IHtcbiAgfVxufVxuXG5kaXYuZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygyNSUgLSAyLjVyZW0pO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC41cmVtO1xuXG4gIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9LCAjeyR0YWJsZXRzX2h9IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICB9XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0ge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG5cbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICR0ZXh0UHJpbWFyeUNvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcblxuICAgIEBtZWRpYSAjeyRzbWFydHBob25lc30sICN7JHNtYXJ0cGhvbmVzX2h9IHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICB9XG59XG4iLCIkc21hcnRwaG9uZXM6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KVwiO1xuJHNtYXJ0cGhvbmVzX2g6IFwib25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKVwiO1xuJHRhYmxldHM6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpXCI7XG4kdGFibGV0c19oOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpXCI7XG4kbWFjYm9va19wcm86IFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpXCI7XG4kYmlnc2NyZWVuOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTgyNHB4KVwiO1xuJHZpZGVvX2JlYW06IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpXCI7XG5cbiRtYXgtd2lkdGg6IDExNDBweDtcbiRwcmltYXJ5Q29sb3I6ICMxN2JlZDI7XG4kZ3JheU5pY2tlbDogI2NjY2NjYztcbiRwbGFpbldoaXRlOiAjZmFmYWZhO1xuJGltcHV0Q29sb3I6ICM1MTU3NmM7XG4kdGV4dFByaW1hcnlDb2xvcjogIzUxNTc2YztcbiR0ZXh0U2VjdW5kYXJ5Q29sb3I6ICNhNmE3YWE7XG4kYm9yZGVyV2hpdGU6ICNmMGYwZjA7XG5cbkBtaXhpbiBpbWFnZS1yZXNwb25zaXZlKFxuICAkd2lkdGg6IDEwMCUsXG4gICRoZWlnaHQ6IDEwMCUsXG4gICRtYXJnaW46IDAsXG4gICRmaXQ6IGNvbnRhaW4sXG4gICRwb3NpdGlvbjogNTAlIDUwJSxcbiAgJGRpc3BsYXk6IGJsb2NrXG4pIHtcbiAgLyogZml0IHZhbHVlczogY29udGFpbiwgY292ZXJcbiAgICAgKiBwb3NpdGlvbiB2YWx1ZXM6IDUwJSA1MCUsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCAqL1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBtYXJnaW46ICRtYXJnaW47XG4gIG9iamVjdC1maXQ6ICRmaXQ7XG4gIG9iamVjdC1wb3NpdGlvbjogJHBvc2l0aW9uO1xufVxuXG5AbWl4aW4gbm8tc2VsZWN0KCRldmVudHM6IG5vbmUpIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93IHtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjNzLCAkZWFzZTogbGluZWFyKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICAtby10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xufVxuXG5AbWl4aW4gdHJ1bmNhdGUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXM6IDMpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcbiAgdGV4dC1vdmVyZmxvdzogLW8tZWxsaXBzaXMtbGFzdGxpbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"] });


/***/ }),

/***/ 9594:
/*!******************************************************!*\
  !*** ./src/app/translation/translation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationComponent": () => (/* binding */ TranslationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_app_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/app.facade */ 6377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2544);






const _c0 = function (a0) { return { opened: a0 }; };
function TranslationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranslationComponent_ng_container_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranslationComponent_ng_container_1_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.change("es"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranslationComponent_ng_container_1_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.change("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const activeLang_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/", activeLang_r1, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r0.opened));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "GENERAL.es"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, "GENERAL.en"));
} }
const _c1 = function (a0, a1) { return { white: a0, opened: a1 }; };
class TranslationComponent {
    constructor(appFacade, translate) {
        this.appFacade = appFacade;
        this.translate = translate;
        this.darkVersion = false;
        this.close = false;
        this.itsOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.opened = false;
        this.activeLang = localStorage.getItem('activeLang') || 'es';
        this.translate.setDefaultLang(this.activeLang);
        this.translate.use(this.activeLang);
        this.appFacade.setActiveLang(this.activeLang);
    }
    clickOutside() {
        this.opened = false;
    }
    ngOnInit() {
        if (!localStorage.getItem('activeLang')) {
            localStorage.setItem('activeLang', this.activeLang);
        }
    }
    ngOnChanges(changes) {
        if (changes.close && changes.close.currentValue) {
            this.opened = false;
        }
    }
    toggle(event) {
        event.stopPropagation();
        this.opened = !this.opened;
        this.itsOpen.emit();
    }
    change(lang) {
        this.opened = false;
        this.updateTranslateService(lang);
        localStorage.setItem('activeLang', lang);
    }
    updateTranslateService(lang) {
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        // redux
        this.appFacade.setActiveLang(lang);
    }
}
TranslationComponent.ɵfac = function TranslationComponent_Factory(t) { return new (t || TranslationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_store_app_facade__WEBPACK_IMPORTED_MODULE_0__.AppFacade), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
TranslationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TranslationComponent, selectors: [["app-translation"]], hostBindings: function TranslationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranslationComponent_click_HostBindingHandler() { return ctx.clickOutside(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { darkVersion: "darkVersion", close: "close" }, outputs: { itsOpen: "itsOpen" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 7, consts: [[1, "translation", 3, "ngClass"], [4, "ngIf"], [1, "selected", 3, "click"], ["alt", "language", 3, "src"], [3, "ngClass"], [3, "click"], ["src", "assets/images/es.svg", "alt", "language"], ["src", "assets/images/en.svg", "alt", "language"]], template: function TranslationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TranslationComponent_ng_container_1_Template, 16, 10, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx.darkVersion, ctx.opened));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.appFacade.activeLang$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["div.translation[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 1.25rem;\n  position: relative;\n  margin-right: 2rem;\n}\ndiv.translation.white.opened[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.15rem;\n  border-top-right-radius: 0.15rem;\n  background-color: rgba(255, 255, 255, 0.2);\n}\ndiv.translation.white[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #fafafa;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  div.translation.white[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    color: #51576c;\n  }\n}\ndiv.translation.white[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n}\ndiv.translation.white[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\ndiv.translation.white[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fafafa;\n}\ndiv.translation[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 1fr 1rem;\n  grid-gap: 0.25rem;\n  gap: 0.25rem;\n  justify-items: center;\n  align-items: center;\n}\ndiv.translation[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n}\ndiv.translation[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #51576c;\n  width: 1rem;\n  height: 1rem;\n}\ndiv.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  padding: 0;\n  margin: 0.15rem 0 0 0;\n  list-style: none;\n  position: fixed;\n  width: 3rem;\n  box-sizing: border-box;\n  background-color: rgba(255, 255, 255, 0.85);\n  border-bottom-left-radius: 0.15rem;\n  border-bottom-right-radius: 0.15rem;\n  z-index: 2000;\n}\n@media only screen and (max-width: 579px), only screen and (min-device-width : 414px) and (max-device-width : 768px) and (orientation : landscape), only screen and (min-width: 768px) and (max-width: 959px) {\n  div.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\ndiv.translation[_ngcontent-%COMP%]   ul.opened[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(2, 1.5rem);\n  align-items: center;\n  grid-gap: 0.25rem;\n  gap: 0.25rem;\n}\ndiv.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1.3rem;\n  align-items: center;\n  justify-items: center;\n  padding-left: 0.25rem;\n}\ndiv.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 204, 0.25);\n}\ndiv.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(1) {\n  border-bottom-left-radius: 0.15rem;\n  border-bottom-right-radius: 0.15rem;\n}\ndiv.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n}\ndiv.translation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #51576c;\n  font-size: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vV2ViJTIwUHJvamVjdHMvamVpc29uLW5pc3BlcnV6YS9zcmMvYXBwL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7QUNGTjtBRE1NO0VBQ0UsY0VOSztBREViO0FETVE7RUFIRjtJQUlJLGNFUFM7RURJakI7QUFDRjtBRE9JO0VBQ0UsMENBQUE7QUNMTjtBRFFRO0VBQ0UsMENBQUE7QUNOVjtBRFNRO0VBQ0UsY0V2Qkc7QURnQmI7QURhRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUFBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDWEo7QURhSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDWE47QURjSTtFQUNFLGVBQUE7RUFDQSxjRTFDYTtFRjJDYixXQUFBO0VBQ0EsWUFBQTtBQ1pOO0FEZ0JFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUNkSjtBRGdCSTtFQWJGO0lBY0ksZ0JBQUE7RUNiSjtBQUNGO0FEZUk7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFBQSxZQUFBO0FDYk47QURnQkk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNkTjtBRGdCTTtFQUNFLDJDQUFBO0FDZFI7QURpQk07RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0FDZlI7QURrQk07RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ2hCUjtBRG1CTTtFQUNFLGNFakdXO0VGa0dYLGlCQUFBO0FDakJSIiwiZmlsZSI6InRyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcblxuZGl2LnRyYW5zbGF0aW9uIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG5cbiAgJi53aGl0ZSB7XG4gICAgJi5vcGVuZWQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4xNXJlbTtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjE1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIH1cblxuICAgIGRpdi5zZWxlY3RlZCB7XG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBjb2xvcjogJHBsYWluV2hpdGU7XG5cbiAgICAgICAgQG1lZGlhICN7JHNtYXJ0cGhvbmVzfSwgI3skc21hcnRwaG9uZXNfaH0sICN7JHRhYmxldHN9IHtcbiAgICAgICAgICBjb2xvcjogJHRleHRQcmltYXJ5Q29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRwbGFpbldoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGl2LnNlbGVjdGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxcmVtO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgfVxuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiAkdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwLjE1cmVtIDAgMCAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjE1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjE1cmVtO1xuICAgIHotaW5kZXg6IDIwMDA7XG5cbiAgICBAbWVkaWEgI3skc21hcnRwaG9uZXN9LCAjeyRzbWFydHBob25lc19ofSwgI3skdGFibGV0c30ge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5cbiAgICAmLm9wZW5lZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxLjVyZW0pO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC4yNXJlbTtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjNyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZ3JheU5pY2tlbCwgMC4yNSk7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSkge1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjE1cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4xNXJlbTtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHRleHRQcmltYXJ5Q29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZGl2LnRyYW5zbGF0aW9uIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5kaXYudHJhbnNsYXRpb24ud2hpdGUub3BlbmVkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4xNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMTVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbmRpdi50cmFuc2xhdGlvbi53aGl0ZSBkaXYuc2VsZWN0ZWQgLm1hdC1pY29uIHtcbiAgY29sb3I6ICNmYWZhZmE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OXB4KSwgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSwgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgZGl2LnRyYW5zbGF0aW9uLndoaXRlIGRpdi5zZWxlY3RlZCAubWF0LWljb24ge1xuICAgIGNvbG9yOiAjNTE1NzZjO1xuICB9XG59XG5kaXYudHJhbnNsYXRpb24ud2hpdGUgdWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5kaXYudHJhbnNsYXRpb24ud2hpdGUgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5kaXYudHJhbnNsYXRpb24ud2hpdGUgdWwgbGkgc3BhbiB7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuZGl2LnRyYW5zbGF0aW9uIGRpdi5zZWxlY3RlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMXJlbTtcbiAgZ2FwOiAwLjI1cmVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYudHJhbnNsYXRpb24gZGl2LnNlbGVjdGVkIGltZyB7XG4gIHdpZHRoOiAxLjJyZW07XG4gIGhlaWdodDogMS4ycmVtO1xufVxuZGl2LnRyYW5zbGF0aW9uIGRpdi5zZWxlY3RlZCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNTE1NzZjO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuZGl2LnRyYW5zbGF0aW9uIHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwLjE1cmVtIDAgMCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjE1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4xNXJlbTtcbiAgei1pbmRleDogMjAwMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBkaXYudHJhbnNsYXRpb24gdWwge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cbmRpdi50cmFuc2xhdGlvbiB1bC5vcGVuZWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMS41cmVtKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuZGl2LnRyYW5zbGF0aW9uIHVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS4zcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbn1cbmRpdi50cmFuc2xhdGlvbiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yNSk7XG59XG5kaXYudHJhbnNsYXRpb24gdWwgbGk6bnRoLWxhc3QtY2hpbGQoMSkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjE1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4xNXJlbTtcbn1cbmRpdi50cmFuc2xhdGlvbiB1bCBsaSBpbWcge1xuICB3aWR0aDogMS4ycmVtO1xuICBoZWlnaHQ6IDEuMnJlbTtcbn1cbmRpdi50cmFuc2xhdGlvbiB1bCBsaSBzcGFuIHtcbiAgY29sb3I6ICM1MTU3NmM7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xufSIsIiRzbWFydHBob25lczogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpXCI7XG4kc21hcnRwaG9uZXNfaDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpXCI7XG4kdGFibGV0czogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweClcIjtcbiR0YWJsZXRzX2g6IFwib25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSlcIjtcbiRtYWNib29rX3BybzogXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweClcIjtcbiRiaWdzY3JlZW46IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxODI0cHgpXCI7XG4kdmlkZW9fYmVhbTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweClcIjtcblxuJG1heC13aWR0aDogMTE0MHB4O1xuJHByaW1hcnlDb2xvcjogIzE3YmVkMjtcbiRncmF5Tmlja2VsOiAjY2NjY2NjO1xuJHBsYWluV2hpdGU6ICNmYWZhZmE7XG4kaW1wdXRDb2xvcjogIzUxNTc2YztcbiR0ZXh0UHJpbWFyeUNvbG9yOiAjNTE1NzZjO1xuJHRleHRTZWN1bmRhcnlDb2xvcjogI2E2YTdhYTtcbiRib3JkZXJXaGl0ZTogI2YwZjBmMDtcblxuQG1peGluIGltYWdlLXJlc3BvbnNpdmUoXG4gICR3aWR0aDogMTAwJSxcbiAgJGhlaWdodDogMTAwJSxcbiAgJG1hcmdpbjogMCxcbiAgJGZpdDogY29udGFpbixcbiAgJHBvc2l0aW9uOiA1MCUgNTAlLFxuICAkZGlzcGxheTogYmxvY2tcbikge1xuICAvKiBmaXQgdmFsdWVzOiBjb250YWluLCBjb3ZlclxuICAgICAqIHBvc2l0aW9uIHZhbHVlczogNTAlIDUwJSwgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0ICovXG4gIGRpc3BsYXk6ICRkaXNwbGF5O1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIG1hcmdpbjogJG1hcmdpbjtcbiAgb2JqZWN0LWZpdDogJGZpdDtcbiAgb2JqZWN0LXBvc2l0aW9uOiAkcG9zaXRpb247XG59XG5cbkBtaXhpbiBuby1zZWxlY3QoJGV2ZW50czogbm9uZSkge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSxcbiAgICAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuM3MsICRlYXNlOiBsaW5lYXIpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xuICAtbW96LXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIC1vLXRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG59XG5cbkBtaXhpbiB0cnVuY2F0ZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lczogMykge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xuICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map