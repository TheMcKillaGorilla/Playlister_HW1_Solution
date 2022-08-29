import jsTPS_Transaction from "../../common/jsTPS.js"

/**
 * DeleteSong_Transaction
 * 
 * This class represents a transaction that deletes a song
 * in the playlist. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, initSong) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.song = initSong;
    }

    doTransaction() {
        this.model.removeSong(this.index);
    }
    
    undoTransaction() {
        this.model.removeSong(this.index, this.song);
    }
}