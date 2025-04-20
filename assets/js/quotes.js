class Quotes {
  constructor() {
    // Constant property for the image path
    this.image_path = "/assets/images/motivation/"; // Updated path

    // Initialize properties
    this.elements = [];
    this.current_index = 0;

    // Create a Promise to track when the data is loaded
    this.readyPromise = this.loadQuotes();
  }

  // Async method to load quotes data
  async loadQuotes() {
    try {
      const response = await fetch("/assets/data/motivation_data.json"); // Updated path
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.elements = data; // Store the quotes array
      this.shuffleElements(); // Shuffle the elements
      console.log("Quotes loaded successfully:", this.elements); // Debugging log
    } catch (error) {
      console.error("Error loading quotes:", error);
    }
  }

  // Method to wait until the Quotes instance is ready
  async ready() {
    await this.readyPromise; // Wait for the loadQuotes Promise to resolve
  }

  // Fisher-Yates shuffle to randomize the elements array
  shuffleElements() {
    for (let i = this.elements.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
    }
  }

  // Instance method to return the next object
  next() {
    if (this.elements.length === 0) {
      console.warn("No elements available.");
      return null;
    }
    console.log("Current index:", this.current_index); // Debugging line
    const nextElement = this.elements[this.current_index];
    this.current_index = (this.current_index + 1) % this.elements.length; // Reset to 0 after the last element
    return nextElement;
  }
}
