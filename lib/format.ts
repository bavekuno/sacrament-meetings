import type { SpeakerItem, WardBusinessItem } from './types';

export function formatSpeakers(speakers: SpeakerItem[]): string {
  return speakers.map((s) => `${s.name}|${s.topic}|${s.type}`).join('\n');
}

export function formatWardBusiness(items: WardBusinessItem[]): string {
  return items.map((item) => item.description).join('\n');
}
