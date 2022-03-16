import fs from 'fs';
// import { config } from './config.js';

export default class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  // async getFileInfo(file) {

  // }

  async getFileStream(file) {
    // const {

    // } = await this.getFileInfo(file);

    return {
      stream: this.createFileStream(),
    };
  }
}
