import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { runInThisContext } from 'vm';
import { Podcast } from './entities/podcast.entitiy';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
    constructor(private readonly podcastsService: PodcastsService) {}

    @Get() 
    getAll(): Podcast[] {
        return this.podcastsService.getAll();
    }

    @Get(":id")
    getOne(@Param('id') podId: string): Podcast {
        return this.podcastsService.getOne(podId);
    }

    @Post()
    create(@Body() podData) {
        return this.podcastsService.create(podData);
    }
    @Delete(":id")
    remove(@Param("id") podId: string) { 
        return this.podcastsService.deleteOne(podId);
    }

    @Patch(":id")
    patch(@Param("id") podId: string, @Body() updateData) {
        return {
            updatedpodcast:podId,
            ...updateData,
        };
    }

}  


