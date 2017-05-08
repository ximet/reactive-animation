const SCROLL_TIME = 500;
const DELAY = 15;


function getStep(startTime) {
    //step for requestAnimationFrame
}

function animate (element {
    //use requestAnimationFrame
}

function findScrollableParent(element) {
    let isBody;
    let hasScrollableSpace;
    let hasVisibleOverflow;

    do {
        element = el.parentNode;

        // set condition variables
        isBody = element === document.body;
        hasScrollableSpace = element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth;
        hasVisibleOverflow = window.getComputedStyle(el, null).overflow === 'visible';
    } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));

    //Clear big item
    isBody = null;
    hasScrollableSpace = null;
    hasVisibleOverflow = null;

    return element;
}

function offsetTop (element) {
    if ( !element.getClientRects().length ) {
        return 0;
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    const clientRect = element.getBoundingClientRect();
    const defaultView = element.ownerDocument.defaultView;

    return clientRect.top + defaultView.pageYOffset;
}
