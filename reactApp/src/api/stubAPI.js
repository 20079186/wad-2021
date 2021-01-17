class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchList = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie);
        this.watchList.push(upcoming)
    }

    getAll() {
        return this.favoriteMovies;
        
    }
    getAll() {
        return this.watchList;
        
    }
}

export default new StubAPI();
