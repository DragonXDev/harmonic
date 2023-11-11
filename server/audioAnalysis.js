import audioDecode from "audio-decode";
import fftJs from "fft-js";
import fs from "fs/promises";

async function analyzeAudioFile(filePath) {
  try {
    // Decode the audio file
    const buffer = await fs.readFile(filePath);
    const audioBuffer = await audioDecode(buffer.buffer);

    // Get the audio data and sample rate
    const channelData = audioBuffer.getChannelData(0);
    const sampleRate = audioBuffer.sampleRate;

    const threshold = 0.01;
    let lastSoundSample = channelData.length - 1;

    // Find the index of the last non-silent sample
    while (
      lastSoundSample >= 0 &&
      Math.abs(channelData[lastSoundSample]) < threshold
    ) {
      lastSoundSample--;
    }

    if (lastSoundSample <= 0) {
      console.error("No sound detected in the audio file.");
      return null;
    }

    const numberOfSections = 500;
    const sectionLength = Math.floor(lastSoundSample / numberOfSections);
    const coordinates = [];

    for (let i = 0; i < numberOfSections; i++) {
      const start = i * sectionLength;
      const end = start + sectionLength;
      const section = channelData.slice(start, end);

      if (section.length === 0) {
        console.error(`Section ${i + 1} is empty. Skipping.`);
        continue;
      }

      const numSamples = 2 ** Math.floor(Math.log2(section.length));
      const resizedSection = section.slice(0, numSamples);

      const phasors = fftJs.fft(resizedSection);
      const frequencies = fftJs.util.fftFreq(phasors, sampleRate);
      const magnitudes = fftJs.util.fftMag(phasors);
      const maxIndex = magnitudes.reduce(
        (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
        0
      );
      const dominantFrequency = frequencies[maxIndex];

      console.log(
        `Section ${i + 1}: Dominant Frequency: ${dominantFrequency} Hz`
      );
      coordinates.push({ x: i + 1, y: dominantFrequency });
    }
    console.log(`COORDS ${coordinates}`);

    return coordinates;
  } catch (error) {
    console.error("Error analyzing audio file:", error);
    return null;
  }
}

export { analyzeAudioFile };
