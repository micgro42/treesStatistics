function seletedCards(currentState = [], action) {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...currentState,
                action.cardId,
                ];
        case 'REMOVE_CARD':
            const index = currentState.findIndex(key => action.cardId === key);
            return [
                ...currentState.slice(0, index),
                ...currentState.slice(index+1),
            ];
        default:
            return currentState;
    }
}


export default seletedCards;
