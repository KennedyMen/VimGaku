// Function to find an element by XPath
function getElementByXPath(xpath) {
    return document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}

// Function to simulate moving the mouse to the center of an element
function moveMouseToElement(element) {
    if (!element) {
        console.error("Element not found!");
        return;
    }

    // Get the bounding rectangle of the element
    const rect = element.getBoundingClientRect();

    // Calculate the center of the element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Simulate moving the mouse (for now, just log the coordinates)
    console.log(`Moving mouse to: (${centerX}, ${centerY})`);
}

// Add a keydown event listener for the "k" key
document.addEventListener('keydown', (event) => {
    if (event.key === 'k') {
        const xpath = '//*[@id="data-mgk-subtitle-overlay"]/div/ul[1]/li[3]/p/span/span[1]/span/span[1]';
        const targetElement = getElementByXPath(xpath);

        moveMouseToElement(targetElement);
    }
});
```
