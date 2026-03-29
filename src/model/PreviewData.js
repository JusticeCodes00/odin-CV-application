class PreviewData {
  constructor(label, value) {
    this.id = crypto.randomUUID();
    this.label = label;
    this.value = value;
  }
}

export default PreviewData;
