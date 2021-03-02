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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastsController = void 0;
const common_1 = require("@nestjs/common");
const podcast_entitiy_1 = require("./entities/podcast.entitiy");
const podcasts_service_1 = require("./podcasts.service");
let PodcastsController = class PodcastsController {
    constructor(podcastsService) {
        this.podcastsService = podcastsService;
    }
    getAll() {
        return this.podcastsService.getAll();
    }
    getOne(podId) {
        return this.podcastsService.getOne(podId);
    }
    create(podData) {
        return this.podcastsService.create(podData);
    }
    remove(podId) {
        return this.podcastsService.deleteOne(podId);
    }
    patch(podId, updateData) {
        return Object.assign({ updatedpodcast: podId }, updateData);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PodcastsController.prototype, "getAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", podcast_entitiy_1.Podcast)
], PodcastsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "create", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "remove", null);
__decorate([
    common_1.Patch(":id"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "patch", null);
PodcastsController = __decorate([
    common_1.Controller('podcasts'),
    __metadata("design:paramtypes", [podcasts_service_1.PodcastsService])
], PodcastsController);
exports.PodcastsController = PodcastsController;
//# sourceMappingURL=podcasts.controller.js.map