
// add card
export function addCard(cardId) {
    return {
        type: 'ADD_CARD',
        cardId,
    }
}

// remove card
export function removeCard(cardId) {
    return {
        type: 'REMOVE_CARD',
        cardId,
    }
}


