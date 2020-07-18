
class AudioService {
  getMedia(options?: MediaStreamConstraints) {
    return window.navigator.mediaDevices.getUserMedia(options);
  }

  getAudio() {
    return this.getMedia({ audio: true });
  }
}



export default new AudioService();