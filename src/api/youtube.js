export default class Youtube {
    constructor(apiClinet) {
        this.apiClinet = apiClinet;
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async channelImageURL(id) {
        return this.apiClinet
            .channels({
                params: {
                    part: 'snippet',
                    id,
                },
            })
            .then((res) => res.data.items[0].snippet.thumbnails.default.url);
    }

    async relatedVideos(id) {
        return this.apiClinet
            .search({
                params: {
                    art: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    relatedToVideoId: id,
                },
            })
            .then((res) =>
                res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
            );
    }

    async #searchByKeyword(keyword) {
        return this.apiClinet
            .search({
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    q: keyword,
                },
            })
            .then((res) =>
                res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
            );
    }

    async #mostPopular() {
        return this.apiClinet
            .videos({
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    chart: 'mostPopular',
                },
            })
            .then((res) => res.data.items);
    }
}
