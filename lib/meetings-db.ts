import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary president' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
        speakers: [
            { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
            { name: 'Youth Choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Davis',
        announcements: ['Ward temple night: May 10']
    },
    {
        id: 2,
        date: '2026-05-10',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 1, title: 'The Morning Breaks' },
        openingPrayer: 'Brother Johnson',
        wardBusiness: [{ description: 'Announcements: Youth conference this week' }],
        stakeBusiness: false,
        sacramentHymn: { number: 171, title: 'Behold the Great Redeemer Die' },
        speakers: [
            { name: 'Brother Clark', topic: 'The Atonement', type: 'speaker' },
            { name: 'Sister Adams', topic: 'Prayer', type: 'speaker' }
        ],
        closingHymn: { number: 30, title: 'Now Thank We All Our God' },
        closingPrayer: 'Sister Taylor'
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'stake',
        presiding: 'President Hansen',
        conducting: 'Brother Miller',
        openingHymn: { number: 13, title: 'Come, O Thou King of Kings' },
        openingPrayer: 'Sister Garcia',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
        speakers: [
            { name: 'Elder Martins', topic: 'The Blessings of Temple Worship', type: 'speaker' },
            { name: 'Primary Children', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 200, title: 'We Are All Enlisted' },
        closingPrayer: 'Brother Lee'
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 27, title: 'God Be with You Till We Meet Again' },
        openingPrayer: 'Sister White',
        wardBusiness: [{ description: 'Tithing settlement schedule posted' }],
        stakeBusiness: false,
        sacramentHymn: { number: 173, title: 'I Stand All Amazed' },
        speakers: [
            { name: 'Brother Harris', topic: 'Repentance', type: 'speaker' }
        ],
        closingHymn: { number: 96, title: 'Israel, Israel, God Is Calling' },
        closingPrayer: 'Brother Clark'
    },
    {
        id: 5,
        date: '2026-06-07',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 10, title: 'Come, Sing to the Lord' },
        openingPrayer: 'Brother Adams',
        wardBusiness: [{ description: 'Relief Society birthday celebration announced' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
        speakers: [
            { name: 'Sister Johnson', topic: 'Charity', type: 'speaker' },
            { name: 'Brother Young', topic: 'Family History', type: 'speaker' }
        ],
        closingHymn: { number: 12, title: 'The Lord Is My Shepherd' },
        closingPrayer: 'Sister Martinez',
        announcements: ['Fast Sunday: June 14']
    }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings;
}


export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}