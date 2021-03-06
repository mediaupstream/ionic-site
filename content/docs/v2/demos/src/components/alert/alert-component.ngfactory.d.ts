/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './alert-component';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import14 from '../backdrop/backdrop.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
export declare class Wrapper_AlertCmp {
    _eventHandler: Function;
    context: import0.AlertCmp;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare const AlertCmpNgFactory: import7.ComponentFactory<import0.AlertCmp>;
export declare class View_AlertCmp0 extends import2.AppView<import0.AlertCmp> {
    _el_0: any;
    _Backdrop_0_3: import14.Wrapper_Backdrop;
    _el_1: any;
    _el_2: any;
    _anchor_3: any;
    _vc_3: import15.ViewContainer;
    _TemplateRef_3_5: any;
    _NgIf_3_6: import16.Wrapper_NgIf;
    _anchor_4: any;
    _vc_4: import15.ViewContainer;
    _TemplateRef_4_5: any;
    _NgIf_4_6: import16.Wrapper_NgIf;
    _el_5: any;
    _anchor_6: any;
    _vc_6: import15.ViewContainer;
    _TemplateRef_6_5: any;
    _NgIf_6_6: import16.Wrapper_NgIf;
    _el_7: any;
    _NgClass_7_3: import17.Wrapper_NgClass;
    _anchor_8: any;
    _vc_8: import15.ViewContainer;
    _TemplateRef_8_5: any;
    _NgFor_8_6: import18.Wrapper_NgFor;
    _expr_23: any;
    _expr_24: any;
    _expr_25: any;
    _map_26: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import2.AppView<any>;
    handleEvent_0(eventName: string, $event: any): boolean;
}
