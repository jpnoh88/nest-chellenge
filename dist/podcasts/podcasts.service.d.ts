import { Podcast } from './entities/podcast.entitiy';
export declare class PodcastsService {
    private podcasts;
    getAll(): Podcast[];
    getOne(id: string): Podcast;
    deleteOne(id: string): void;
    create(podcastData: any): void;
    update(id: string, updateData: any): void;
}
