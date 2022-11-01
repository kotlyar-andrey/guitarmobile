import 'react-native';
import ContentStorage from '../storage';

const storage = new ContentStorage();

describe('Content storage', () => {
  it('Storage is empty', async () => {
    const lessons = await storage.getLessons();
    expect(lessons.length).toBe(0);
  });
});
