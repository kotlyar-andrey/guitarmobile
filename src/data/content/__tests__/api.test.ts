import 'react-native';
import ContentApi from '../api';

const api = new ContentApi();

describe('Content api', () => {
  it('Load lessons', async () => {
    const lessons = await api.loadLessons();
    expect(lessons.length).toBe(47);
  });
  it('Load howtoplays', async () => {
    const howtoplays = await api.loadHowToPlays();
    expect(howtoplays.length).toBe(86);
  });
  it('Load accords', async () => {
    const accords = await api.loadAccords();
    expect(accords.length).toBe(79);
  });
});
