import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcast.entitiy';


@Injectable()
export class PodcastsService {
    private podcasts: Podcast[] = [];

    getAll(): Podcast[] {
        return this.podcasts;
    }

    getOne(id: string): Podcast {
        const podcast = this.podcasts.find(Podcast => Podcast.id === parseInt(id));
        if (!Podcast) {
            throw new NotFoundException (`Podcast with ID ${id} not found.` );
        }
        return podcast;
    }

    deleteOne(id:string) {
        this.getOne(id);
        this.podcasts = this.podcasts.filter(Podcast=> Podcast.id !== +id);
        
    }

    create(podcastData) {
        this.podcasts.push({
            id: this.podcasts.length + 1,
            ...podcastData,
        });
    }

    update(id: string, updateData) {
        const podcast = this.getOne(id);
        this.deleteOne(id);
        this.podcasts.push({...podcast, ...updateData });
    }

}
