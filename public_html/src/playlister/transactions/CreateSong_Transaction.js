import jsTPS_Transaction from "../../common/jsTPS.js"

/**
 * CreateSong_Transaction
 * 
 * This class represents a transaction that creates a song
 * in the playlist. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class CreateSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, initSong) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.song = initSong;
    }

    doTransaction() {
        this.model.createSong(this.index, this.song);
    }
    
    undoTransaction() {
        this.model.removeSong(this.index);
    }
}