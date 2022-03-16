import fs from 'fs';

export default class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  async getFileStream() {
    return {
      stream: this.createFileStream(),
    };
  }
}
