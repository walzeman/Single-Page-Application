"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var rest_api_service_1 = require('../../services/rest_api.service');
// import { Artist } from '../../../Artist'
var Artist1 = (function () {
    function Artist1() {
    }
    return Artist1;
}());
exports.Artist1 = Artist1;
var HistoryComponent = (function () {
    // change():void {
    //   this.wal = !this.wal;
    // }
    function HistoryComponent(restApiService) {
        this.restApiService = restApiService;
        // val = 'tutorial point'
        this.wal = '';
        this.artists = [{ name: 'wa', album: 'tes' }, { name: 'mulu', album: 'fuck' }];
    }
    HistoryComponent.prototype.getArtists = function () {
        var _this = this;
        this.restApiService.getArtists()
            .subscribe(function (res) {
            _this.artists = res;
            _this.wal = res;
            console.log(res);
        });
        //this.artists = 'wallelgn abrham';
    };
    HistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'history',
            templateUrl: "history.component.html"
        }), 
        __metadata('design:paramtypes', [rest_api_service_1.RestApiService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map