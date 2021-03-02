import { Podcast } from './entities/podcast.entitiy';
import { PodcastsService } from './podcasts.service';
export declare class PodcastsController {
    private readonly podcastsService;
    constructor(podcastsService: PodcastsService);
    getAll(): Podcast[];
    getOne(podId: string): Podcast;
    create(podData: any): void;
    remove(podId: string): void;
    patch(podId: string, updateData: any): any;
}
